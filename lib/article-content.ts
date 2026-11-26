import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import { articles, getArticle, resolveConcept } from "./knowledge";
export const readArticle = cache(async (id: string) => { if (!getArticle(id)) return null; return fs.readFile(path.join(process.cwd(), "content", "articles", `${id}.md`), "utf8"); });
export function mentionsConcept(markdown: string, id: string) {
  const prose = markdown.replace(/^\s*(```|~~~)[\s\S]*?^\s*\1[^\r\n]*$/gm, "").replace(/`[^`\r\n]*`/g, "");
  return [...prose.matchAll(/\]\(\/knowledge\/([^\s)#]+)(?:#[^\s)]*)?\)/g)].some(match => match[1] === id)
    || [...prose.matchAll(/\[\[([^\]]+)\]\]/g)].some(match => resolveConcept(match[1])?.id === id);
}
export const getMentions = cache(async (id: string) => {
  const bodies = await Promise.all(articles.filter(a => a.id !== id).map(async article => ({ article, body: await readArticle(article.id) })));
  return bodies.filter(a => a.body && mentionsConcept(a.body, id)).map(a => a.article);
});
export function headingId(text: string) { return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-"); }
export function tableOfContents(markdown: string) {
  let code = false; const seen = new Map<string, number>();
  return markdown.split(/\r?\n/).flatMap(line => {
    if (/^\s*(```|~~~)/.test(line)) { code = !code; return []; }
    const match = !code && /^(#{2,3})\s+(.+)$/.exec(line); if (!match) return [];
    const title = match[2].replace(/[*_`]/g, ""); const base = headingId(title); const count = seen.get(base) ?? 0; seen.set(base, count + 1);
    return [{ title, depth: match[1].length, id: count ? `${base}-${count}` : base }];
  });
}
