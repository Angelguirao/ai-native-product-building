// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  site: "https://ainativeproductbuilding.com",
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
  integrations: [mdx()],
});
