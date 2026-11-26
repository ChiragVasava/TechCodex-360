"use client";

import { useState } from "react";
import { roadmap, Status } from "../../content/data";

const tabs: { label: string; value: "all" | Status }[] = [
  { label: "All", value: "all" }, { label: "Experienced / Learned", value: "experienced" },
  { label: "Currently Learning", value: "learning" }, { label: "Will Learn / Planned", value: "planned" },
];

export default function RoadmapPage() {
  const [filter, setFilter] = useState<"all" | Status>("all");
  return (
    <div>
      <div className="mb-6"><p className="label">Preserved original roadmap</p><h1 className="mt-1 text-3xl font-bold">End-to-End Roadmap</h1><p className="notice">These are the original seed statuses and percentages. They are preserved for reference and are separate from your saved learning progress. Use Career roadmaps for connected, editable learning paths.</p></div>
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1">{tabs.map((tab) => <button key={tab.value} onClick={() => setFilter(tab.value)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${filter === tab.value ? "bg-cyan-500 text-white" : "border border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"}`}>{tab.label}</button>)}</div>
      <div className="space-y-5">{roadmap.map((group) => {
        const visible = group.items.filter((item) => filter === "all" || item.status === filter);
        if (!visible.length) return null;
        return <section key={group.domain} className="card p-5 md:p-6"><h2 className="mb-4 text-lg font-bold">{group.domain}</h2><div className="space-y-4">{visible.map((item) => <div key={item.name} className="grid gap-3 md:grid-cols-[180px_1fr] md:items-center"><div><p className="font-semibold">{item.name}</p><p className="mt-1 text-xs capitalize text-slate-400">{item.status.replace("planned", "will learn")}</p></div><div><div className="mb-2 flex items-center justify-between text-xs"><span className="text-slate-500 dark:text-slate-400">{item.note}</span><span className="ml-3 font-bold text-cyan-600">{item.progress}%</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-cyan-500" style={{ width: `${item.progress}%` }}/></div></div></div>)}</div></section>;
      })}</div>
    </div>
  );
}
