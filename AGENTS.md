# Repository guidance

## Commands

- Use Yarn Classic (the repo has a v1 `yarn.lock`): `yarn install --frozen-lockfile`.
- `yarn dev` starts Next.js on port 3000; production requires `yarn build` before `yarn start`.
- Lint: `yarn lint`. Tests: `yarn test --runInBand`. One suite: `yarn test tests/Pagination.test.jsx --runInBand`; add `-t 'trigger next'` to select a test.
- There is no typecheck script; this is a JavaScript/JSX project.

## App wiring

- Next.js 12.1 / React 17 with the **Pages Router**, not the App Router. Planets live at `/` (`pages/index.jsx`); other routes are `/people`, `/starships`, and `/vehicles`.
- `pages/_app.jsx` owns the shared layout, navigation, global SCSS, route-change NProgress handlers, and SWR's JSON fetcher.
- Pages own search/page state (and starship sort state); resource containers call `hooks/use*.js` and render shared `Card`/`Pagination` components. Hooks fetch `https://swapi.dev/api/` directly from the client. There is no `pages/api` backend despite the boilerplate README.
- Containers consume SWAPI's `{ results, count, next, previous }` response and assume 10 items per page. Starship sorting is client-side and only sorts the current page, via `components/StarshipsContainer/sortStarships.js` and `utils/sort.js`.

## Conventions and gotchas

- Root-relative imports (`components/...`, `hooks/...`, `styles/...`) come from `jsconfig.json`'s `baseUrl: "."`; Jest also resolves from the repo root. Component folders expose their implementation through `index.js`.
- Component styles are `styles/*.module.scss`; global styles and shared variables are in `styles/globals.scss` and `styles/variables.scss`. Formatting uses single quotes and an 80-column print width; ESLint extends Airbnb + React + Prettier, not Next's default preset.
- Card images are local `public/<type>/<name>.png`: names are lowercased, spaces become `_`, and `/` becomes `-`. `ImageFallback` uses `next/image` and falls back to `/<type>/default.png`.
- `.babelrc` uses `next/babel`; Jest uses `babel-jest`, jsdom, and `jest.setup.js` for jest-dom matchers.
- Tests import `render` from `tests/test-utils.jsx`, which wraps SWR with `dedupingInterval: 0`. This wrapper does **not** provide the app fetcher or isolate the SWR cache; account for that when adding data-fetching tests.
- Jest maps SCSS modules to `identity-obj-proxy`, but its non-module stylesheet and static-image mappings point to absent `__mocks__/styleMock.js` and `__mocks__/fileMock.js`. Add those mocks if new tests exercise those imports.
- Baseline: all 3 suites / 10 tests pass. Card tests emit existing invalid-`data` PropTypes and missing-list-key warnings; `yarn lint` passes with a Next ESLint-plugin detection warning.
