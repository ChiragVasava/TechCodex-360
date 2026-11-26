import type { Metadata } from "next";
import { roleVariability } from "../../content/careers";
import { RoleDirectory } from "./directory";
export const metadata: Metadata = { title: "Engineering Roles | TechCodex", description: "Engineering responsibilities, foundational knowledge, career branches and practical learning milestones." };
export default function RolesPage() {
  return <main><p className="eyebrow">Career & engineering roles encyclopedia</p><h1 className="page-title">Understand the work behind the title</h1><p className="muted mt-3 max-w-3xl leading-7">Explore responsibilities, required knowledge, tools and practical roadmaps. Every documented profile connects to canonical concepts and distinguishes foundational skills from optional specializations.</p><details className="mt-4 max-w-3xl text-sm"><summary className="cursor-pointer font-medium">How to read these profiles</summary><p className="muted mt-2 leading-6">{roleVariability}</p></details><RoleDirectory /></main>;
}
