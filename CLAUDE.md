# ArabDutch — Werkafspraken voor Claude

## Werklogboek — bij start en einde van elke sessie
Bij start: lees memory/work_log.md.
Bij einde: schrijf bovenaan een nieuw blokje:
```
## YYYY-MM-DD HH:MM — door <laptop|web|mobiel>-Claude
- Wat gedaan / Waarom / TODO
```

## Hosting (Coolify op Hetzner)
Sinds 2026-09-07 gemigreerd van Railway (leeg account, deployt niets meer) naar een
eigen Hetzner-server, beheerd via Coolify:
- Server: 138.201.204.97 (root via SSH)
- Coolify app-id: 5 (arabdutch, poort 8183 → intern 3001)
- Domein: arabdutch.com + www.arabdutch.com
- Certificaat: HTTP-01/webroot (niet Cloudflare-DNS)
- GitHub-webhooks op deze repo: 0 ingesteld → een `git push origin main` deployt
  NIETS automatisch. Deploy gaat nu nog handmatig via het Coolify-dashboard
  (127.0.0.1:9090, alleen bereikbaar vanaf de server zelf of via SSH-tunnel).
  Check bij twijfel opnieuw of er ondertussen een webhook is ingericht, dat kan
  dit voorbehoud stil hebben ingehaald.

## Algemeen
- **NOOIT direct naar main pushen.** Werk altijd op een dev-/feature-branch, valideer
  (build/typecheck), push die branch naar origin en vraag de koning expliciet om te
  testen voor een merge naar main volgt. Dit is een harde globale regel (zie
  `~/.claude/CLAUDE.md`), geen project-specifieke uitzondering — Railway's
  automatische main-deploy is weg, dus er is ook geen technische reden meer om
  hiervan af te wijken.
- Nooit user vragen om Railway-logs te sturen, Railway bestaat niet meer voor dit project
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
