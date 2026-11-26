import type { Metadata } from "next";
import Link from "next/link";
import { roles } from "../../content/careers";
import { RoadmapBuilder } from "./roadmap-builder";
export const metadata: Metadata = { title: "Career Roadmaps | TechCodex", description: "Choose a role, explore prerequisites and optional branches, and follow saved learning progress." };
export default async function RoadmapsPage({ searchParams }: { searchParams: Promise<{ role?: string }> }) {
  const requested = (await searchParams).role;
  const initialRole = roles.some(role => role.id === requested) ? requested : undefined;
  return <main><p className="eyebrow">Career roadmap builder</p><h1 className="page-title">Choose a role. Follow the connections.</h1><p className="muted mt-3 max-w-3xl leading-7">Build a learning path from documented role milestones. Required stages appear in order; choose optional branches for your intended work. Progress uses your saved article statuses and never changes your proficiency automatically.</p><p className="mt-3 text-sm"><Link className="underline" href="/roadmap">Open the original roadmap</Link><span className="muted"> · Preserved separately from this personal learning path.</span></p><RoadmapBuilder key={initialRole ?? "saved-roadmap"} initialRole={initialRole} /></main>;
}
