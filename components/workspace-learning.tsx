"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { articles } from "../lib/knowledge";
import { blankLearning, learningStatuses, proficiencyLevels, type LearningEntry } from "../lib/workspace";
import { useWorkspace, WorkspaceStorageNotice } from "./workspace-provider";

export function ConceptLabel({ id }: { id: string }) {
  const article = articles.find((item) => item.id === id);
  return article ? <Link className="text-cyan-700 underline underline-offset-4 dark:text-cyan-300" href={`/knowledge/${article.slug}`}>{article.title}</Link> : <span>{id} <span className="muted">(not yet documented)</span></span>;
}

export function ArticleLearning({ id, trackReading = true }: { id: string; trackReading?: boolean }) {
  const { data, ready, visit } = useWorkspace();
  const [resumePosition, setResumePosition] = useState(0);
  const storedPosition = useRef(0);
  storedPosition.current = data.visits[id]?.position ?? 0;
  useEffect(() => {
    if (!ready || !trackReading) return;
    setResumePosition(storedPosition.current);
    void visit(id).catch(() => undefined);
    let timer: ReturnType<typeof setTimeout> | undefined;
    let pending: number | undefined;
    const flush = () => {
      if (pending !== undefined) { void visit(id, pending).catch(() => undefined); pending = undefined; }
    };
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      pending = height > 0 ? Math.max(0, Math.min(1, window.scrollY / height)) : 0;
      clearTimeout(timer); timer = setTimeout(flush, 1000);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", flush);
    return () => { clearTimeout(timer); window.removeEventListener("scroll", onScroll); window.removeEventListener("pagehide", flush); flush(); };
  }, [id, ready, visit, trackReading]);
  return <section className="card p-4" aria-labelledby={`learning-heading-${id}`}>
    <h2 id={`learning-heading-${id}`} className="section-title">Your learning</h2>
    <p className="muted mt-1 text-sm">Saved in this browser. Status and proficiency are independent.</p>
    <WorkspaceStorageNotice />
    {ready && <>
      {trackReading && resumePosition > 0.03 && <button className="btn mt-3" onClick={() => window.scrollTo({ top: resumePosition * (document.documentElement.scrollHeight - window.innerHeight), behavior: "smooth" })}>Resume saved reading position</button>}
      <LearningForm key={id} id={id} initial={Object.hasOwn(data.learning, id) ? data.learning[id] : blankLearning()} />
      {(["projects", "inventory", "troubleshooting"] as const).map((kind) => { const linked = data.records[kind].filter((record) => record.conceptIds.includes(id)); return linked.length ? <div className="mt-4 border-t pt-3 text-sm" key={kind}><h3 className="font-medium">Your related {kind}</h3><ul className="mt-2 space-y-1">{linked.map((record) => <li key={record.id}><Link className="underline" href={`${kind === "inventory" ? "/iot" : kind === "troubleshooting" ? "/logs" : "/projects"}#${record.id}`}>{record.fields.name}</Link></li>)}</ul></div> : null; })}
    </>}
  </section>;
}

function LearningForm({ id, initial }: { id: string; initial: LearningEntry }) {
  const { saveLearning } = useWorkspace();
  const [draft, setDraft] = useState(initial);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const change = <K extends keyof LearningEntry>(key: K, value: LearningEntry[K]) => { setDraft((current) => ({ ...current, [key]: value })); setMessage("Unsaved changes"); };
  return <form className="mt-4 space-y-3" onSubmit={async (event) => {
    event.preventDefault(); setSaving(true);
    try { await saveLearning(id, draft); setMessage("Learning saved."); }
    catch (problem) { setMessage(problem instanceof Error ? problem.message : "Save failed."); }
    finally { setSaving(false); }
  }}>
    <label className="block text-sm">Learning status<select className="input mt-1" value={draft.status} onChange={(event) => change("status", event.target.value as LearningEntry["status"])}>{learningStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
    <label className="block text-sm">Current proficiency<select className="input mt-1" value={draft.proficiency} onChange={(event) => change("proficiency", event.target.value as LearningEntry["proficiency"])}>{proficiencyLevels.map((level) => <option key={level}>{level}</option>)}</select></label>
    <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={draft.bookmarked} onChange={(event) => change("bookmarked", event.target.checked)} /> Save article to bookmarks</label>
    <label className="block text-sm">Personal notes<textarea className="input mt-1" rows={4} maxLength={30000} value={draft.notes} onChange={(event) => change("notes", event.target.value)} /></label>
    <details className="text-sm"><summary className="cursor-pointer py-2 font-medium">Exercises, goal and revision reminder</summary><div className="space-y-3 pt-2">
      <label className="block">Exercises and evidence<textarea className="input mt-1" rows={3} maxLength={30000} value={draft.exercises} onChange={(event) => change("exercises", event.target.value)} /></label>
      <label className="block">Learning goal<textarea className="input mt-1" rows={2} maxLength={30000} value={draft.goal} onChange={(event) => change("goal", event.target.value)} /></label>
      <label className="block">Revision date<input className="input mt-1" type="date" value={draft.revisionDate} onChange={(event) => change("revisionDate", event.target.value)} /></label>
      <p className="muted">Due revisions appear in your workspace; no background notifications are sent.</p>
    </div></details>
    <button className="btn" type="submit" disabled={saving}>{saving ? "Saving…" : "Save learning"}</button>
    <p className="muted text-sm" role="status">{message}</p>
  </form>;
}

export function WorkspaceSummary() {
  const { data, ready } = useWorkspace();
  const recent = Object.entries(data.visits).sort((a, b) => b[1].at.localeCompare(a[1].at)).slice(0, 5);
  const active = Object.entries(data.learning).filter(([, value]) => ["Learning", "Practicing", "Revising"].includes(value.status));
  const bookmarks = Object.entries(data.learning).filter(([, value]) => value.bookmarked);
  return <section aria-labelledby="personal-workspace-summary" className="card p-5">
    <div className="flex flex-wrap items-center justify-between gap-2"><h2 id="personal-workspace-summary" className="section-title">Continue learning</h2><Link href="/workspace" className="text-sm underline">Open workspace →</Link></div>
    <WorkspaceStorageNotice />
    {ready && <div className="mt-4 grid gap-6 md:grid-cols-2">
      <div><h3 className="font-medium">Recently visited</h3>{recent.length ? <ul className="mt-2 space-y-2 text-sm">{recent.map(([id]) => <li key={id}><ConceptLabel id={id} /></li>)}</ul> : <p className="muted mt-2 text-sm">Open an article to begin your reading history.</p>}</div>
      <div><h3 className="font-medium">Active learning</h3>{active.length ? <ul className="mt-2 space-y-2 text-sm">{active.slice(0, 4).map(([id, entry]) => <li key={id}><ConceptLabel id={id} /> <span className="muted">· {entry.status} · {entry.proficiency}</span></li>)}</ul> : <p className="muted mt-2 text-sm">Save a learning status on an article to track your work.</p>}<p className="muted mt-3 text-sm">{bookmarks.length} saved {bookmarks.length === 1 ? "article" : "articles"}</p></div>
    </div>}
  </section>;
}
