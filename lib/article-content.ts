import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import { articles, getArticle } from "./knowledge";
export const readArticle = cache(async (id: string) => { if (!getArticle(id)) return null; return fs.readFile(path.join(process.cwd(), "content", "articles", `${id}.md`), "utf8"); });
export const getMentions = cache(async (id: string) => { const bodies = await Promise.all(articles.filter(a => a.id !== id).map(async a => ({ article: a, body: await readArticle(a.id) }))); return bodies.filter(a => a.body?.includes(`/knowledge/${id})`) || a.body?.includes(`[[${id}]]`)).map(a => a.article); });
export function headingId(text: string) { return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-"); }
export function tableOfContents(markdown: string) {
  let code = false; const seen = new Map<string, number>();
  return markdown.split("\n").flatMap(line => {
    if (/^\s*(```|~~~)/.test(line)) { code = !code; return []; }
    const match = !code && /^(#{2,3})\s+(.+)$/.exec(line); if (!match) return [];
    const title = match[2].replace(/[*_`]/g, ""); const base = headingId(title); const count = seen.get(base) ?? 0; seen.set(base, count + 1);
    return [{ title, depth: match[1].length, id: count ? `${base}-${count}` : base }];
  });
}
