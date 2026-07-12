import { getCollection } from "astro:content";
import type { CatalogLesson, CatalogPhase, ChapterMaturity } from "../data/catalog";

export type ChapterNav = {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
};

export async function buildCatalogPhases(): Promise<CatalogPhase[]> {
  const chapters = await getCollection("chapters");
  const published = chapters
    .map((entry) => ({
      slug: entry.id,
      title: entry.data.title,
      status: entry.data.status,
      maturity: entry.data.maturity,
      href: `/chapters/${entry.id}`,
      phase: entry.data.phase,
      phaseTitle: entry.data.phaseTitle,
      phaseOrder: entry.data.phaseOrder,
      order: entry.data.order,
    }))
    .sort((a, b) => a.order - b.order);

  const phaseMap = new Map<string, CatalogPhase>();

  for (const lesson of published) {
    if (!phaseMap.has(lesson.phase)) {
      phaseMap.set(lesson.phase, {
        id: lesson.phase,
        order: lesson.phaseOrder,
        title: lesson.phaseTitle,
        lessons: [],
      });
    }

    phaseMap.get(lesson.phase)!.lessons.push({
      slug: lesson.slug,
      title: lesson.title,
      status: lesson.status,
      maturity: lesson.maturity,
      href: lesson.href,
      order: lesson.order,
    });
  }

  for (const phase of phaseMap.values()) {
    phase.lessons.sort((a, b) => a.order - b.order);
  }

  return [...phaseMap.values()].sort((a, b) => a.order - b.order);
}

export async function getOrderedChapters(): Promise<CatalogLesson[]> {
  const phases = await buildCatalogPhases();
  return phases.flatMap((p) => p.lessons).sort((a, b) => a.order - b.order);
}

export async function getChapterNav(slug: string): Promise<ChapterNav> {
  const lessons = await getOrderedChapters();
  const idx = lessons.findIndex((l) => l.slug === slug);
  if (idx < 0) return { prev: null, next: null };

  const prev = idx > 0 ? lessons[idx - 1]! : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1]! : null;

  return {
    prev: prev ? { slug: prev.slug, title: prev.title } : null,
    next: next ? { slug: next.slug, title: next.title } : null,
  };
}

export async function getHandbookStats() {
  const lessons = await getOrderedChapters();
  const total = lessons.length;
  const byMaturity = (m: ChapterMaturity) =>
    lessons.filter((l) => l.maturity === m).length;

  return {
    total,
    shipped: byMaturity("shipped"),
    refined: byMaturity("refined"),
    battleTested: byMaturity("battle-tested"),
    draft: byMaturity("draft"),
    progress: total
      ? Math.round(
          ((byMaturity("refined") + byMaturity("battle-tested")) / total) * 100,
        )
      : 0,
  };
}
