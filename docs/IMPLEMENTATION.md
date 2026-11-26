# Engineering Codex implementation plan

## Audit and boundaries

The original repository is Next.js 15 App Router, React 19, strict TypeScript, Tailwind, next-themes, and Markdown rendering. There is no backend, authentication, database, or persistence of personal records. Six Markdown domain notes, 15 seed roadmap entries, four seed devices, five tools, and three seed logs already exist. Preserve their URLs and content; label seed progress rather than treating it as observed learning.

The complete 14,672-line `research/research.md` was reviewed in contiguous assignments: 1–2700, 2701–4800, 4801–9800, 9801–14672. The original remains untouched. Source material is evidence for migration, not automatically verified technical truth. Repeated conversations, invalid exported code, uncertain product names, legal claims, purchase advice, and copied quiz state require explicit review.

## Architecture decisions

- Retain the existing stack and local-first operation. No new runtime dependency is necessary.
- Version-controlled article metadata, Markdown bodies, sources, and directed relationship records form the public corpus. Each concept has one stable ID and `/knowledge/:id` URL; domain membership is many-to-many.
- A separate expandable taxonomy includes undocumented subjects. These are coverage gaps, never counted as articles.
- Relationship records carry a type and a reason. Reverse views, prerequisites, next topics, graph edges, and search expansion derive from those records.
- Curated role profiles and skill curricula reference canonical knowledge IDs. Job expectations are illustrative and vary by employer.
- Personal notes, status, proficiency, projects, inventory, and troubleshooting live in IndexedDB on this browser. Validated export/import supports backup and transfer. No account or cross-device synchronization is implied.
- Research is browsable by source ranges; a generated manifest records full-file hash, contiguous coverage, and review flags. Raw research text is not executable content.
- Render bounded graph neighborhoods rather than the whole catalog. Preserve an accessible textual edge list alongside the visual graph.

## Working checklist

- [x] Audit all original application/content/config files and read the complete research corpus.
- [x] Confirm baseline TypeScript check passes.
- [x] Define architecture, ownership, source preservation, and canonical contracts.
- [x] Establish expandable domain/discipline/topic taxonomy: 14 domains, including documentation gaps.
- [x] Author 52 representative interconnected articles across six clusters; full cluster coverage remains below.
- [x] Encyclopedia reader, TOC, backlinks, prerequisites, sources, provenance.
- [x] Global search with synonyms, article text, filters, history, keyboard suggestions.
- [x] Bounded graph with filtering, zoom, pan, selection, prerequisite paths.
- [x] Eleven role profiles, six skill curricula, linked career roadmaps.
- [x] Personal learning workspace with separate status/proficiency and backup.
- [x] Projects, inventory, troubleshooting CRUD and concept connections.
- [x] Research manifest, original source reader, review queue, ingestion validation.
- [ ] Validate content integrity, important interactions, persistence, build, and responsive layout.
- [ ] Update setup/contribution documentation and record precise validation results.

## Prioritized expansion backlog

1. Verify individual claims against primary sources; attach verified dates only after checking. Review contradictory source notes before migration.
2. Expand the six clusters with substantive articles for all requested terms; avoid generating empty pages. Complete Express/middleware, privacy, RF/RFID, and hardware tool research clusters. Extend the initial serialization and recommendation-system articles into their constituent concepts.
3. Expand all requested career titles into researched profiles and subject-specific skill curricula; incorporate optional specialization branches.
4. Expand mathematics, mobile, cloud, electronics, robotics, graphics, quantum, scientific computing, management, and other taxonomy branches.
5. Add article-specific assessments and executable examples, richer architecture diagrams, and source claim-level comparison workflows.
6. Consider an authenticated relational persistence service only when multi-device/multi-user operation is required. Preserve portable local backups and design an explicit migration.
7. Add structured cross-links between personal projects and inventory, media attachments, broader skill search, per-article assessments, and an editor with duplicate suggestions. Current personal records link canonical concepts, while related project fields and media URLs are plain text.

## Scope of the foundation

The 75 relationship records connect all 52 articles; 44 reference candidates carry claim scopes and review status. None of the articles is asserted to be independently verified. Full research preservation and contiguous source coverage are complete; full concept extraction and technical verification are not. Taxonomy entries and role-directory titles without authored profiles are explicitly labeled rather than routed to empty pages.

Personal persistence is intentionally local to a browser origin. JSON backup and restore are implemented; authentication, remote synchronization, uploads, background reminder notifications, and automatic fact-checking are not implemented. Authoring uses version-controlled metadata and Markdown, with build-time integrity validation.

This session delivers a coherent working foundation, not a claim that the entire engineering encyclopedia is complete.
