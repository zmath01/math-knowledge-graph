const domainColors = {
  calculus: "#2563eb",
  "linear-algebra": "#7c3aed",
  "probability-statistics": "#059669",
  optimization: "#d97706",
  "machine-learning": "#dc2626",
  "quantitative-finance": "#0891b2",
  computing: "#4b5563"
};

const domainNames = {
  calculus: "Calculus & Analysis",
  "linear-algebra": "Linear Algebra",
  "probability-statistics": "Probability & Statistics",
  optimization: "Optimization",
  "machine-learning": "Machine Learning / DL / LLM",
  "quantitative-finance": "Quantitative Finance",
  computing: "Computing & HPC"
};

const edgeColor = { prerequisite: "#adb5bd", related: "#dee2e6", application: "#6c757d" };

let cy = null;
let graphData = { nodes: [], edges: [] };

function getBasePath() {
  const base = document.querySelector('base')?.getAttribute('href') || '/';
  return base.endsWith('/') ? base : base + '/';
}

function topicUrl(id) {
  return getBasePath() + 'topics/' + id + '.html';
}

async function loadGraphData() {
  const url = getBasePath() + 'data.json';
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to load graph data');
  return await res.json();
}

function initGraph(containerId, currentId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  loadGraphData().then(data => {
    graphData = data;
    const elements = [
      ...data.nodes.map(n => ({ data: { id: n.id, label: n.title, domain: n.domain, difficulty: n.difficulty } })),
      ...data.edges.map((e, i) => ({ data: { id: 'e' + i, source: e.source, target: e.target, type: e.type } }))
    ];

    cy = cytoscape({
      container: container,
      elements: elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': n => domainColors[n.data('domain')] || '#333',
            'label': 'data(label)',
            'color': '#212529',
            'font-size': '12px',
            'text-valign': 'bottom',
            'text-halign': 'center',
            'text-margin-y': 4,
            'width': n => n.data('difficulty') === 'introductory' ? 16 : n.data('difficulty') === 'intermediate' ? 22 : 28,
            'height': n => n.data('difficulty') === 'introductory' ? 16 : n.data('difficulty') === 'intermediate' ? 22 : 28,
            'border-width': 1,
            'border-color': '#fff'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 1.5,
            'line-color': e => edgeColor[e.data('type')] || '#999',
            'target-arrow-color': e => edgeColor[e.data('type')] || '#999',
            'target-arrow-shape': e => e.data('type') === 'prerequisite' ? 'triangle' : 'none',
            'curve-style': 'bezier',
            'arrow-scale': 0.8
          }
        },
        {
          selector: '.highlighted',
          style: {
            'background-color': '#000',
            'border-width': 3,
            'border-color': '#000'
          }
        },
        {
          selector: '.dimmed',
          style: {
            'opacity': 0.2
          }
        }
      ],
      layout: {
        name: 'cose',
        animate: true,
        animationDuration: 500,
        randomize: false,
        componentSpacing: 80,
        nodeRepulsion: 400000,
        edgeElasticity: 100,
        nestingFactor: 5,
        gravity: 1,
        numIter: 1000,
        initialTemp: 200,
        coolingFactor: 0.95,
        minTemp: 1.0
      }
    });

    cy.on('tap', 'node', function(evt) {
      const nodeId = evt.target.id();
      window.location.href = topicUrl(nodeId);
    });

    if (currentId) {
      highlightNode(currentId);
    }
  }).catch(err => {
    container.innerHTML = '<p class="text-secondary">Unable to load knowledge graph. Please check the console.</p>';
    console.error(err);
  });
}

function highlightNode(nodeId) {
  if (!cy) return;
  const node = cy.getElementById(nodeId);
  if (!node.length) return;

  const predecessors = node.predecessors();
  const successors = node.successors();
  const connected = predecessors.union(successors).union(node);

  cy.elements().addClass('dimmed');
  connected.removeClass('dimmed');
  node.addClass('highlighted');
}

function resetGraph() {
  if (!cy) return;
  cy.elements().removeClass('dimmed').removeClass('highlighted');
  cy.layout({ name: 'cose', animate: true, animationDuration: 500 }).run();
}

function initSearch() {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  loadGraphData().then(data => {
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        results.classList.remove('active');
        return;
      }
      const matches = data.nodes.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.tags.some(t => t.toLowerCase().includes(q)) ||
        n.summary.toLowerCase().includes(q)
      ).slice(0, 8);

      results.innerHTML = matches.map(n => {
        const href = topicUrl(n.id);
        return `<a href="${href}">
          <div class="match-title">${escapeHtml(n.title)}</div>
          <div class="match-domain">${domainNames[n.domain] || n.domain}</div>
        </a>`;
      }).join('') || '<div style="padding:0.6rem 0.9rem;color:var(--text-secondary)">No matches</div>';
      results.classList.add('active');
    });

    document.addEventListener('click', e => {
      if (!input.contains(e.target) && !results.contains(e.target)) {
        results.classList.remove('active');
      }
    });
  }).catch(err => console.error(err));
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function setupGraphControls() {
  const resetBtn = document.getElementById('graph-reset');
  if (resetBtn) resetBtn.addEventListener('click', resetGraph);

  const filterSelect = document.getElementById('graph-filter');
  if (filterSelect) {
    filterSelect.addEventListener('change', () => {
      const domain = filterSelect.value;
      if (!cy) return;
      if (!domain) {
        cy.elements().removeClass('dimmed');
      } else {
        cy.elements().addClass('dimmed');
        cy.nodes().filter(n => n.data('domain') === domain).removeClass('dimmed');
        cy.edges().filter(e => !e.source().hasClass('dimmed') && !e.target().hasClass('dimmed')).removeClass('dimmed');
      }
    });
  }
}

function renderTopicRelations(topic) {
  const container = document.getElementById('topic-relations');
  if (!container) return;

  const renderList = (items, title, type) => {
    if (!items.length) return '';
    const links = items.map(id => {
      return `<li><a href="${topicUrl(id)}">${escapeHtml(id)}</a></li>`;
    }).join('');
    return `<div class="relation-box">
      <h4>${escapeHtml(title)}</h4>
      <ul>${links}</ul>
    </div>`;
  };

  container.innerHTML = renderList(topic.prerequisites || [], 'Prerequisites', 'prerequisite') +
    renderList(topic.related || [], 'Related Topics', 'related') +
    renderList(topic.applications || [], 'Applications', 'application');
}

function initMathAndCode() {
  if (window.MathJax) {
    MathJax.typesetPromise && MathJax.typesetPromise();
  }
  if (window.Prism) {
    Prism.highlightAll();
  }
}

function updateActiveSidebar() {
  const path = window.location.pathname;
  const match = path.match(/topics\/([^/]+)\.html/);
  if (!match) return;
  const id = match[1];
  const link = document.querySelector(`.sidebar a[href*="${id}"]`);
  if (link) link.classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
  initSearch();
  setupGraphControls();
  updateActiveSidebar();
  initMathAndCode();
});
