# Project mapping — arabdutch

| Item | Waarde |
|---|---|
| Beschrijving | NL ↔ Marokko brug: vastgoedgids, AI-zoekrapporten, strategiegesprek, blogs |
| GitHub repo | `holistis/arabdutch` |
| Stack | Vite + React 19 + TypeScript + Supabase + react-i18next + Stripe Payment Links |
| Type | Marketing + content site (geen complexe app-logica) |
| Deployment | Railway (auto-deploy vanaf `main`) |
| Hoofdbranch | `main` → productie |
| Flow | **Direct-to-main** (geen dev-branch) — kleine marketing-site, snel iteren |

## Live URL

_(vul aan zodra bekend — vermoedelijk arabdutch.nl of vergelijkbaar)_

## Belangrijke routes

- `/` — luxe hero, services overview
- `/diensten` — wat we doen
- `/landen` + `/landgids` — landen-pagina's, Marokko-vastgoedgids
- `/pakketten` — Marokko-pakketten: Starter €3k / Business €25k / Enterprise €70k
- `/strategiegesprek` — boekbare strategiegesprek
- `/blog` + `/inzichten` — content marketing (Kem Kem, GITEX Casablanca, etc.)
- `/onswerk` + `/overons` — portfolio + team
- `/contact` — offerte-formulier met service-selector

## Producten / monetisatie

- **Pakketten Marokko-only** — Starter €3k, Business €25k, Enterprise €70k (alle via Stripe Payment Links)
- **16 producten met Stripe Payment Links** — rapporten, strategiegesprekken, pakketten
- Andere landen via maatwerk-aanvraag

## Externe links

- Lab demo → SiteCraft-AI Railway URL (commit `167a73d`)
- WhatsApp business button voor directe contact

## Railway-koppeling

```bash
railway status
railway link <project-id>
```
