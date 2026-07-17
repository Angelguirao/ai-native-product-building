# AI-Native Product Building

A **living handbook** for building products when AI changes every step — principles and decision frameworks that outlive the tools.

**v1.4** · product engineering OS · maturity labels · decisions · trails · [live site](https://ai-native-product-building.vercel.app) · [catalog](/catalog) · [resource loop](docs/RESOURCE-LOOP.md)

## What this is

- Not "how to build AI products" — **how AI changes building any product**
- Not a tool tutorial — **decision frameworks** (when to use AI, when not, when to leave the prototype)
- Not a frozen book — **versioned in public** like software

Inspired by the essay rhythm of [Making Software](https://www.makingsoftware.com/) and the catalog structure of [AI Engineering from Scratch](https://aiengineeringfromscratch.com/), in the warm voice of [footnotes](https://angelguirao.com/wiki).

## v1.4 highlights

- **Product engineering OS** — loops, skills, tools, MCPs, agents; personal vs organizational compound (chapter 11)
- **Maturity** — chapters labeled `shipped` or `refined`; progress bar counts depth, not just existence
- **Decisions** — [`/decisions`](https://ai-native-product-building.vercel.app/decisions) registry for quick reference
- **Trails** — role-based reading paths at [`/trails`](https://ai-native-product-building.vercel.app/trails)

## Develop

```bash
npm install
npm run dev
npm run build
npm run check:public
```

## Ship model

1. Write in `src/content/chapters/*.mdx`
2. Set `status: shipped` and `maturity` when ready
3. Bump `handbookVersion` in `src/data/catalog.ts`
4. Run `check:public` before deploy
5. Deploy (Vercel)

## License

MIT
