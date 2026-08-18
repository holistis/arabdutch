# AI Opportunity Atlas 2026-2035 — Onderzoeksprotocol

**Doel:** het systematisch identificeren, onderzoeken, financieel modelleren en rangschikken van economische kansen waarbij AI een structureel concurrentievoordeel creëert voor de onderzoeker zelf (niet voor "iemand" in abstracto).

**Status:** v1, opgesteld 2026-08-18. Levend document.

---

## Grondregels

1. **Economie eerst, ideeën later.** Geen enkel idee komt de funnel in zonder aantoonbaar signaal van verspild geld, betaalde inefficiëntie of informatie-asymmetrie. "Cool", "innovatief" en "AI-powered" zijn geen scoringscriteria.
2. **De atlas-methode is kopieerbaar, de input niet.** Duizenden mensen laten AI "business opportunities" onderzoeken. Het verschil zit in propriëtaire input: eigen netwerk, eigen klantproblemen, eigen taal- en marktkennis. Daarom begint dit protocol met Fase 0 (eigen asymmetrie-inventaris) en scoort elke kans op *fit* met die inventaris.
3. **Desk research bewijst nooit betalingsbereidheid.** AI-onderzoek levert hypotheses, geen bewijs. Elke kans die de top-10 haalt moet door de validatie-ladder (Fase 7) met echte mensen en echt geld.
4. **Falsificatie is verplicht.** Voor elke kans geldt de vraag: "waarom is dit nog niet opgelost?" Er zijn drie mogelijke antwoorden en maar één is goed nieuws:
   - a) Niemand heeft het gezien (zeldzaam, wees wantrouwig).
   - b) Het kan economisch niet uit (diskwalificeert de kans, tenzij AI de kostenstructuur aantoonbaar breekt).
   - c) Er ligt een kerkhof van mislukte pogingen (verplicht kerkhof-onderzoek: waarom faalden zij, en waarom zou dat nu anders zijn?).
5. **Bronnen en zekerheid expliciet.** Elke claim in een dossier krijgt een bron (URL/dataset/gesprek) en een zekerheidsniveau (hard cijfer / schatting / aanname). AI-agenten hallucineren marktcijfers; ongefundeerde cijfers worden als aanname gemarkeerd, nooit als feit.
6. **Kill-criteria zijn heilig.** Elke fase heeft expliciete afvalcriteria. Een kans die faalt gaat het archief in met reden, niet de prullenbak. Het archief is zelf data (patronen in waarom kansen afvallen).
7. **Budget: gratis eerst.** Het onderzoek zelf draait op gratis LLM-tiers en gratis databronnen, conform de beslissing van 2026-08-13 (zie memory/decisions.md en risks R005/R006). Elke betaalde bron of API staat achter een expliciete go van de eigenaar.
8. **Geen em-dashes** in alle output (huisstijl).

---

## Fase 0 — Eigen asymmetrie-inventaris (nieuw t.o.v. het oorspronkelijke voorstel)

Voordat er ook maar één markt onderzocht wordt: breng in kaart welke asymmetrieën de onderzoeker zélf al bezit. Dit wordt de scoringsdimensie "Fit".

Startpunt (aan te vullen en te herwegen door de eigenaar):

| Asymmetrie | Type | Waarom schaars |
|---|---|---|
| NL ↔ Arabische wereld: taal, cultuur, netwerk | Toegang + kennis | Weinig spelers beheersen beide kanten van deze corridor |
| Marokko-netwerk en marktkennis (GITEX Casablanca, vastgoed, ondernemersklimaat) | Toegang | Lokale kennis is niet te googlen |
| Lopende consultancy met echte klantproblemen (bijv. export-dossiers zoals Fresh Food) | Data | Betalende klanten zijn een primaire bron van gevalideerde pijn |
| Zelfstandig software + AI-agenten kunnen bouwen en 24/7 laten draaien | Productie | Snelheid en kosten; geen dev-team nodig |
| Fiscaal/juridisch/administratief adviesdomein (Holistis) | Kennis + vertrouwen | Regelgevingszwaar werk met hoge betalingsbereidheid |
| Tijd beschikbaar, laag kapitaal | Beperking | Sluit kapitaalintensieve modellen uit, geen belemmering voor Type A/B |

**Consequentie voor het onderzoek:** de corridor NL/EU ↔ Marokko/MENA is geen gewoon domein maar een dwarsdoorsnede die in élk domein (handel, regelgeving, logistiek, vastgoed, landbouw) een extra asymmetrie-laag toevoegt. Kansen op die corridor krijgen structureel voorrang bij gelijke score.

**Deliverable:** ingevulde en door eigenaar geaccordeerde inventaris.

---

## Fase 1 — Inefficiëntie-signalen verzamelen

**Vraag:** waar geven mensen of bedrijven nu veel geld uit omdat iets moeilijk, langzaam, handmatig of ondoorzichtig is?

**Domeinen (dwarsdoorsnede: telkens ook de NL↔MENA-corridor bekijken):**
1. Landbouw en voedsel
2. Handel en arbitrage (import/export, prijsverschillen)
3. Regelgeving en compliance (EU-regels, certificering, subsidies, aanbestedingen)
4. Bedrijven met veel handmatig kantoorwerk
5. Medische en paramedische administratie
6. Vastgoed (property intelligence)
7. Energie
8. Logistiek
9. Informatie-arbitrage (meta-categorie)
10. Recycling en reststromen
11. Lokale dienstverlening
12. Onderwijs en certificering-administratie

**Signaalbronnen (gratis eerst):** vacatureteksten (repeterend handwerk = betaald probleem), klachten op fora/Reddit/reviews, aanbestedingskalenders (TenderNed, TED), KvK/faillissementsdata, CBS/Eurostat/Comtrade import-exportdata, subsidieregisters (RVO), Google Trends, marktplaatsen en prijsdata, sectorrapporten, patentdata, eigen consultancy-dossiers (geanonimiseerd).

**Signaalformat (per signaal, kort):** domein, wat is inefficiënt, wie betaalt er nu voor (loon, fee, marge, boete), grootte-indicatie, bron, zekerheid.

**Kill-criteria Fase 1:** signaal zonder aanwijsbare geldstroom vervalt. "Mensen vinden X vervelend" is geen signaal; "bedrijven betalen een fte / een bureau / een boete voor X" wel.

**Funnel-doel:** honderden signalen, geclusterd tot ± 100-200 kandidaat-kansen. (Niet "1000+ onderzochte kansen": dat is schijnprecisie. Signalen tellen, kansen clusteren.)

---

## Fase 2 — Asymmetrie-analyse

Per kandidaat-kans: welke asymmetrie ligt eronder?

- A weet iets dat B niet weet (informatie)
- A produceert goedkoop wat B duur inkoopt (kosten)
- A heeft capaciteit, B heeft vraag (matching)
- A heeft data die B niet heeft (data)
- A heeft tijd, B niet (tijd)
- A heeft toegang (markt, vergunning, netwerk), B niet (toegang)

**Kill-criteria:** geen benoembare asymmetrie = generiek idee = eruit. Asymmetrie die verdampt zodra één partij een ChatGPT-abonnement neemt = eruit.

---

## Fase 3 — AI-hefboomtoets

**Vraag:** vergroot AI deze asymmetrie met minstens een factor 10, of maakt AI haar juist kapot?

Let op de dubbele werking: AI maakt produceren goedkoop, dus het product zelf wordt minder schaars. De schaarste verschuift naar data, distributie, vertrouwen, integratie, fysieke uitvoering, regelgeving, kapitaal en lokale kennis. Een kans scoort hier alleen hoog als de AI-hefboom aangrijpt op iets dat schaars blíjft.

**Kill-criteria:** AI-voordeel dat elke concurrent morgen ook heeft (zelfde model, zelfde prompt, zelfde publieke data) telt niet als hefboom.

---

## Fase 4 — Financieel model

Per overgebleven kans een harde mini-businesscase:

| Vraag | Antwoordformat |
|---|---|
| Wie betaalt? | consument / MKB / enterprise / overheid |
| Waarom? | kostenbesparing / omzet / risico-reductie / verplichting |
| Hoeveel en hoe vaak? | € per maand / transactie / project |
| Marktomvang bereikbaar deel | € met bron en zekerheid |
| Concurrentie | laag / middel / hoog + top-3 spelers |
| Kosten om te leveren | € (incl. LLM-kosten bij schaal!) |
| Brutomarge | % |
| Startkapitaal | € |
| Tijd tot eerste omzet | weken/maanden |
| Regelgevingsrisico | laag / middel / hoog + welke regels |

**Kill-criteria:** brutomarge < 50% bij digitaal, geen pad naar eerste omzet binnen 6 maanden, of startkapitaal boven wat de eigenaar wil inzetten.

---

## Fase 5 — Moat-analyse

Welke verdediging bouwt zich op met de tijd? (data / workflow / distributie / kennis / netwerk / kapitaal / fysiek). Speciale aandacht voor AI + fysieke wereld en AI + regelgeving: moeilijker kopieerbaar dan pure software.

**Extra dimensie: Fit-score.** Hoe goed sluit de kans aan op de Fase 0-inventaris? Een objectief goede kans zonder fit verliest van een iets mindere kans met sterke fit, want fit bepaalt uitvoerings- en distributiesnelheid.

---

## Fase 6 — Falsificatie en red team

Elke top-20-kans krijgt een aparte red-team-ronde met als enige opdracht: **maak dit kapot.**

- Kerkhof-onderzoek: wie probeerde dit eerder, wat gebeurde er?
- Waarom lost de huidige markt dit niet op? (antwoord a/b/c uit grondregel 4)
- Wat gebeurt er als OpenAI/Google/een platform dit als feature uitbrengt?
- Welke aanname, als die onwaar blijkt, doodt het model? (de "killer-aanname" expliciet benoemen)
- Regelgevings- en aansprakelijkheidsscenario's.

Een kans overleeft alleen met een schriftelijke weerlegging van het red team, niet met "dat zien we later wel".

---

## Fase 7 — Validatie-ladder (echte wereld, verplicht voor top-10)

Oplopend in kosten en bewijskracht:

1. **Zoek/vraag-bewijs:** zoekvolume, fora, bestaande uitgaven aantoonbaar.
2. **10 gesprekken:** met mensen die het probleem nú hebben. Vraag naar wat ze nu doen en wat dat kost, niet of ze "het zouden gebruiken".
3. **Smoke test:** landingspagina of concreet aanbod, meet echte interesse (aanvraag, wachtlijst, intake).
4. **Pre-sale of pilot:** iemand betaalt (of tekent) vóór er gebouwd is.
5. **MVP bij 1-3 betalende klanten.**

**Regel:** geen bouwwerk boven trede 3 zonder minstens één resultaat op trede 4.

---

## Funnel en aantallen (realistisch)

```
honderden signalen
  → 100-200 geclusterde kansen        (Fase 1-2)
  → 40-60 met echte asymmetrie + AI-hefboom  (Fase 3)
  → 20 financieel doorgerekend         (Fase 4-5)
  → 10 door het red team               (Fase 6)
  → 3-5 de validatie-ladder op         (Fase 7)
  → 1 onderneming testen
```

## Scoringsmodel (voor Fase 4-6, per kans 0-5 per dimensie)

| Dimensie | Weging |
|---|---|
| Bewezen geldstroom (er wordt nú betaald) | 20% |
| AI-hefboom op blijvend schaars element | 20% |
| Fit met eigen asymmetrieën (Fase 0) | 20% |
| Moat-opbouw over tijd | 15% |
| Marge en schaalbaarheid | 15% |
| Uitvoerbaarheid binnen 6 mnd, laag kapitaal | 10% |

Regelgeving is geen wegingsfactor maar een **poort**: hoog risico zonder mitigatie = stop, ongeacht score. (Uitzondering: als regelgeving juist het product ís, zoals compliance-automatisering, dan is het een moat.)

## Dossierformat per topkandidaat

probleem / klant / bewijs van geldstroom / asymmetrie / AI-component / concurrenten + kerkhof / prijs en marge / startkapitaal / distributiekanaal / regelgeving / killer-aanname / moat na 2 jaar / MVP-definitie / route naar eerste 10 klanten / break-even / red-team-verslag / validatie-status / bronnen met zekerheidsniveau.

## Agent-rollen (uitvoering)

- **Scout** (per domein): verzamelt signalen, Fase 1-format. Alleen gratis bronnen.
- **Analist:** clustert, benoemt asymmetrie en AI-hefboom (Fase 2-3).
- **Modelleur:** financiële mini-cases (Fase 4-5), markeert elke aanname.
- **Red team:** Fase 6, aparte context, krijgt uitsluitend het dossier en de opdracht het te weerleggen.
- **Synthesist:** rangschikt, schrijft dossiers, bewaakt funnel en archief.

Masterprompts per rol: zie `masterprompt.md` in deze map.

## De atlas als levend systeem

De atlas is geen eenmalig rapport. Kansen hebben een houdbaarheidsdatum: prijsverschillen sluiten, regels veranderen, modellen worden beter. De eindvorm is een monitor die de topsignalen periodiek herbekijkt. Dat is bovendien zelf een instantie van categorie 9 (informatie-arbitrage): wie dit systeem bouwt, bouwt meteen het eerste product. Les uit R005/R006 blijft van kracht: elke doorlopende loop draait op gratis bronnen achter expliciete schakelaars, met kostenbewaking.
