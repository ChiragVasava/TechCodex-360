export const learningStatuses = ["Not Started", "Planned", "Learning", "Practicing", "Revising", "Completed", "Mastered", "Needs Revision"] as const;
export const proficiencyLevels = ["Beginner", "Intermediate", "Advanced", "Expert", "Mastery"] as const;
export type LearningStatus = typeof learningStatuses[number];
export type Proficiency = typeof proficiencyLevels[number];
export type RecordKind = "projects" | "inventory" | "troubleshooting";
export interface LearningEntry {
  status: LearningStatus; proficiency: Proficiency; notes: string; exercises: string; goal: string;
  revisionDate: string; bookmarked: boolean; updatedAt: string;
}
export interface WorkspaceRecord { id: string; conceptIds: string[]; fields: Record<string, string>; createdAt: string; updatedAt: string }
export interface WorkspaceData {
  schemaVersion: 1; updatedAt: string;
  learning: Record<string, LearningEntry>;
  visits: Record<string, { at: string; position: number }>;
  records: Record<RecordKind, WorkspaceRecord[]>;
  roadmap: { selectedRole: string; optionalSteps: string[] };
  history: { at: string; message: string; conceptId?: string }[];
}
export interface RecordField { key: string; label: string; type?: "textarea" | "url" | "date" | "select"; options?: string[]; required?: boolean }
export const recordDefinitions: Record<RecordKind, { title: string; singular: string; description: string; fields: RecordField[] }> = {
  projects: { title: "Engineering projects", singular: "project", description: "Record the work that demonstrates your knowledge, with links back to the concepts it uses.", fields: [
    { key: "name", label: "Project name", required: true }, { key: "description", label: "Description", type: "textarea" },
    { key: "domain", label: "Domain" }, { key: "technologies", label: "Technologies" }, { key: "tools", label: "Tools" },
    { key: "skills", label: "Skills demonstrated" }, { key: "architecture", label: "Architecture", type: "textarea" },
    { key: "repositoryUrl", label: "Repository URL", type: "url" }, { key: "documentation", label: "Documentation and references", type: "textarea" },
    { key: "status", label: "Status", type: "select", options: ["Idea", "Planned", "In progress", "Paused", "Completed", "Archived"] },
    { key: "challenges", label: "Challenges", type: "textarea" }, { key: "lessons", label: "Lessons learned", type: "textarea" },
    { key: "media", label: "Screenshot and diagram URLs (one per line)", type: "textarea" }, { key: "improvements", label: "Future improvements", type: "textarea" },
  ] },
  inventory: { title: "Hardware inventory", singular: "device", description: "Record the exact model and variant before adding specifications. Capabilities can differ within a product family.", fields: [
    { key: "name", label: "Device or component name", required: true }, { key: "manufacturer", label: "Manufacturer" }, { key: "model", label: "Exact model / variant / revision" },
    { key: "category", label: "Category" }, { key: "description", label: "Description", type: "textarea" },
    { key: "specifications", label: "Model-specific specifications", type: "textarea" }, { key: "interfaces", label: "Interfaces" },
    { key: "protocols", label: "Supported protocols" }, { key: "voltage", label: "Operating voltage" }, { key: "power", label: "Power requirements" },
    { key: "pinout", label: "Pinout and wiring notes", type: "textarea" }, { key: "compatibility", label: "Compatibility", type: "textarea" },
    { key: "firmware", label: "Firmware / version" }, { key: "drivers", label: "Drivers" }, { key: "documentationUrl", label: "Official documentation URL", type: "url" },
    { key: "purchase", label: "Purchase information", type: "textarea" }, { key: "status", label: "Ownership / use status", type: "select", options: ["Owned — Active", "Owned — Storage", "Borrowed", "Wishlist", "Retired"] },
    { key: "location", label: "Location" }, { key: "notes", label: "Personal notes", type: "textarea" }, { key: "projects", label: "Related project names / IDs" },
  ] },
  troubleshooting: { title: "Troubleshooting records", singular: "issue", description: "Separate observations from hypotheses and confirmed causes. Keep reproducible evidence and links to the underlying concepts.", fields: [
    { key: "name", label: "Issue title", required: true }, { key: "date", label: "Date", type: "date" },
    { key: "category", label: "Category" }, { key: "device", label: "Device or software" }, { key: "environment", label: "Environment", type: "textarea" },
    { key: "os", label: "Operating system" }, { key: "version", label: "Version" }, { key: "error", label: "Error message", type: "textarea" },
    { key: "symptoms", label: "Symptoms", type: "textarea" }, { key: "cause", label: "Root cause / current hypothesis", type: "textarea" },
    { key: "investigation", label: "Investigation steps", type: "textarea" }, { key: "solution", label: "Solution and prevention", type: "textarea" },
    { key: "commands", label: "Commands used", type: "textarea" }, { key: "logs", label: "Relevant logs (remove secrets)", type: "textarea" },
    { key: "media", label: "Screenshot URLs (one per line)", type: "textarea" }, { key: "documentation", label: "Related documentation", type: "textarea" },
    { key: "status", label: "Resolution", type: "select", options: ["Open", "Investigating", "Resolved", "Monitoring"] },
  ] },
};
export const conceptIdPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const blankLearning = (): LearningEntry => ({ status: "Not Started", proficiency: "Beginner", notes: "", exercises: "", goal: "", revisionDate: "", bookmarked: false, updatedAt: new Date().toISOString() });
export const emptyWorkspace = (): WorkspaceData => ({ schemaVersion: 1, updatedAt: new Date().toISOString(), learning: {}, visits: {}, records: { projects: [], inventory: [], troubleshooting: [] }, roadmap: { selectedRole: "", optionalSteps: [] }, history: [] });

function object(value: unknown): value is Record<string, unknown> { return typeof value === "object" && value !== null && !Array.isArray(value); }
function shortText(value: unknown, max = 30000): value is string { return typeof value === "string" && value.length <= max; }
function timestamp(value: unknown): value is string { return typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value) && Number.isFinite(Date.parse(value)); }
function date(value: string) { const parsed = new Date(`${value}T00:00:00Z`); return value === "" || (/^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value); }
function identifier(value: unknown): value is string { return shortText(value, 160) && conceptIdPattern.test(value); }
function exactKeys(value: Record<string, unknown>, allowed: string[]) { return Object.keys(value).every((key) => allowed.includes(key)); }
function requireValid(condition: unknown, message: string): asserts condition { if (!condition) throw new Error(message); }

export function validateRecord(value: unknown, kind: RecordKind): asserts value is WorkspaceRecord {
  requireValid(object(value) && exactKeys(value, ["id", "conceptIds", "fields", "createdAt", "updatedAt"]), "Invalid record structure.");
  requireValid(identifier(value.id) && timestamp(value.createdAt) && timestamp(value.updatedAt), "Invalid record ID or timestamp.");
  requireValid(Array.isArray(value.conceptIds) && value.conceptIds.length <= 100 && value.conceptIds.every(identifier) && new Set(value.conceptIds).size === value.conceptIds.length, "Related concepts must be unique canonical IDs.");
  requireValid(object(value.fields), "Invalid record fields.");
  const fields = value.fields;
  requireValid(exactKeys(fields, recordDefinitions[kind].fields.map((field) => field.key)), "Unknown record field.");
  for (const field of recordDefinitions[kind].fields) {
    const entry = fields[field.key];
    requireValid(shortText(entry), `Invalid or missing ${field.label}.`);
    if (field.required) requireValid(entry.trim().length > 0, `${field.label} is required.`);
    if (field.type === "url" && entry) { let url: URL; try { url = new URL(entry); } catch { throw new Error(`${field.label} must be an absolute web URL.`); } requireValid(["https:", "http:"].includes(url.protocol), `${field.label} must use HTTPS or HTTP.`); }
    if (field.type === "date") requireValid(date(entry), `${field.label} must be a valid date.`);
    if (field.options) requireValid(field.options.includes(entry), `Invalid ${field.label}.`);
  }
}

/** All persisted and imported content crosses this boundary before any write. */
export function validateWorkspace(value: unknown): WorkspaceData {
  requireValid(object(value) && exactKeys(value, ["schemaVersion", "updatedAt", "learning", "visits", "records", "roadmap", "history"]) && value.schemaVersion === 1, "Unsupported backup format. Expected Codex workspace schema version 1.");
  requireValid(timestamp(value.updatedAt), "Invalid workspace timestamp.");
  requireValid(object(value.learning) && Object.keys(value.learning).length <= 20000, "Invalid learning entries.");
  for (const [id, entry] of Object.entries(value.learning)) {
    requireValid(identifier(id) && object(entry) && exactKeys(entry, ["status", "proficiency", "notes", "exercises", "goal", "revisionDate", "bookmarked", "updatedAt"]), "Invalid learning entry.");
    requireValid(learningStatuses.includes(entry.status as LearningStatus) && proficiencyLevels.includes(entry.proficiency as Proficiency), "Invalid learning status or proficiency.");
    requireValid(shortText(entry.notes) && shortText(entry.exercises) && shortText(entry.goal) && shortText(entry.revisionDate, 10) && date(entry.revisionDate) && typeof entry.bookmarked === "boolean" && timestamp(entry.updatedAt), "Invalid learning details.");
  }
  requireValid(object(value.visits) && Object.keys(value.visits).length <= 20000, "Invalid reading history.");
  for (const [id, entry] of Object.entries(value.visits)) requireValid(identifier(id) && object(entry) && exactKeys(entry, ["at", "position"]) && timestamp(entry.at) && typeof entry.position === "number" && Number.isFinite(entry.position) && entry.position >= 0 && entry.position <= 1, "Invalid reading position.");
  requireValid(object(value.records) && exactKeys(value.records, ["projects", "inventory", "troubleshooting"]), "Invalid record collections.");
  requireValid(object(value.roadmap) && exactKeys(value.roadmap, ["selectedRole", "optionalSteps"]) && (value.roadmap.selectedRole === "" || identifier(value.roadmap.selectedRole)) && Array.isArray(value.roadmap.optionalSteps) && value.roadmap.optionalSteps.length <= 200 && value.roadmap.optionalSteps.every(identifier) && new Set(value.roadmap.optionalSteps).size === value.roadmap.optionalSteps.length, "Invalid saved roadmap.");
  for (const kind of ["projects", "inventory", "troubleshooting"] as const) {
    const entries = value.records[kind];
    requireValid(Array.isArray(entries) && entries.length <= 10000, "Invalid or oversized record collection.");
    for (const entry of entries) validateRecord(entry, kind);
    requireValid(new Set(entries.map((entry) => entry.id)).size === entries.length, "Duplicate record IDs.");
  }
  requireValid(Array.isArray(value.history) && value.history.length <= 500, "Invalid activity history.");
  for (const entry of value.history) requireValid(object(entry) && exactKeys(entry, ["at", "message", "conceptId"]) && timestamp(entry.at) && shortText(entry.message, 500) && (entry.conceptId === undefined || identifier(entry.conceptId)), "Invalid activity entry.");
  requireValid(new TextEncoder().encode(JSON.stringify(value)).length <= 10 * 1024 * 1024, "Workspace exceeds the 10 MB backup limit. Shorten large logs or notes before saving.");
  return value as unknown as WorkspaceData;
}

export function parseWorkspaceBackup(text: string): WorkspaceData {
  if (new TextEncoder().encode(text).length > 10 * 1024 * 1024) throw new Error("Backup exceeds the 10 MB import limit.");
  let value: unknown; try { value = JSON.parse(text); } catch { throw new Error("Backup is not valid JSON."); }
  return validateWorkspace(value);
}

export function addActivity(state: WorkspaceData, message: string, conceptId?: string) {
  state.history.unshift({ at: new Date().toISOString(), message, ...(conceptId ? { conceptId } : {}) });
  state.history = state.history.slice(0, 500);
}
