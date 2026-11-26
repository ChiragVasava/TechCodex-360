"use client";

import { useId, useState } from "react";
import { articles } from "../lib/knowledge";
import { recordDefinitions, validateRecord, type RecordKind, type WorkspaceRecord } from "../lib/workspace";
import { useWorkspace, WorkspaceStorageNotice } from "./workspace-provider";
import { ConceptLabel } from "./workspace-learning";

function newRecord(kind: RecordKind): WorkspaceRecord {
  const now = new Date().toISOString();
  return { id: crypto.randomUUID(), conceptIds: [], fields: Object.fromEntries(recordDefinitions[kind].fields.map((field) => [field.key, field.options?.[0] ?? ""])), createdAt: now, updatedAt: now };
}

export function WorkspaceRecords({ kind }: { kind: RecordKind }) {
  const { data, ready, saveRecord, deleteRecord } = useWorkspace();
  const definition = recordDefinitions[kind];
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [editing, setEditing] = useState<WorkspaceRecord | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const prefix = useId();
  const records = data.records[kind].filter((record) => (!status || record.fields.status === status) && `${Object.values(record.fields).join(" ")} ${record.conceptIds.join(" ")}`.toLowerCase().includes(query.toLowerCase()));
  return <section>
    <p className="eyebrow">Personal workspace</p><h1 className="page-title">{definition.title}</h1><p className="muted mt-2 max-w-3xl">{definition.description}</p>
    <p className="muted mt-2 text-sm">Stored in this browser. Export a backup from Settings before moving devices or clearing browser data.</p>
    <WorkspaceStorageNotice />
    {ready && <>
      <div className="my-5 flex flex-wrap items-end gap-3"><label className="min-w-48 flex-1 text-sm">Search your {kind}<input className="input mt-1" value={query} onChange={(event) => setQuery(event.target.value)} /></label><label className="text-sm">Status<select className="input mt-1" value={status} onChange={(event) => setStatus(event.target.value)}><option value="">All statuses</option>{definition.fields.find((field) => field.key === "status")?.options?.map((item) => <option key={item}>{item}</option>)}</select></label><button className="btn" onClick={() => { setEditing(newRecord(kind)); setMessage(""); }}>Add {definition.singular}</button></div>
      <p role="status" className="muted mb-3 text-sm">{message}</p>
      <div id={`${prefix}-editor`}>{editing && <RecordEditor key={editing.id} kind={kind} record={editing} onCancel={() => setEditing(null)} onSave={async (record) => { await saveRecord(kind, record); setEditing(null); setMessage(`${definition.singular} saved.`); }} />}</div>
      <div className="space-y-3">{records.map((record) => <article className="card p-5" key={record.id} id={record.id}>
        <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="text-lg font-semibold">{record.fields.name}</h2><p className="muted mt-1 text-sm">{record.fields.status} {record.fields.category ? `· ${record.fields.category}` : ""}</p></div><div className="flex gap-2"><button className="btn text-sm" onClick={() => { setEditing(structuredClone(record)); setMessage(""); document.getElementById(`${prefix}-editor`)?.scrollIntoView(); }}>Edit<span className="sr-only"> {record.fields.name}</span></button><button className="btn text-sm" onClick={() => setConfirmDelete(record.id)}>Delete<span className="sr-only"> {record.fields.name}</span></button></div></div>
        {record.fields.description && <p className="mt-3 whitespace-pre-wrap text-sm">{record.fields.description}</p>}
        {record.conceptIds.length > 0 && <div className="mt-3"><h3 className="text-sm font-medium">Connected concepts</h3><ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">{record.conceptIds.map((id) => <li key={id}><ConceptLabel id={id} /></li>)}</ul></div>}
        <details className="mt-4"><summary className="cursor-pointer text-sm font-medium">All record details</summary><dl className="mt-4 grid gap-4 text-sm md:grid-cols-2">{definition.fields.filter((field) => !["name", "status", "description"].includes(field.key) && record.fields[field.key]).map((field) => <div key={field.key} className="min-w-0"><dt className="muted font-medium">{field.label}</dt><dd className="mt-1 whitespace-pre-wrap break-words">{field.type === "url" ? <a className="underline" href={record.fields[field.key]} target="_blank" rel="noreferrer">{record.fields[field.key]}</a> : record.fields[field.key]}</dd></div>)}</dl><p className="muted mt-4 text-xs">Updated {new Date(record.updatedAt).toLocaleString()} · ID {record.id}</p></details>
        {confirmDelete === record.id && <div className="mt-4 border-t pt-3" role="alert"><p className="text-sm">Delete “{record.fields.name}” from this browser? This cannot be undone without a backup.</p><div className="mt-2 flex gap-2"><button className="btn" disabled={busy} onClick={async () => { setBusy(true); try { await deleteRecord(kind, record.id); setConfirmDelete(null); if (editing?.id === record.id) setEditing(null); setMessage("Record deleted."); } catch (problem) { setMessage(problem instanceof Error ? problem.message : "Delete failed."); } finally { setBusy(false); } }}>Confirm delete</button><button className="btn" onClick={() => setConfirmDelete(null)}>Keep record</button></div></div>}
      </article>)}</div>
      {!records.length && <p className="card p-6 text-sm">{data.records[kind].length ? "No records match these filters." : `No personal ${kind} yet. Add your first ${definition.singular} to record real work.`}</p>}
    </>}
  </section>;
}

function RecordEditor({ kind, record, onCancel, onSave }: { kind: RecordKind; record: WorkspaceRecord; onCancel: () => void; onSave: (record: WorkspaceRecord) => Promise<void> }) {
  const [draft, setDraft] = useState(record);
  const [conceptQuery, setConceptQuery] = useState("");
  const [conceptText, setConceptText] = useState(record.conceptIds.join(", "));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const definition = recordDefinitions[kind];
  const id = useId();
  const suggestions = conceptQuery ? articles.filter((article) => `${article.title} ${article.aliases.join(" ")}`.toLowerCase().includes(conceptQuery.toLowerCase())).slice(0, 8) : [];
  return <form className="card mb-6 p-5" aria-label={`Edit ${definition.singular}`} onSubmit={async (event) => {
    event.preventDefault(); setBusy(true); setError("");
    try { const next = { ...draft, conceptIds: [...new Set(conceptText.split(/[,\n]/).map((value) => value.trim()).filter(Boolean))] }; validateRecord(next, kind); await onSave(next); }
    catch (problem) { setError(problem instanceof Error ? problem.message : "Unable to save record."); }
    finally { setBusy(false); }
  }}>
    <h2 className="section-title mb-4">Edit {definition.singular}</h2>
    <div className="grid gap-4 md:grid-cols-2">{definition.fields.map((field) => <label key={field.key} className={`block min-w-0 text-sm ${field.type === "textarea" ? "md:col-span-2" : ""}`}>{field.label}{field.required ? " *" : ""}
      {field.type === "textarea" ? <textarea className="input mt-1" rows={3} maxLength={30000} value={draft.fields[field.key]} onChange={(event) => setDraft({ ...draft, fields: { ...draft.fields, [field.key]: event.target.value } })} /> : field.type === "select" ? <select className="input mt-1" value={draft.fields[field.key]} onChange={(event) => setDraft({ ...draft, fields: { ...draft.fields, [field.key]: event.target.value } })}>{field.options?.map((option) => <option key={option}>{option}</option>)}</select> : <input className="input mt-1" required={field.required} type={field.type ?? "text"} maxLength={30000} value={draft.fields[field.key]} onChange={(event) => setDraft({ ...draft, fields: { ...draft.fields, [field.key]: event.target.value } })} />}
    </label>)}</div>
    <div className="my-5 border-t pt-4"><label className="block text-sm" htmlFor={`${id}-find`}>Find a related concept</label><input id={`${id}-find`} className="input mt-1" value={conceptQuery} onChange={(event) => setConceptQuery(event.target.value)} placeholder="Search names or aliases" />
      {suggestions.length > 0 && <ul className="my-2 flex flex-wrap gap-2">{suggestions.map((article) => <li key={article.id}><button className="btn text-sm" type="button" onClick={() => { setConceptText((current) => [...new Set([...current.split(",").map((value) => value.trim()).filter(Boolean), article.id])].join(", ")); setConceptQuery(""); }}>+ {article.title}</button></li>)}</ul>}
      <label className="mt-3 block text-sm">Connected concept IDs (comma separated)<textarea className="input mt-1" rows={2} value={conceptText} onChange={(event) => setConceptText(event.target.value)} /></label><p className="muted mt-1 text-xs">Unknown IDs are preserved and displayed as not yet documented.</p>
    </div>
    {error && <p role="alert" className="mb-3 text-sm text-red-700 dark:text-red-300">{error}</p>}
    <div className="flex gap-3"><button type="submit" className="btn" disabled={busy}>{busy ? "Saving…" : `Save ${definition.singular}`}</button><button type="button" className="btn" disabled={busy} onClick={onCancel}>Cancel</button></div>
  </form>;
}
