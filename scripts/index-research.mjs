import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "research", "research.md");
const outputPath = path.join(root, "content", "research-index.json");
const raw = fs.readFileSync(sourcePath);
const lines = raw.toString("utf8").replace(/\r\n/g, "\n").split("\n");
const sha256 = crypto.createHash("sha256").update(raw).digest("hex");

// Broad contiguous review groupings, not asserted original Q&A boundaries.
const sections = [
  [1, "Research orientation and browser foundations", ["web-development", "core-computing"]],
  [238, "Validation, testing and deployment questions", ["software-engineering", "debugging-quality"]],
  [764, "Indentation, programming language behavior and editors", ["software-engineering", "core-computing"]],
  [1317, "DNS, ports, HTTP, HTTPS and hosted subdomains", ["networking", "web-development", "cloud-computing"]],
  [2709, "Cybersecurity, wireless assessment, professions and legal labs", ["cybersecurity", "networking"]],
  [4304, "Browser requests, HTTP representations and rendering", ["web-development", "core-computing"]],
  [4881, "Privacy, platform data collection, consent and recommendations", ["cybersecurity", "ai-ml", "data-analytics"]],
  [6618, "DAT files, formats and application interpretation", ["core-computing", "debugging-quality"]],
  [7499, "HID, Bluetooth and hardware security research", ["hardware-electronics", "iot-embedded", "cybersecurity"]],
  [8653, "Hardware tools, device comparisons and practical learning", ["hardware-electronics", "iot-embedded", "cybersecurity"]],
  [10566, "Processes, threads, browser execution, JavaScript and performance", ["core-computing", "web-development", "debugging-quality"]],
  [12533, "Express routing, middleware, request flow and error handling", ["web-development", "software-engineering"]],
].filter(([start]) => start <= lines.length).map(([start, title, domains], index, all) => ({
  id: `research-section-${index + 1}`, start, end: index + 1 < all.length ? all[index + 1][0] - 1 : lines.length,
  title, domains, status: "Needs review",
}));

const reviewFlags = [
  { id: "source-provenance", title: "Incomplete citation provenance", ranges: [{ start: 1, end: lines.length }], status: "Needs review", detail: "Image proxy URLs, favicons and labels such as NIST+2 are not claim-level citations. Keep the original text, recover primary references and verify the claims before promoting content." },
  { id: "duplicates", title: "Repeated and sometimes contradictory explanations", ranges: [{ start: 1, end: lines.length }], status: "Needs review", detail: "The corpus is a preserved conversation archive, not a peer-reviewed technical manual. Reconcile repeated answers against canonical definitions while retaining the source passages." },
  { id: "flattened-snippets", title: "Flattened code and illustrative HTTP examples", ranges: [{ start: 4345, end: 4791 }], status: "Needs review", detail: "Some code loses line breaks. HTTP/1.1 wire examples must not be presented as universal HTTP/2 or HTTP/3 formats; sample lengths and headers require checking. Repair and execute examples in isolation before publication." },
  { id: "privacy-current-events", title: "Privacy, policy and current-event claims require primary evidence", ranges: [{ start: 5421, end: 5466 }, { start: 5980, end: 6003 }], status: "Needs review", detail: "Do not treat legal, regulatory, policy or incident assertions in these passages as verified. Record jurisdiction, publication date and a directly supporting primary source before using them as factual guidance." },
  { id: "multiblue-identity", title: "Unverified Multiblue product identity", ranges: [{ start: 7499, end: 7524 }, { start: 7667, end: 7675 }], status: "Conflicting sources", detail: "An earlier passage asserts device capabilities; a later passage says no reliable manufacturer specification or technical manual was established. Preserve both. Bluetooth HID techniques do not establish the identity or specifications of a particular product." },
  { id: "hardware-variants", title: "Hardware claims depend on exact variants", ranges: [{ start: 7499, end: 10565 }], status: "Needs review", detail: "Confirm model, revision, firmware, interfaces, voltage and protocol support using manufacturer documentation. Product families and security demonstrations must not be treated as interchangeable specifications." },
  { id: "authorized-security", title: "Security material needs scoped learning context", ranges: [{ start: 2709, end: 4303 }, { start: 7499, end: 10565 }], status: "Needs review", detail: "Derived practical material must describe owned or explicitly authorized labs and defensive validation. Preserve distinctions between network interception, valid TLS, endpoint compromise and phishing." },
  { id: "runtime-specific-behavior", title: "Runtime and framework behavior must be qualified", ranges: [{ start: 10566, end: lines.length }], status: "Needs review", detail: "Distinguish hardware threads, operating-system threads and JavaScript agents. Validate event-loop and middleware behavior against the relevant runtime/framework version; avoid universal timing or browser-process claims." },
].map((flag) => ({ ...flag, ranges: flag.ranges.filter((range) => range.start <= lines.length).map((range) => ({ ...range, end: Math.min(range.end, lines.length) })) }));

const index = { schemaVersion: 1, source: "research/research.md", sha256, bytes: raw.byteLength, lineCount: lines.length, lineConvention: "One-based lines after CRLF normalization; a terminal newline creates a final empty display line. Hash covers original bytes.", coverage: "Complete source coverage; thematic grouping only, not complete concept extraction or factual verification.", sections, reviewFlags };
let expectedStart = 1;
for (const section of sections) { if (section.start !== expectedStart || section.end < section.start) throw new Error("Research coverage is not contiguous."); expectedStart = section.end + 1; }
if (expectedStart !== lines.length + 1) throw new Error("Research index does not cover every line.");
const serialized = `${JSON.stringify(index, null, 2)}\n`;
if (process.argv.includes("--check")) {
  if (!fs.existsSync(outputPath) || fs.readFileSync(outputPath, "utf8") !== serialized) { console.error("Research index is stale or missing. Run node scripts/index-research.mjs, review changed ranges, and commit the new manifest."); process.exitCode = 1; }
  else console.log(`Research index valid: ${lines.length} lines, ${raw.byteLength} bytes, SHA-256 ${sha256}; contiguous coverage confirmed.`);
} else { fs.mkdirSync(path.dirname(outputPath), { recursive: true }); fs.writeFileSync(outputPath, serialized); console.log(`Indexed all ${lines.length} source lines in ${sections.length} contiguous sections. Original research file unchanged.`); }
