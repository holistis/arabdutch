# ArabDutch

> Brug tussen Nederland en Marokko: vastgoedgids, AI-zoekrapporten, strategiegesprek en B2B-pakketten.

## Wat is ArabDutch?

Een professioneel platform voor Nederlandse investeerders, ondernemers en professionals met interesse in Marokko (en breder MENA). We bieden:

- **Marokko vastgoedgids**: complete landengids 2026
- **AI-zoekrapporten**: diepgaande locatie- en regio-analyses
- **Strategiegesprek**: boekbare één-op-één sessie
- **B2B-pakketten** voor vastgoed- of business-trajecten (Marokko-only)
- **Content**: blogs over GITEX Future Health Africa, Kem Kem, Marokko-actualiteiten

## Pakketten en pricing

| Pakket | Prijs | Voor wie |
|---|---|---|
| Starter | €3.000 | Verkennen, eerste stappen |
| Business | €25.000 | Concreet traject |
| Enterprise | €70.000 | Volledig vastgoed- of business-project |

Andere landen dan Marokko: maatwerk via offerte-formulier.

## Stack

| Laag | Technologie |
|---|---|
| Framework | Vite + React 19 + TypeScript |
| Styling | Tailwind CSS + custom luxe components |
| i18n | react-i18next |
| Routing | react-router-dom v6 |
| Forms / data | Supabase |
| Payments | Stripe Payment Links |
| Hosting | Railway (EU) |

## Lokaal draaien

```bash
npm install
npm run dev
```

Build voor productie:
```bash
npm run build
```

Lint:
```bash
npm run lint
```

## Deployment

Direct-to-main: elke `git push origin main` triggert een Railway auto-deploy. Geen dev-branch, kleine marketing-site die snel itereert. Zie `CLAUDE.md` voor werkafspraken.

## Repo-geheugen

Project-specifieke context staat in `memory/`:
- `work_log.md` (chronologisch journal)
- `decisions.md` (belangrijke beslissingen)
- `domain.md` (business + stack)
- `risks.md` (bekende valkuilen)
- `questions.md` (open product-owner-vragen)
- `project_arabdutch.md` (Railway-koppeling)

## Stijl-regels

- Geen em-dashes in publieke content
- Luxe / cinematic visuele stijl voor subpagina's
- Tweetalig waar zinvol (NL primair, AR voor MENA)

## Externe samenhang

- Lab-demo-link verwijst naar `holistis/SiteCraft-AI` Railway-URL
- WhatsApp business button voor laagdrempelig contact

## Licentie

Proprietary, onderdeel van de Holistis-organisatie.
