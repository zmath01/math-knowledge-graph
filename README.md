# Math Knowledge Graph

A deployable, Wiki-style visualization of essential university mathematics covering calculus, linear algebra, probability & statistics, optimization, machine learning / deep learning / LLMs, quantitative finance, and high-performance computing.

All content is written in English and sourced from authoritative textbooks, papers, and courses.

## Features

- **Knowledge graph**: interactive Cytoscape.js graph with prerequisite, related, and application edges.
- **Wiki-style pages**: one page per topic with key points, formulas, code examples, tags, and references.
- **Math rendering**: TeX/MathJax for formulas.
- **Code highlighting**: Prism.js with line numbers and Python syntax support.
- **Search**: live search across titles, tags, and summaries.
- **Responsive**: works on desktop and mobile.
- **GitHub Pages ready**: static HTML/CSS/JS output in `docs/`.

## Project Structure

```
.
├── src/
│   ├── data/topics.js       # Knowledge graph nodes, edges, and content
│   ├── assets/
│   │   ├── style.css        # Minimalist stylesheet
│   │   └── app.js           # Graph, search, and page interactions
├── docs/                    # Generated static site (deploy to GitHub Pages)
├── build.js                 # Node.js build script
└── README.md
```

## Build

Requires Node.js (managed runtime preferred).

```bash
node build.js
```

To build for a GitHub Pages project site (repo served under a subpath), set `BASE_PATH`:

```bash
# Example: repo named "math-knowledge-graph"
BASE_PATH=/math-knowledge-graph/ node build.js
```

## Deploy to GitHub Pages

### Option 1: Deploy from `docs/` folder on main branch

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose `main` branch and `/docs` folder, then click **Save**.

### Option 2: GitHub Actions

Enable the included workflow in `.github/workflows/deploy.yml`. It builds the site and deploys it to GitHub Pages on every push to `main`.

## Local Preview

```bash
# Quick static server
cd docs
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Content Sources

Content is based on authoritative references including:

- *Calculus* and *Calculus on Manifolds* by Michael Spivak
- *Introduction to Linear Algebra* by Gilbert Strang
- *Linear Algebra Done Right* by Sheldon Axler
- *Probability and Measure* by Patrick Billingsley
- *All of Statistics* by Larry Wasserman
- *Convex Optimization* by Stephen Boyd and Lieven Vandenberghe
- *Numerical Optimization* by Jorge Nocedal and Stephen J. Wright
- *Deep Learning* by Goodfellow, Bengio, and Courville
- *Attention Is All You Need* by Vaswani et al.
- *Stochastic Calculus for Finance* by Steven E. Shreve
- *Portfolio Selection* by Harry Markowitz
- *Numerical Linear Algebra* by Trefethen and Bau
- *Fourier Analysis* by Stein and Shakarchi

See each topic page for specific references.

## License

[MIT](./LICENSE)
