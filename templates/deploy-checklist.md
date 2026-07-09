# Deploy checklist

Release:

## Pre-merge

- [ ] CI green (build, lint, test)
- [ ] Preview URL — core workflow exercised
- [ ] Migrations reviewed (if any) — backup or rollback noted
- [ ] Env vars for prod set in host (not in PR)

## Production deploy

- [ ] Deploy initiated by:
- [ ] Migration run (if separate step):

## Post-deploy (first 15 min)

- [ ] Sign in / core path on prod
- [ ] Error logs — no new spikes
- [ ] Payment or webhook smoke (if applicable)

## Rollback plan

If broken:

-

## Note

What shipped · PR link · what to watch:
