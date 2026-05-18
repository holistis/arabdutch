# ArabDutch — Werkafspraken voor Claude

## Werklogboek — bij start en einde van elke sessie
Bij start: lees memory/work_log.md.
Bij einde: schrijf bovenaan een nieuw blokje:
```
## YYYY-MM-DD HH:MM — door <laptop|web|mobiel>-Claude
- Wat gedaan / Waarom / TODO
```

## Railway deploys
Na elke `git push origin main`:
1. Poll build logs: `until railway logs --build --lines 5 2>&1 | grep -q "Healthcheck\|ERROR\|FAILED"; do sleep 15; done`
2. Check runtime: `railway logs --lines 10`
3. Healthcheck OK → meld "Deploy OK"
4. Error → fix direct, push opnieuw

## Algemeen
- Commits gaan direct naar main (Railway deployt automatisch)
- Nooit user vragen om Railway logs te sturen
- Geen approve-prompts (bypassPermissions actief)

## Memory

Repo-geheugenbestanden (gedeeld tussen alle Claude-omgevingen via git):
- `memory/work_log.md` — werklogboek (chronologisch journal), lees dit bij sessie-start
- `memory/decisions.md` — belangrijke beslissingen (pricing, Marokko-only, Stripe Payment Links, em-dash beleid)
- `memory/domain.md` — business + stack + pagina-structuur
- `memory/risks.md` — bekende valkuilen (link-rot, B2B vs consument, i18n)
- `memory/questions.md` — openstaande product-owner-vragen
- `memory/project_arabdutch.md` — Railway project mapping
- `memory/feedback_railway_logs.md` — Railway-logs werkwijze
- `memory/railway_mobile_setup_template.md` — sjabloon voor andere repos

## Stijl-regels (publieke content)

- **Geen em-dashes** (—) in blogs, UI, e-mails. Vervang door komma's of haakjes.
- **Luxe / cinematic** visuele stijl voor subpagina's.
