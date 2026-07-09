# Resource loop

The handbook is **v1.0 structure, living content**. Chapters improve as resources are captured in brain, compiled, and spun out to footnotes.

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
src/data/resources.ts                 ← chapter links + brain paths
    ↓
Chapter MDX revision                  ← principle/decision/workflow updates
```

## Where things live

| Layer | Path | Role |
|-------|------|------|
| Raw capture | `brain/raw/repos/*.md` | URL, chapter map, your notes |
| Practice synthesis | `brain/raw/notes/practice/ai-native-product-building/` | Per-resource + case studies |
| Footnotes spin-out | `brain/wiki/thought/*.md` | `publish: true`, `handbook_spinout: true` |
| Chapter resources | `src/data/resources.ts` | Curated links per chapter |
| Case studies | `resources.ts` → `caseStudies` | Lived products (e.g. Holzen) |
| Shipped chapter | `src/content/chapters/*.mdx` | Revised when synthesis is sharp |

## Adding a resource

1. Create `brain/raw/repos/<slug>.md` (see `the-builder-pm.md` template).
2. Set `handbook_chapters: [...]` in frontmatter.
3. Add entry to `sharedResources` + `chapterResourceMap` in `resources.ts`.
4. Run `npm run compile` in brain (with `--slug <slug> --kind repo` when supported).
5. Synthesize in `raw/notes/practice/ai-native-product-building/<slug>-synthesis.md`.
6. Revise chapter MDX when a decision framework changes.
7. Optional: footnotes spin-out when a principle stands alone.

## Spin-outs

Published at [angelguirao.com/wiki/thought/](https://angelguirao.com/wiki/thought/).

Frontmatter:

```yaml
handbook_spinout: true
handbook_chapter: 07-leave-the-prototype
publish: true
```

Ship footnotes: brain publish CI → `tbd/public/wiki/`.

## Case studies

Draft in `brain/raw/notes/practice/ai-native-product-building/case-study-*.md`.

Promote to `caseStudies` in `resources.ts` when facts + falsifier are solid.

## Versioning

- **Structure** (new chapter): bump minor `handbookVersion`.
- **Content** (resource-driven revision): patch bump + note in commit.
- Spin-outs can ship before chapter revision — link both ways.
