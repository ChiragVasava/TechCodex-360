import React, { type ReactNode } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { resolveConcept, getArticle } from "../lib/knowledge";
import { headingId } from "../lib/article-content";
function plainText(node: ReactNode): string { if (typeof node === "string" || typeof node === "number") return String(node); if (Array.isArray(node)) return node.map(plainText).join(""); if (React.isValidElement<{children?: ReactNode}>(node)) return plainText(node.props.children); return ""; }
export function KnowledgeMarkdown({ body, hideTitle = false }: { body: string; hideTitle?: boolean }) {
  const counts = new Map<string, number>();
  const idFor = (children: ReactNode) => { const base = headingId(plainText(children)); const count = counts.get(base) ?? 0; counts.set(base, count + 1); return count ? `${base}-${count}` : base; };
  const resolved = (hideTitle ? body.replace(/^# [^\n]*\n/, "") : body).replace(/\[\[([^\]]+)\]\]/g, (_, name: string) => { const concept = resolveConcept(name); return concept ? `[${concept.title}](/knowledge/${concept.id})` : `${name} (not yet documented)`; });
  return <div className="markdown"><ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={{
    h2: ({ children }) => <h2 id={idFor(children)}>{children}</h2>, h3: ({ children }) => <h3 id={idFor(children)}>{children}</h3>,
    a: ({ href, children }) => { const match = /^\/knowledge\/([^/#]+)$/.exec(href ?? ""); if (match && !getArticle(match[1])) return <span className="undocumented" title="Not yet documented">{children} · not yet documented</span>; return href?.startsWith("/") ? <Link href={href}>{children}</Link> : <a href={href} rel="noreferrer" target="_blank">{children}</a>; },
    table: ({ children }) => <div className="table-scroll"><table>{children}</table></div>,
  }}>{resolved}</ReactMarkdown></div>;
}
