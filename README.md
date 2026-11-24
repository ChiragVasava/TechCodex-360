# TechCodex 360

**My End-to-End Tech & Engineering Codex** is a responsive personal knowledge base for engineering domains, career roadmaps, IoT inventory, software references, and troubleshooting logs.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm start
```

## Add new entries

Content is intentionally local and version controlled.

- **Roadmap, devices, software, and logs:** edit `content/data.ts`.
- **Domain pages:** add or update Markdown files in `content/domains/`. The filename must match the domain slug in `content/domains.ts`.
- **Reusable formats:** copy a template from `content/_templates/`.

### Add a log

Add an object to the `logs` array in `content/data.ts`:

```typescript
{
  date: "2026-11-24",
  category: "Networking",
  device: "Lab gateway",
  issue: "Brief issue summary",
  cause: "Confirmed root cause",
  solution: "Fix and prevention steps"
}
```

### Add a device or software tool

Follow the existing objects in `devices` or `software` in `content/data.ts`, then commit the change. Markdown domain pages support tables and fenced code blocks with syntax highlighting.
