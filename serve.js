const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

function createServer(root = path.join(__dirname, 'docs')) {
  root = path.resolve(root);
  return http.createServer((request, response) => {
    let file;
    try {
      const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      if (pathname.includes('\0')) throw new Error('Invalid path');
      file = path.resolve(root, '.' + pathname);
      if (file !== root && !file.startsWith(root + path.sep)) {
        response.writeHead(403).end('Forbidden');
        return;
      }
      if (pathname.endsWith('/')) file = path.join(file, 'index.html');
    } catch {
      response.writeHead(400).end('Invalid URL');
      return;
    }
    fs.readFile(file, (error, data) => {
      if (error) { response.writeHead(404).end('Not found'); return; }
      const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json' };
      response.writeHead(200, { 'Content-Type': (types[path.extname(file)] || 'text/plain') + '; charset=utf-8' });
      response.end(data);
    });
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT || 8080);
  createServer().listen(port, '127.0.0.1', () => console.log(`http://127.0.0.1:${port}`));
}
module.exports = { createServer };
