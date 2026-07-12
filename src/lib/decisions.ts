import fs from "node:fs";
import path from "node:path";
import { getCollection } from "astro:content";

export type DecisionEntry = {
  chapterId: string;
  chapterTitle: string;
  phase: string;
  phaseTitle: string;
  order: number;
  figureId: string | null;
  figureCaption: string | null;
  body: string;
};

function stripMdxNoise(text: string): string {
  return text
    .replace(/\{[^}]+\}/g, "")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/^\s*[-*]\s+/gm, "• ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractFigure(raw: string): { id: string | null; caption: string | null } {
  const match = raw.match(
    /<Figure\s+id="(DEC_\d+)"[^>]*caption="([^"]*)"[^>]*>/,
  );
  if (!match) return { id: null, caption: null };
  return { id: match[1]!, caption: match[2]! };
}

function extractDecisionBody(raw: string): string {
  const match = raw.match(/<Decision>\s*([\s\S]*?)\s*<\/Decision>/);
  if (!match) return "";
  return stripMdxNoise(match[1]!);
}

export async function buildDecisionIndex(): Promise<DecisionEntry[]> {
  const chapters = await getCollection("chapters");
  const chaptersDir = path.join(process.cwd(), "src/content/chapters");
  const entries: DecisionEntry[] = [];

  for (const chapter of chapters.sort((a, b) => a.data.order - b.data.order)) {
    const filePath = path.join(chaptersDir, `${chapter.id}.mdx`);
    const raw = fs.readFileSync(filePath, "utf8");
    const body = extractDecisionBody(raw);
    if (!body) continue;

    const { id: figureId, caption: figureCaption } = extractFigure(raw);

    entries.push({
      chapterId: chapter.id,
      chapterTitle: chapter.data.title,
      phase: chapter.data.phase,
      phaseTitle: chapter.data.phaseTitle,
      order: chapter.data.order,
      figureId,
      figureCaption,
      body,
    });
  }

  return entries;
}

export type DecisionPhaseGroup = {
  phase: string;
  phaseTitle: string;
  order: number;
  decisions: DecisionEntry[];
};

export function groupDecisionsByPhase(decisions: DecisionEntry[]): DecisionPhaseGroup[] {
  const map = new Map<string, DecisionPhaseGroup>();

  for (const entry of decisions) {
    if (!map.has(entry.phase)) {
      map.set(entry.phase, {
        phase: entry.phase,
        phaseTitle: entry.phaseTitle,
        order: entry.order,
        decisions: [],
      });
    } else {
      const group = map.get(entry.phase)!;
      group.order = Math.min(group.order, entry.order);
    }
    map.get(entry.phase)!.decisions.push(entry);
  }

  return [...map.values()].sort((a, b) => a.order - b.order);
}
