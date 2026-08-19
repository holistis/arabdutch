# Werklogboek — arabdutch-site
Gedeeld geheugen tussen laptop, web en mobiel Claude-sessies.
Regels: nieuwste blokje bovenaan, per sessie datum+omgeving+wat+waarom+TODO.

---

## 2026-08-19 — door web-Claude (AI Opportunity Atlas: onderzoek uitgevoerd, eindrapport v1)

- **Wat:** het masterprotocol van de eigenaar daadwerkelijk uitgevoerd met multi-agent-workflows (schone lei, zonder bestaande repos als input). Fase 1: 8 domein-scouts, 164 signalen, 46 hypotheses, 88 ideeën gekild. Fase 3-8: 14 kandidaten geclusterd en onafhankelijk geverifieerd (5 bewijspijlers + economic reality check), 4 red teams afgerond (C01-C04, alle survival laag).
- **Kernbevinding:** geen enkele kandidaat heeft direct betaalbewijs voor het specifieke aanbod (alle 14 PARTIALLY_CONFIRMED, dus cap 60/100). Compliance-deadline-kansen sneuvelen structureel bij het red team (gratis ontsnappingsroutes). Diensten verslaan tools. #1 bet: 48-uurs calculatiedienst installatie/bouw-MKB; #2 remote praktijkmanager huisartsen; #3 NetruimteScan. Eerste stap: €100-falsificatietests die aanbetaling meten.
- **Beperking:** maandelijkse spend-limiet brak 10 red teams (C05-C14) en de committee-agent af; ranking C05-C14 is LOW CONFIDENCE, committee-weging door hoofdonderzoeker gedaan. Workflow resumeerbaar (run wf_79c61b60-513, verificaties gecached).
- **Bestanden:** `research/ai-opportunity-atlas/eindrapport.md` + `data/fase1_scouts.json` + `data/fase2_verificatie_partieel.json`, branch `claude/ai-opportunity-atlas-zhupwb`.
- **TODO:** na limiet-verhoging red teams C05-C14 + committee resumen; daarna gap-research top 3; daarna de tests in de echte wereld.

## 2026-08-18 — door web-Claude (AI Opportunity Atlas: onderzoeksprotocol v1)

- **Wat:** meedenk-sessie over de "slimme boer"-metafoor uitgewerkt tot een concreet onderzoeksprotocol. Nieuw: `research/ai-opportunity-atlas/protocol.md` (7 fasen, funnel, scoringsmodel, kill-criteria) en `masterprompt.md` (5 agent-rollen: scout, analist, modelleur, red team, synthesist). Branch: `claude/ai-opportunity-atlas-zhupwb`.
- **Belangrijkste toevoegingen t.o.v. het oorspronkelijke voorstel:** Fase 0 (inventaris van eigen asymmetrieën, met NL<->MENA-corridor als dwarsdoorsnede en fit-score van 20% in de weging), validatie-ladder met echte-wereld-bewijs (geen bouw boven smoke test zonder pre-sale), verplicht kerkhof-onderzoek en red team per topkans, atlas als levend monitorsysteem i.p.v. eenmalig rapport, en budget-regel: alleen gratis bronnen (les uit R005/R006).
- **TODO voor eigenaar:** Fase 0-inventaris in protocol.md nalopen en accorderen, daarna scouts starten (fase 1).
- **Aanvulling later die dag:** eigenaar stelde MAX_KAPITAAL = €500 vast. Fase 0-inventaris gevuld op basis van echte repo-inspectie (zorgscript-development/ZorgAssist, pilot-AI-production/PeilAI, sitecraft-ai, al-yad): twee vrijwel afgebouwde producten in verplichte/administratieve markten (PeilAI code-compleet maar nog niet live; ZorgAssist live op fysioverslag.nl met pricing). Conclusie in sessie: schaarse factor is distributie en focus, niet bouwen; PeilAI lanceren + eerste founding customers is de hoogst scorende kans binnen €500.

## 2026-08-13 — door web-Claude (security-check na hack + Google Cloud kostenlek gedicht)

Sessie begon met een hackmelding en eindigde bij een Google Cloud rekening van €100,39. Drie losstaande zaken, allemaal uitgezocht. Werk raakte vooral `ai-app` en `wazir-al-ghanima`, niet de arabdutch-site zelf.

### 1. Security-check na gehackte GitHub van externe samenwerker

- **Aanleiding:** een samenwerker met toegang tot `ai-app` meldde dat zijn GitHub of een token gehackt was. Later toegelicht als: kwaadaardig npm-package, "Noord-Korea, via Ethereum wallet". Dat past op het bekende Lazarus/"Contagious Interview"-patroon: nep-packages (vaak crypto-tooling of nep-sollicitatieopdrachten) die browserwachtwoorden, SSH-keys, npm/GitHub-tokens en wallets van de machine stelen.
- **Door hem genoemde indicatoren gecontroleerd:** een `postcss.config.mjs` met één eindeloos lange regel, en `branch_structure.json` / `temp_auto_push.bat` / `temp_interactive_push.bat` in `.gitignore`. **Geen van beide aangetroffen**, in `arabdutch` noch `ai-app`, ook niet in de volledige git-historie.
- **Secret-scan:** volledige historie van `ai-app`, `wazir-al-ghanima` en de publieke `bug-bounty-intelligence-mcp` doorzocht op `AIza`-keys en service-account-sleutels. **Niets gelekt.** De gecommitte `.env.production`-bestanden in `ai-app` bevatten alleen publieke Clerk-keys (`pk_live_`) en dummy-waarden, conform de uitzondering die in `.gitignore` gedocumenteerd staat.
- **Collaborators van alle 9 private repos nagelopen.** Overal alleen `holistis` (admin), behalve `ai-app`.
- ⚠️ **OPEN: `mousadirksz` heeft nog write-toegang op `ai-app`.** Verwijderen via github.com/holistis/ai-app/settings/access. Nog niet gebeurd. Zijn laatste commit was 20 juni; sindsdien alleen eigen commits.
- **Advies dat nog staat:** zijn hele machine geldt als besmet, niet alleen zijn GitHub. Elke credential die hij ooit heeft gezien of ingetypt moet hij vanaf een schone machine roteren.

### 2. Dependabot CVE in ai-app (GHSA-jmr9-qjv8-65gv, extract-zip)

- `extract-zip` 2.0.1 (symlink path traversal, high) kwam binnen via `puppeteer` 24.x → `@puppeteer/browsers` 2.x. Er is geen gepatchte extract-zip; `@puppeteer/browsers` 3.x verving het pakket volledig door `modern-tar`. Daarom was een puppeteer major-bump 24 → 25.7.0 de enige route.
- Puppeteer 25 schrapte `networkidle0` als geldige `waitUntil` voor `page.setContent()` (blijft wel geldig voor `page.goto()`). Beide PDF-generators gebruikten dat juist om op de Google Fonts stylesheet te wachten. Vervangen door `waitUntil: "load"` plus een expliciete `document.fonts.ready`-wacht, hetzelfde best-effort patroon met 3s-timeout dat `pdfGeneratorV2.ts` al toepaste.
- **Geverifieerd:** `tsc --noEmit` geeft exact dezelfde 29 pre-existing fouten als onaangeraakt main (geen nieuwe), `npm run build` slaagt, en beide `generatePDFBuffer()`-functies draaien end-to-end door een echte Chromium-launch.
- ✅ **Gemerged naar main** (`0d7ee03`) nadat de twijfel over het lettertype alsnog is weggenomen. De sandbox-proxy blokkeert Chromium's toegang tot fonts.googleapis.com, dus in plaats daarvan is het mechanisme deterministisch getest met een lokale HTTP-server die een webfont pas 1500ms ná het `load`-event uitlevert. Resultaat: het font belandt gewoon in de PDF (`BaseFont /AAAAAA+DejaVuSerif-Bold` in plaats van een fallback). Dezelfde test op de oude `networkidle0`-code geeft exact hetzelfde resultaat, dus de omzetting is gedragsneutraal op precies het punt waar de zorg zat.
- **Valkuil bij dat testen, voor de volgende keer:** de eerste testronde leek te bewijzen dat het font NIET laadde, in beide versies. Dat was een fout in de test, niet in de code: `@font-face` is CORS-gebonden en de testserver stuurde geen `Access-Control-Allow-Origin`. Let daar op, `document.fonts.status` wordt namelijk óók `"loaded"` als een font-fetch is mislukt, dus die status alleen is geen bewijs.
- Bij het pushen meldde GitHub **69 kwetsbaarheden op main** (1 critical, 39 high, 25 moderate, 4 low). Alleen de root-dependencies zijn aangepakt. `monitor/`, `shorts/` en `mobile/` hebben eigen dependency-trees en zijn niet bekeken.

### 3. Google Cloud: €99,34 in 13 dagen. Oorzaak gevonden en gedicht

**Symptoom:** billing-account `012D63-16365B-BD2BE2` stond op €100,39 openstaand, Visa geweigerd. Verbruik: juni €0,00 → 1 t/m 13 augustus €99,34. Twee gekoppelde projecten: `gen-lang-client-0222081237` (AI Studio) en `vertex-api-501516` (Vertex).

**Oorzaak 1, het lek zelf.** In `wazir-al-ghanima/src/free-llm.ts` stond Vertex AI als **stap 0** van de "GRATIS-VANGNET-KETTING", met het commentaar *"gratis GCP credits"*. Dat klopte zolang het proeftegoed (~€255, het `$300`-trialtegoed) liep. Dat tegoed is opgebruikt en **Vertex heeft geen gratis tier**, dus stap 0 werd stilzwijgend een betaalde call. Omdat het de eerste stap was, ging élke LLM-call daarheen en werd de rest van de keten (Cerebras, Together, GitHub Models, Groq, SambaNova, OpenRouter, Mistral, Qwen, Ollama) nooit bereikt.

**Oorzaak 2, waarom het zo ver kon oplopen.** De gebruiker dacht een limiet van $10 te hebben ingesteld. Dat was de **betaaldrempel**, niet een plafond: het bedrag dat oploopt voordat Google de kaart belast. Google verhoogt die drempel automatisch met de betaalgeschiedenis mee, van €10 naar €100. Google Cloud kent geen uitgavenplafond; een budget alert waarschuwt alleen (Google zegt dat zelf ook letterlijk: *"Setting a budget does not cap resource or API consumption"*).

**Wat het draaiende hield:** `wazir-al-ghanima` draait op Railway met `startCommand: npx tsx src/cloud-loop.ts` en `restartPolicy ON_FAILURE` (10 retries). Die loop deed elke 2 uur een radar-ronde en elke 12 uur een volledige scan. Eigen comment bovenin: *"de 24/7 PAID-jacht in de cloud (Railway). Omgezet 2026-06-26."* Dat verklaart de tijdlijn precies: juni bijna niets (4 dagen actief), augustus de eerste volle periode.

**Wat er gefixt is (beide gepusht naar `wazir-al-ghanima` main):**

- `ab68346` — `CLOUD_LOOP_ENABLED`, standaard uit. Bij uitgeschakelde stand blijft het proces bewust idle in plaats van `exit()`en, zodat Railway een geslaagde deploy ziet, de oude betalende container vervangt, en de restartPolicy niet gaat herstarten.
- `bfbbc86` — `ALLOW_PAID_VERTEX`, standaard uit. Zelfde "hard slot"-filosofie die `src/gemini.ts` al toepaste met `ALLOW_PAID_GEMINI`, alleen ontbrak die rem juist op de stap die vooraan stond. Ook `vertexAIAvailable()` en `freeAvailable()` respecteren de schakelaar nu, zodat een betaalde bron niet meer als "gratis bron beschikbaar" telt.
- Beide geverifieerd: typecheck ongewijzigd t.o.v. baseline (14 pre-existing fouten, geen in de gewijzigde bestanden), en de gates in beide richtingen getest (zonder vlag uit, met vlag aan).

**Wat de gebruiker zelf heeft gedaan:** Vertex API uitgezet, billing losgekoppeld van beide projecten, budget alert op €0,00 gezet. "Your AI spend €0.00" bevestigd in de console.

**Aandachtspunt dat hierbij boven kwam:** `src/gemini.ts` documenteert zelf dat `GEMINI_API_KEY` en `_2` **betaald prepaid** zijn (Tier 1 AI Studio, geen gratis tier) en één billing-account delen. De `ALLOW_PAID_GEMINI`-rem bewaakt alleen sleutel 3 en hoger, dus die twee gingen er ongehinderd langs. Nu de billing van dat project af is, vallen dezelfde `AIza`-sleutels automatisch terug op de gratis tier. Zou de billing ooit terugkomen, dan is dit opnieuw een lek.

### Openstaand

- **€100,39 betalen** met een werkende kaart. Verdwijnt niet vanzelf; onbetaald volgt schorsing en daarna incasso.
- **`mousadirksz` verwijderen** als collaborator op `ai-app`. Kan alleen de eigenaar via github.com/holistis/ai-app/settings/access.
- **Railway controleren:** staat er een nieuwe deploy van `wazir-al-ghanima`? Log moet `[cloud-loop] UITGESCHAKELD` tonen. Zo niet, staat auto-deploy uit en moet de service handmatig gepauzeerd worden.
- **`cloud-sweep` nakijken** (`src/audit/cloud-sweep.ts`), draait mogelijk als aparte Railway-service met 12-uurs interval. Valt buiten de `cloud-loop`-schakelaar.
- **`OLLAMA_URL` zetten in Railway** op het Hetzner-adres. Default is `http://localhost:11434`, wat in een Railway-container niet bestaat, dus die laatste gratis schakel faalt nu stil.
- **69 Dependabot-meldingen op `ai-app`** (1 critical) nog te beoordelen, inclusief de subprojecten.

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
