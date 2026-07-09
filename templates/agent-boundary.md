# Agent boundary

Per-repo rules for humans and agents. Link from `AGENTS.md`.

## Allowed without asking

- Edit files under:
- Add tests under:
- Docs and comments
- Dependency patches (minor/patch only): yes / no

## Forbidden — human gate required

- [ ] Database migrations
- [ ] Auth / permissions / RLS
- [ ] Payments, billing, webhooks
- [ ] Sending email / SMS / external side effects
- [ ] Production env vars and secrets
- [ ] CI workflow changes
- [ ] Major dependency upgrades

## Verify before merge

```bash
npm run lint
npm run build
npm test
```

## Deploy

- Agent may open PR: yes / no
- Human approves production deploy: always

## Lessons (append when agent surprises us)

-
