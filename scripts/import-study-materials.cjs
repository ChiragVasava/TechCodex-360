/* Deterministic source ingestion. Never executes code from the supplied lessons. */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const plan = require('../content/study-plan.json');
const catalogPath = path.join(root, 'content/catalog.json');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const sources = new Map();
const manifest = { schemaVersion: 1, documents: [] };
const stale = [];
function save(filename, text) {
  if (process.argv.includes('--check')) {
    const existing = fs.existsSync(filename) ? fs.readFileSync(filename, 'utf8').replace(/\r\n/g, '\n') : '';
    if (existing !== text.replace(/\r\n/g, '\n')) stale.push(path.relative(root, filename));
  } else fs.writeFileSync(filename, text);
}
const clean = text => text.replace(/[*`]/g, '').trim();
for (const document of plan.documents) {
  const text = fs.readFileSync(path.join(root, 'research', document.file), 'utf8').replace(/\r\n/g, '\n');
  const lines = text.split('\n'); sources.set(document.id, lines);
  const boundaries = [{ start: 1, title: 'Orientation and course map', id: 'orientation' }];
  let fence = false;
  lines.forEach((line, i) => {
    if (/^\s*(```|~~~)/.test(line)) fence = !fence;
    if (fence) return;
    const phase = /^## Phase (\d+) — (.+)$/.exec(line);
    const lesson = /^# \*\*(Foundation 0|Lesson [123]|Part [34]) — (.+)\*\*$/.exec(line);
    if (document.id === 'interview' && phase) boundaries.push({ start: i + 1, title: `Phase ${phase[1]} — ${phase[2]}`, id: `phase-${phase[1]}` });
    if (document.id === 'dsa' && lesson) boundaries.push({ start: i + 1, title: clean(line.replace(/^# /, '')), id: lesson[1].toLowerCase().replace(' ', '-') });
  });
  const anchors = Object.fromEntries(lines.flatMap((line, i) => [...line.matchAll(/<a id="([^"]+)"/g)].map(m => [m[1], i + 1])));
  const chapters = boundaries.map((chapter, i) => ({ ...chapter, end: boundaries[i + 1]?.start - 1 || lines.length }));
  manifest.documents.push({ ...document, sha256: crypto.createHash('sha256').update(text).digest('hex'), lineCount: lines.length, bytes: Buffer.byteLength(text), chapters, anchors });
}
function formatRange(document, range) {
  const doc = manifest.documents.find(d => d.id === document);
  let fence = false;
  return sources.get(document).slice(range.start - 1, range.end).map(line => {
    if (/^\s*(```|~~~)/.test(line)) { fence = !fence; return line; }
    if (fence) return line;
    if (/^<a id=/.test(line)) return '';
    // Raw sources remain available; unknown attachments are not rendered as broken images.
    line = line.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => url === 'assets/graphs/complexity-comparison.svg' ? `![${alt}](/diagrams/complexity-comparison.svg)` : `[Source image reference: ${alt}](${url})`);
    line = line.replace(/\]\(#([^)]+)\)/g, (_, anchor) => `](/research?document=${document}&start=${doc.anchors[anchor] || range.start})`);
    line = line.replace(/\[([^\]]+)\]\((?!https?:|\/|#)([^)]+)\)/g, (_, label, attachment) => attachment.startsWith('interactive/') ? `[${/quiz/i.test(label) ? 'Open array practice (original quiz attachment not supplied)' : label}](/practice/arrays)` : `${label} (attachment not supplied; [source context](/research?document=${document}&start=${range.start}))`);
    const h = /^(#{1,6})\s+(.+)$/.exec(line);
    if (h) return `${'#'.repeat(document === 'interview' ? Math.max(2, h[1].length - 1) : Math.max(2, h[1].length))} ${clean(h[2])}`;
    return line.replace(/<br\s*\/?\s*>/gi, ' · ');
  }).join('\n').trim();
}
const marker = '\n\n<!-- imported-study-material -->\n';
for (const item of plan.articles) {
  const ranges = [...item.ranges.map(r => ({ ...r, document: item.document })), ...(item.extraRanges || [])];
  for (const range of ranges) if (!sources.has(range.document) || range.start < 1 || range.end > sources.get(range.document).length || range.end < range.start) throw new Error(`Invalid range for ${item.id}`);
  let article = catalog.articles.find(a => a.id === item.id);
  if (!article) {
    article = { id: item.id, slug: item.id, title: item.title, kind: 'concept', domains: [item.domain], discipline: item.domain === 'core-computing' ? 'Algorithms & programming' : 'Interview study', level: 'Beginner', aliases: item.aliases, summary: `Study ${item.title} through explanations, examples and interview questions from the supplied learning material.`, verification: { status: 'Needs review' }, sources: [], research: [] };
    catalog.articles.push(article);
  }
  article.materialRanges = ranges;
  if (item.level) article.level = item.level;
  if (!article.domains.includes(item.domain)) article.domains.push(item.domain);
  for (const document of new Set(ranges.map(r => r.document))) if (!article.sources.includes(`study-${document}`)) article.sources.push(`study-${document}`);
  const filename = path.join(root, 'content/articles', item.id + '.md');
  const previous = fs.existsSync(filename) ? fs.readFileSync(filename, 'utf8').replace(/\r\n/g, '\n').split(marker)[0] : `# ${item.title}\n`;
  const body = ranges.map(range => `> Imported lesson from [${manifest.documents.find(d => d.id === range.document).title}, lines ${range.start}–${range.end}](/research?document=${range.document}&start=${range.start}&end=${range.end}). Needs review: examples and claims retain their source context; reading does not certify proficiency.\n\n${formatRange(range.document, range)}`).join('\n\n---\n\n');
  const parent = item.domain === 'core-computing' ? (item.id === 'data-structures' ? 'algorithms' : 'data-structures') : item.domain === 'web-development' ? 'software-engineering' : item.domain === 'debugging-quality' ? 'testing' : item.domain === 'cybersecurity' ? 'software-engineering' : 'software-engineering';
  if (parent !== item.id && !catalog.relationships.some(r => r.source === item.id && r.target === parent)) catalog.relationships.push({ source: item.id, target: parent, type: 'related_to', reason: `${item.title} is studied in the supplied ${item.domain === 'core-computing' ? 'programming and data-structure' : 'software engineering'} curriculum; use the linked foundations to place the lesson in context.` });
  save(filename, previous.trimEnd() + marker + '\n' + body + `\n\n## Connected study\n\nContinue with [${parent.replaceAll('-', ' ')}](/knowledge/${parent}) and the [complete study library](/study).\n`);
}
for (const edge of plan.relationships || []) {
  if (!catalog.relationships.some(r => r.source === edge.source && r.target === edge.target && r.type === edge.type)) catalog.relationships.push(edge);
}
for (const doc of manifest.documents) {
  const source = { id: `study-${doc.id}`, title: doc.title, publisher: 'Personal research collection', url: `/research?document=${doc.id}`, type: 'Supplied study notes', claims: ['Source lessons, code examples and interview preparation; not independent verification'], status: 'Needs review' };
  const i = catalog.sources.findIndex(s => s.id === source.id); if (i < 0) catalog.sources.push(source); else catalog.sources[i] = source;
  for (const chapter of doc.chapters) chapter.articles = plan.articles.filter(a => [...a.ranges.map(r => ({...r, document:a.document})), ...(a.extraRanges||[])].some(r => r.document === doc.id && r.start <= chapter.end && r.end >= chapter.start)).map(a => a.id);
}
save(catalogPath, JSON.stringify(catalog, null, 2) + '\n');
save(path.join(root, 'content/study-index.json'), JSON.stringify(manifest, null, 2) + '\n');
if (stale.length) { console.error(`Study import is stale: ${stale.join(', ')}. Review source ranges, then run npm run content:index and commit the results.`); process.exitCode = 1; }
else console.log(`${process.argv.includes('--check') ? 'Validated' : 'Indexed'} every line of ${manifest.documents.length} source documents; connected ${plan.articles.length} canonical articles. Original sources unchanged.`);
