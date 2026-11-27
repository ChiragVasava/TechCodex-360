# My End-to-End Tech & Engineering Codex

TechCodex 360 is a local-first engineering encyclopedia and personal learning workspace built on the existing Next.js application.

## Run locally

Tested with Node.js 24 and npm 11. Install the existing dependencies with `npm ci`, then:

```sh
npm run dev -- --hostname 127.0.0.1
```

Open [the local application](http://127.0.0.1:3000). For a production check:

```sh
npm test
npm run lint
npm run build
npm start -- --hostname 127.0.0.1
```

The build validates content and research indexes before compiling Next.js. Mermaid is loaded on demand when a lesson diagram approaches the viewport; use Node.js 24 for its supported runtime.

With the production server running, check every documented route and missing-page status:

```sh
node scripts/smoke-routes.cjs http://127.0.0.1:3000
```

## Working foundation

- Fourteen expandable domains with discipline trees and explicitly marked documentation gaps.
- 181 canonical articles, including the DSA/interview expansion and ten browser API concepts from the plain-text research. Supplied documents are also readable as 37 study sections. This is not complete coverage of the engineering disciplines.
- 250 typed, directed relationships with reasons, prerequisites, next topics, backlinks, and a bounded graph explorer with filters, zoom, pan, and path highlighting.
- Global search across titles, aliases, article text, domains, disciplines, roles, skills, references, legacy collections, and personal project/device/issue records. Keyboard suggestions support Ctrl/Cmd+K, arrow keys, Enter, and Escape.
- Eleven substantive role profiles, an honest directory of additional titles, six five-level skill curricula, and role roadmaps with saved optional branches.
- Learning status and proficiency stored separately; personal notes, bookmarks, evidence, goals, revision dates, reading positions, history, and domain/role progress.
- Editable projects, model-specific hardware inventory, and troubleshooting records with canonical concept links.
- Source review queue and line-addressable archives for all four research documents. Original source bytes are preserved.
- Seven local SVG illustrations, rendered Mermaid flowcharts, syntax-highlighted examples with supplied outputs, and an interactive array lab with editable inputs and step traces.
- Explicit Documented labels in domain trees; canonical articles are automatically included in all their declared domains. Documentation availability is independent of verification and personal progress.

All imported and starter articles remain **Needs review**. A reference link or access date is not a claim that every statement has been independently verified. Unwritten topics have no fabricated article pages.

## Personal storage and backups

Personal data is stored in **IndexedDB in this browser**, separately from version-controlled knowledge. There is no account, server-side personal database, authentication, or automatic device synchronization.

Browser origin matters: `localhost`, `127.0.0.1`, different ports, and HTTP/HTTPS have separate storage. Use a consistent URL. Browser data clearing can remove the workspace.

Use **About & settings → Export workspace backup** regularly. Import validates the complete versioned JSON before replacing data; the settings screen requires confirmation and recommends exporting first. The import limit is 10 MB. A browser persistence request can reduce eviction risk but is not a backup. Revision reminders are shown inside the workspace; they are not background notifications.

Inventory and troubleshooting pages preserve their original seed records in clearly labeled legacy sections and can import those into editable records. The original roadmap remains at `/roadmap`; its stored percentages are historical seed values, not measurements made by this learning system.

## Content architecture

| Data | Location | Purpose |
| --- | --- | --- |
| Canonical articles, sources, relationship records | [content/catalog.json](content/catalog.json) | Stable IDs and many-to-many metadata |
| Authored explanations | [content/articles/](content/articles/) | One Markdown file per article ID |
| Domain/discipline coverage | [content/taxonomy.ts](content/taxonomy.ts) | Expandable hierarchy including unwritten topics |
| Roles and skill curricula | [content/careers.ts](content/careers.ts) | Profiles, milestones, optional paths, and skill outcomes |
| Research archive | [research/research.md](research/research.md) | Unmodified primary corpus |
| Research coverage manifest | [content/research-index.json](content/research-index.json) | SHA-256, full coverage, and review flags |
| Study import plan | [content/study-plan.json](content/study-plan.json) | Reviewed source ranges, canonical mappings and prerequisite edges |
| Study coverage manifest | [content/study-index.json](content/study-index.json) | Complete chapter coverage and portable content hashes |
| Personal data model | [lib/workspace.ts](lib/workspace.ts) | Validated versioned backup and record schemas |
| Original collections | [content/data.ts](content/data.ts) | Preserved devices, tools, logs, and roadmap |

The graph uses relational-style edge records; it does not require a graph database. A concept belongs to multiple domains through IDs, not copied definitions.

## Add or revise a concept

1. Search the catalog's titles and aliases for an existing canonical concept.
2. Add one metadata record to the catalog with a unique kebab-case ID and identical slug. Set domains, discipline, kind, level, aliases, summary, source IDs, verification state, and precise research line ranges where known. Aliases must name the same concept. Use optional `searchTerms` for related vocabulary; it affects discovery without turning a different, undocumented concept into an alias.
3. Create `content/articles/<id>.md`. Begin with a definition, then explain mechanism, a realistic example, limitations, relevant security/reliability concerns, troubleshooting, and an assessable exercise. Use only relevant sections.
4. Write intentional links such as `[TCP](/knowledge/tcp)`. The reader also supports `[[TCP]]` alias links. Prefer explicit canonical links for review and backlink validation.
5. Add meaningful relationship records with source, target, type, and reason. For `prerequisite_of`, source is the prerequisite. Reverse displays derive from that record.
6. Add primary reference candidates with publisher, URL, type, and claim scope. Record `accessedAt` separately from `verifiedAt`. Do not label an article Verified without checking its claims and setting `lastVerified`.
7. Add the topic to an appropriate taxonomy branch and relevant role/skill curricula if applicable.
8. Run `npm run content:index`, `npm test`, and `npm run build`.

The checks reject duplicate IDs/aliases, missing files, dangling relationships, broken explicit article links, invalid provenance, isolated concepts, prerequisite cycles, and stale indexes. They validate structure, not scientific correctness.

## Research ingestion

The complete original corpus was reviewed before architecture work. It contains repeated answers, contradictory claims, malformed exported code, uncertain device names, and unverified current-event/legal statements.

The research viewer preserves every line and displays review flags. The schema-v2 manifest hashes UTF-8 text after only CRLF-to-LF normalization, so Windows and Linux/Vercel checkouts agree. Its byte count uses the same normalized text. All other characters, whitespace, and terminal newlines remain significant; the source file is never rewritten. The viewer also displays the current checkout's raw byte hash separately.

After intentional edits or additions, review affected line ranges before running `npm run content:index`; existing article ranges do not automatically relocate. Commit the updated manifest with the source changes. Builds check the committed manifest rather than silently regenerating it. Original quiz counters and purchase suggestions are never imported as actual personal progress or device ownership.

Full concept extraction is still ongoing. The preserved archive is not presented as fully verified or fully migrated content.

## Next work

See [the implementation checklist and prioritized backlog](docs/IMPLEMENTATION.md), [workspace design](docs/workspace.md), and [career content design](docs/careers.md).

Priority: verify source claims, expand missing concepts in the six clusters, complete the Express/serialization/privacy/hardware research extraction, and deepen the remaining role profiles. Rich media uploads, personalized assessments, automated source freshness checks, and authenticated cross-device storage are future work.

## Supplied courses and visual practice

Open `/study` for DSA, interview and browser research sections, or `/practice/arrays` for the interactive lab. Search includes the imported article bodies, chapter titles and practice entry. The original documents remain available at `/research?document=dsa` and `/research?document=interview`.

The importer reads every line and preserves complete chapter coverage. It maps selected technical passages into 140 canonical articles; project stories, employer-specific interview advice, source quizzes and progress counters retain their original context in the chapter reader. They are not converted into personal projects, assessment scores or verified facts. Original external illustrations are links to source references. Missing downloadable attachments are labeled; new local diagrams and the array lab replace selected visual examples.

When editing the supplied documents, review all affected source ranges in the study plan, run `npm run content:index`, inspect the changed articles and commit the source plus generated files. The build uses check-only ingestion and rejects stale source hashes, mappings, generated excerpts and indexes. CRLF and LF checkouts produce identical results. Put editorial additions before the `<!-- imported-study-material -->` marker; the imported portion is replaced on regeneration.

The fixed JavaScript array implementations are tested. The supplied Java/Python/backend examples are preserved as study material with expected outputs; they have not all been executed or independently verified. The article reader does not execute supplied code. Further claim review and fine-grained concept extraction remain ongoing.

## Browser research notes

[research/research.txt](research/research.txt) is preserved as the `browser-notes` document. Its nine explicit section boundaries and correction notes are in the study plan. `/study` links to the complete transcript sections; `/research?document=browser-notes` provides exact source lines and integrity details. Plain text is escaped and never interpreted as HTML or executed.

Ten curated articles explain CSSOM, DOM selection, Shadow DOM, Web Components, custom elements, templates/slots, local storage, session storage, IndexedDB and autofill. They include worked examples, expected outputs, diagrams where useful and MDN/web.dev references. Existing DOM, rendering, storage, cookies and DevTools articles connect the new material. Corrections address rendering-stage shortcuts, closed-root security, opener session-storage copies, autofilled input visibility and the incomplete IndexedDB wrapper. Article status remains Needs review.

A study-plan entry with `curated: true` maintains provenance and chapter links without replacing its authored Markdown. Use this for corrected synthesis of source material. Plain-text documents can declare ordered `sections` starting at line 1; coverage extends through the final source line. Reindexing still validates the full source hash, boundaries and generated manifest.
