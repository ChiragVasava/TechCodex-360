const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync, execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');

test('research integrity ignores only CRLF versus LF, preserving meaningful edits', async () => {
  const { researchFingerprint } = await import('../lib/research-integrity.mjs');
  const text = '# Research\n\nI²C → USB  \n';
  const fingerprint = value => researchFingerprint(Buffer.from(value));
  assert.deepEqual(fingerprint(text), fingerprint(text.replaceAll('\n', '\r\n')));
  for (const changed of [text.replace('USB', 'UART'), text.trimEnd(), text + '\n', text.replace('  ', ' '), text.replace('I²C', 'I2C')]) {
    assert.notEqual(fingerprint(text).sha256, fingerprint(changed).sha256);
  }
});

test('committed Git source and working checkout match the portable manifest', async () => {
  const { researchFingerprint } = await import('../lib/research-integrity.mjs');
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'content/research-index.json'), 'utf8'));
  const expected = { sha256: manifest.sha256, bytes: manifest.bytes, lineCount: manifest.lineCount };
  assert.equal(manifest.schemaVersion, 2);
  assert.deepEqual(researchFingerprint(fs.readFileSync(path.join(root, 'research/research.md'))), expected);
  // A Git-less release archive still runs the fixture test below.
  if (fs.existsSync(path.join(root, '.git'))) {
    assert.deepEqual(researchFingerprint(execFileSync('git', ['show', 'HEAD:research/research.md'], { cwd: root, maxBuffer: 4 * 1024 * 1024 })), expected);
  }
});

test('index check accepts LF and CRLF checkouts but rejects stale text and metadata', t => {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'codex-research-integrity-'));
  t.after(() => fs.rmSync(fixture, { recursive: true, force: true }));
  for (const dir of ['scripts', 'lib', 'research', 'content']) fs.mkdirSync(path.join(fixture, dir));
  for (const file of ['scripts/index-research.mjs', 'lib/research-integrity.mjs', 'content/research-index.json']) fs.copyFileSync(path.join(root, file), path.join(fixture, file));
  const source = path.join(fixture, 'research/research.md');
  const manifest = path.join(fixture, 'content/research-index.json');
  const text = fs.readFileSync(path.join(root, 'research/research.md'), 'utf8').replace(/\r\n/g, '\n');
  const check = () => spawnSync(process.execPath, [path.join(fixture, 'scripts/index-research.mjs'), '--check'], { encoding: 'utf8' });
  for (const content of [text, text.replaceAll('\n', '\r\n')]) {
    fs.writeFileSync(source, content);
    const result = check(); assert.equal(result.status, 0, result.stderr);
    assert.equal(fs.readFileSync(source, 'utf8'), content, 'check must never rewrite source');
  }
  fs.writeFileSync(source, text + 'Changed content');
  assert.equal(check().status, 1);
  fs.writeFileSync(source, text);
  const stale = JSON.parse(fs.readFileSync(manifest, 'utf8')); stale.sections[0].title = 'Stale title';
  fs.writeFileSync(manifest, JSON.stringify(stale));
  assert.equal(check().status, 1);
});
