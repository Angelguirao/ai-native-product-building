# Migration checklist

Use when Chapter 07 exit criteria are met — moving from vibe tool to owned codebase.

## Before you cut over

- [ ] **Problem bet** written — one sentence, still true after prototype
- [ ] **Workflow checklist** from prototype — steps a real user runs, not demo path only
- [ ] **Data model** sketched — entities, ownership, delete/export expectations
- [ ] **Auth** — who signs in, how sessions end, what guests see
- [ ] **Billing** (if any) — price, trial, webhook failure behavior
- [ ] **Observability** — errors visible without opening the vibe tool dashboard
- [ ] **CI** — test or smoke command runs on push
- [ ] **Deploy** — production URL, env vars documented

## Migrate vertically

Do not rewrite everything at once.

1. Auth + identity
2. Core data + migrations
3. Payments (if applicable)
4. Polish + edge cases

## Tombstone the prototype

Keep the old URL or export with a short note: what was validated, what was discarded, date of cutover.
