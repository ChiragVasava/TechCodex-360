import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { domains } from "../../content/domains";

export default function DomainsPage() {
  return <div><div className="mb-6"><p className="label">Knowledge base</p><h1 className="mt-1 text-3xl font-bold">Engineering Domains</h1></div><div className="grid gap-4 md:grid-cols-2">{domains.map((domain) => <Link key={domain.slug} href={`/domains/${domain.slug}`} className="card group p-6"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-300"><BookOpen size={21}/></div><h2 className="text-xl font-bold">{domain.title}</h2><p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{domain.description}</p><div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm dark:border-slate-800"><span className="text-cyan-600 dark:text-cyan-400">{domain.short}</span><ArrowRight className="text-slate-300 group-hover:text-cyan-500" size={18}/></div></Link>)}</div></div>;
}
