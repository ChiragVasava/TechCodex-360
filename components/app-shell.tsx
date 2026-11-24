"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ChevronLeft, ChevronRight, Cpu, Database, Globe2, HardDrive, Home, Moon, Route, Search, Sun, Terminal, Wrench, X } from "lucide-react";
import { roadmap, devices, software, logs } from "../content/data";
import { domains } from "../content/domains";

const nav = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/roadmap", label: "Roadmap", icon: Route },
  { href: "/domains", label: "Knowledge Base", icon: Database },
  { href: "/iot", label: "IoT Inventory", icon: Cpu },
  { href: "/software", label: "Software", icon: Wrench },
  { href: "/logs", label: "Debug Logs", icon: Terminal },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const globalItems = [
    ...roadmap.flatMap((group) => group.items.map((item) => ({ title: item.name, type: "Roadmap", href: "/roadmap" }))),
    ...devices.map((item) => ({ title: item.name, type: "IoT", href: "/iot" })),
    ...software.map((item) => ({ title: item.name, type: "Software", href: "/software" })),
    ...logs.map((item) => ({ title: item.issue, type: "Log", href: "/logs" })),
    ...domains.map((item) => ({ title: item.title, type: "Domain", href: `/domains/${item.slug}` })),
  ];
  const results = query.trim() ? globalItems.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())).slice(0, 7) : [];

  return (
    <div className="min-h-screen">
      {mobileOpen && <button aria-label="Close menu" className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden" onClick={() => setMobileOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200 bg-white transition-all dark:border-slate-800 dark:bg-slate-950 ${collapsed ? "w-[72px]" : "w-[248px]"} ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex h-16 items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2 overflow-hidden font-bold">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cyan-500 text-white"><Globe2 size={18} /></span>
            {!collapsed && <span className="whitespace-nowrap">TechCodex <span className="text-cyan-500">360</span></span>}
          </Link>
          <button className="lg:hidden" onClick={() => setMobileOpen(false)}><X size={20} /></button>
        </div>
        <nav className="mt-3 space-y-1 px-3">
          {nav.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return <Link key={href} href={href} title={collapsed ? label : undefined} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active ? "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300" : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900"}`}><Icon size={19} className="shrink-0" />{!collapsed && label}</Link>;
          })}
        </nav>
        <button onClick={() => setCollapsed(!collapsed)} className="absolute -right-3 top-20 hidden h-6 w-6 place-items-center rounded-full border border-slate-200 bg-white shadow lg:grid dark:border-slate-700 dark:bg-slate-900">{collapsed ? <ChevronRight size={14}/> : <ChevronLeft size={14}/>}</button>
        <div className="mt-auto p-3">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900">
            {mounted && (theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>)} {!collapsed && "Theme"} 
          </button>
        </div>
      </aside>
      <main className={`min-h-screen transition-all ${collapsed ? "lg:pl-[72px]" : "lg:pl-[248px]"}`}>
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/90 px-4 backdrop-blur md:px-7 dark:border-slate-800 dark:bg-slate-950/90">
          <button className="lg:hidden" onClick={() => setMobileOpen(true)}><ChevronRight size={21}/></button>
          <div className="relative max-w-xl flex-1">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={17}/>
            <input className="input pl-9" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search everything..." aria-label="Global search"/>
            {query && <div className="absolute left-0 right-0 top-12 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900">
              {results.length ? results.map((item) => <Link key={`${item.type}-${item.title}`} href={item.href} onClick={() => setQuery("")} className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"><span className="text-sm">{item.title}</span><span className="text-xs text-slate-400">{item.type}</span></Link>) : <p className="px-3 py-2 text-sm text-slate-500">No matching entries</p>}
            </div>}
          </div>
        </header>
        <div className="p-4 md:p-7 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
