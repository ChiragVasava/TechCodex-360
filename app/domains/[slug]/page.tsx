import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { taxonomy, legacyDomainMap } from "../../../content/taxonomy";
import { domains as legacyDomains } from "../../../content/domains";
import { DomainTree } from "../../../components/domain-tree";
import { KnowledgeMarkdown } from "../../../components/knowledge-markdown";
import { articles } from "../../../lib/knowledge";
export const dynamicParams = false;
export function generateStaticParams() { return [...new Set([...taxonomy.map(d => d.id), ...legacyDomains.map(d => d.slug)])].map(slug => ({slug})); }
export default async function DomainPage({params}: {params: Promise<{slug:string}>}) {
 const {slug} = await params; const domain = taxonomy.find(d => d.id === slug); const legacy = legacyDomains.find(d => d.slug === slug); if (!domain && !legacy) notFound();
 const notes = legacy ? await fs.readFile(path.join(process.cwd(), "content/domains", slug + ".md"), "utf8") : null;
 return <div className="page-width"><nav className="breadcrumbs"><Link href="/domains">Domains</Link><span>/</span><span>{domain?.title ?? legacy?.title}</span></nav><h1 className="page-title">{domain?.title ?? legacy?.title}</h1>
 {domain ? <><p className="page-intro">{domain.description}</p><div className="link-strip">Related domains: {domain.related.map(id => <Link key={id} href={"/domains/"+id}>{taxonomy.find(d => d.id === id)?.title}</Link>)}</div><DomainTree domainId={slug}/><section className="mt-8"><h2 className="section-title">Articles in this domain</h2><div className="article-list">{articles.filter(a => a.domains.includes(slug)).map(a => <Link key={a.id} href={"/knowledge/"+a.id}><strong>{a.title}</strong><span className="muted block">{a.summary}</span></Link>)}</div></section></> : <><p className="page-intro">This original collection is preserved. Its subjects now have dedicated domains.</p><div className="link-strip">{legacyDomainMap[slug]?.map(id => <Link key={id} href={"/domains/"+id}>{taxonomy.find(d => d.id ===id)?.title}</Link>)}</div></>}
 {notes && <details className="mt-10 card p-5"><summary>Original domain notes · needs review</summary><KnowledgeMarkdown body={notes}/></details>}
 </div>;
}
