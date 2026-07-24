# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Sushan Shrestha (Full Stack Developer). A single-page React 19 + TypeScript app built with Vite 7 and Material UI (MUI) v7, deployed to GitHub Pages.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Type-check (tsc -b) then bundle to dist/
npm run lint      # ESLint
npm run preview   # Serve the production build locally
```

There is no test suite.

## Environment

The contact form posts to Formspree. `VITE_FORMSPREE_ENDPOINT` must be set in `.env` locally (see `.env.example`); in CI it is injected from the `FORMSPREE_ENDPOINT` repository secret. Without it, the contact form's fetch fails at runtime — the build still succeeds.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`: `npm ci` → `npm run build` (Node 22) → deploy `dist/` to GitHub Pages. There is no PR/CI check — `master` deploys directly, so run `npm run build` locally before pushing. Vite `base` is `"/"` in `vite.config.ts`; change it if the Pages URL ever moves to a sub-path.

## Architecture

Single page, no routing, no state library. `src/main.tsx` wraps `App` in MUI's `ThemeProvider` + `CssBaseline`; `App.tsx` stacks the section components in order:

`Navbar` → `Hero` → `About` → `Experience` → `Projects` → `Contact` → `Footer` (all in `src/components/`)

- **Navigation** is anchor-based: each section root has an `id` (`hero`, `about`, `experience`, `projects`, `contact`) and `Navbar` links to `#id`. New sections need both the `id` and a Navbar button.
- **Content is hardcoded** in const arrays at the top of each component (`skills` in About, `experiences` in Experience, `projects` in Projects). Contact details are inline in `Contact.tsx` and `Hero.tsx`. Outbound profile links (GitHub, LinkedIn, resume) live in `src/links.ts`. To update portfolio content, edit those arrays/strings — there is no CMS or data file.
- **Theming** lives entirely in `src/theme.ts`: dark mode, signature green primary (`#00E676`), purple secondary (`#7C4DFF`), Outfit for headings / Inter for body, plus component style overrides (Button, AppBar, Card, Chip). Prefer theme tokens (`primary.main`, `background.paper`) and the `sx` prop over hardcoded colors; styling is MUI `sx` throughout, not CSS files (`index.css` is minimal).
- Project images live in `src/assets/` and are imported directly into components so Vite bundles them.

## Resume

`public/resume.pdf` (served at `/resume.pdf`, linked from the navbar) is generated from `resume/resume.html`. To update it, edit the HTML and re-render:

```bash
google-chrome --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=public/resume.pdf resume/resume.html
```

Keep it to one A4 page — check the page count after edits.

## Known Quirks

- Type-checking happens only via `npm run build` (`tsc -b`); there is no standalone typecheck script.
- Pending content: Trackify's project card reuses `ecommerce.png` as a stand-in screenshot.
