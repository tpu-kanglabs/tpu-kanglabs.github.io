# Task Completion Checklist
- Run `pnpm lint` to ensure Astro/type/content checks pass.
- Run `pnpm build` to confirm production build and Pagefind indexing succeed.
- For visual/content changes, open `pnpm preview` and spot-check key pages (home, projects, team) and search behavior.
- Update `src/config.ts` or content collections if navigation or metadata changed; verify affected pages.
- Document schema changes or breaking content migrations in PR/commit notes.