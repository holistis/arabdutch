# Domain — arabdutch

Business-context, gebruikers, terminologie. Wat een nieuwe Claude-sessie moet weten om iets te begrijpen zonder eerst 20 files te lezen.

---

## Wat is ArabDutch

ArabDutch is een brug tussen Nederland en Marokko (en breder: de MENA-regio). Het platform bundelt:

- **Marokko vastgoedgids** — diepgaande landengids en blogs voor Nederlanders die in Marokko investeren of zaken doen
- **AI-zoekrapporten** — rapporten over locaties / regio's in Marokko (vervangt het oudere "Temara rapport" met een complete vastgoedgids 2026)
- **Strategiegesprek** — boekbare één-op-één sessie voor concrete vragen
- **Marokko-pakketten** — Starter €3k / Business €25k / Enterprise €70k voor vastgoed- of business-trajecten
- **Maatwerk** voor andere landen dan Marokko
- **Content** — blogs over Marokko-actualiteiten, GITEX Future Health Africa Casablanca 2026, Kem Kem (paleontologie/cultuur), etc.

## Voor wie

- Nederlandse investeerders met interesse in Marokkaans vastgoed
- Nederlandse ondernemers die in/met Marokko zaken willen doen
- B2B-klanten (geen consumenten — herroepingsrecht is B2B)
- MENA-doelgroep via Engels (cross-promotie met `holistis/ai-app` SEO-strategie)

## Stack

| Laag | Technologie |
|---|---|
| Framework | Vite + React 19 + TypeScript |
| Styling | Tailwind CSS + custom luxe components (LuxeHero, CustomCursor, Spotlight) |
| i18n | react-i18next + i18next-browser-languagedetector |
| Routing | react-router-dom v6 |
| DB / forms | Supabase (lichte gebruik — contact-form, lead-capture, newsletter) |
| Payments | Stripe Payment Links (geen custom checkout) |
| Hosting | Railway (auto-deploy vanaf `main`) |
| Hoofdbranch | `main` → productie |

## Belangrijke pagina-structuur

```
src/pages/
├── Home.tsx                  # Hero + services overview
├── Diensten.tsx              # Wat we doen
├── Landen.tsx + LandGids.tsx # Marokko-gids
├── Pakketten.tsx             # Starter / Business / Enterprise + Stripe Payment Links
├── Strategiegesprek.tsx      # Boekbaar
├── Blog.tsx + BlogPost.tsx   # Content marketing
├── Inzichten.tsx + OnsWerk.tsx + OverOns.tsx
├── Contact.tsx               # Offerte-formulier met service-selector
├── AlgemeneVoorwaarden.tsx + Privacyverklaring.tsx + Disclaimer.tsx + Cookiebeleid.tsx
└── Logos.tsx                 # Brand-assets / klant-logo's
```

## Producten en prijzen

| Product | Prijs | Vorm |
|---|---|---|
| Marokko vastgoedgids (rapport) | _Stripe Payment Link_ | Direct kopen |
| Strategiegesprek | _Stripe Payment Link_ | Direct boeken |
| Pakket Starter (Marokko-only) | €3.000 | Stripe Payment Link |
| Pakket Business (Marokko-only) | €25.000 | Stripe Payment Link |
| Pakket Enterprise (Marokko-only) | €70.000 | Stripe Payment Link |
| Andere landen | maatwerk | Aanvraag via offerte-formulier |

## Stijl-regels

- **Geen em-dashes** (—) in publieke content (blogs, UI, e-mails). Vervang door komma's of haakjes.
- **Luxe / cinematic** visuele stijl voor alle subpagina's (zie `LuxeHero`, `Spotlight`, `CustomCursor` components).
- **Tweetalig** waar zinvol (NL primair, AR voor MENA-doelgroep waar al ondersteund).

## Externe samenhang

- Lab-demo-link → live SiteCraft-AI Railway URL (`holistis/SiteCraft-AI`)
- WhatsApp business button voor laagdrempelig contact
- Newsletter-signup → Supabase + e-mail-tooling
