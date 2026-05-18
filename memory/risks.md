# Risico-register — arabdutch

Bekende valkuilen voor de marketing-site. Proportional gehouden — geen healthcare-grade risico's want andere aard project.

**Conventie:** ernstige risico's bovenaan.

---

## ⚠️ Content / juridisch (middel)

### R001 — Em-dashes (—) in publieke content
- **Risico:** Em-dashes worden geassocieerd met AI-gegenereerde content. Hurt geloofwaardigheid en valt op bij detectoren.
- **Mitigatie:** Bij elke nieuwe blog/UI-tekst: zoek-en-vervang em-dashes door komma's of haakjes. Zie commit `d478c24` voor patroon.
- **Als het misgaat:** Snelle find-and-replace + nieuwe commit.

### R002 — Stripe Payment Links breken stil (link rot)
- **Risico:** 16 Stripe Payment Links + 3 Marokko-pakket-links in code. Als één in Stripe-dashboard wordt verwijderd/aangepast, breekt de koop-knop zonder errors.
- **Mitigatie:** Stripe-dashboard-links niet handmatig wijzigen. Bij nieuw product = nieuwe link genereren + commit. Quartaal-test van alle links.
- **Als het misgaat:** Test-aankoop verricht falen → snel vervangen.

### R003 — Pakketprijzen / marktpositie reset
- **Beslissing eerder:** 70% onder markt (zie `decisions.md`). Bewust gekozen voor markaandeel-fase.
- **Risico:** Bij portfolio >10 cases zijn prijzen niet meer verdedigbaar als concurrentie reageert.
- **Mitigatie:** Quartaal-review of pricing aangepast moet worden. Zie `questions.md` Q003.

### R004 — Misverstand B2B vs consument
- **Risico:** Geen geld-terug-garantie meer; herroepingsrecht is B2B-versie. Consument-koper (zou niet moeten gebeuren via Stripe Payment Links) kan claim doen voor consumenten-herroepingsrecht.
- **Mitigatie:** Stripe Payment Links + checkout-pagina maken B2B-aard duidelijk. Algemene Voorwaarden expliciet over B2B-scope.
- **Als het misgaat:** Juridisch advies inwinnen, individuele oplossing.

## ⚠️ Technisch (laag-middel)

### R005 — i18n vertaal-keys ontbreken voor nieuwe content
- **Risico:** Bij toevoegen NL-string vergeten EN/AR/etc. te vullen → witte gaten in UI.
- **Mitigatie:** Bij elke commit met content-wijziging alle taal-files updaten of `t()` met fallback.
- **Als het misgaat:** Quick-fix met defaultValue in `t()` calls.

### R006 — ScrollToTop regressie bij router-update
- **Risico:** React-router v6 → v7 update kan ScrollToTop-component breken. Eerder al 2 commits nodig (`0594280` + `f09a02b`) om robuust te krijgen.
- **Mitigatie:** Bij router-upgrade expliciet ScrollToTop testen op blog-detail → home navigatie.
- **Als het misgaat:** Rollback + opnieuw `useLayoutEffect + scrollRestoration manual` patroon toepassen.

### R007 — Direct-to-main = productie-crash impact direct
- **Risico:** Aangezien er geen dev-branch is, gaat een TypeScript build error direct naar productie via Railway.
- **Mitigatie:** `npm run build` lokaal voor elke push. Railway healthcheck zou crashes vangen maar gebruiker ziet kortstondig fout.
- **Als het misgaat:** Snelle revert-commit. Bij twijfel: feature-branch en handmatig deployen via Railway.

## ⚠️ Externe afhankelijkheden (laag)

### R008 — Lab-demo-link naar SiteCraft-AI Railway-URL
- **Risico:** Hardcoded URL in code (zie commit `167a73d`). Als SiteCraft-AI's Railway-URL wijzigt, breekt de link stil.
- **Mitigatie:** SiteCraft-AI-URL als env var of via custom domein zodat link stabiel blijft.
- **Als het misgaat:** Link updaten + nieuwe deploy.

### R009 — WhatsApp business-nummer hardcoded
- **Risico:** Als telefoonnummer wijzigt, breekt de WhatsApp-button stil.
- **Mitigatie:** Nummer als env var of in `data/`-config zodat één plek wijzigen genoeg is.
- **Als het misgaat:** WhatsApp-button update + deploy.
