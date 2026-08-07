/**
 * Strip cream-era italic display + amber chrome defaults → LifeOS Industrial.
 * Keeps accent on decision callouts / maturity signal.
 */
import fs from "node:fs";

const p = "src/styles/global.css";
let s = fs.readFileSync(p, "utf8");
const before = s;

s = s.replace(/font-style:\s*italic;/g, "font-style: normal;");

const pairs = [
  [
    `.site-footer-nav a:hover,
.site-footer-nav a[aria-current="page"] {
  color: var(--accent);
}`,
    `.site-footer-nav a:hover,
.site-footer-nav a[aria-current="page"] {
  color: var(--foreground);
}`,
  ],
  [
    `.catalog-phase summary::before {
  content: "▸";
  color: var(--accent);
  transition: transform 0.15s ease;
}`,
    `.catalog-phase summary::before {
  content: "▸";
  color: var(--muted);
  transition: transform 0.15s ease;
}`,
  ],
  [
    `.chapter-nav-link:hover {
  border-color: var(--accent);
}`,
    `.chapter-nav-link:hover {
  border-color: var(--border);
}`,
  ],
  [
    `.trail-card:hover {
  border-color: var(--accent);
}`,
    `.trail-card:hover {
  border-color: var(--border);
}`,
  ],
  [
    `.trail-step:hover {
  border-color: var(--accent);
}`,
    `.trail-step:hover {
  border-color: var(--border);
}`,
  ],
  [
    `.trail-meta {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--accent);
  margin: 0.75rem 0 0;
}`,
    `.trail-meta {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--muted);
  margin: 0.75rem 0 0;
}`,
  ],
  [
    `.trail-step-num {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--accent);
  min-width: 1.5rem;
}`,
    `.trail-step-num {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--muted);
  min-width: 1.5rem;
}`,
  ],
  [
    `.featured-card:hover {
  border-color: var(--accent);
  background: var(--accent-soft);
}`,
    `.featured-card:hover {
  border-color: var(--border);
  background: color-mix(in srgb, var(--border) 30%, var(--surface));
}`,
  ],
  [
    `.breadcrumb a:hover {
  color: var(--accent);
}`,
    `.breadcrumb a:hover {
  color: var(--foreground);
}`,
  ],
  [
    `.decision-card-head h2 a:hover {
  color: var(--accent);
}`,
    `.decision-card-head h2 a:hover {
  color: var(--foreground);
}`,
  ],
  [
    `.decision-card-head h3 a:hover {
  color: var(--accent);
}`,
    `.decision-card-head h3 a:hover {
  color: var(--foreground);
}`,
  ],
  [
    `.resource-page-head a:hover {
  color: var(--accent);
}`,
    `.resource-page-head a:hover {
  color: var(--foreground);
}`,
  ],
  [
    `.chapter-glossary-list a:hover {
  color: var(--accent);
}`,
    `.chapter-glossary-list a:hover {
  color: var(--foreground);
}`,
  ],
  [
    `.chapter-toc a:hover {
  color: var(--accent);
}`,
    `.chapter-toc a:hover {
  color: var(--foreground);
}`,
  ],
  [
    `.glossary-jump a:hover {
  color: var(--accent);
  border-color: var(--accent);
}`,
    `.glossary-jump a:hover {
  color: var(--foreground);
  border-color: var(--border);
}`,
  ],
  [
    `.chapter-head h1 {
  font-family: var(--display);
  font-size: clamp(1.85rem, 5vw, 2.5rem);
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  margin: 0 0 0.75rem;
}`,
    `.chapter-head h1 {
  font-family: var(--display);
  font-size: clamp(1.85rem, 5vw, 2.5rem);
  font-weight: 600;
  font-style: normal;
  line-height: 1.2;
  margin: 0 0 0.75rem;
}`,
  ],
  [
    `.figure-id {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 0.5rem;
}`,
    `.figure-id {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 0.5rem;
}`,
  ],
  [
    `.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 200;
  padding: 0.5rem 1rem;
  background: var(--accent);
  color: #fff;
  font-family: var(--mono);
  font-size: 0.78rem;
  text-decoration: none;
}`,
    `.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 200;
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: var(--ink-inverse, #fafafa);
  font-family: var(--mono);
  font-size: 0.78rem;
  text-decoration: none;
}`,
  ],
  [
    `a:focus-visible,
summary:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}`,
    `a:focus-visible,
summary:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}`,
  ],
  [
    `.status-shipped {
  border-color: var(--accent);
  color: var(--accent);
}`,
    `.status-shipped {
  border-color: var(--primary);
  color: var(--foreground);
}`,
  ],
  [
    `.entry-card:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
  background: color-mix(in srgb, var(--accent-soft) 35%, transparent);
  box-shadow: var(--shadow-panel);
}`,
    `.entry-card:hover {
  border-color: var(--border);
  background: color-mix(in srgb, var(--border) 25%, var(--surface));
  box-shadow: var(--shadow-panel);
}`,
  ],
  [
    `.catalog-lesson:hover {
  background: var(--accent-soft);
}`,
    `.catalog-lesson:hover {
  background: color-mix(in srgb, var(--border) 30%, var(--surface));
}`,
  ],
  [
    `.site-search-trigger {
  --pf-background: var(--surface);
  --pf-border: 1px solid var(--border);
  --pf-border-radius: 4px;
  --pf-text-color: var(--muted);
  --pf-primary: var(--accent);
  margin-right: 0.25rem;
}`,
    `.site-search-trigger {
  --pf-background: var(--surface);
  --pf-border: 1px solid var(--border);
  --pf-border-radius: 4px;
  --pf-text-color: var(--muted);
  --pf-primary: var(--primary);
  margin-right: 0.25rem;
}`,
  ],
];

let hits = 0;
for (const [from, to] of pairs) {
  if (s.includes(from)) {
    s = s.replace(from, to);
    hits += 1;
  } else {
    console.warn("miss:", from.slice(0, 48).replace(/\n/g, " "));
  }
}

if (s !== before) {
  fs.writeFileSync(p, s);
  console.log(`cool-industrial-type: wrote (${hits} block swaps)`);
} else {
  console.log("cool-industrial-type: no change");
}
console.log("Cormorant left:", /Cormorant|Source Serif/.test(s));
console.log("italic left:", (s.match(/font-style:\s*italic/g) || []).length);
