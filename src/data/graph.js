const relations = ['prerequisites', 'related', 'applications'];

function validateTopics(topics) {
  if (!Array.isArray(topics) || !topics.length) throw new Error('Topic catalog is empty');
  const ids = new Set();
  for (const topic of topics) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(topic.id) || ids.has(topic.id)) {
      throw new Error(`Invalid or duplicate topic ID: ${topic.id}`);
    }
    ids.add(topic.id);
  }
  for (const topic of topics) {
    for (const key of relations) {
      for (const id of topic[key] || []) {
        if (!ids.has(id) || id === topic.id) throw new Error(`Invalid ${key}: ${topic.id} -> ${id}`);
      }
    }
  }
}

function buildEdges(topics) {
  validateTopics(topics);
  const edges = new Map();
  for (const topic of topics) {
    for (const [field, type] of [['prerequisites', 'prerequisite'], ['related', 'related'], ['applications', 'application']]) {
      for (const id of topic[field] || []) {
        let source = field === 'prerequisites' ? id : topic.id;
        let target = field === 'prerequisites' ? topic.id : id;
        if (type === 'related' && source > target) [source, target] = [target, source];
        edges.set(`${type}:${source}:${target}`, { source, target, type });
      }
    }
  }
  return [...edges.values()];
}

function normalizeBasePath(value = '/') {
  const parts = value.split('/').filter(Boolean);
  if (parts.some(part => !/^[A-Za-z0-9_.-]+$/.test(part) || part === '.' || part === '..')) {
    throw new Error('BASE_PATH must be a URL path containing safe directory names');
  }
  return parts.length ? '/' + parts.join('/') + '/' : '/';
}

module.exports = { validateTopics, buildEdges, normalizeBasePath };
