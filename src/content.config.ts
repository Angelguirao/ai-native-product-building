import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const chapters = defineCollection({
  loader: glob({ base: "./src/content/chapters", pattern: "**/*.mdx" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    phase: z.string(),
    phaseTitle: z.string(),
    phaseOrder: z.number(),
    order: z.number(),
    status: z.enum(["shipped", "draft", "planned"]),
    maturity: z
      .enum(["draft", "shipped", "refined", "battle-tested"])
      .default("shipped"),
  }),
});

export const collections = { chapters };
