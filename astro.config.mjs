// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://ainativeproductbuilding.com",
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
  integrations: [
    mdx(),
    pagefind({
      indexConfig: {
        rootSelector: "main",
        excludeSelectors: [".site-header", ".site-footer", ".skip-link", ".grain"],
      },
    }),
  ],
});
