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
- [x] Validate content integrity, important interactions, persistence, build, and responsive layout.
- [x] Update setup/contribution documentation and record precise validation results.

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

## Validation record — 2026-11-26

- `npm test`: 20 passing tests covering canonical links and source ranges, prerequisite direction, bounded graph traversal, search aliases versus related terms, Windows line endings in article contents, backlinks, career/skill integrity, and personal-data validation.
- `npm run lint`: TypeScript passes. VS Code diagnostics report no errors.
- `npm run build`: production build succeeds with 106 generated static pages. Content validation confirms 52 articles, 75 relationships, 44 source candidates, and 14 domains; article search and research indexes are current.
- `node scripts/smoke-routes.cjs http://127.0.0.1:3001`: 107 successful page requests and four correct HTTP 404 responses. Missing canonical routes are constrained to the generated catalog.
- Browser checks: saved learning status, independent proficiency, notes, and bookmarks survive reload; projects/devices/issues can be created, edited, reloaded, and deleted with cancellation/confirmation; career selection persists. Temporary personal QA records were removed.
- Search suggestions respond to arrow navigation and Enter. Graph checks cover highlighted paths, selected-node navigation, zoom, domain filtering, and prerequisite-only filtering. Article contents resolve to existing headings; USB has an actual inbound article link.
- Backup checks: the export handler produces versioned JSON and a dated filename; malformed JSON is rejected, and validated JSON restores through the settings UI. The integrated browser did not expose a native download event, so export content was captured at the Blob/download boundary; an operating-system save-dialog check remains manual.
- Responsive checks at 375, 768, and 1440 CSS pixels found no document overflow on the article reader. Mobile menu dismissal restores focus; desktop uses the three-column reader. Both themes were inspected. This is not a complete accessibility or cross-browser certification.
- Fixed a graph hydration mismatch by rendering each SVG title as one text value; fresh development and production page loads with graph interaction produced no console or page errors. The production route sweep also passed after this fix.
- The research source remains byte-identical: SHA-256 `f6dfced4a580b610dad7fa341ec370dab4f00027fbf072b87b6d872e4931f2db`, 574,696 bytes. The viewer counts the terminal empty display line, yielding 14,673 displayed lines.

These checks establish the working foundation's behavior. They do not establish factual verification of the whole corpus, full research migration, browser eviction guarantees, or completion of the expansion backlog.

## Deployment follow-up — portable research integrity

Vercel's Linux checkout exposed a manifest mismatch: Git stores the research source with LF endings, while the original Windows checkout uses CRLF. Schema v1 compared raw bytes, incorrectly treating checkout conversion as a content edit.

Schema v2 hashes UTF-8 text after only CRLF-to-LF normalization and records the corresponding byte count. The indexer and research viewer share the same implementation. Raw checkout hashes remain visible separately; the original source is not rewritten. Historical raw-byte values above describe the original Windows checkout, not a portable content identity.

Regression checks cover LF and CRLF fixtures, the committed Git blob, unchanged source bytes after checking, and rejection of real content edits or stale section metadata. All 23 tests and TypeScript checks pass. Commit the regenerated manifest together with the shared integrity helper, viewer, and indexer changes; deployments continue to check rather than regenerate the manifest.

The production build passes with schema v2. The production research route returns HTTP 200 and reports matching normalized integrity without a stale-manifest warning. A new Vercel deployment has not been triggered from this workspace.

## Study-material expansion — 2026-11-27

- [x] Preserve both supplied documents byte-for-byte and expose every line through source archives and 28 readable chapters (7 DSA sections and 21 interview sections including orientation).
- [x] Map source passages into 129 canonical articles: 119 new topics and 10 enriched existing articles. Total corpus: 171 articles, 232 relationships, 48 reference records, 14 domains.
- [x] Keep domain coverage automatic for canonical articles; show Documented separately from verification and personal learning status. Planned topics remain explicitly undocumented.
- [x] Add article-body, study-chapter and practice search, with canonical IDs ranked as exact matches.
- [x] Add seven local SVG illustrations, on-demand Mermaid rendering, highlighted code and supplied outputs. Keep original remote illustrations as source references; label absent downloadable attachments.
- [x] Add an interactive three-algorithm array lab with editable inputs, traces, final outputs, edge cases and a quantitative comparison graph with an accessible data table.
- [x] Preserve source ranges and Needs review status. Do not import interview stories, readiness counters or quiz counters as personal records or achievements.
- [x] Make ingestion deterministic and check-only during builds. Detect stale source hashes, chapter metadata, generated excerpts and search data. Keep LF/CRLF portability.
- [x] Document the regeneration procedure and safe editorial area before the import marker.

Validation: 32 tests pass, including complete chapter coverage, source immutability, LF/CRLF fixtures, stale-source rejection, domain coverage, search and algorithm edge cases. Production compilation and type checking pass. The initial production route sweep passed 258 page requests and four missing-page responses. Browser interaction checks confirmed array outputs, loaded SVG images, a rendered Mermaid diagram, domain coverage labels, search suggestions and article layouts at 375/768/1440 pixels without document overflow.

Remaining content work, in order:

1. Review imported claims against current primary sources, especially authentication, cloud, framework versions and employer-specific advice. No imported article has been marked independently Verified.
2. Break compound study articles into finer canonical concepts where justified; preserve a single identity and contextual links. The complete chapters preserve material that has not yet received a dedicated concept article.
3. Execute and assess the supplied Java/Python/framework examples in appropriate environments. The current automated execution coverage is for the fixed JavaScript array lab, not all supplied code.
4. Expand per-concept illustrations and assessments beyond the initial array and application workflows; original quiz attachments were not supplied.
5. Continue original research extraction, missing engineering clusters and role profiles from the backlog above. This content expansion does not finish the full master vision.

For future source edits, review line ranges in [the study plan](../content/study-plan.json), then run `npm run content:index`, tests and build. Commit the sources and generated outputs together. Do not put manual edits below the import marker, where regeneration replaces extracted material.
