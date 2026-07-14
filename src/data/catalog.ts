export type ChapterStatus = "shipped" | "draft" | "planned";

export type ChapterMaturity = "draft" | "shipped" | "refined" | "battle-tested";

export type CatalogLesson = {
  slug: string;
  title: string;
  status: ChapterStatus;
  maturity: ChapterMaturity;
  href?: string;
  order: number;
};

export type CatalogPhase = {
  id: string;
  order: number;
  title: string;
  lessons: CatalogLesson[];
};

export const handbookVersion = "1.4.3";
