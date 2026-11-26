import { createHash } from "node:crypto";

/** Git may convert CRLF on checkout. Preserve every other character and line. */
export function normalizeResearch(raw) {
  return raw.toString("utf8").replace(/\r\n/g, "\n");
}

export function researchFingerprint(raw) {
  const text = normalizeResearch(raw);
  return {
    sha256: createHash("sha256").update(text, "utf8").digest("hex"),
    bytes: Buffer.byteLength(text, "utf8"),
    lineCount: text.split("\n").length,
  };
}
