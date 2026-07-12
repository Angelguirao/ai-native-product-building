export type ResourceKind = "course" | "book" | "essay" | "repo" | "article";

export type HandbookResource = {
  id: string;
  title: string;
  url: string;
  kind: ResourceKind;
  note?: string;
};

export type FootnotesSpinOut = {
  slug: string;
  title: string;
  url: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  chapters: string[];
};

export const FOOTNOTES_BASE = "https://angelguirao.com/wiki";

/** Curated public resources — synthesis happens off-site; only links ship here. */
export const sharedResources: Record<string, HandbookResource> = {
  "making-software": {
    id: "making-software",
    title: "Making Software",
    url: "https://www.makingsoftware.com/",
    kind: "essay",
    note: "Essay + diagram rhythm — craft over changelog.",
  },
  "ai-engineering-from-scratch": {
    id: "ai-engineering-from-scratch",
    title: "AI Engineering from Scratch",
    url: "https://aiengineeringfromscratch.com/",
    kind: "repo",
    note: "Catalog spine for technical depth — compare, don't copy.",
  },
  "the-builder-pm": {
    id: "the-builder-pm",
    title: "The Builder PM",
    url: "https://thebusinessengineer.gumroad.com/l/the-builder-pm",
    kind: "course",
    note: "Builder PM craft — product judgment for people who ship.",
  },
  "mom-test": {
    id: "mom-test",
    title: "The Mom Test",
    url: "https://www.momtestbook.com/",
    kind: "book",
    note: "Past behavior over future promises — discovery classic.",
  },
};

export const spinOuts: Record<string, FootnotesSpinOut> = {
  "00-principles": {
    slug: "principles-before-tools",
    title: "Principles before tools",
    url: `${FOOTNOTES_BASE}/thought/principles-before-tools.html`,
  },
  "04-validation": {
    slug: "validation-before-vibes",
    title: "Validation before vibes",
    url: `${FOOTNOTES_BASE}/thought/validation-before-vibes.html`,
  },
  "07-leave-the-prototype": {
    slug: "leave-the-prototype",
    title: "Leave the prototype",
    url: `${FOOTNOTES_BASE}/thought/leave-the-prototype.html`,
  },
};

/** Anonymous pattern cards — composite scenarios, not specific products. */
export const caseStudies: CaseStudy[] = [
  {
    id: "scheduling-concierge",
    title: "B2B scheduling tool",
    summary:
      "A small team ran a paid concierge for two weeks before app code. They left no-code only after auth and billing limits blocked the next experiment.",
    chapters: ["04-validation", "07-leave-the-prototype"],
  },
  {
    id: "internal-dashboard",
    title: "Internal ops dashboard",
    summary:
      "Three teams used a vibe-built admin weekly for a month. Migration started with data model and tests; the prototype URL stayed as a learning tombstone.",
    chapters: ["07-leave-the-prototype", "12-testing"],
  },
  {
    id: "agent-refactor",
    title: "Multi-file refactor with agents",
    summary:
      "Agents proposed a plan across twelve files; humans gated schema and CI changes. Shipped in small PRs with required build checks.",
    chapters: ["10-agentic-development", "12-testing"],
  },
];

export const chapterResourceMap: Record<string, HandbookResource[]> = {
  "00-principles": [sharedResources["making-software"]],
  "01-mindset": [sharedResources["the-builder-pm"], sharedResources["making-software"]],
  "02-finding-problems": [sharedResources["the-builder-pm"], sharedResources["mom-test"]],
  "03-discovery": [sharedResources["mom-test"], sharedResources["the-builder-pm"]],
  "04-validation": [sharedResources["mom-test"]],
  "05-ux-taste": [sharedResources["making-software"], sharedResources["the-builder-pm"]],
  "06-vibe-prototyping": [sharedResources["making-software"]],
  "07-leave-the-prototype": [sharedResources["the-builder-pm"]],
  "08-owning-the-codebase": [
    sharedResources["the-builder-pm"],
    sharedResources["ai-engineering-from-scratch"],
  ],
  "09-ai-pair-programming": [sharedResources["ai-engineering-from-scratch"]],
  "10-agentic-development": [sharedResources["ai-engineering-from-scratch"]],
  "11-architecture": [
    sharedResources["making-software"],
    sharedResources["ai-engineering-from-scratch"],
  ],
  "12-testing": [sharedResources["making-software"]],
  "13-deployment": [sharedResources["ai-engineering-from-scratch"]],
  "14-analytics": [sharedResources["mom-test"]],
  "15-iteration": [sharedResources["the-builder-pm"]],
  "16-scaling": [sharedResources["ai-engineering-from-scratch"]],
  "17-teams": [sharedResources["the-builder-pm"]],
};

export function getChapterResources(chapterId: string): HandbookResource[] {
  return chapterResourceMap[chapterId] ?? [];
}

export function getChapterSpinOut(chapterId: string): FootnotesSpinOut | undefined {
  return spinOuts[chapterId];
}

export function getChapterCaseStudies(chapterId: string): CaseStudy[] {
  return caseStudies.filter((c) => c.chapters.includes(chapterId));
}
