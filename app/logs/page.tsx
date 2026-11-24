"use client";
import { useState } from "react";
import { logs } from "../../content/data";

export default function LogsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(logs.map((item) => item.category)))];
  const visible = logs.filter((item) => (category === "All" || item.category === category) && `${item.date} ${item.category} ${item.device} ${item.issue} ${item.cause} ${item.solution}`.toLowerCase().includes(query.toLowerCase()));
  return <div><div className="mb-6"><p className="label">Troubleshooting archive</p><h1 className="mt-1 text-3xl font-bold">System &amp; Debugging Logs</h1></div><div className="mb-5 flex flex-col gap-3 sm:flex-row"><input className="input flex-1" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search issues, devices, or fixes..."/><select className="input sm:w-44" value={category} onChange={(e) => setCategory(e.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></div><div className="space-y-3">{visible.map((item) => <article key={`${item.date}-${item.issue}`} className="card p-5"><div className="grid gap-4 md:grid-cols-[115px_180px_1fr]"><div><p className="label">Date</p><p className="mt-1 text-sm font-semibold">{item.date}</p></div><div><p className="label">Category / Device</p><p className="mt-1 text-sm font-semibold">{item.category}</p><p className="text-sm text-slate-500">{item.device}</p></div><div><p className="font-semibold">{item.issue}</p><dl className="mt-3 grid gap-2 text-sm md:grid-cols-2"><div><dt className="label">Root cause</dt><dd className="mt-1 text-slate-600 dark:text-slate-300">{item.cause}</dd></div><div><dt className="label">Solution / Fix</dt><dd className="mt-1 text-slate-600 dark:text-slate-300">{item.solution}</dd></div></dl></div></div></article>)}</div>{!visible.length && <p className="card p-8 text-center text-slate-500">No matching logs.</p>}</div>;
}
