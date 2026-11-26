const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");

// Compile the pure model in memory; no browser emulation or test dependencies.
const filename = path.resolve(__dirname, "../lib/workspace.ts");
const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
const model = new Module(filename, module);
model.filename = filename;
model.paths = module.paths;
model._compile(compiled.outputText, filename);
const { emptyWorkspace, blankLearning, parseWorkspaceBackup, validateWorkspace, validateRecord, addActivity, recordDefinitions } = model.exports;

function record(kind, changes = {}) {
  const now = new Date().toISOString();
  return { id: "test-record", createdAt: now, updatedAt: now, conceptIds: ["usb"], fields: { ...Object.fromEntries(recordDefinitions[kind].fields.map((field) => [field.key, field.options?.[0] ?? ""])), name: "My record", ...changes } };
}

test("a valid backup preserves independent status, proficiency, notes and unknown canonical IDs", () => {
  const data = emptyWorkspace();
  data.learning["future-concept"] = { ...blankLearning(), status: "Practicing", proficiency: "Beginner", notes: "My personal note", bookmarked: true };
  data.visits["future-concept"] = { at: new Date().toISOString(), position: 0.46 };
  data.roadmap = { selectedRole: "embedded-software-engineer", optionalSteps: ["usb"] };
  assert.deepEqual(parseWorkspaceBackup(JSON.stringify(data)), data);
});

test("all record kinds round-trip their complete declared fields", () => {
  const data = emptyWorkspace();
  for (const kind of ["projects", "inventory", "troubleshooting"]) { const entry = record(kind); validateRecord(entry, kind); data.records[kind].push(entry); }
  assert.deepEqual(parseWorkspaceBackup(JSON.stringify(data)), data);
});

test("unsupported versions, malformed JSON and oversized files are rejected", () => {
  assert.throws(() => parseWorkspaceBackup("{"), /valid JSON/);
  assert.throws(() => parseWorkspaceBackup(JSON.stringify({ ...emptyWorkspace(), schemaVersion: 2 })), /Unsupported/);
  assert.throws(() => parseWorkspaceBackup(" ".repeat(10 * 1024 * 1024 + 1)), /10 MB/);
});

test("invalid progression values and impossible dates are rejected", () => {
  for (const changes of [{ status: "Experienced" }, { proficiency: "Completed" }, { revisionDate: "2026-02-30" }, { revisionDate: "2026-99-99" }, { bookmarked: "yes" }]) {
    const data = emptyWorkspace(); data.learning.tcp = { ...blankLearning(), ...changes };
    assert.throws(() => validateWorkspace(data));
  }
});

test("unknown properties, invalid IDs, prototype keys and duplicate IDs are rejected", () => {
  assert.throws(() => validateWorkspace({ ...emptyWorkspace(), additional: true }));
  const badId = emptyWorkspace(); badId.learning["../../usb"] = blankLearning(); assert.throws(() => validateWorkspace(badId));
  const prototype = JSON.parse(JSON.stringify(emptyWorkspace())); prototype.learning = JSON.parse('{"__proto__":{}}'); assert.throws(() => validateWorkspace(prototype));
  const duplicate = emptyWorkspace(); duplicate.records.projects = [record("projects"), record("projects")]; assert.throws(() => validateWorkspace(duplicate), /Duplicate/);
  const duplicates = record("inventory"); duplicates.conceptIds.push("usb"); assert.throws(() => validateRecord(duplicates, "inventory"), /unique/);
});

test("external URLs are restricted to HTTP(S) and record shapes are enforced", () => {
  assert.throws(() => validateRecord(record("projects", { repositoryUrl: "javascript:alert(1)" }), "projects"), /HTTPS or HTTP/);
  assert.throws(() => validateRecord(record("inventory", { documentationUrl: "/relative" }), "inventory"), /absolute web URL/);
  assert.throws(() => validateRecord(record("troubleshooting", { date: "2026-02-30" }), "troubleshooting"), /valid date/);
  assert.throws(() => validateRecord(record("projects", { unrecognized: "value" }), "projects"), /Unknown/);
  assert.throws(() => validateRecord(record("projects", { name: "   " }), "projects"), /required/);
  validateRecord(record("projects", { repositoryUrl: "https://example.com/repository" }), "projects");
});

test("reading position must be finite and inside the document", () => {
  for (const position of [-0.1, 1.1, NaN, Infinity, "0.5"]) { const data = emptyWorkspace(); data.visits.usb = { at: new Date().toISOString(), position }; assert.throws(() => validateWorkspace(data)); }
});

test("activity history is bounded and newest changes are retained", () => {
  const data = emptyWorkspace();
  for (let i = 0; i < 510; i++) addActivity(data, `Change ${i}`, "usb");
  assert.equal(data.history.length, 500);
  assert.equal(data.history[0].message, "Change 509");
  assert.equal(data.history[499].message, "Change 10");
  validateWorkspace(data);
});

test("invalid backup validation leaves current state untouched", () => {
  const original = emptyWorkspace(); original.learning.usb = { ...blankLearning(), notes: "Keep me" };
  const snapshot = JSON.stringify(original);
  assert.throws(() => parseWorkspaceBackup('{"schemaVersion":1,"learning":{}}'));
  assert.equal(JSON.stringify(original), snapshot);
});
