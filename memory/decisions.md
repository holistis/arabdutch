# Beslissingen-logboek — arabdutch

Chronologisch logboek van belangrijke beslissingen. Voorkomt dat we discussies later opnieuw voeren.

**Conventie:** nieuwste bovenaan.

---

## Eerder — Direct-to-main flow (geen dev-branch)
- **Beslissing:** Commits gaan direct naar `main`, Railway deployt automatisch.
- **Waarom:** Kleine marketing-site, content-iteratie heeft baat bij snelheid. Geen complexe app-state of betalings-flows die crashen kunnen.
- **Alternatief:** Dev-first flow zoals `ai-app`. Verworpen — onnodige overhead voor de aard van dit project.
- **Status:** ✅ Actief beleid. Zie `CLAUDE.md` "Algemeen".

## Eerder — Marokko-only pakketten, andere landen via maatwerk
- **Beslissing:** Pakketten (Starter €3k / Business €25k / Enterprise €70k) zijn expliciet voor Marokko. Andere landen krijgen geen vaste-prijs-pakket maar een maatwerk-aanvraag.
- **Waarom:** Diepte > breedte. Marokko-expertise = competitive moat (GITEX Casablanca, lokaal netwerk). Andere landen zouden de pakketten oppervlakkig maken.
- **Status:** ✅ Live in commit `150b6f9`.

## Eerder — Pakketprijzen 70% onder markt
- **Beslissing:** Starter €3k, Professional €25k, Enterprise €70k = bewust 70% onder markt-vergelijkbare consultancy.
- **Waarom:** Marktaandeel-strategie. Hogere conversie + meer cases voor portfolio belangrijker dan marge in pioniersfase.
- **Status:** ✅ Live in commit `1b0ffb8`. Heroverwegen bij portfolio >10 cases.

## Eerder — Geld-terug-garantie verwijderd, herroepingsrecht B2B in AV opgenomen
- **Beslissing:** Geen geld-terug-garantie meer aanbieden. In plaats daarvan een correct herroepingsrecht-artikel voor B2B in Algemene Voorwaarden.
- **Waarom:** Geld-terug-garantie zonder duidelijke criteria = misbruik-risico. Wettelijk B2B-herroepingsrecht is helderder en juridisch zuiver.
- **Status:** ✅ Live in commit `e5e4728`.

## Eerder — Alle em-dashes (—) verwijderd uit blogposts
- **Beslissing:** Geen em-dashes in publieke content. Vervang door komma's of haakjes.
- **Waarom:** Em-dashes worden geassocieerd met AI-gegenereerde content. Houden ondertussen Holistis-organisatie-stijl consistent.
- **Status:** ✅ Live in commit `d478c24`. Voortaan ook geen em-dashes in nieuwe blogs.

## Eerder — Stripe Payment Links voor alle 16 producten
- **Beslissing:** Geen custom Stripe-integratie / checkout-flow. Wel Stripe Payment Links per product.
- **Waarom:** Simpel, geen server-side state, schaalt zonder code-aanpassing per product, geen PCI-scope.
- **Status:** ✅ Live in commit `18c445d`. Nieuwe Marokko-pakket-links in commit `563f9d7`.

## Eerder — ScrollToTop robuust gemaakt met useLayoutEffect + scrollRestoration manual
- **Beslissing:** Route-change handler die garanteert dat elke pagina bovenaan begint.
- **Waarom:** Hash-links en scroll-positie-onthouding zorgden voor verwarrende navigatie.
- **Status:** ✅ Live in commits `0594280` en `f09a02b`.

## Eerder — Cinematic / luxe redesign voor alle subpagina's
- **Beslissing:** Premium visuele stijl: LandGids, BlogPost, Contact, etc.
- **Waarom:** Marokko vastgoedgids + €70k Enterprise-pakket vereisen luxe-uitstraling, niet web-template-look.
- **Status:** ✅ Live in commits `4e6b9e7`, `3357baa`, `e4f836b`.
