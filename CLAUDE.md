# Agent boundaries (handbook repo)

Conventions for AI-assisted work on this site.

## Stack

- Astro 7 + MDX content in `src/content/chapters/`
- Handbook version in `src/data/catalog.ts`
- Planned lessons catalog in same file — shipped chapters override by slug in `src/lib/catalog.ts`

## Allowed

- New/edited chapters in `src/content/chapters/*.mdx`
- Components in `src/components/`, layouts in `src/layouts/`
- Templates in `templates/`
- Styles in `src/styles/global.css`
- Bump `handbookVersion` when shipping chapters

## Forbidden without human review

- Changing `astro.config.mjs` site URL
- Major dependency upgrades in `package.json`
- Deleting shipped chapters without explicit request

## Verify

```bash
npm run build
```

## Chapter shape

Each chapter: frontmatter with `status: shipped`, imports for `Figure` and `Decision`, sections Principle → decision → workflow → tooling → mistakes → artifacts.

See [`templates/agent-boundary.md`](templates/agent-boundary.md) for the full boundary template.
