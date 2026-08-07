---
version: alpha
name: AI-Native Codex
description: >
  Living handbook for building products when AI changes every step.
  Long-form reading surface — Literata for display and body, IBM Plex Mono for
  codes. Cool zinc + rare amber color from personal-tokens; personality is type
  and measure, not PersonalOS desk chrome. Not Holzen Nox. Not Product Leaders Atlas.
colors:
  primary: "#18181B"
  background: "#FAFAFA"
  background-breathe: "#F4F4F5"
  foreground: "#18181B"
  muted: "#71717A"
  accent: "#D97706"
  accent-soft: "rgba(217, 119, 6, 0.1)"
  accent-strong: "#B45309"
  surface: "#FFFFFF"
  border: "#E4E4E7"
typography:
  display:
    fontFamily: Literata
    fontSize: 2.5rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.02em
  body-md:
    fontFamily: Literata
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.65
  mono:
    fontFamily: IBM Plex Mono
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.45
rounded:
  sm: 4px
  md: 6px
spacing:
  md: 16px
  lg: 24px
---

## Overview

**Codex / craft handbook.** A reading surface for AI-native product building — chapters, decisions, trails. Identity is **Literata** (bookish optical serif for titles and long-form) plus **IBM Plex Mono** for codes and meta. Color borrows LifeOS Industrial zinc + rare amber so the stack stays post-cream without becoming a steward desk.

This is **not** PersonalOS (no Space Grotesk / mono chip chrome), **not** Product Leaders Atlas (Fraunces), and **not** Holzen Nox.

## Colors

Imported from `@angelguirao/personal-tokens` until a Codex-specific palette ADR exists.

- **Ground / surface / border:** cool zinc.
- **Accent:** amber — sparse (decision callouts, focus, maturity signal). Never default link paint for every `<a>`.
- **Muted:** captions, nav, meta.

## Typography

- **Display and body:** Literata — one family for handbook continuity; titles slightly heavier, body for measure ~42rem.
- **Mono:** IBM Plex Mono — chapter meta, clone commands, status labels.
- Upright by default; italic only for genuine emphasis in prose, not brand chrome.

## Layout

- Sticky header with hairline + light blur.
- Comfortable reading measure; wide mode only for catalogs.
- Panels: hairline border + surface; no pill SaaS dashboards.

## Components

Astro site — semantic HTML + `src/styles/global.css`. No shadcn until interactive islands need a kit; then init locally themed to these tokens. Do not copy PersonalOS `components/ui`.

## Do's and Don'ts

**Do**

- Keep Literata + IBM Plex Mono as the Codex signal.
- Treat amber as rare emphasis.
- Read this file before restyling handbook pages.

**Don't**

- Apply PersonalOS Space Grotesk desk chrome or Holzen Nox as the default look.
- Cream `#f4efe6` / terracotta `#b85c38` / generic Cormorant+clay journal.
- Fraunces Atlas type (that identity belongs to product-leaders).

## Figma

Deferred until the Codex skin is stable in CSS.

## Agent prompt guide

1. Portfolio map: `personal-agent/docs/DESIGN-SYSTEMS.md`.
2. Colors: personal-tokens zinc. Type: Literata / IBM Plex Mono.
3. If a mock looks like PersonalOS Workbench or Atlas Fraunces — wrong product.
