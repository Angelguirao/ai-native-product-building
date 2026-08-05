# @angelguirao/personal-tokens

**LifeOS Industrial** tokens for **tbd**, **PersonalOS**, **AI-Native Product Building**, and **AIE Sessions**.

Cool zinc neutrals + rare amber. No cream / serif / terracotta.

- Holzen uses `@holzen/design-tokens` (Nox) — do not mix.
- Contract: [`docs/PERSONAL-SURFACE-TOKENS.md`](../../docs/PERSONAL-SURFACE-TOKENS.md)
- Visual law: [`personal-agent/DESIGN.md`](../../personal-agent/DESIGN.md)
- ADR: [`personal-agent/docs/adrs/014-lifeos-industrial-surface.md`](../../personal-agent/docs/adrs/014-lifeos-industrial-surface.md)

## Exports

| Import | Contents |
|--------|----------|
| `@angelguirao/personal-tokens/tokens.css` | `:root` color, radius, shadow, type roles |
| `@angelguirao/personal-tokens/primitives.css` | grain, breathe, question-layers, desk chrome |

### Desk chrome classes

| Class | Use |
|-------|-----|
| `.personal-desk-panel` | Primary Today / desk card |
| `.personal-soft-panel` | Nested / secondary panel |
| `.personal-sheet` | Review modal / bottom sheet |
| `.personal-eyebrow` | Section labels (Orient, Experiment) |
| `.personal-display-title` | Space Grotesk display titles (upright) |
| `.personal-quiet` | Supporting body line |
| `.personal-mono` | JetBrains Mono operational data |

## Sync

This folder is the **SSOT** in the meta-repo. Deployable copies live inside each app (Vercel roots). After editing here:

```bash
node scripts/sync-personal-tokens.mjs
```

## Fonts

Apps load **Space Grotesk** + **DM Sans** + **JetBrains Mono** via `next/font` and map them in local `@theme inline` to `--font-display` / `--font-body` / `--font-mono`.
