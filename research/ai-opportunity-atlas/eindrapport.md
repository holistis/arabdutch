# AI Opportunity Atlas 2026 — Eindrapport (v1, onderzoek deels afgerond)

**Datum:** 2026-08-19
**Mandaat:** vind concrete kansen voor een ondernemer die vandaag opnieuw begint: max €500 startkapitaal, veel tijd, sterke software/AI-bouwcapaciteit, gevestigd in Nederland. Zonder gebruik van bestaande projecten of aannames over de ondernemer.

## Status en integriteitsverklaring

- **Afgerond:** 8 domein-scouts (164 signalen, 46 hypotheses, 88 ideeën direct gekild), clustering tot 14 kandidaten, 14 onafhankelijke bewijsverificaties met economic reality check, 4 red-team-rondes (C01 t/m C04).
- **Niet afgerond door de maandelijkse spend-limiet van het account:** 10 red-team-rondes (C05 t/m C14) en de onafhankelijke committee-agent. De committee-weging hieronder is daarom uitgevoerd door de hoofdonderzoeker zelf, op basis van de verificatiedossiers. Kandidaten zonder red team dragen het label **LOW CONFIDENCE**; hun ranking kan nog zakken zodra het red team alsnog draait (resumeerbaar, verificaties zijn gecached).
- Ruwe data met alle bronnen: `data/fase1_scouts.json` en `data/fase2_verificatie_partieel.json`.

## De belangrijkste bevinding van het hele onderzoek

**Geen van de 14 kandidaten heeft direct betaalbewijs voor het specifieke aanbod.** Alle 14 zijn PARTIALLY_CONFIRMED: het probleem is steeds echt en gedocumenteerd, er wordt aantoonbaar betaald in de categorie, maar nergens is bewezen dat de doelgroep dit specifieke product van een onbekende solo-aanbieder koopt. Conform de committee-regel scoort daarom **niemand boven 60/100**. De consequentie is niet "kies de mooiste", maar: **koop met de eerste ±€200 de ontbrekende informatie** via de ontworpen €100-falsificatietests, die allemaal betalingsintentie meten (aanbetaling of betaling, niet interesse).

Twee patronen die het onderzoek blootlegde:

1. **Compliance-deadlines zijn een slechtere jachtgrond dan ze lijken.** De intuïtie "nieuwe verplichting = goudmijn" sneuvelde vier keer bij het red team: bij Wtta, EAA-toegankelijkheid, EPR/UPV-textiel en Box 3 bestaan er steeds gratis ontsnappingsroutes (brancheorganisaties, overheidsformulieren, producentenorganisaties, incumbent-software) of is de markt al dichtgeslibd voordat een late toetreder begint. Verplichte uitgaven vloeien naar partijen met bestaand vertrouwen (keurders, accountants, PRO's), niet naar nieuwkomers.
2. **Diensten verslaan tools.** De hoogst scorende kansen zijn allemaal diensten die bestaande, al betaalde arbeid vervangen (calculatie, praktijkmanagement, verwerking), waarbij AI de kostenstructuur van de leverancier verandert in plaats van dat AI het product is. Daar is het betaalbewijs het hardst: er bestaan al jaren bureaus, uurtarieven en detacheringsfactoren voor precies dit werk.

## Funnel

164 signalen → 46 hypotheses → 14 kandidaten → 14 geverifieerd (alle PARTIALLY_CONFIRMED) → 4 ge-red-teamd (scores 1 tot 2 uit 5) → top 10 → top 3 → 1 bet.

## Top 10

| # | Kans | Score | Red team | Kern van het oordeel |
|---|---|---|---|---|
| 1 | **C06 48-uurs calculatie- en offertedienst voor installatie/bouw-MKB** | 58 | ontbreekt (LOW CONF) | Hardst betaalbewijs van alle 14: calculatiebureaus bestaan al jaren, detachering tegen factor 1,9-3,0, chronisch calculatorentekort. AI-hefboom op bestek-naar-conceptcalculatie is reëel. Risico: AI-native concurrenten (Baudex, BuilderFlow) en aansprakelijkheid bij rekenfouten. |
| 2 | **C05 Remote praktijkmanager voor huisartsenpraktijken** | 56 | ontbreekt (LOW CONF) | Enige kans waar het budget al geoormerkt is: verzekeraars vergoeden praktijkmanagement per patiënt (VGZ max 4,5 uur/week per normpraktijk), uurtarieven 41,50-88 euro gepubliceerd, vacatures staan 3+ maanden open. Risico: gunfactor zonder zorg-cv, regionale huisartsenorganisaties als concurrent. |
| 3 | **C07 NetruimteScan: kWmax/congestie-audit MKB-grootverbruikers** | 52 | ontbreekt (LOW CONF) | Echte geldstromen (kWmax-kosten, congestievergoedingen; Sensorfact verkoopt monitoring voor 5-10k/jr aan MKB). Onbekend of een remote audit zonder bezoek gekocht wordt en of de mediane besparing de prijs draagt. |
| 4 | C09 DMJOP-copilot voor MJOP-opstellers en VvE-beheerders | 50 | ontbreekt (LOW CONF) | Doelgroep betaalt aantoonbaar voor tooling (O-Prognose 1400+ organisaties). Maar AI-concurrenten bestaan al (Kadero, MJOP Beheer) en het botst mogelijk met het urenmodel van bureaus. |
| 5 | C14 Overloop-verwerkingsdienst voor administratiekantoren | 48 | ontbreekt (LOW CONF) | Kantoren betalen al voor exact dit werk (NOAB 8,1 tevredenheid). Maar vier concurrentielagen incl. liquide ZZP-markt van 35-85 euro/uur; continuïteits- en diplomavraag onbeantwoord. |
| 6 | C12 Opvolgingsradar: off-market dealflow bedrijfskopers | 45 | ontbreekt (LOW CONF) | Categorie betaalt (Grata/Inven 15-40k dollar/jr, Dealsuite 1700+ kantoren), vergrijzingsgolf is echt. Maar Marktlink en BuyInside doen dit al op schaal; DGA-responsratio onbekend. |
| 7 | C11 Dossier-APK voor kleine zorgaanbieders | 44 | ontbreekt (LOW CONF) | Alleen reactieve betaling bewezen (advocaten, accountants bij controles); het model hangt volledig op onbewezen preventieve betalingsbereidheid. |
| 8 | C10 KloonWacht: takedown-dienst kleine EU-merken | 42 | ontbreekt (LOW CONF) | Prijspunten bestaan (nebty 99/mnd), maar Temu Brand Guardian en Amazon Brand Registry zijn gratis en effectief; de betaalde ruimte krimpt. |
| 9 | C04 Box3-dossierfabriek voor kantoren | 40 | 2/5, survival laag | Waarom-nu is hard (honderdduizenden OWR-dossiers), maar de markt reageerde al: werkelijkrendementtool.nl e.a. bestaan, en kantoren besteden dossierwerk niet uit maar factureren het op nacalculatie. |
| 10 | C02 EAA/WCAG-remediatie vaste prijs MKB-webshops | 38 | 2/5, survival laag | Segment-paradox: wie onder de wet valt heeft al een bureau, wie geen bureau heeft is meestal vrijgesteld. Nul EAA-boetes in de EU per medio 2026, dus geen urgentie. |

Afgevallen: C08 Label-D-scanner (35, gratis overheidstools plus SVOH-subsidie op menselijk advies), C01 Wtta-coach (32, red team: vier ontsnappingsroutes zuigen het segment leeg; instructief voor-kerkhof: de wet is al twee keer uitgesteld), C13 Landed-cost-desk (30, gratis alternatieven Zonos/import8.nl), C03 EPR/UPV-loket (25, red team: producentenorganisaties nemen de plicht al over voor 60-240 euro/jr; het kerkhof zit aan de vraagkant: micro-sellers stoppen liever dan dat ze betalen).

## Top 3 met killer-aannames

**1. C06 Calculatiedienst.** Killer-aanname: *installateurs vertrouwen een externe, deels door AI gemaakte conceptcalculatie voldoende om er met dunne marges op in te schrijven, en gunnen dat aan een nieuwkomer.* Informatie-gaten: actuele krapte-cijfers (het 4.700-vacatures-cijfer is uit 2022), tarieven van bestaande calculatiebureaus (nergens openbaar), aansprakelijkheidsafdekking.

**2. C05 Praktijkmanager.** Killer-aanname: *een praktijkhoudende huisarts gunt praktijkmanagement aan iemand zonder zorg-cv omdat de output telt (rust, declaraties op tijd, opslag binnen).* Informatie-gaten: gunfactor (nergens gedocumenteerd, alleen testbaar), werkelijke wachtlijsten bij bestaande bureaus.

**3. C07 NetruimteScan.** Killer-aanname: *MKB-grootverbruikers kopen een datagedreven audit op afstand (149-750 euro) zonder fysiek bezoek en zonder bestaande relatie.* Informatie-gaten: mediane besparing per bedrijf (als die onder ±1.000 euro/jr ligt is er geen prijsruimte), toegang tot kwartierdata zonder installateur.

## #1 BET: C06, de 48-uurs calculatie- en offertedienst

- **Waarom winnen:** het enige model waar alle vijf bewijspijlers minstens SECONDARY zijn en het betaalbewijs feitelijk HARD is op categorieniveau: dit werk wordt vandaag al extern ingekocht tegen bureau- en detacheringstarieven, en de capaciteit is structureel te klein. Je verkoopt geen software maar een uitkomst (calculatie binnen 48 uur) waar de klant het risicoprofiel van kent.
- **Waarom nu:** het calculatorentekort is chronisch en AI-documentanalyse (bestek en tekeningen naar hoeveelhedenstaat en conceptprijs) werd in 2025/2026 goed genoeg om 60-80% van het werk te dragen, met menselijke eindcontrole voor de laatste 20%.
- **Waarom kan een kleine speler winnen:** bestaande bureaus hebben wachttijden en prijzen op offertebasis; AI-native concurrenten richten zich op de bouw-enterprise, niet op de installateur met 5-50 man. Snelheid (48 uur) plus vaste prijs (±395-450 euro) plus één niche (bijv. warmtepomp/klimaatinstallaties) is een positionering die geen incumbent vandaag biedt.
- **Waarom betalen klanten:** een gemiste inschrijving is directe omzetderving en een eigen calculator kost 70-100k/jr als je hem al kunt vinden; 400 euro per calculatie is tegen elk alternatief goedkoop.
- **Eerste €100-test (7 dagen, meet aanbetaling):** maak met AI één voorbeeldcalculatie op een openbaar bestek in de gekozen niche plus een one-pager: "conceptcalculatie binnen 48 uur, 395 euro, eerste calculatie tegen 50% aanbetaling (195 euro) vooraf". Benader 40-60 installatiebedrijven direct (KvK/branchelijsten). Drempels vooraf: minimaal 10 gesprekken, minimaal 3 die een echt bestek willen insturen, minimaal 1 betaalde aanbetaling. Onder de drempel: MODIFY (andere niche) of KILL. Geen verschuivende doelpalen; complimenten tellen niet.
- **Wat kan het doden:** een rekenfout die een klant geld kost (afdekken: leveren als "concept ter controle", aansprakelijkheid contractueel begrenzen, beroepsaansprakelijkheidsverzekering zodra er omzet is); AI-native platforms die binnen een jaar de installateursmarkt bereiken; gunfactor die toch bij regionale bekendheid blijkt te liggen.
- **Binnen 7 dagen:** niche kiezen, voorbeeldcalculatie bouwen, one-pager plus betaallink live, 40 bedrijven benaderd, testdrempels op schrift.

## Persoonlijke keuze

Als ik persoonlijk €500 en zes maanden moest inzetten, zou ik kiezen voor **C06, en parallel in dezelfde week de €100-test van C05 draaien** (samen ±€150-200, ruim binnen budget), omdat beide de enige kansen zijn waar het geld vandaag al aantoonbaar stroomt naar precies het werk dat ik wil overnemen, en omdat één week echte outreach meer beslissingsinformatie oplevert dan elke verdere deskresearch-ronde. De winnaar is degene waar als eerste iemand daadwerkelijk betaalt.

## Openstaande onderzoeksschuld (stop-criteria nog niet gehaald)

1. Red team voor C05 t/m C14 (geblokkeerd door spend-limiet; workflow is resumeerbaar met gecachte verificaties).
2. Onafhankelijke committee-agent als contra-weging op deze ranking.
3. Second-scout-ronde op de informatie-gaten van de top 3 (gap research only).
4. De drie €100-tests zelf: dit is per definitie werk buiten de computer en de enige route naar bewijs boven de 60/100-grens.
