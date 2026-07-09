export type ChapterStatus = "shipped" | "draft" | "planned";

export type CatalogLesson = {
  slug: string;
  title: string;
  status: ChapterStatus;
  href?: string;
};

export type CatalogPhase = {
  id: string;
  order: number;
  title: string;
  lessons: CatalogLesson[];
};

export type PlannedLesson = {
  slug: string;
  title: string;
  status: ChapterStatus;
  phase: string;
  phaseTitle: string;
  phaseOrder: number;
};

export const plannedLessons: PlannedLesson[] = [
  {
    slug: "02-finding-problems",
    title: "Finding problems worth building",
    status: "planned",
    phase: "01",
    phaseTitle: "Discover",
    phaseOrder: 1,
  },
  {
    slug: "03-discovery",
    title: "Discovery and research with AI",
    status: "planned",
    phase: "01",
    phaseTitle: "Discover",
    phaseOrder: 1,
  },
  {
    slug: "04-validation",
    title: "Validation before code",
    status: "planned",
    phase: "01",
    phaseTitle: "Discover",
    phaseOrder: 1,
  },
  {
    slug: "05-ux-taste",
    title: "UX taste and design judgment",
    status: "planned",
    phase: "02",
    phaseTitle: "Shape",
    phaseOrder: 2,
  },
  {
    slug: "06-vibe-prototyping",
    title: "Vibe prototyping",
    status: "planned",
    phase: "02",
    phaseTitle: "Shape",
    phaseOrder: 2,
  },
  {
    slug: "08-owning-the-codebase",
    title: "Owning the codebase",
    status: "planned",
    phase: "03",
    phaseTitle: "Own",
    phaseOrder: 3,
  },
  {
    slug: "09-ai-pair-programming",
    title: "AI pair programming",
    status: "planned",
    phase: "03",
    phaseTitle: "Own",
    phaseOrder: 3,
  },
  {
    slug: "10-agentic-development",
    title: "Agentic development",
    status: "planned",
    phase: "03",
    phaseTitle: "Own",
    phaseOrder: 3,
  },
  {
    slug: "11-architecture",
    title: "Architecture decisions",
    status: "planned",
    phase: "04",
    phaseTitle: "Ship",
    phaseOrder: 4,
  },
  {
    slug: "12-testing",
    title: "Testing and maintainability",
    status: "planned",
    phase: "04",
    phaseTitle: "Ship",
    phaseOrder: 4,
  },
  {
    slug: "13-deployment",
    title: "Deployment",
    status: "planned",
    phase: "04",
    phaseTitle: "Ship",
    phaseOrder: 4,
  },
  {
    slug: "14-analytics",
    title: "Analytics and feedback loops",
    status: "planned",
    phase: "04",
    phaseTitle: "Ship",
    phaseOrder: 4,
  },
  {
    slug: "15-iteration",
    title: "Iteration",
    status: "planned",
    phase: "05",
    phaseTitle: "Grow",
    phaseOrder: 5,
  },
  {
    slug: "16-scaling",
    title: "Scaling",
    status: "planned",
    phase: "05",
    phaseTitle: "Grow",
    phaseOrder: 5,
  },
  {
    slug: "17-teams",
    title: "Teams and governance",
    status: "planned",
    phase: "05",
    phaseTitle: "Grow",
    phaseOrder: 5,
  },
];

export const handbookVersion = "0.6.0";
