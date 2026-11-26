"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { roleDirectory, roles } from "../../content/careers";

const categories = [...new Set(roleDirectory.map(entry => entry.category))];
export function RoleDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [scope, setScope] = useState("documented");
  const matches = useMemo(() => roleDirectory.filter(entry => {
    const profile = roles.find(role => role.id === entry.id);
    const text = [entry.title, entry.category, ...(profile?.alternativeTitles ?? []), ...(profile?.concepts ?? [])].join(" ").toLowerCase();
    return (!category || entry.category === category) && (scope !== "documented" || entry.documented) && text.includes(query.trim().toLowerCase());
  }), [query, category, scope]);
  return <>
    <div className="my-6 grid gap-3 md:grid-cols-[2fr_1fr_1fr]">
      <label className="text-sm">Search roles and alternative titles<input className="input mt-1" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Frontend, SRE, firmware…" /></label>
      <label className="text-sm">Engineering area<select className="input mt-1" value={category} onChange={event => setCategory(event.target.value)}><option value="">All areas</option>{categories.map(value => <option key={value}>{value}</option>)}</select></label>
      <label className="text-sm">Documentation<select className="input mt-1" value={scope} onChange={event => setScope(event.target.value)}><option value="documented">Documented profiles</option><option value="all">Entire role taxonomy</option></select></label>
    </div>
    <p className="muted mb-4 text-sm" role="status">{matches.length} matching roles. {roles.length} representative profiles are documented; other titles remain in the expansion backlog.</p>
    {matches.length === 0 ? <div className="card p-6"><p>No roles match these filters.</p><button className="btn mt-3" onClick={() => { setQuery(""); setCategory(""); setScope("all"); }}>Search the entire taxonomy</button></div> : <div className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">{matches.map(entry => {
      const profile = roles.find(role => role.id === entry.id);
      return <article key={entry.id} className="py-5"><p className="eyebrow">{entry.category}</p><h2 className="mt-1 text-lg font-semibold">{profile ? <Link className="text-cyan-700 hover:underline dark:text-cyan-300" href={`/roles/${entry.id}`}>{entry.title}</Link> : entry.title}</h2>{profile ? <><p className="muted mt-2 max-w-3xl text-sm leading-6">{profile.summary}</p><p className="mt-2 text-xs">{profile.alternativeTitles.join(" · ")}</p></> : <p className="muted mt-2 text-sm">Profile not yet documented. This title is preserved in the taxonomy; responsibilities and requirements still need research.</p>}</article>;
    })}</div>}
  </>;
}
