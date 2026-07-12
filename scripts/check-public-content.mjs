#!/usr/bin/env node
/**
 * Fail CI if private repo paths or named personal products appear in public src.
 * Run: npm run check:public
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCAN_DIRS = ["src", "public", "templates"];

const FORBIDDEN = [
  /brain\/raw/i,
  /personal-agent/i,
  /\bholzen\b/i,
  /glucose-rhythm/i,
  /os\.angelguirao\.com/i,
  /brainRaw/i,
  /brain\/wiki/i,
];

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "dist") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(astro|mdx?|ts|tsx|js|mjs|json|css)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

const hits = [];

for (const rel of SCAN_DIRS) {
  const dir = path.join(ROOT, rel);
  for (const file of walk(dir)) {
    const text = fs.readFileSync(file, "utf8");
    for (const pattern of FORBIDDEN) {
      if (pattern.test(text)) {
        hits.push({ file: path.relative(ROOT, file), pattern: pattern.source });
      }
    }
  }
}

if (hits.length) {
  console.error("Public content check failed — forbidden references found:\n");
  for (const h of hits) {
    console.error(`  ${h.file}  (${h.pattern})`);
  }
  process.exit(1);
}

console.log("Public content check passed.");
