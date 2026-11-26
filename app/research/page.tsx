import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import Link from "next/link";
import index from "../../content/research-index.json";
import { articles } from "../../lib/knowledge";
import { normalizeResearch, researchFingerprint } from "../../lib/research-integrity.mjs";

export const metadata = { title: "Research archive | TechCodex 360", description: "Preserved original research with line-level provenance, review flags and links to derived knowledge articles." };
export const dynamic = "force-dynamic";

function integer(value: string | string[] | undefined, fallback: number) {
  const number = typeof value === "string" && /^\d+$/.test(value) ? Number(value) : NaN;
  return Number.isSafeInteger(number) ? number : fallback;
}
function sourceLink(start: number, end?: number, line?: number) {
  return `/research?start=${start}${end ? `&end=${end}` : ""}${line ? `#L${line}` : "#source-lines"}`;
}

export default async function ResearchPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  let raw: Buffer;
  try { raw = await fs.readFile(path.join(process.cwd(), "research", "research.md")); }
  catch { return <div className="max-w-3xl"><h1 className="page-title">Research archive unavailable</h1><p role="alert" className="mt-4">The original research file could not be read. Restore it from your repository backup to recover the archive. Published articles remain available.</p><Link className="btn mt-4" href="/knowledge">Open encyclopedia</Link></div>; }
  const lines = normalizeResearch(raw).split("\n");
  const hash = crypto.createHash("sha256").update(raw).digest("hex");
  const fingerprint = researchFingerprint(raw);
  const stale = fingerprint.sha256 !== index.sha256 || fingerprint.lineCount !== index.lineCount || fingerprint.bytes !== index.bytes;
  const start = Math.max(1, Math.min(lines.length, integer(params.start, 1)));
  const end = Math.max(start, Math.min(lines.length, start + 199, integer(params.end, start + 199)));
  const query = typeof params.q === "string" ? params.q.trim().slice(0, 120) : "";
  const matches: { line: number; text: string }[] = [];
  let totalMatches = 0;
  if (query) for (let offset = 0; offset < lines.length; offset++) {
    if (lines[offset].toLowerCase().includes(query.toLowerCase())) { totalMatches++; if (matches.length < 50) matches.push({ line: offset + 1, text: lines[offset] }); }
  }
  const derived = articles.filter((article) => article.research.some((range) => range.start <= end && range.end >= start));
  return <div className="space-y-6">
    <header><p className="eyebrow">Primary knowledge corpus</p><h1 className="page-title">Original research archive</h1><p className="muted mt-3 max-w-3xl">Every original line is preserved, including incomplete explanations, repeated questions, source fragments and conflicting claims. This archive is source material requiring review. Published articles link back to the passages they use.</p><p className="muted mt-3 text-sm">{lines.length.toLocaleString()} display lines · {raw.byteLength.toLocaleString()} checkout bytes · {index.sections.length} thematic sections</p></header>
    {stale && <div role="alert" className="rounded border border-amber-400 p-4 text-sm">The research file has changed since this index was generated. Review section boundaries and article source ranges, then run <code>node scripts/index-research.mjs</code> to refresh the manifest. Current source text is shown below; the previous manifest is retained until reindexing.</div>}
    <section className="card p-5"><h2 className="section-title">Search original text</h2><form method="get" action="/research" className="mt-3 flex flex-wrap items-end gap-3"><label className="min-w-48 flex-1 text-sm">Literal phrase<input className="input mt-1" name="q" defaultValue={query} maxLength={120} placeholder="For example: Multiblue, event loop, middleware" /></label><button type="submit" className="btn">Search research</button></form>
      {query && <div className="mt-4"><p className="muted text-sm">{totalMatches} matching {totalMatches === 1 ? "line" : "lines"}{totalMatches > 50 ? "; showing the first 50. Refine your phrase to narrow the results." : "."}</p><ol className="mt-3 space-y-3 text-sm">{matches.map((match) => <li key={match.line}><Link className="font-medium underline" href={sourceLink(Math.max(1, match.line - 5), Math.min(lines.length, match.line + 25), match.line)}>Line {match.line}</Link><p className="muted mt-1 break-words">{match.text.length > 350 ? `${match.text.slice(0, 350)}…` : match.text}</p></li>)}</ol></div>}
    </section>
    <details className="card p-5" open={start === 1 && !query}><summary className="cursor-pointer font-semibold">Complete section index</summary><p className="muted mt-3 text-sm">The ranges cover the complete source without gaps. These are broad review groupings, not a claim that all concepts have been extracted or verified.</p><ol className="mt-4 divide-y">{index.sections.map((section) => <li className="py-3" key={section.id}><Link className="font-medium underline" href={sourceLink(section.start)}>{section.title}</Link><p className="muted mt-1 text-sm">Lines {section.start}–{section.end} · {section.status}</p></li>)}</ol></details>
    <details className="card p-5"><summary className="cursor-pointer font-semibold">Review queue and evidence limitations</summary><div className="mt-4 space-y-5">{index.reviewFlags.map((flag) => <article key={flag.id}><h2 className="font-semibold">{flag.title} <span className="muted text-sm">· {flag.status}</span></h2><p className="muted mt-2 text-sm leading-6">{flag.detail}</p><ul className="mt-2 flex flex-wrap gap-4 text-sm">{flag.ranges.map((range) => <li key={`${range.start}-${range.end}`}><Link className="underline" href={sourceLink(range.start, range.end)}>Review lines {range.start}–{range.end}</Link></li>)}</ul></article>)}</div></details>
    <section className="card p-5"><div className="flex flex-wrap items-center justify-between gap-3"><h2 className="section-title" id="source-lines">Original lines {start}–{end}</h2><span className="muted text-sm">Up to 200 lines per page</span></div>
      <form action="/research" method="get" className="my-4 flex flex-wrap items-end gap-3"><label className="text-sm">Start line<input className="input mt-1 max-w-36" name="start" type="number" min={1} max={lines.length} defaultValue={start} /></label><label className="text-sm">End line<input className="input mt-1 max-w-36" name="end" type="number" min={1} max={lines.length} defaultValue={end} /></label><button className="btn" type="submit">Open range</button></form>
      <nav className="mb-4 flex flex-wrap gap-3 text-sm" aria-label="Research source pages">{start > 1 && <Link className="btn" href={sourceLink(Math.max(1, start - 200), start - 1)}>← Previous lines</Link>}{end < lines.length && <Link className="btn" href={sourceLink(end + 1)}>Next lines →</Link>}</nav>
      <pre className="max-h-[70vh] overflow-auto rounded border border-slate-200 bg-slate-50 p-3 text-xs leading-6 dark:border-slate-700 dark:bg-slate-950"><code>{lines.slice(start - 1, end).map((line, offset) => <span className="block min-h-6 whitespace-pre-wrap break-all" id={`L${start + offset}`} key={start + offset}><a href={`#L${start + offset}`} className="mr-4 inline-block w-12 select-none text-right text-slate-500" aria-label={`Line ${start + offset}`}>{start + offset}</a>{line}</span>)}</code></pre>
      <p className="muted mt-3 text-sm">Source text is escaped. Embedded HTML, commands and remote images are displayed as text and are never executed or loaded.</p>
    </section>
    <section className="card p-5"><h2 className="section-title">Articles connected to this passage</h2>{derived.length ? <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">{derived.map((article) => <li key={article.id}><Link className="font-medium underline" href={`/knowledge/${article.slug}`}>{article.title}</Link><p className="muted mt-1">{article.verification.status}</p></li>)}</ul> : <p className="muted mt-3 text-sm">No published article currently cites this passage. The original text remains preserved for later extraction and review.</p>}</section>
    <details className="text-sm"><summary className="cursor-pointer font-medium">Source integrity details</summary><dl className="mt-3 space-y-3"><div><dt className="muted">Current checkout byte SHA-256</dt><dd className="mt-1 break-all font-mono">{hash}</dd></div><div><dt className="muted">Current LF-normalized SHA-256</dt><dd className="mt-1 break-all font-mono">{fingerprint.sha256}</dd></div><div><dt className="muted">Indexed LF-normalized SHA-256</dt><dd className="mt-1 break-all font-mono">{index.sha256}</dd></div><div><dt className="muted">Line convention</dt><dd className="mt-1">{index.lineConvention}</dd></div><div><dt className="muted">Index status</dt><dd className="mt-1">{stale ? "Needs regeneration and source-range review" : "Matches the research text (CRLF and LF treated equally)"}</dd></div></dl></details>
  </div>;
}
