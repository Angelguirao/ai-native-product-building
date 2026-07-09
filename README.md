# AI-Native Product Building

A **living handbook** for building products when AI changes every step — principles and decision frameworks that outlive the tools.

**v0.4** · 9 chapters shipped · [live site](https://ai-native-product-building.vercel.app) · [catalog](/catalog) · [glossary](/glossary)

## What this is

- Not "how to build AI products" — **how AI changes building any product**
- Not a tool tutorial — **decision frameworks** (when to use AI, when not, when to leave the prototype)
- Not a frozen book — **versioned in public** like software

Inspired by the essay rhythm of [Making Software](https://www.makingsoftware.com/) and the catalog structure of [AI Engineering from Scratch](https://aiengineeringfromscratch.com/), in the warm voice of [footnotes](https://angelguirao.com/wiki).

## Stack

| Layer | Owner |
|-------|--------|
| Drafts & resources | `brain` (folio) |
| Published chapters | this repo (`content` → Astro site) |
| Distilled principles | `footnotes` (spin-outs) |
| Pointer / context | `tbd` mesh |

## Develop

```bash
npm install
npm run dev
npm run build
```

## Ship model

1. Write in `src/content/chapters/*.mdx`
2. Set `status: shipped` when ready
3. Bump `handbookVersion` in `src/data/catalog.ts`
4. Deploy (Vercel)

## License

MIT
