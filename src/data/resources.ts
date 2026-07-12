export type ResourceKind = "course" | "book" | "essay" | "repo" | "article";

export type HandbookResource = {
  id: string;
  title: string;
  url: string;
  kind: ResourceKind;
  note?: string;
  chapters: string[];
};

export type FootnotesSpinOut = {
  slug: string;
  title: string;
  url: string;
  chapterId: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  chapters: string[];
};

export const FOOTNOTES_BASE = "https://angelguirao.com/wiki";

export const RESOURCE_KIND_ORDER: ResourceKind[] = [
  "book",
  "course",
  "essay",
  "article",
  "repo",
];

export const RESOURCE_KIND_LABELS: Record<ResourceKind, string> = {
  book: "Books",
  course: "Courses",
  essay: "Essays",
  article: "Articles",
  repo: "Repos & curricula",
};

/** Curated public resources — synthesis happens off-site; only links ship here. */
export const handbookResources: HandbookResource[] = [
  {
    id: "mom-test",
    title: "The Mom Test",
    url: "https://www.momtestbook.com/",
    kind: "book",
    note: "Past behavior over future promises — the discovery and validation classic.",
    chapters: ["02-finding-problems", "03-discovery", "04-validation", "14-analytics"],
  },
  {
    id: "the-builder-pm",
    title: "The Builder PM",
    url: "https://thebusinessengineer.gumroad.com/l/the-builder-pm",
    kind: "course",
    note: "Builder PM craft — product judgment for people who ship vertical slices.",
    chapters: [
      "01-mindset",
      "02-finding-problems",
      "05-ux-taste",
      "08-owning-the-codebase",
      "15-iteration",
      "17-teams",
    ],
  },
  {
    id: "making-software",
    title: "Making Software",
    url: "https://www.makingsoftware.com/",
    kind: "essay",
    note: "Essay + diagram rhythm — timeless craft over changelog-driven docs.",
    chapters: ["00-principles", "05-ux-taste", "11-architecture", "12-testing"],
  },
  {
    id: "its-time-to-build",
    title: "It's Time to Build",
    url: "https://a16z.com/its-time-to-build/",
    kind: "essay",
    note: "Building imperative — institutions fail when they stop making things.",
    chapters: ["00-principles"],
  },
  {
    id: "builder-manifesto",
    title: "The Builder Manifesto",
    url: "https://buildermanifesto.com/",
    kind: "article",
    note: "Cross-domain builders outship specialist teams when AI commoditizes code.",
    chapters: ["01-mindset", "08-owning-the-codebase", "17-teams"],
  },
  {
    id: "reading-list-for-generalists",
    title: "A reading list for generalists",
    url: "https://www.lesswrong.com/posts/sH4cFDDjRdGrn3p2o/a-reading-list-for-generalists",
    kind: "article",
    note: "Disposition, strategy, and project leadership for people who own cross-cutting work.",
    chapters: ["01-mindset", "02-finding-problems", "15-iteration"],
  },
  {
    id: "future-worth-building-is-human",
    title: "The Future Worth Building Is Human",
    url: "https://thinkingmachines.ai/blog/the-future-worth-building-is-human/",
    kind: "article",
    note: "AI should extend human judgment and local knowledge — not replace participation.",
    chapters: ["00-principles", "09-ai-pair-programming", "10-agentic-development"],
  },
  {
    id: "thinking-inc-ai-native-guide",
    title: "AI-Native Product Development — Build Guide 2026",
    url: "https://thinking.inc/en/pillar-pages/ai-native-product-building/",
    kind: "article",
    note: "Practitioner view on AI-native vs enhanced vs bolted-on — stack, economics, teams, compliance.",
    chapters: [
      "00-principles",
      "11-architecture",
      "13-deployment",
      "14-analytics",
      "16-scaling",
      "17-teams",
    ],
  },
  {
    id: "block-hierarchy-to-intelligence",
    title: "From hierarchy to intelligence (Block)",
    url: "https://block.xyz/inside/from-hierarchy-to-intelligence",
    kind: "article",
    note: "Org design when AI changes information routing — speed as compounding advantage.",
    chapters: ["16-scaling", "17-teams"],
  },
  {
    id: "ai-engineering-from-scratch",
    title: "AI Engineering from Scratch",
    url: "https://aiengineeringfromscratch.com/",
    kind: "repo",
    note: "Catalog spine for technical depth — compare structure, don't copy wholesale.",
    chapters: [
      "08-owning-the-codebase",
      "09-ai-pair-programming",
      "10-agentic-development",
      "11-architecture",
      "13-deployment",
      "16-scaling",
    ],
  },
];

export const sharedResources: Record<string, HandbookResource> = Object.fromEntries(
  handbookResources.map((resource) => [resource.id, resource]),
);

function buildChapterResourceMap(
  resources: HandbookResource[],
): Record<string, HandbookResource[]> {
  const map: Record<string, HandbookResource[]> = {};

  for (const resource of resources) {
    for (const chapterId of resource.chapters) {
      if (!map[chapterId]) map[chapterId] = [];
      if (!map[chapterId].some((entry) => entry.id === resource.id)) {
        map[chapterId].push(resource);
      }
    }
  }

  return map;
}

export const chapterResourceMap = buildChapterResourceMap(handbookResources);

export const spinOuts: Record<string, Omit<FootnotesSpinOut, "chapterId">> = {
  "00-principles": {
    slug: "principles-before-tools",
    title: "Principles before tools",
    url: `${FOOTNOTES_BASE}/thought/principles-before-tools.html`,
  },
  "01-mindset": {
    slug: "builder-archetype",
    title: "Builders over handoffs",
    url: `${FOOTNOTES_BASE}/thought/builder-archetype.html`,
  },
  "02-finding-problems": {
    slug: "strategic-generalist",
    title: "Deliberate generalism",
    url: `${FOOTNOTES_BASE}/thought/strategic-generalist.html`,
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

export const footnotesSpinOuts: FootnotesSpinOut[] = Object.entries(spinOuts).map(
  ([chapterId, spinOut]) => ({
    ...spinOut,
    chapterId,
  }),
);

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

export function getChapterResources(chapterId: string): HandbookResource[] {
  return chapterResourceMap[chapterId] ?? [];
}

export function getChapterSpinOut(
  chapterId: string,
): Omit<FootnotesSpinOut, "chapterId"> | undefined {
  return spinOuts[chapterId];
}

export function getChapterCaseStudies(chapterId: string): CaseStudy[] {
  return caseStudies.filter((c) => c.chapters.includes(chapterId));
}

export function getResourcesByKind(): { kind: ResourceKind; label: string; items: HandbookResource[] }[] {
  return RESOURCE_KIND_ORDER.map((kind) => ({
    kind,
    label: RESOURCE_KIND_LABELS[kind],
    items: handbookResources.filter((resource) => resource.kind === kind),
  })).filter((group) => group.items.length > 0);
}
