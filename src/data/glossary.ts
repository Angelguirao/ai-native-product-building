export type GlossaryTerm = {
  id: string;
  term: string;
  def: string;
  chapters: string[];
};

/** Handbook glossary — terms mapped to defining chapters. */
export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "product-engineering-os",
    term: "Product engineering OS",
    def: "Loops, skills, tools, MCPs, and agents wired with memory and frameworks — compounding work the organization keeps, not scattered chat.",
    chapters: ["11-product-engineering-os"],
  },
  {
    id: "harness",
    term: "Harness",
    def: "The wrapper around a model that compresses context, team rules, and tool access into replicable workflows — what you choose or build, not the model itself.",
    chapters: ["11-product-engineering-os"],
  },
  {
    id: "iteration-bet",
    term: "Iteration bet",
    def: "A written X/Y/Z release — belief, smallest shippable change, and falsifier — so revision stays intentional.",
    chapters: ["15-iteration"],
  },
  {
    id: "north-star-metric",
    term: "North-star metric",
    def: "The one number that best reflects whether your current problem bet is winning — tied to behavior, not vanity.",
    chapters: ["14-analytics"],
  },
  {
    id: "preview-deploy",
    term: "Preview deploy",
    def: "Automatic deployment per PR for verification before production — real URL, not localhost.",
    chapters: ["13-deployment"],
  },
  {
    id: "adr",
    term: "ADR",
    def: "Architecture Decision Record — one-page bet with context, rejected options, and consequences; versioned in git.",
    chapters: ["11-architecture"],
  },
  {
    id: "regression-test",
    term: "Regression test",
    def: "A test added when a bug is fixed so the same break cannot return silently.",
    chapters: ["12-testing"],
  },
  {
    id: "pair-session",
    term: "Pair session",
    def: "A bounded AI coding loop: intent, scoped diff, verify, commit — one concern at a time.",
    chapters: ["09-ai-pair-programming"],
  },
  {
    id: "human-gate",
    term: "Human gate",
    def: "A step agents must not pass without review — migrations, auth, payments, deploy, secrets.",
    chapters: ["10-agentic-development"],
  },
  {
    id: "ux-taste",
    term: "UX taste",
    def: "Consistent design judgment — clarity, character, and craft — that keeps generated UI from converging on generic defaults.",
    chapters: ["05-ux-taste"],
  },
  {
    id: "owned-codebase",
    term: "Owned codebase",
    def: "A repo you control end-to-end: reproducible builds, documented env, migrations, and changes without a vibe-tool export.",
    chapters: ["08-owning-the-codebase"],
  },
  {
    id: "smoke-test",
    term: "Smoke test",
    def: "Smallest demand check — usually a landing page and one CTA — measured with counts, not compliments.",
    chapters: ["04-validation"],
  },
  {
    id: "concierge-mvp",
    term: "Concierge MVP",
    def: "Manual delivery behind the same promise as the product — validates willingness before automation.",
    chapters: ["04-validation"],
  },
  {
    id: "problem-bet",
    term: "Problem bet",
    def: "A narrow claim about who hurts, how often, and what would falsify it — chosen before building features.",
    chapters: ["02-finding-problems", "03-discovery"],
  },
  {
    id: "falsifier",
    term: "Falsifier",
    def: "An observable outcome that would prove your hypothesis wrong — discovery and vibe sessions need one before you start.",
    chapters: ["04-validation", "06-vibe-prototyping"],
  },
  {
    id: "vibe-prototype",
    term: "Vibe prototype",
    def: "A fast UI or flow built in a generation-first tool (Lovable, Bolt, v0) to learn shape — not an owned product.",
    chapters: ["06-vibe-prototyping", "07-leave-the-prototype"],
  },
  {
    id: "product-engineer",
    term: "Product engineer",
    def: "Builder who optimizes for outcomes in the world: users, scope, trust, revision speed.",
    chapters: ["01-mindset"],
  },
  {
    id: "agentic-development",
    term: "Agentic development",
    def: "Workflows where agents plan, implement, and review with human gates at decisions — not unattended autopilot.",
    chapters: ["10-agentic-development"],
  },
  {
    id: "decision-framework",
    term: "Decision framework",
    def: "A durable when-X / when-Y rule that survives tool churn. The atomic unit of this handbook.",
    chapters: ["00-principles"],
  },
  {
    id: "artifact",
    term: "Artifact",
    def: "Spec, checklist, test, or template that makes a decision re-readable later — judgment with a trail.",
    chapters: ["00-principles"],
  },
];

export function getGlossaryByChapter(chapterId: string): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.chapters.includes(chapterId));
}

export function getGlossaryTerm(id: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.id === id);
}
