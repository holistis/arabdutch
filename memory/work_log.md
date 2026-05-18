# Werklogboek — arabdutch-site
Gedeeld geheugen tussen laptop, web en mobiel Claude-sessies.
Regels: nieuwste blokje bovenaan, per sessie datum+omgeving+wat+waarom+TODO.

---

## 2026-05-18 (2e blok) — door web-Claude (feature branch `claude/ci-workflow`)

- `.github/workflows/ci.yml`: Vite build + lint + **em-dash-detector** voor `src/data/blogPosts.ts` en `landGidsen.ts`. Faalt CI als iemand per ongeluk een em-dash in publieke content stopt — de regel uit `memory/decisions.md` wordt nu actief afgedwongen.
- Geen handover-doc — arabdutch is een marketing/content-site, direct-to-main flow.
- Effect: rookmelders bij direct-to-main flow. Een commit met em-dashes haalt het niet meer door CI.

## 2026-05-17 — door laptop-Claude (setup)
- memory/work_log.md aangemaakt
- werklogboek-systeem geactiveerd
