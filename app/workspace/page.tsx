"use client";

import Link from "next/link";
import { useState } from "react";
import { articles, getNextTopics, getPrerequisites } from "../../lib/knowledge";
import { learningStatuses } from "../../lib/workspace";
import { ConceptLabel, WorkspaceSummary } from "../../components/workspace-learning";
import { useWorkspace, WorkspaceStorageNotice } from "../../components/workspace-provider";

export default function WorkspacePage() {
  const { data, ready } = useWorkspace();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [view, setView] = useState("all");
  const [domain, setDomain] = useState("");
  const today = new Date().toLocaleDateString("en-CA");
  const domainIds = [...new Set(articles.flatMap((article) => article.domains))];
  const tracked = Object.entries(data.learning);
  const learned = (id: string) => ["Completed", "Mastered"].includes(data.learning[id]?.status ?? "");
  const visible = tracked.filter(([id, entry]) => {
    const article = articles.find((item) => item.id === id);
    return (!filter || entry.status === filter) && (!domain || article?.domains.includes(domain)) &&
      (view !== "bookmarks" || entry.bookmarked) && (view !== "notes" || !!entry.notes) &&
      (view !== "revision" || !!entry.revisionDate && entry.revisionDate <= today) &&
      `${article?.title ?? id} ${entry.notes} ${entry.goal}`.toLowerCase().includes(query.toLowerCase());
  });
  return <div className="space-y-6">
    <div><p className="eyebrow">Personal learning</p><h1 className="page-title">Learning workspace</h1><p className="muted mt-2">Your progress, notes and evidence stay separate from the shared encyclopedia.</p><p className="muted mt-2 text-sm">This workspace is local to this browser and site address. <Link href="/settings" className="underline">Export regular backups.</Link></p></div>
    <WorkspaceStorageNotice />
    <WorkspaceSummary />
    {ready && <>
      <section className="card p-5"><h2 className="section-title">Progress by domain</h2><p className="muted mt-2 text-sm">Counts reflect articles you explicitly marked Completed or Mastered; they are not a measure of overall professional proficiency.</p><div className="mt-4 overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr><th className="py-2 pr-4">Domain</th><th className="pr-4">Tracked</th><th>Completed / Mastered</th></tr></thead><tbody>{domainIds.filter((id) => tracked.some(([articleId]) => articles.find((article) => article.id === articleId)?.domains.includes(id))).map((domainId) => { const ids = tracked.filter(([articleId]) => articles.find((article) => article.id === articleId)?.domains.includes(domainId)).map(([id]) => id); return <tr key={domainId} className="border-t"><td className="py-2 pr-4">{domainId.replaceAll("-", " ")}</td><td>{ids.length}</td><td>{ids.filter(learned).length} / {ids.length}</td></tr>; })}</tbody></table></div>{!tracked.length && <p className="muted mt-3 text-sm">No progress recorded yet.</p>}<p className="muted mt-3 text-sm">Role progress appears in <Link href="/roadmap" className="underline">Career Roadmaps</Link>; skill records appear on their canonical articles.</p></section>
      <section><h2 className="section-title">Learning records</h2><div className="my-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <label className="text-sm">Search notes and topics<input className="input mt-1" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
        <label className="text-sm">Learning status<select className="input mt-1" value={filter} onChange={(event) => setFilter(event.target.value)}><option value="">All statuses</option>{learningStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
        <label className="text-sm">View<select className="input mt-1" value={view} onChange={(event) => setView(event.target.value)}><option value="all">All records</option><option value="bookmarks">Bookmarks</option><option value="notes">Personal notes</option><option value="revision">Revisions due</option></select></label>
        <label className="text-sm">Domain<select className="input mt-1" value={domain} onChange={(event) => setDomain(event.target.value)}><option value="">All domains</option>{domainIds.map((id) => <option value={id} key={id}>{id.replaceAll("-", " ")}</option>)}</select></label>
      </div><div className="space-y-3">{visible.map(([id, entry]) => {
        const prerequisites = getPrerequisites(id).map((relationship) => relationship.article).filter((article) => !learned(article.id));
        const next = getNextTopics(id).map((relationship) => relationship.article).filter((article) => !learned(article.id));
        return <article key={id} className="card p-5"><h3 className="font-semibold"><ConceptLabel id={id} /></h3><p className="muted mt-2 text-sm">Status: {entry.status} · Proficiency: {entry.proficiency}{entry.bookmarked ? " · Bookmarked" : ""}</p>
          {entry.revisionDate && <p className={`mt-2 text-sm ${entry.revisionDate <= today ? "font-semibold" : "muted"}`}>Revision: {entry.revisionDate}{entry.revisionDate <= today ? " · Due" : ""}</p>}
          {entry.goal && <p className="mt-3 text-sm"><strong>Goal: </strong>{entry.goal}</p>}
          {entry.notes && <details className="mt-3 text-sm"><summary className="cursor-pointer">Personal notes</summary><p className="mt-2 whitespace-pre-wrap">{entry.notes}</p></details>}
          {entry.exercises && <details className="mt-3 text-sm"><summary className="cursor-pointer">Exercises and evidence</summary><p className="mt-2 whitespace-pre-wrap">{entry.exercises}</p></details>}
          {prerequisites.length > 0 && <div className="mt-3 text-sm"><p className="font-medium">Prerequisites without completed records</p><ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1">{prerequisites.map((article) => <li key={article.id}><ConceptLabel id={article.id} /></li>)}</ul></div>}
          {next.length > 0 && <div className="mt-3 text-sm"><p className="font-medium">Next topics</p><ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1">{next.slice(0, 5).map((article) => <li key={article.id}><ConceptLabel id={article.id} /></li>)}</ul></div>}
        </article>;
      })}</div>{!visible.length && <p className="card p-5 text-sm">No learning records match this view. Use an article’s learning panel to save progress, notes and goals.</p>}</section>
      <section className="card p-5"><h2 className="section-title">Learning and workspace history</h2><p className="muted mt-2 text-sm">The most recent 500 explicit changes are retained. Reading positions update separately.</p>{data.history.length ? <ol className="mt-4 space-y-3 text-sm">{data.history.slice(0, 50).map((event, index) => <li key={`${event.at}-${index}`}><time className="muted mr-3">{new Date(event.at).toLocaleString()}</time>{event.message}{event.conceptId && <span className="ml-2"><ConceptLabel id={event.conceptId} /></span>}</li>)}</ol> : <p className="muted mt-4 text-sm">Your changes will appear here.</p>}</section>
    </>}
  </div>;
}
