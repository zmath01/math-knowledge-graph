const fs = require('fs');
const path = require('path');

const { topics } = require('./src/data/topics');

const basePath = process.env.BASE_PATH || '/';

const domainNames = {
  calculus: 'Calculus & Analysis',
  'linear-algebra': 'Linear Algebra',
  'probability-statistics': 'Probability & Statistics',
  optimization: 'Optimization',
  'machine-learning': 'Machine Learning / DL / LLM',
  'quantitative-finance': 'Quantitative Finance',
  computing: 'Computing & HPC'
};

const domainColors = {
  calculus: '#2563eb',
  'linear-algebra': '#7c3aed',
  'probability-statistics': '#059669',
  optimization: '#d97706',
  'machine-learning': '#dc2626',
  'quantitative-finance': '#0891b2',
  computing: '#4b5563'
};

const domainClass = d => 'domain-' + d;

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function assetUrl(p) {
  return path.posix.join(basePath, p).replace(/\/{2,}/g, '/');
}

function pageUrl(p) {
  return path.posix.join(basePath, p).replace(/\/{2,}/g, '/');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderSidebar(activeId) {
  const grouped = {};
  for (const t of topics) {
    grouped[t.domain] = grouped[t.domain] || [];
    grouped[t.domain].push(t);
  }

  let html = '<nav><ul>';
  html += `<li><a ${activeId === 'index' ? 'class="active"' : ''} href="${pageUrl('index.html')}">Knowledge Graph</a></li>`;
  html += '</ul>';

  for (const domain of Object.keys(domainNames)) {
    const items = grouped[domain] || [];
    if (!items.length) continue;
    html += `<h3>${escapeHtml(domainNames[domain])}</h3><ul>`;
    for (const t of items) {
      const active = t.id === activeId ? 'class="active"' : '';
      html += `<li><a ${active} href="${pageUrl('topics/' + t.id + '.html')}">${escapeHtml(t.title)}</a></li>`;
    }
    html += '</ul>';
  }
  html += '</nav>';
  return html;
}

function head(title) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} | Math Knowledge Graph</title>
  <base href="${basePath}">
  <link rel="stylesheet" href="${assetUrl('assets/style.css')}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.css">
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  <script>
    window.MathJax = {
      tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']], displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']] },
      svg: { fontCache: 'global' }
    };
  </script>
</head>`;
}

function header() {
  return `<header class="site-header">
  <a class="logo" href="${pageUrl('index.html')}">Math Knowledge Graph</a>
  <div class="search-box">
    <input id="search-input" type="text" placeholder="Search topics, tags, formulas..." autocomplete="off">
    <div id="search-results" class="search-results"></div>
  </div>
</header>`;
}

function footer() {
  return `<footer class="site-footer">
  Content sourced from authoritative English textbooks, papers, and courses. No fabricated data.
</footer>`;
}

function wrap(title, body, activeId, mainClass = '') {
  return `${head(title)}
<body>
${header()}
<div class="layout">
  <aside class="sidebar">
    ${renderSidebar(activeId)}
  </aside>
  <main class="main ${mainClass}">
    ${body}
  </main>
</div>
${footer()}
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
<script src="https://unpkg.com/cytoscape@3.26.0/dist/cytoscape.min.js"></script>
<script src="${assetUrl('assets/app.js')}"></script>
</body>
</html>`;
}

function topicPage(t) {
  const difficultyLabel = t.difficulty.charAt(0).toUpperCase() + t.difficulty.slice(1);

  const keyPoints = t.keyPoints.map(k => `<li>${escapeHtml(k)}</li>`).join('');
  const formulas = t.formulas.map(f => `
    <div class="formula-card">
      <div class="name">${escapeHtml(f.name)}</div>
      <div>$$${f.tex}$$</div>
    </div>
  `).join('');
  const code = t.code.map(c => `
    <div class="code-card">
      <pre class="line-numbers"><code class="language-${c.language}">${escapeHtml(c.snippet)}</code></pre>
    </div>
  `).join('');
  const references = t.references.map(r => `
    <li>
      <div class="ref-title">${escapeHtml(r.title)}</div>
      <div class="ref-source">${escapeHtml(r.author)} · ${escapeHtml(r.source)}${r.url ? ` · <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener">source</a>` : ''}</div>
    </li>
  `).join('');
  const tags = t.tags.map(tag => `<li>${escapeHtml(tag)}</li>`).join('');

  const applicationsSection = (t.applications || []).length ? `
    <div class="section">
      <h2>Applications</h2>
      <ul>
        ${t.applications.map(a => `<li><a href="${pageUrl('topics/' + a + '.html')}">${escapeHtml(a)}</a></li>`).join('')}
      </ul>
    </div>
  ` : '';

  const body = `
    <div class="meta">
      <span class="domain-badge ${domainClass(t.domain)}">${escapeHtml(domainNames[t.domain])}</span>
      <span class="text-secondary">Difficulty: ${escapeHtml(difficultyLabel)}</span>
    </div>
    <h1 class="page-title">${escapeHtml(t.title)}</h1>
    <p>${escapeHtml(t.summary)}</p>

    <div class="section" id="topic-relations"></div>

    <div class="section">
      <h2>Key Points</h2>
      <ul class="key-points">${keyPoints}</ul>
    </div>

    <div class="section">
      <h2>Formulas</h2>
      ${formulas}
    </div>

    <div class="section">
      <h2>Code Example</h2>
      ${code}
    </div>

    ${applicationsSection}

    <div class="section">
      <h2>Tags</h2>
      <ul class="tag-list">${tags}</ul>
    </div>

    <div class="section">
      <h2>References</h2>
      <ul class="reference-list">${references}</ul>
    </div>

    <div class="section">
      <h2>Knowledge Graph</h2>
      <div class="graph-controls">
        <button id="graph-reset">Reset highlight</button>
      </div>
      <div id="topic-graph" class="graph-container"></div>
    </div>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        initGraph('topic-graph', '${t.id}');
        renderTopicRelations(${JSON.stringify(t)});
      });
    </script>
  `;

  return wrap(t.title, body, t.id);
}

function indexPage() {
  const body = `
    <div class="home-intro">
      <h1 class="page-title">Math Knowledge Graph</h1>
      <p>
        A navigable, Wiki-style visualization of essential mathematics for university-level study, machine learning, deep learning, LLMs, and quantitative finance.
        All content is based on authoritative English textbooks, papers, and courses.
      </p>
      <p class="text-secondary">
        Click any node to read the topic. Drag to pan, scroll to zoom.
      </p>
    </div>
    <div class="graph-controls">
      <button id="graph-reset">Reset view</button>
      <label>
        Filter by domain:
        <select id="graph-filter">
          <option value="">All</option>
          ${Object.entries(domainNames).map(([id, name]) => `<option value="${id}">${escapeHtml(name)}</option>`).join('')}
        </select>
      </label>
    </div>
    <div id="main-graph" class="graph-container"></div>
    <div class="legend">
      ${Object.entries(domainNames).map(([id, name]) => `
        <div class="legend-item">
          <span class="legend-color" style="background:${domainColors[id] || '#999'}"></span>
          <span>${escapeHtml(name)}</span>
        </div>
      `).join('')}
    </div>
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        initGraph('main-graph', null);
      });
    </script>
  `;

  return wrap('Math Knowledge Graph', body, 'index', 'full');
}

function build() {
  const outDir = path.join(__dirname, 'docs');
  ensureDir(outDir);
  ensureDir(path.join(outDir, 'assets'));
  ensureDir(path.join(outDir, 'topics'));

  // Generate data.json
  const edges = [];
  for (const t of topics) {
    for (const p of t.prerequisites || []) edges.push({ source: p, target: t.id, type: 'prerequisite' });
    for (const r of t.related || []) edges.push({ source: t.id, target: r, type: 'related' });
    for (const a of t.applications || []) edges.push({ source: t.id, target: a, type: 'application' });
  }
  const data = { nodes: topics, edges };
  fs.writeFileSync(path.join(outDir, 'data.json'), JSON.stringify(data, null, 2));

  // Copy assets
  fs.copyFileSync(path.join(__dirname, 'src', 'assets', 'style.css'), path.join(outDir, 'assets', 'style.css'));
  fs.copyFileSync(path.join(__dirname, 'src', 'assets', 'app.js'), path.join(outDir, 'assets', 'app.js'));

  // Disable Jekyll on GitHub Pages so no files are unexpectedly ignored
  fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

  // Generate index
  fs.writeFileSync(path.join(outDir, 'index.html'), indexPage());

  // Generate topic pages
  for (const t of topics) {
    fs.writeFileSync(path.join(outDir, 'topics', t.id + '.html'), topicPage(t));
  }

  console.log(`Built site with ${topics.length} topics at ${outDir}`);
  console.log(`Base path: ${basePath}`);
}

build();
