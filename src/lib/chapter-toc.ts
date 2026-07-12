import fs from "node:fs";
import path from "node:path";

export type TocEntry = {
  id: string;
  title: string;
};

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/** Extract ## headings from chapter MDX for in-page navigation. */
export function extractChapterToc(chapterId: string): TocEntry[] {
  const filePath = path.join(process.cwd(), "src/content/chapters", `${chapterId}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const body = raw.replace(/^---[\s\S]*?---\n/, "");

  const entries: TocEntry[] = [];
  for (const match of body.matchAll(/^##\s+(.+)$/gm)) {
    const title = match[1]!.trim();
    if (title.startsWith("{")) continue;
    const id = slugifyHeading(title);
    if (!entries.some((e) => e.id === id)) {
      entries.push({ id, title });
    }
  }

  return entries;
}
