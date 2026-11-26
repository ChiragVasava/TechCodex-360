export const levels = ["Beginner", "Intermediate", "Advanced", "Expert", "Mastery"] as const;
export type Level = typeof levels[number];
export type VerificationStatus = "Verified" | "Needs review" | "Outdated" | "Conflicting sources" | "Incomplete" | "Personal notes";
export type Article = {
  id: string; slug: string; title: string; kind: "concept" | "technology" | "protocol" | "tool" | "technique";
  domains: string[]; discipline: string; level: Level; aliases: string[]; summary: string;
  verification: { status: VerificationStatus; lastVerified?: string }; sources: string[]; research: { start: number; end: number }[];
};
export const relationshipTypes = ["prerequisite_of", "depends_on", "part_of", "subtopic_of", "related_to", "used_by", "implemented_by", "built_with", "alternative_to", "specialization_of", "application_of", "contrasts_with", "replaced_by", "extends", "requires", "commonly_used_with", "tested_by", "secured_by"] as const;
export type Relationship = { source: string; target: string; type: typeof relationshipTypes[number]; reason: string };
export type Source = { id: string; title: string; publisher: string; url: string; type: string; claims: string[]; status: VerificationStatus; verifiedAt?: string };
export type Catalog = { articles: Article[]; relationships: Relationship[]; sources: Source[] };
