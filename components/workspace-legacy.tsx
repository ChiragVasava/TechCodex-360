"use client";

import { useState } from "react";
import { devices, logs } from "../content/data";
import { recordDefinitions, type WorkspaceRecord } from "../lib/workspace";
import { useWorkspace } from "./workspace-provider";

/** Original repository records remain visible until deliberately imported by the user. */
export function LegacyCollection({ kind }: { kind: "inventory" | "troubleshooting" }) {
  const { data, ready, saveRecord } = useWorkspace();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const entries = kind === "inventory" ? devices.map((device) => ({
    id: `legacy-device-${device.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, name: device.name, group: device.status,
    display: { Type: device.type, Specifications: device.specs, Status: device.status, Location: device.location, Notes: device.notes } as Record<string, string>,
    fields: { name: device.name, model: device.name, category: device.type, specifications: device.specs, status: device.status === "Active" ? "Owned — Active" : "Owned — Storage", location: device.location, notes: `${device.notes}\nImported from original repository. Verify exact model, specifications and ownership.` } as Record<string, string>,
  })) : logs.map((log) => ({
    id: `legacy-issue-${log.date}`, name: log.issue, group: log.category,
    display: { Date: log.date, Category: log.category, Device: log.device, "Root cause": log.cause, Solution: log.solution } as Record<string, string>,
    fields: { name: log.issue, date: log.date, category: log.category, device: log.device, cause: log.cause, solution: log.solution, status: "Monitoring", investigation: "Imported from original repository. Resolution and environment require confirmation." } as Record<string, string>,
  }));
  const visible = entries.filter((entry) => (!filter || entry.group === filter) && `${entry.name} ${Object.values(entry.display).join(" ")}`.toLowerCase().includes(query.toLowerCase()));
  return <details className="card mt-8 p-5"><summary className="cursor-pointer font-semibold">Original repository {kind === "inventory" ? "inventory" : "troubleshooting"} ({entries.length} preserved entries)</summary>
    <p className="muted mt-3 text-sm">These original entries remain unchanged in the repository. Ownership, specifications and resolutions have not been reconfirmed. Import an entry to edit a personal copy in this browser.</p>
    {kind === "inventory" && <p className="muted mt-2 text-sm">Review model-specific ESP32 capabilities. The original DHT22 “1-wire” note does not establish compatibility with the Dallas/Maxim 1-Wire protocol.</p>}
    <div className="my-4 flex flex-wrap gap-3"><label className="flex-1 text-sm">Search original entries<input className="input mt-1" value={query} onChange={(event) => setQuery(event.target.value)} /></label><label className="text-sm">{kind === "inventory" ? "Original status" : "Category"}<select className="input mt-1" value={filter} onChange={(event) => setFilter(event.target.value)}><option value="">All</option>{[...new Set(entries.map((entry) => entry.group))].map((group) => <option key={group}>{group}</option>)}</select></label></div>
    <p role="status" className="muted mb-3 text-sm">{message}</p>
    <div className="space-y-4">{visible.map((entry) => <article key={entry.id} className="border-t pt-4"><div className="flex flex-wrap items-center justify-between gap-2"><h2 className="font-semibold">{entry.name}</h2><button className="btn text-sm" disabled={!ready || busy !== null || data.records[kind].some((record) => record.id === entry.id)} onClick={async () => {
      setBusy(entry.id); const now = new Date().toISOString();
      const record: WorkspaceRecord = { id: entry.id, createdAt: now, updatedAt: now, conceptIds: [], fields: { ...Object.fromEntries(recordDefinitions[kind].fields.map((field) => [field.key, field.options?.[0] ?? ""])), ...entry.fields } };
      try { await saveRecord(kind, record); setMessage(`Imported ${entry.name}. Review and edit the personal record above.`); } catch (problem) { setMessage(problem instanceof Error ? problem.message : "Import failed."); } finally { setBusy(null); }
    }}>{data.records[kind].some((record) => record.id === entry.id) ? "Imported" : busy === entry.id ? "Importing…" : "Import personal copy"}</button></div><dl className="mt-3 grid gap-3 text-sm md:grid-cols-2">{Object.entries(entry.display).map(([label, value]) => <div key={label}><dt className="muted">{label}</dt><dd className="mt-1">{value}</dd></div>)}</dl></article>)}</div>
    {!visible.length && <p className="muted text-sm">No original entries match these filters.</p>}
  </details>;
}
