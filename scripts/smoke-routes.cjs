/* Run against an already running production build: node scripts/smoke-routes.cjs http://127.0.0.1:3001 */
require('./load-typescript.cjs');
const { articles } = require('../content/catalog.json');
const { taxonomy, legacyDomainMap } = require('../content/taxonomy.ts');
const { roles, skillProfiles } = require('../content/careers.ts');
const { documents } = require('../content/study-index.json');
const base = process.argv[2] || 'http://127.0.0.1:3000';
const routes = [...new Set([
  '/', '/domains', '/knowledge', '/roles', '/skills', '/roadmaps', '/graph', '/search',
  '/study', '/practice/arrays',
  ...documents.flatMap(d => [`/research?document=${d.id}`, ...d.chapters.map(c => `/study/${d.id}/${c.id}`)]),
  '/workspace', '/projects', '/iot', '/logs', '/references', '/settings', '/research', '/software', '/roadmap',
  ...articles.map(a => `/knowledge/${a.id}`), ...taxonomy.map(d => `/domains/${d.id}`),
  ...Object.keys(legacyDomainMap).map(id => `/domains/${id}`),
  ...roles.map(r => `/roles/${r.id}`), ...skillProfiles.map(s => `/skills/${s.id}`),
  '/research?start=14600&end=14673', '/search?q=HID', '/graph?concept=dns'
])];
(async () => {
  const failures = []; let next = 0;
  await Promise.all(Array.from({length: 4}, async () => {
    while (next < routes.length) {
      const route = routes[next++];
      try {
        const response = await fetch(new URL(route, base)); const html = await response.text();
        if (response.status !== 200 || !html.includes('<h1') || html.includes('>This page could not load.</h1>')) failures.push(`${route}: ${response.status}`);
      } catch (error) { failures.push(`${route}: ${error.message}`); }
    }
  }));
  for (const route of ['/knowledge/not-a-concept', '/roles/not-a-role', '/skills/not-a-skill', '/domains/not-a-domain']) {
    const response = await fetch(new URL(route, base));
    if (response.status !== 404) failures.push(`${route}: expected 404, got ${response.status}`);
  }
  if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
  else console.log(`Passed ${routes.length} page requests and 4 missing-page checks.`);
})();
