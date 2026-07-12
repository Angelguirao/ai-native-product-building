export type HandbookTrail = {
  id: string;
  title: string;
  description: string;
  audience: string;
  chapterIds: string[];
};

export const handbookTrails: HandbookTrail[] = [
  {
    id: "solo-founder",
    title: "Solo founder",
    audience: "One person validating and shipping",
    description:
      "Problem selection, honest validation, when to leave prototypes, and first deploy — before team process.",
    chapterIds: [
      "00-principles",
      "02-finding-problems",
      "04-validation",
      "06-vibe-prototyping",
      "07-leave-the-prototype",
      "13-deployment",
    ],
  },
  {
    id: "product-engineer",
    title: "Product engineer",
    audience: "Builder who owns outcomes and code",
    description:
      "Mindset, owning the codebase, pair programming, agents with gates, and tests that survive refactors.",
    chapterIds: [
      "01-mindset",
      "08-owning-the-codebase",
      "09-ai-pair-programming",
      "10-agentic-development",
      "12-testing",
      "11-architecture",
    ],
  },
  {
    id: "team-lead",
    title: "Team lead",
    audience: "Setting standards for a small product team",
    description:
      "Principles, architecture, analytics loops, iteration rhythm, and governance when AI multiplies output.",
    chapterIds: [
      "00-principles",
      "11-architecture",
      "14-analytics",
      "15-iteration",
      "17-teams",
      "16-scaling",
    ],
  },
  {
    id: "discover-shape",
    title: "Discover → shape",
    audience: "Still deciding what to build",
    description:
      "From curiosity to validated bet to learnable prototype — stop before ownership-heavy code.",
    chapterIds: [
      "02-finding-problems",
      "03-discovery",
      "04-validation",
      "05-ux-taste",
      "06-vibe-prototyping",
      "07-leave-the-prototype",
    ],
  },
];

export function getTrail(id: string): HandbookTrail | undefined {
  return handbookTrails.find((t) => t.id === id);
}
