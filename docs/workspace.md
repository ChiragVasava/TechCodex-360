# Personal workspace

The Codex intentionally uses a browser-local personal workspace. Shared articles, sources and relationships remain version-controlled content. Personal learning state and records never change those articles.

## Storage contract

- IndexedDB database: `techcodex-personal-workspace`, version 1; store: `workspace`; key: `current`.
- [Workspace model](../lib/workspace.ts) validates versioned backups and every write. Unknown properties, invalid statuses, impossible dates, malformed URLs, duplicate record IDs, invalid concept IDs, oversized collections and unsupported schema versions are rejected.
- [Storage adapter](../lib/workspace-storage.ts) commits each read/modify/write in one transaction. Concurrent tab updates read the latest stored state. BroadcastChannel and focus refresh keep open views current.
- The UI reports storage failures and offers retry; a failed save is never reported as successful.
- A validated backup can replace corrupted stored state. Replacement is atomic, and validation finishes before the write transaction.
- Browser storage belongs to an origin and profile. Changing port, hostname, browser, profile or device opens a separate workspace. Private browsing, browser eviction and clearing site data may remove it. Settings offers an explicit persistent-storage request and JSON export/restore.
- There is no account, cloud synchronization or backend for personal state. This is an intentional local-only design, not an authentication mechanism for a shared service.

## Learning

Status and proficiency are independent. Opening an article records a visit, not completion. The article learning panel saves notes, bookmarks, exercises/evidence, learning goals and revision dates. Reading position is debounced and can be resumed explicitly. Revision reminders are shown in the workspace; no background notification scheduler is implemented.

Only explicit `Completed` or `Mastered` statuses count toward completed articles. Domain totals cover tracked articles, not the entire discipline. Prerequisite warnings and suggested next topics derive from typed knowledge relationships. Role roadmaps use the same canonical learning state. The saved roadmap stores a role ID and selected optional step IDs.

## Projects, inventory and troubleshooting

[Reusable record forms](../components/workspace-records.tsx) provide create, inspect, edit, search/filter and confirmed deletion for all three record kinds. Their field definitions live in the shared model. Record links use canonical concept IDs; unknown IDs remain visible as not yet documented without producing broken links.

Inventory records keep exact model/variant, manufacturer, power, voltage, interfaces, protocols, pinout, firmware, drivers, documentation, purchase, ownership, location and notes. The application does not infer specifications from a family name. Troubleshooting records separate symptoms, investigation, cause, solution, environment, versions, commands and logs. Projects capture architecture, skills, tools, challenges and lessons.

Screenshots and diagrams are represented by URLs or textual descriptions in this foundation. Binary media uploads and a diagram editor are backlog items. Inventory-to-project associations currently use recorded project names/IDs; canonical concept relationships are clickable, but projects do not yet have their own route per record.

Original inventory and troubleshooting arrays remain intact in [legacy content](../content/data.ts). Collapsible original-entry sections preserve their filters and values. A deliberate import copies an entry into the browser workspace, flags it for review, and avoids repeated copies by stable legacy IDs. It does not certify ownership or model specifications. The original DHT22 wording is retained with a clarification about its protocol.

## Backup format and recovery

Settings exports a JSON document with `schemaVersion`, `updatedAt`, `learning`, `visits`, `records`, `roadmap`, and `history`. The most recent 500 explicit changes are retained. Backup import is capped at 10 MB and validates the entire document before showing its record counts. The user then explicitly chooses replacement. Export the current workspace before replacing it when both versions matter.

Backups preserve unknown canonical concept IDs for future content additions. They are rendered as undocumented references until matching articles exist. No HTML from notes is executed. Dedicated external URL fields accept only HTTP(S); freeform notes, logs and media descriptions render as text.

## Verification and remaining work

Run the workspace validation tests with `node --test tests/workspace.test.cjs`. The tests compile the pure TypeScript model in memory and exercise backup validation without adding dependencies.

Browser validation should cover saving an article, refreshing the page, creating/editing/deleting each record kind, malformed backup rejection, successful export/restore, blocked storage, mobile form layout, cross-tab changes and reading-position restoration. Backlog: optional encrypted backups, media attachments, linked project routes, conflict-aware same-record editing, and an explicit future schema migration policy.
