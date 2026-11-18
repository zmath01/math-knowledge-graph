# Validation record

Local environment: Node.js 22.22.1, npm 9.2.0, CPython 3.14.4, and headless
Chromium through Playwright. Baselines inspected:

- `math-knowledge-graph`: `515451bafa15c248b368da2ef9e099925bbd1f36`
- `math-graph`: `36b091cb1c4beeb94aed9eade64846f3c4da6a21`

## Checks

| Project | Unit tests | Build | Types | Lint / syntax |
|---|---:|---|---|---|
| math-knowledge-graph | 4 passed | pass | JavaScript project | Node syntax + diff checks pass |
| math-graph | 8 passed | pass | forced TypeScript build passes | ESLint passes without warnings |
| math-merged | 11 passed | pass | forced TypeScript build passes | ESLint passes without warnings |

The tests validate catalog references and unique IDs, complete cycle-safe trees,
relationship deduplication and direction, search behavior, TeX parsing, Python
snippet syntax, generated static links, deployment base paths, stale output
cleanup, and preview-server request handling. Merge tests account for every one
of the 125 source records, all 25 legacy aliases, and canonical content uniqueness.
The merged catalog has 99 topics, 358 formulas, and 125 code blocks in 13 domains.
The original 42-topic and 83-topic catalogs retain their own identities.

Browser checks against production builds pass for:

- Search and topic navigation, missing topics, and legacy-ID resolution.
- Formula rendering and formula updates after navigating between topics. External
  network access was blocked for both React apps; bundled MathJax still rendered.
- Full mindmap expansion/collapse: all 83 or 99 topics appear exactly once.
  Same-depth node spacing is checked after transitions settle.
- Repeated force-graph navigation, canvas cleanup, repeated relative zoom,
  and domain filtering. Related links have no misleading direction arrows.
- Desktop (1440x900) and mobile (390x844) layouts without horizontal page overflow.
- The static site's real CDN-backed graph and formula rendering, search links,
  shared data fetch, and reset preserving the selected domain.

No browser JavaScript exceptions were observed. Screenshots and machine-readable
browser results are saved in the local output directory's `review/` folder.
A high-confidence credential scan found no token or private-key patterns.

## Measured changes

The original mindmap contained only 16 unique topics out of 83, with the linear
algebra and probability roots duplicated. The corrected tree and merged tree
include every topic exactly once, even when prerequisite graphs contain cycles
or a domain has no prerequisite-free topic.

Related-edge deduplication reduces the static graph from 223 to 212 typed edges
and the original React graph from 518 to 488. Directed prerequisite and
application relationships are retained as distinct types.

The React build's primary entry JavaScript decreases from **1,146.75 kB to about
185.49 kB** before compression (approximately **83.8% smaller**). The merged app's
entry is about **185.52 kB**. These are Vite's emitted entry sizes, not a claim
about total transferred bytes or all-view runtime speed. Graphs, the topic
catalog, and code highlighting load in separate route chunks. The standalone
MathJax bundle is loaded only on detail pages and is included separately in the
build, with its license. The home page does not request it.

The static site previously fetched its catalog separately for graph and search;
browser resource timing now records **one** `data.json` request per page.

## Reproduction

For either React repository, use Node.js 22 and run:

```sh
npm ci
npm test
npm run lint
npm run typecheck -- --force
npm run build
npm run preview
```

For the static repository, run `npm test` and `npm run build`. Use
`BASE_PATH=/math-knowledge-graph/ npm run build` for its project-site deployment.
Run `git diff --check` before committing. CI includes unit tests and production
builds; the React workflows also run ESLint.

## Limits

These checks do not constitute a formal proof audit of all mathematical content.
TeX parsing verifies renderability, and Python AST checks verify syntax rather
than executing every optional scientific, GPU, MPI, or distributed dependency.
See [CORRECTIONS.md](CORRECTIONS.md) for concrete mathematical fixes and sources.

The new merged Pages deployment is manual and was not deployed as part of this
review. GitHub Actions results are separate from the local checks and must not
be inferred from a successful push. The original static site's runtime still
uses CDNs; its source build is dependency-free. Built `dist/` and `docs/` folders
are local artifacts and are intentionally excluded from source commits.
