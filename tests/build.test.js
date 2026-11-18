const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');
const { topics } = require('../src/data/topics');
const { validateTopics, buildEdges, normalizeBasePath } = require('../src/data/graph');
const { createServer } = require('../serve');

test('catalog relationships are valid and related edges are unique', () => {
  validateTopics(topics);
  const edges = buildEdges(topics);
  assert.equal(new Set(edges.map(e => `${e.type}:${e.source}:${e.target}`)).size, edges.length);
  assert.throws(() => validateTopics([...topics, topics[0]]));
  assert.throws(() => validateTopics([{ ...topics[0], related: ['missing'] }]));
});

test('base paths normalize project and root deployments and reject URL injection', () => {
  assert.equal(normalizeBasePath('math-graph'), '/math-graph/');
  assert.equal(normalizeBasePath('/math-graph//'), '/math-graph/');
  assert.equal(normalizeBasePath(), '/');
  for (const value of ['../outside', 'https://example.com', '/"bad/']) assert.throws(() => normalizeBasePath(value));
});

test('production build has complete links and removes stale topic pages', () => {
  const root = path.resolve(__dirname, '..');
  fs.mkdirSync(path.join(root, 'docs/topics'), { recursive: true });
  fs.writeFileSync(path.join(root, 'docs/topics/stale.html'), 'stale');
  execFileSync(process.execPath, ['build.js'], { cwd: root, env: { ...process.env, BASE_PATH: '/project' } });
  const html = fs.readFileSync(path.join(root, 'docs/index.html'), 'utf8');
  assert.match(html, /<base href="\/project\/">/);
  assert.ok(!html.includes('polyfill.io'));
  assert.ok(html.indexOf('window.MathJax =') < html.indexOf('id="MathJax-script"'));
  assert.ok(!fs.existsSync(path.join(root, 'docs/topics/stale.html')));
  assert.equal(fs.readdirSync(path.join(root, 'docs/topics')).length, topics.length);
  for (const topic of topics) {
    const page = fs.readFileSync(path.join(root, 'docs/topics', topic.id + '.html'), 'utf8');
    for (const match of page.matchAll(/href="\/project\/topics\/([^"/]+)\.html"/g)) {
      assert.ok(fs.existsSync(path.join(root, 'docs/topics', match[1] + '.html')), match[1]);
    }
  }
});

test('preview server handles query strings, missing files, and encoded traversal', async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'math-preview-'));
  fs.writeFileSync(path.join(root, 'index.html'), '<h1>Preview</h1>');
  const server = createServer(root);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    assert.equal(await (await fetch(base + '/?q=search')).text(), '<h1>Preview</h1>');
    assert.equal((await fetch(base + '/missing')).status, 404);
    assert.equal((await fetch(base + '/..%2Foutside')).status, 403);
    assert.equal((await fetch(base + '/%ZZ')).status, 400);
  } finally {
    await new Promise(resolve => server.close(resolve));
    fs.rmSync(root, { recursive: true, force: true });
  }
});
