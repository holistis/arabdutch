# Werklogboek — arabdutch-site
Gedeeld geheugen tussen laptop, web en mobiel Claude-sessies.
Regels: nieuwste blokje bovenaan, per sessie datum+omgeving+wat+waarom+TODO.

---

## 2026-07-24 — door laptop-Claude (Fresh Food adviesrapport, buiten website-codebase)

- Opdracht: elite tweetalig (NL+AR) fiscaal/juridisch adviesrapport voor klant Fresh Food (Egyptisch bedrijf, export zoete aardappelen), t.a.v. de heer Ibrahim Salem. Dit is een consultancy-deliverable van ArabDutch zelf, geen wijziging aan de site-codebase.
- Aanpak: Workflow-tool met 6 parallelle onderzoekslijnen (fiscale vergelijking eigen BV vs. uitbesteden, kostenraming, rechtsvorm tweede onderneming incl. stichting/ANBI-risico, werk-/verblijfsvergunningen, import/douane zoete aardappelen, stappenplan+tijdlijn) + onafhankelijke verificatieronde op ~40 kritieke cijfers tegen officiële bronnen (belastingdienst.nl, ind.nl, kvk.nl, wetten.overheid.nl, douane.nl, nvwa.nl).
- Belangrijke correcties uit verificatie: btw-verlaging naar 0% op groente per 2027 is NIET doorgegaan (amendement verworpen door Tweede Kamer, 27 nov 2025) — blijft 9%. 30%-regeling salarisdrempel: het wettelijke basisbedrag (€46.107) is niet het actuele 2026-bedrag; werkelijk geïndexeerd 2026-bedrag is hoger — daarom bewust niet met een fout cijfer in het rapport opgenomen.
- Output: twee PDF's (elite ArabDutch-huisstijl: navy/goud, logo, Playfair Display+Inter voor NL, Amiri+Cairo voor AR/RTL) in `C:\Users\hp\OneDrive\Desktop\Fresh Food - ArabDutch Rapporten\` — bronbestanden (report-nl.html, report-ar.html, assets/) staan er ook bij voor eventuele herziening.
- Bug gevonden+gefixt tijdens QA: `.num`-tabelklasse had `white-space:nowrap` wat lange tekstwaarden liet overlopen buiten de pagina en labels woord-voor-woord liet afbreken (vooral zichtbaar in Arabisch) — opgelost door nowrap te verwijderen. Ook: position:fixed footer verscheen bovenaan i.p.v. onderaan de pagina in Chrome print-to-pdf — footer daarom verwijderd i.p.v. verder proberen te fixen.
- Openstaand: **RESEND_API_KEY ontbreekt in .env.local** — rapporten konden dus niet automatisch gemaild worden naar info@arabdutch.com zoals gevraagd. Klant moet de sleutel aanleveren (Resend account) of de PDF's handmatig ophalen/versturen vanaf bovenstaand pad.
- PDF-renderpijplijn (herbruikbaar): HTML+CSS (fonts als base64 @font-face embedded) → `chrome.exe --headless --disable-gpu --no-pdf-header-footer --print-to-pdf=... --no-sandbox`. Voor visuele QA van PDF-pagina's: `pip install pypdfium2` (werkte; pymupdf gaf een DLL-fout op deze machine, poppler/pdftoppm niet geïnstalleerd).

## 2026-06-24 — door laptop-Claude (padmigratie + sessie-afsluiting)

- Gebruiker heeft alle projectmappen verplaatst van OneDrive naar `C:\CODE\`.
- arabdutch-site nieuwe locatie: `C:\CODE\arabdutch-site`
- Memory gekopieerd naar `C:\Users\hp\.claude\projects\c--CODE-arabdutch-site\memory\` zodat volgende Claude-sessie vanuit C:\CODE alles terugvindt.
- Geen code-wijzigingen aan arabdutch deze sessie. Werk was MergeFix (sitecraft-ai).
- TODO volgende sessie: foto's verwerken (4 WhatsApp-fotos staan in public/ klaar), contactformulier, www-verificatie, TransIP opzeggen.

## 2026-05-18 (2e blok) — door web-Claude (feature branch `claude/ci-workflow`)

- `.github/workflows/ci.yml`: Vite build + lint + **em-dash-detector** voor `src/data/blogPosts.ts` en `landGidsen.ts`. Faalt CI als iemand per ongeluk een em-dash in publieke content stopt — de regel uit `memory/decisions.md` wordt nu actief afgedwongen.
- Geen handover-doc — arabdutch is een marketing/content-site, direct-to-main flow.
- Effect: rookmelders bij direct-to-main flow. Een commit met em-dashes haalt het niet meer door CI.

## 2026-05-17 — door laptop-Claude (setup)
- memory/work_log.md aangemaakt
- werklogboek-systeem geactiveerd
