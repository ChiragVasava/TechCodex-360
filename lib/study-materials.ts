import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import manifest from "../content/study-index.json";
export const studyDocuments = manifest.documents;
export const studyDocument = (id: string) => studyDocuments.find(document => document.id === id);
export const readStudySource = cache(async (id: string) => {
  const document = studyDocument(id); if (!document) return null;
  return (await fs.readFile(path.join(process.cwd(), "research", document.file), "utf8")).replace(/\r\n/g, "\n");
});
export async function readStudyChapter(documentId: string, chapterId: string) {
  const document = studyDocument(documentId); const chapter = document?.chapters.find(item => item.id === chapterId);
  const source = await readStudySource(documentId); if (!document || !chapter || source === null) return null;
  let fence = false;
  const body = source.split("\n").slice(chapter.start - 1, chapter.end).map(line => {
    if (/^\s*(```|~~~)/.test(line)) { fence = !fence; return line; }
    if (fence) return line;
    if (/^<a id=/.test(line)) return "";
    line = line.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => url === "assets/graphs/complexity-comparison.svg" ? `![${alt}](/diagrams/complexity-comparison.svg)` : `[Source image reference: ${alt}](${url})`);
    line = line.replace(/\]\(#([^)]+)\)/g, (_, anchor) => `](/research?document=${documentId}&start=${(document.anchors as Record<string, number>)[anchor] || chapter.start})`);
    line = line.replace(/\[([^\]]+)\]\((?!https?:|\/|#)([^)]+)\)/g, (_, label, attachment) => attachment.startsWith("interactive/") ? `[${/quiz/i.test(label) ? "Open array practice (original quiz attachment not supplied)" : label}](/practice/arrays)` : `${label} (attachment not supplied; [source context](/research?document=${documentId}&start=${chapter.start}))`);
    return line.replace(/^# /, "## ").replace(/<br\s*\/?\s*>/gi, " · ");
  }).join("\n");
  return { document, chapter, body };
}
