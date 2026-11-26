const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");

function loadTypeScript(relativePath) {
  const filename = path.resolve(__dirname, relativePath);
  const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
  const loaded = new Module(filename, module); loaded.filename = filename; loaded.paths = module.paths;
  loaded._compile(compiled.outputText, filename); return loaded.exports;
}
const { roles, roleDirectory, skillProfiles } = loadTypeScript("../content/careers.ts");
const { taxonomy } = loadTypeScript("../content/taxonomy.ts");
const { articles } = require("../content/catalog.json");
const articleIds = new Set(articles.map(article => article.id));
const domainIds = new Set(taxonomy.map(domain => domain.id));
const roleIds = new Set(roles.map(role => role.id));
const skillIds = new Set(skillProfiles.map(skill => skill.id));

test("all career and skill concept links resolve to canonical articles and domains", () => {
  for (const role of roles) {
    const ids = [...role.concepts, ...role.foundations, ...role.skills.flatMap(skill => skill.concepts), ...role.roadmap.flatMap(step => step.concepts)];
    for (const id of ids) assert.ok(articleIds.has(id), `${role.id}: missing article ${id}`);
    for (const id of role.domains) assert.ok(domainIds.has(id), `${role.id}: missing domain ${id}`);
    for (const id of role.relatedRoles) assert.ok(roleIds.has(id), `${role.id}: missing related role ${id}`);
  }
  for (const skill of skillProfiles) {
    for (const id of [...skill.concepts, ...skill.prerequisites]) assert.ok(articleIds.has(id), `${skill.id}: missing article ${id}`);
    for (const id of skill.relatedSkills) assert.ok(skillIds.has(id), `${skill.id}: missing related skill ${id}`);
    for (const id of skill.domains) assert.ok(domainIds.has(id), `${skill.id}: missing domain ${id}`);
  }
});

test("directory identity is unique and documented labels reflect actual profiles", () => {
  assert.equal(new Set(roleDirectory.map(entry => entry.id)).size, roleDirectory.length);
  assert.equal(roleIds.size, roles.length);
  assert.equal(skillIds.size, skillProfiles.length);
  for (const entry of roleDirectory) assert.equal(entry.documented, roleIds.has(entry.id));
  for (const role of roles) assert.ok(roleDirectory.some(entry => entry.id === role.id && entry.documented));
});

test("roadmap persistence IDs are stable and globally unique; all skill levels exist", () => {
  const stepIds = roles.flatMap(role => role.roadmap.map(step => step.id));
  assert.equal(new Set(stepIds).size, stepIds.length);
  for (const id of stepIds) assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  for (const skill of skillProfiles) assert.deepEqual(skill.levels.map(level => level.level), ["Beginner", "Intermediate", "Advanced", "Expert", "Mastery"]);
});
