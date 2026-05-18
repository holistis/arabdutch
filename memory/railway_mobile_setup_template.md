# Sjabloon: nieuw Railway-project mobiel-klaar maken

Doe dit voor elk nieuw project dat je vanuit Claude Code op web/mobiel wilt kunnen aansturen.

## De toverzin (kopieer letterlijk, vul projectnaam in)

Start een Claude Code web-sessie op de doel-repo en stuur dit bericht:

```
Maak deze repo mobiel-klaar en volledig geautomatiseerd volgens het 
patroon van https://github.com/holistis/ai-app.

Projectnaam: [VUL IN]

STAP 1 — Vraag mij eerst:
- Wat is het domein / de URL van dit project?
- Welk Railway-project hoort hierbij?
- Korte projectbeschrijving in één zin?

STAP 2 — Kopieer uit ai-app:
- CLAUDE.md
- memory/work_log.md
- memory/feedback_railway_logs.md
- memory/railway_mobile_setup_template.md
- scripts/check-railway-logs.sh
- .claude/hooks/session-start.sh
- .claude/settings.json

STAP 3 — Maak nieuw:
- memory/project_<projectnaam>.md (met de info uit stap 1)

STAP 4 — Pas aan in alle bestanden:
- Projectnaam, beschrijving, domein
- Sectie "Project" in CLAUDE.md
- Werklog: schrijf je eerste entry bovenaan met wat je net deed
- Maak .claude/hooks/session-start.sh executable (chmod +x)
- Check welke deployment-config dit project gebruikt (railway.json /
  railway.toml / vercel.json) en verwijs er correct naar in CLAUDE.md
  en memory/project_<naam>.md

STAP 5 — Test:
- Draai .claude/hooks/session-start.sh handmatig, controleer output

STAP 6 — Commit en push naar een feature branch.

STAP 7 — Bevestig wat je gedaan hebt en lijst openstaande TODO's
(zoals RAILWAY_TOKEN instellen of PR Environments aanzetten).
```

Daarna doet de Claude van die sessie het werk in ~2 minuten.

## Voorbereiding (eenmalig per cloud-omgeving)

### 1. Repo aan cloud-Claude koppelen

Claude Code web → instellingen → GitHub integration → repo toevoegen aan de toegestane lijst.

### 2. Railway token instellen (één keer voor alle projecten)

- Ga naar railway.app → Account Settings → Tokens → New Token
- Voeg in Claude Code web environment toe als secret: `RAILWAY_TOKEN`

### 3. Network policy

Cloud environment moet `railway.app` mogen bereiken. Check de omgevingsinstellingen in Claude Code web.
