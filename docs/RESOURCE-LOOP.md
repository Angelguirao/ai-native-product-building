# Resource loop

The handbook is **v1.2 structure, living content**. Chapters improve as resources are captured in brain, compiled, and spun out to footnotes.

## Flow

```
External resource (course, book, essay, repo)
    ↓
brain/raw/repos/ or raw/articles/     ← thin capture (synthesis, not dumps)
    ↓
npm run compile                       ← sources + thought drafts + routing
    ↓
npm run review approve                ← promote concepts
    ↓
wiki/thought/ (handbook_spinout)     ← sharp principles → footnotes
    ↓
src/data/resources.ts                 ← public links + pattern cards only
    ↓
Chapter MDX revision                  ← principle/decision/workflow updates
```

## Publication firewall

**What ships on the public site** (this repo + Vercel):

- Chapter MDX with anonymous composite scenarios
- Curated external links (books, courses, essays)
- Footnotes spin-out URLs on angelguirao.com/wiki
- Pattern cards — composite shapes, not named products

**What stays private** (brain, PersonalOS, local notes):

- `brain/raw/*` paths and synthesis drafts
- Named product case studies (Holzen, glucose-rhythm, PersonalOS internals)
- Private repo URLs and `os.angelguirao.com` references

Enforced in CI:

```bash
npm run check:public
```

Fails if forbidden strings appear under `src/`, `public/`, or `templates/`.

## Where things live

| Layer | Path | Role |
|-------|------|------|
| Raw capture | `brain/raw/repos/*.md` | URL, chapter map, your notes (private) |
| Practice synthesis | `brain/raw/notes/practice/ai-native-product-building/` | Per-resource + named case studies (private) |
| Footnotes spin-out | `brain/wiki/thought/*.md` | `publish: true`, `handbook_spinout: true` |
| Chapter resources | `src/data/resources.ts` | Curated public links per chapter |
| Pattern cards | `resources.ts` → `caseStudies` | Anonymous composites for the public site |
| Shipped chapter | `src/content/chapters/*.mdx` | Revised when synthesis is sharp |

## Adding a resource

1. Create `brain/raw/repos/<slug>.md` (see `the-builder-pm.md` template).
2. Set `handbook_chapters: [...]` in frontmatter.
3. Add entry to `sharedResources` + `chapterResourceMap` in `resources.ts` (public URL only).
4. Run `npm run compile` in brain (with `--slug <slug> --kind repo` when supported).
5. Synthesize in `raw/notes/practice/ai-native-product-building/<slug>-synthesis.md`.
6. Revise chapter MDX when a decision framework changes.
7. Optional: footnotes spin-out when a principle stands alone.
8. Run `npm run check:public` before merging handbook changes.

## Spin-outs

Published at [angelguirao.com/wiki/thought/](https://angelguirao.com/wiki/thought/).

Frontmatter:

```yaml
handbook_spinout: true
handbook_chapter: 07-leave-the-prototype
publish: true
```

Ship footnotes: brain publish CI → `tbd/public/wiki/`.

## Pattern cards (public)

Draft named case studies privately in brain. When promoting to the handbook, **anonymize**:

- Composite title ("B2B scheduling tool", not product name)
- Behaviors and decisions, not repo paths
- Link only to handbook chapters

Add to `caseStudies` in `resources.ts`.

## Versioning

- **Structure** (new chapter, trails, decisions): bump minor `handbookVersion`.
- **Content** (resource-driven revision, maturity bump): patch or minor + note in `CHANGELOG.md`.
- Spin-outs can ship before chapter revision — link both ways.

## Maturity

| Label | Meaning |
|-------|---------|
| `shipped` | Readable v1 essay — principle/decision/workflow/artifact present |
| `refined` | Depth pass — scenario, falsifiers, tighter artifacts |
| `battle-tested` | Used on real bets with revision after signal (future) |

Set in chapter frontmatter. Homepage progress counts `refined` + `battle-tested`.
