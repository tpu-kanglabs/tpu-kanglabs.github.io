# Style and Conventions
- Language: TypeScript/ES modules; Astro components with occasional React usage; Tailwind utility-first styling.
- Formatting: prefer 2-space indentation, trailing commas where idiomatic. Keep JSX/Astro markup tidy with grouped Tailwind classes (layout -> spacing -> color -> effects). Avoid inline magic numbers; use config constants when available (e.g., `src/config.ts`).
- Naming: Components PascalCase, helpers camelCase; content filenames kebab-case (e.g., `2025-01-new-paper.mdx`). Keys/props/IDs in camelCase. Site metadata and nav centralized in `src/config.ts`.
- Content: frontmatter must match schemas in `src/content.config.ts`; dates should be valid Date strings; image fields should import assets (astro image loader) rather than raw URLs when possible. Translation hooks use `data-i18n-key` attributes; keep them when modifying copy.
- Assets: reusable images in `src/assets` (processed by astro:assets); static passthrough files in `public/`.