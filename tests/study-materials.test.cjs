require('../scripts/load-typescript.cjs');
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const crypto = require('node:crypto');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { parseArrayInput, traceArray } = require('../lib/array-lessons.ts');
const { taxonomy } = require('../content/taxonomy.ts');
const { articles, resolveConcept } = require('../lib/knowledge.ts');
const { searchCodex } = require('../lib/search.ts');
const manifest = require('../content/study-index.json');

test('new concepts rank by canonical identity and chapters and practice are searchable', () => {
  assert.equal(searchCodex('second-largest')[0].id, 'second-largest');
  assert.ok(searchCodex('DSA').some(r => r.type === 'Study chapter'));
  assert.ok(searchCodex('array visualization').some(r => r.href === '/practice/arrays'));
});

test('complete study chapters cover both immutable source documents without gaps', () => {
  for (const doc of manifest.documents) {
    const text = fs.readFileSync(`research/${doc.file}`, 'utf8').replace(/\r\n/g, '\n');
    assert.equal(crypto.createHash('sha256').update(text).digest('hex'), doc.sha256);
    assert.equal(text.split('\n').length, doc.lineCount);
    let next = 1;
    for (const chapter of doc.chapters) {
      assert.equal(chapter.start, next); assert.ok(chapter.end >= chapter.start);
      for (const id of chapter.articles) assert.ok(articles.find(a => a.id === id));
      next = chapter.end + 1;
    }
    assert.equal(next, doc.lineCount + 1);
  }
  assert.equal(manifest.documents.find(d => d.id === 'interview').chapters.length, 21);
});

test('study import is current and --check never rewrites source or generated files', () => {
  const files = [...manifest.documents.map(d => `research/${d.file}`), 'content/catalog.json', 'content/study-index.json', 'content/articles/array-min-max.md'];
  const before = files.map(f => fs.readFileSync(f));
  const result = spawnSync(process.execPath, ['scripts/import-study-materials.cjs', '--check'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  files.forEach((f, i) => assert.deepEqual(fs.readFileSync(f), before[i]));
});

test('study check is portable across checkout line endings and rejects stale sources', t => {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'codex-study-check-'));
  t.after(() => {
    assert.equal(path.dirname(path.resolve(fixture)), path.resolve(os.tmpdir()));
    assert.ok(path.basename(fixture).startsWith('codex-study-check-'));
    fs.rmSync(fixture, { recursive: true, force: true });
  });
  for (const dir of ['scripts', 'content/articles', 'research']) fs.mkdirSync(path.join(fixture, dir), { recursive: true });
  const files = ['scripts/import-study-materials.cjs', 'content/catalog.json', 'content/study-index.json', 'content/study-plan.json', ...manifest.documents.map(d => `research/${d.file}`), ...articles.map(a => `content/articles/${a.id}.md`)];
  for (const file of files) fs.copyFileSync(file, path.join(fixture, file));
  const check = () => spawnSync(process.execPath, [path.join(fixture, 'scripts/import-study-materials.cjs'), '--check'], { encoding:'utf8' });
  for (const ending of ['\n', '\r\n']) {
    for (const file of files.filter(f => !f.startsWith('scripts/'))) {
      const target = path.join(fixture, file);
      fs.writeFileSync(target, fs.readFileSync(target,'utf8').replace(/\r\n/g,'\n').replace(/\n/g, ending));
    }
    const result = check(); assert.equal(result.status, 0, result.stderr);
  }
  fs.appendFileSync(path.join(fixture,'research/DSA.md'), '\nChanged source');
  assert.equal(check().status, 1);
});

test('all documented canonical articles are reachable from each declared domain', () => {
  for (const article of articles) for (const id of article.domains) {
    const domain = taxonomy.find(d => d.id === id);
    assert.ok(domain.disciplines.some(b => b.topics.some(t => resolveConcept(t)?.id === article.id)), `${id}: ${article.id}`);
  }
});

test('array input accepts empty and signed integers while rejecting invalid and excessive input', () => {
  assert.deepEqual(parseArrayInput(''), []);
  assert.deepEqual(parseArrayInput(' -3, 0, 12 '), [-3, 0, 12]);
  for (const input of ['1,,2', '1.5', 'NaN', 'Infinity', '1e3', '1000001', Array(17).fill('1').join(',')]) assert.throws(() => parseArrayInput(input));
});

test('min/max traces match the result for negative, repeated, singleton and empty arrays', () => {
  for (const input of [[-8, -3, -4], [4, 4, 4], [0], [12, -3, 0, 7]]) {
    assert.equal(traceArray('minmax', input).at(-1).output, `Minimum = ${Math.min(...input)}; maximum = ${Math.max(...input)}`);
  }
  assert.match(traceArray('minmax', []).at(-1).output, /^Error:/);
});

test('second-largest traces enforce distinctness without a zero sentinel', () => {
  for (const [input, result] of [[[9,9,7,1], '7'], [[-2,-8,-3], '-3'], [[0,-1], '-1'], [[4,4], 'missing'], [[], 'missing']]) {
    assert.ok(traceArray('second', input).at(-1).output.endsWith(`second = ${result}`));
  }
});

test('reversal produces independent snapshots and never mutates the input', () => {
  for (const input of [[], [2], [1,2], [3,8,-1,0,5], [1,2,3,4]]) {
    const before = [...input], steps = traceArray('reverse', input);
    assert.deepEqual(steps.at(-1).values, [...before].reverse());
    assert.deepEqual(steps[0].values, before); assert.deepEqual(input, before);
    assert.equal(steps.length, Math.floor(input.length / 2) + 2);
  }
});
