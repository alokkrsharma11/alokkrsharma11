# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Start dev server (http://localhost:3000)
npm run build    # Production build
npm test         # Run tests (interactive watch mode)
npm test -- --watchAll=false  # Run tests once (CI mode)
```

Deployed to Vercel with Node 16 (`vercel.json`).

## Architecture

Personal portfolio SPA built with React 16 + React Router v5 + Material UI v4.

**Routing** — `App.js` defines all routes. Each route maps to a page component. The Navbar receives the current page `title` derived from a `titles` map keyed on the route path. A fixed Navbar sits at `z-index: 1100`; the scrollable content area sits in a `Box` with `mt: 64px` and `height: calc(100vh - 64px)`.

**Page components** (`src/components/`) — one file per page/section:
- `index.js` — Home page: `<Header>` + `<Particles>` background
- `CareerHighlights.js` — `/summary` route
- `Experience.js`, `Education.js`, `Skills.js`, `Achievements.js`, `Project.js`, `Contact.js`

**Data layer** (`src/data/`) — all content is pure JS data files; no backend/API calls:
- `summary-data.js`, `highlights-data.js`, `projects-data.js`, `skills-data.js`, `achievements-data.js`

**Utilities** (`src/components/`):
- `CustomRating.js` — reusable star/rating display used in Skills
- `PaginatedInfoGrid.js` — paginated grid layout
- `ProjectShowMore.js` — expandable project detail
- `InfoSection.js` — generic info card section
- `Particles.js` — tsParticles background animation on the home page (uses `tsparticles` v3)

**Styling** — SCSS via `sass`, component-level CSS, `App.css` for globals, `components/Modal.css` for modal overrides.

## Content Updates

All portfolio content lives in `src/data/*.js` files — edit these to update displayed information without touching component logic. Images for projects/experience are under `src/images/`.

## Notes

- `Achievements-bkp.js` and `Particles copy.js` are backup/draft files — not imported anywhere.
- MUI v4 is used (not v5); use `@material-ui/*` imports, not `@mui/*`.
- React Router v5 syntax (`<Switch>`, `<Route component={...}>`) — not v6.
