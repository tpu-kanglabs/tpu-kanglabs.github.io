# Repository Guidelines

## Project Structure & Module Organization
- Astro 5 + TypeScript static site focused on a Projects collection.
- Key paths: `src/pages` (routes), `src/components` (shared UI like `ProjectCard.astro`), `src/layouts` (page shells), `src/config.ts` (site metadata/nav), `src/content/projects` (project Markdown/MDX), `src/assets` (images processed by `astro:assets`), `public/` (static passthrough).
- OG generation lives in `src/pages/og/[...slug].png.ts`; image fonts in `public/fonts/`.

## Build, Test, and Development Commands
- `pnpm install` — install deps (Node >= 22.12, pnpm lock present).
- `pnpm dev` — Astro dev server with HMR.
- `pnpm lint` — `astro check` for type/content/schema issues.
- `pnpm build` — production build.
- `pnpm preview` — serve built output from `dist/`.

## Coding Style & Naming Conventions
- TypeScript/ESM; Astro components with Tailwind utility classes. Prefer 2-space indentation.
- Components PascalCase; helpers camelCase; content files kebab-case (e.g., `ub-moji.mdx`).
- Use `data-i18n-key` when adding user-facing text to match existing patterns.
- Assets for optimization should be imported from `src/assets`; static passthrough goes in `public/`.

## Testing Guidelines
- No automated test suite. Run `pnpm lint` and `pnpm build` before PRs; spot-check pages via `pnpm preview` (home/projects) and ensure external project links work.

## Commit & Pull Request Guidelines
- Commit messages: concise, imperative (e.g., `Add project card component`, `Fix OG path handling`). No enforced prefix beyond clarity.
- PRs should describe scope, affected pages, and any content schema changes. Include before/after screenshots for visual changes when feasible and link related issues.

## Content & Localization Notes
- Projects are sourced from `src/content/projects/*.{md,mdx}` with fields: `title`, `description`, `link` (external), optional `cover`, `order`.
- Keep featured/home and `/projects` cards in sync by using the shared `ProjectCard.astro`.
- If adding copy, add matching i18n keys in `src/i18n/ui.ts` and reuse existing keys (`section.selectedPubs`, `section.viewAll`, `project.learnMore`, etc.) where possible.
