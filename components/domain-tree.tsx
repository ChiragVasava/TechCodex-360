"use client";
import { useState } from "react";
import Link from "next/link";
import { taxonomy } from "../content/taxonomy";
import { articles, resolveConcept } from "../lib/knowledge";
export function DomainTree({ domainId }: { domainId?: string }) {
  const [query, setQuery] = useState(""); const [onlyWritten, setOnlyWritten] = useState(false);
  const domains = taxonomy.filter(d => !domainId || d.id === domainId);
  return <div className="space-y-5"><div className="filter-bar"><label className="grow">Find a discipline or topic<input className="input mt-2" value={query} onChange={e => setQuery(e.target.value)} placeholder="Try networking, microcontroller, testing…" /></label><label className="flex items-center gap-2"><input type="checkbox" checked={onlyWritten} onChange={e => setOnlyWritten(e.target.checked)} />Written articles only</label></div><p className="muted text-sm">Each topic points to one canonical article. Gray topics are part of the coverage plan and have not been documented.</p>
    {domains.map(domain => { const branches = domain.disciplines.map(branch => ({ ...branch, topics: branch.topics.filter(t => (!onlyWritten || resolveConcept(t)) && (!query || `${domain.title} ${branch.title} ${t}`.toLowerCase().includes(query.toLowerCase()))) })).filter(b => b.topics.length); if (!branches.length) return null;
      return <section className="domain-section" key={domain.id}><div className="flex flex-wrap items-baseline justify-between gap-3"><h2 className="section-title"><Link href={`/domains/${domain.id}`}>{domain.title}</Link></h2><span className="muted text-sm">{articles.filter(a => a.domains.includes(domain.id)).length} articles</span></div><p className="muted mb-4">{domain.description}</p>{branches.map(branch => <details key={branch.title} open={!!domainId || !!query} className="tree-branch"><summary>{branch.title}<span className="muted ml-3 text-sm">{branch.topics.length} topics</span></summary><ul className="topic-tree">{branch.topics.map(topic => { const article = resolveConcept(topic); return <li key={topic}>{article ? <Link href={`/knowledge/${article.id}`}>{topic}<span className="ml-2 text-xs muted">{article.level}</span></Link> : <span className="undocumented">{topic}<span className="gap-label">Not yet documented</span></span>}</li>; })}</ul></details>)}</section>;
    })}
    {!domains.some(d => d.disciplines.some(b => b.topics.some(t => (!onlyWritten || resolveConcept(t)) && `${d.title} ${b.title} ${t}`.toLowerCase().includes(query.toLowerCase())))) && <p role="status" className="empty-state">No matching topics. Try another term or include undocumented topics.</p>}
  </div>;
}
