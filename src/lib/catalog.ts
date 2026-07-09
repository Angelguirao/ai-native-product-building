import { getCollection } from "astro:content";
import { plannedLessons, type CatalogLesson, type CatalogPhase } from "../data/catalog";

export async function buildCatalogPhases(): Promise<CatalogPhase[]> {
  const chapters = await getCollection("chapters");
  const published = chapters
    .map((entry) => ({
      slug: entry.id,
      title: entry.data.title,
      status: entry.data.status,
      href: `/chapters/${entry.slug}`,
      phase: entry.data.phase,
      phaseTitle: entry.data.phaseTitle,
      phaseOrder: entry.data.phaseOrder,
      order: entry.data.order,
    }))
    .sort((a, b) => a.order - b.order);

  const bySlug = new Map<string, CatalogLesson & { phase: string; phaseTitle: string; phaseOrder: number; order: number }>();

  for (const lesson of published) {
    bySlug.set(lesson.slug, lesson);
  }

  for (const planned of plannedLessons) {
    if (!bySlug.has(planned.slug)) {
      bySlug.set(planned.slug, {
        slug: planned.slug,
        title: planned.title,
        status: planned.status,
        phase: planned.phase,
        phaseTitle: planned.phaseTitle,
        phaseOrder: planned.phaseOrder,
        order: 999,
      });
    }
  }

  const phaseMap = new Map<string, CatalogPhase>();

  for (const lesson of bySlug.values()) {
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
      href: lesson.href,
    });
  }

  for (const phase of phaseMap.values()) {
    phase.lessons.sort((a, b) => a.slug.localeCompare(b.slug));
  }

  return [...phaseMap.values()].sort((a, b) => a.order - b.order);
}

export async function getHandbookStats() {
  const phases = await buildCatalogPhases();
  const lessons = phases.flatMap((p) => p.lessons);
  const shipped = lessons.filter((l) => l.status === "shipped").length;
  const total = lessons.length;
  return { shipped, total, progress: total ? Math.round((shipped / total) * 100) : 0 };
}
