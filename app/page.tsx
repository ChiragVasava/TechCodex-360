import Link from "next/link";
import { ArrowRight, Cpu, Database, HardDrive, Network, Shield, Terminal, WandSparkles, Globe2, Smartphone } from "lucide-react";
import { roadmap, devices, software, logs } from "../content/data";

const domains = [
  ["Core Computing", "core-computing", Network],
  ["Software Development", "software-web-app", Terminal],
  ["Web Development", "software-web-app", Globe2],
  ["App Development", "software-web-app", Smartphone],
  ["Cloud & DevOps", "cloud-devops", HardDrive],
  ["Debugging", "core-computing", WandSparkles],
  ["IoT & Hardware", "iot-hardware", Cpu],
  ["AI & Data", "ai-ml-data", Database],
  ["Cybersecurity", "cybersecurity", Shield],
] as const;

export default function HomePage() {
  const items = roadmap.flatMap((group) => group.items);
  const stats = [
    ["Total Skills Mastered", items.filter((item) => item.status === "experienced").length, "skills"],
    ["Currently Learning", items.filter((item) => item.status === "learning").length, "skills"],
    ["Planned Roles", items.filter((item) => item.status === "planned").length, "roles"],
    ["Logged Devices", devices.length, "devices"],
    ["Debugging Entries", logs.length, "entries"],
  ];
  return (
    <div className="space-y-8">
      <div className="card relative overflow-hidden p-6 md:p-8">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-cyan-500/10 to-transparent"/>
        <p className="label mb-2">Personal Engineering Codex</p>
        <h1 className="max-w-3xl text-2xl font-bold md:text-4xl">TechCodex 360: <span className="text-cyan-600 dark:text-cyan-400">My End-to-End Tech &amp; Engineering Codex</span></h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">{software.length} tools cataloged · {devices.length} devices tracked · {items.length} roadmap skills mapped</p>
      </div>
      <section>
        <div className="mb-4 flex items-end justify-between"><div><p className="label">At a glance</p><h2 className="mt-1 text-xl font-bold">Quick stats</h2></div></div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">{stats.map(([label, value, unit]) => <div key={label as string} className="card p-5"><p className="text-sm text-slate-500 dark:text-slate-400">{label}</p><div className="mt-3 flex items-baseline gap-2"><strong className="text-3xl">{value}</strong><span className="text-xs text-slate-400">{unit}</span></div></div>)}</div>
      </section>
      <section>
        <div className="mb-4"><p className="label">Explore</p><h2 className="mt-1 text-xl font-bold">Engineering domains</h2></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{domains.map(([title, slug, Icon]) => <Link key={title} href={`/domains/${slug}`} className="card group flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300 dark:hover:border-cyan-700"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-300"><Icon size={21}/></span><span className="flex-1 font-semibold">{title}</span><ArrowRight className="text-slate-300 transition group-hover:text-cyan-500" size={18}/></Link>)}</div>
      </section>
    </div>
  );
}
