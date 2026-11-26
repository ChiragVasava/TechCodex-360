"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { roles } from "../../content/careers";
import { getArticle, getPrerequisites } from "../../lib/knowledge";
import { useWorkspace, WorkspaceStorageNotice } from "../../components/workspace-provider";
const finished = (status?: string) => status === "Completed" || status === "Mastered";
export function RoadmapBuilder({ initialRole }: { initialRole?: string }) {
  const { data, ready, saveRoadmap } = useWorkspace();
  const [roleId, setRoleId] = useState(initialRole ?? roles[0].id);
  const [optionalSteps, setOptionalSteps] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (!ready || loaded) return;
    if (!initialRole && roles.some(role => role.id === data.roadmap.selectedRole)) setRoleId(data.roadmap.selectedRole);
    setOptionalSteps(data.roadmap.optionalSteps); setLoaded(true);
  }, [ready, loaded, initialRole, data.roadmap]);
  const role = roles.find(item => item.id === roleId) ?? roles[0];
  const steps = role.roadmap.filter(step => !step.optional || optionalSteps.includes(step.id));
  const concepts = [...new Set(steps.flatMap(step => step.concepts))];
  const completed = concepts.filter(id => finished(data.learning[id]?.status));
  const nextConcept = concepts.find(id => !finished(data.learning[id]?.status));
  const prerequisites = [...new Set(concepts.flatMap(id => getPrerequisites(id).map(relation => relation.article.id)))].filter(id => !concepts.includes(id) && !finished(data.learning[id]?.status));
  const dirty = roleId !== data.roadmap.selectedRole || [...optionalSteps].sort().join(",") !== [...data.roadmap.optionalSteps].sort().join(",");
  async function save() {
    setSaving(true); setMessage("");
    try { await saveRoadmap({ selectedRole: roleId, optionalSteps }); setMessage("Roadmap selection saved."); }
    catch (error) { setMessage(error instanceof Error ? error.message : "Roadmap could not be saved."); }
    finally { setSaving(false); }
  }
  return <div className="mt-7"><WorkspaceStorageNotice /><div className="card p-5"><div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end"><label className="text-sm font-semibold">Your target role<select disabled={!ready} value={roleId} onChange={event => { setRoleId(event.target.value); setMessage(""); }} className="input mt-2">{roles.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label><button className="btn" disabled={!ready || saving || !dirty} onClick={() => void save()}>{saving ? "Saving…" : "Save this roadmap"}</button></div><p className="muted mt-3 text-sm">Saved in your local workspace and included in its JSON backup. Selecting a role does not mark its topics learned.</p><p className="mt-2 text-sm" role="status">{message || (dirty ? "Selection has unsaved changes." : "Saved selection is up to date.")}</p></div>
    <header className="my-6"><h2 className="section-title">{role.title}</h2><p className="muted mt-2 max-w-3xl leading-7">{role.summary}</p><Link className="mt-2 inline-block text-cyan-700 underline dark:text-cyan-300" href={`/roles/${role.id}`}>Read responsibilities, tools and career branches</Link></header>
    {role.roadmap.some(step => step.optional) && <fieldset className="mb-6 border border-slate-200 p-4 dark:border-slate-800"><legend className="px-2 font-semibold">Optional specialization branches</legend>{role.roadmap.filter(step => step.optional).map(step => <label key={step.id} className="flex items-start gap-3 py-2"><input disabled={!ready} type="checkbox" checked={optionalSteps.includes(step.id)} onChange={event => { setOptionalSteps(current => event.target.checked ? [...current, step.id] : current.filter(id => id !== step.id)); setMessage(""); }} className="mt-1" /><span>{step.title}<span className="muted mt-1 block text-sm">{step.project}</span></span></label>)}</fieldset>}
    {ready && <section className="mb-6 border-y border-slate-200 py-4 dark:border-slate-800"><h3 className="font-semibold">Your saved learning progress</h3><p className="mt-2">{completed.length} of {concepts.length} unique concepts are marked Completed or Mastered.</p><p className="muted mt-1 text-sm">This measures saved article status, not project completion or professional qualification.</p>{nextConcept ? <Link className="mt-3 inline-block text-cyan-700 underline dark:text-cyan-300" href={`/knowledge/${getArticle(nextConcept)?.slug ?? nextConcept}`}>Continue with {getArticle(nextConcept)?.title ?? nextConcept}</Link> : <p className="mt-3">All selected concepts are marked learned. Review the milestone assessments and record your project evidence.</p>}{prerequisites.length > 0 && <details className="mt-3"><summary className="cursor-pointer font-medium">{prerequisites.length} related prerequisites not yet marked learned</summary><ul className="mt-2 flex flex-wrap gap-3">{prerequisites.map(id => <li key={id}><Link className="text-cyan-700 underline dark:text-cyan-300" href={`/knowledge/${getArticle(id)?.slug ?? id}`}>{getArticle(id)?.title ?? id}</Link></li>)}</ul></details>}</section>}
    <ol className="space-y-7 border-l-2 border-slate-200 pl-5 dark:border-slate-700">{steps.map((step, index) => <li key={step.id} className="max-w-4xl"><p className="eyebrow">Step {index + 1} · {step.level}{step.optional ? " · Optional" : ""}</p><h3 className="mb-3 mt-1 text-xl font-semibold">{step.title}</h3><ul className="divide-y divide-slate-200 dark:divide-slate-800">{step.concepts.map(id => {
      const article = getArticle(id); const status = ready ? data.learning[id]?.status ?? "Not Started" : "Loading…";
      const missing = getPrerequisites(id).filter(relation => !finished(data.learning[relation.article.id]?.status));
      return <li key={id} className="py-3"><div className="flex flex-wrap items-center justify-between gap-2">{article ? <Link className="text-cyan-700 underline dark:text-cyan-300" href={`/knowledge/${article.slug}`}>{article.title}</Link> : <span>{id} · not yet documented</span>}<span className="muted text-sm">{status}</span></div>{ready && missing.length > 0 && <p className="muted mt-2 text-xs">Review prerequisites: {missing.map((relation, position) => <span key={relation.article.id}>{position > 0 ? ", " : ""}<Link className="underline" href={`/knowledge/${relation.article.slug}`}>{relation.article.title}</Link></span>)}</p>}</li>;
    })}</ul><p className="mt-4 leading-7"><strong>Practical project:</strong> {step.project}</p><p className="muted mt-2 leading-7"><strong>Assessment:</strong> {step.assessment}</p></li>)}</ol><div className="mt-7 flex flex-wrap gap-4 text-sm"><Link className="btn" href="/projects">Record project evidence</Link><Link className="btn" href="/workspace">Open learning workspace</Link></div>
  </div>;
}
