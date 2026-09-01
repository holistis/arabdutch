/**
 * gratisTools.ts, de gratis toolskist van ArabDutch.
 *
 * Ontwerpregel die alles hier bepaalt: een AI mag NOOIT de bron van juridische
 * feiten zijn. Onderzoek van Stanford RegLab en HAI (2024, ruim 200.000 queries)
 * vond hallucinatiepercentages van 69 tot 88 procent op specifieke juridische
 * vragen, en slechter naarmate de vraag complexer werd. Een prompt die zegt
 * "leg uit hoe ik een bedrijf opricht in Dubai" levert overtuigende onzin op,
 * en als een bezoeker daarop handelt is dat ons probleem.
 *
 * Daarom doen deze prompts alleen dingen waar een taalmodel wel betrouwbaar in
 * is: de gebruiker interviewen, zijn eigen situatie structureren, zijn eigen
 * tekst analyseren, of de vragen genereren die hij aan een bank, agent of
 * fiscalist moet stellen. De feiten komen van de gebruiker, niet van het model.
 *
 * Ze draaien in het EIGEN ChatGPT- of Claude-account van de bezoeker. Dat kost
 * ons niets, ongeacht hoeveel mensen ze gebruiken, en er is geen bestand dat
 * wij moeten maken of versturen.
 */

export type GratisTool = {
  slug: string;
  titel: string;
  pijn: string;
  waarom: string;
  prompt: string;
};

export const GRATIS_TOOLS: GratisTool[] = [
  {
    slug: "vestigingsplaats-test",
    titel: "De vestigingsplaats-test",
    pijn: "U richt een bedrijf op in Dubai en denkt 0 procent belasting te betalen",
    waarom:
      "Dit is de duurste misvatting in de hele regio, en de partij die u de setup verkoopt heeft geen enkel belang om het te noemen. Niet uw inschrijving bepaalt waar u belasting betaalt, maar de plaats van de feitelijke leiding. Stuurt u het bedrijf aan vanuit Nederland, dan kan de Belastingdienst het gewoon als Nederlands belastingplichtig aanmerken. Daarnaast heeft een Nederlandse inwoner met 5 procent of meer van de aandelen een aanmerkelijk belang, ongeacht waar de vennootschap staat.",
    prompt: `Je bent mijn kritische sparringpartner over de fiscale vestigingsplaats van een bedrijf dat ik in het buitenland wil oprichten. Je bent GEEN fiscalist en je geeft geen juridisch advies. Je taak is uitsluitend om mijn eigen situatie scherp te krijgen en de juiste vragen te formuleren.

Belangrijk: verzin geen wetsartikelen, geen tarieven en geen jurisprudentie. Als ik naar een concreet cijfer of artikel vraag, zeg dan dat ik dat bij een fiscalist of een officiele bron moet verifieren.

Stel me deze vragen een voor een, wacht steeds op mijn antwoord:

1. In welk land wil je oprichten, en wat is de belangrijkste reden?
2. Waar woon jij zelf, en ben je van plan daadwerkelijk te verhuizen of blijf je in Nederland wonen?
3. Waar worden de belangrijke beslissingen genomen: wie beslist over contracten, prijzen, personeel en investeringen, en waar bevindt die persoon zich fysiek op dat moment?
4. Wie tekent de contracten, en waar?
5. Waar zitten je klanten, en waar wordt het werk feitelijk uitgevoerd?
6. Heb je personeel, en zo ja waar zit dat?
7. Heb je in het beoogde land een echt kantoor, of een postadres of flexplek?
8. Welk percentage van de aandelen ga je zelf houden?
9. Houd je je Nederlandse inschrijving aan, of schrijf je je uit?

Geef daarna:
- Een eerlijke inschatting van hoe sterk of zwak mijn verhaal is dat de leiding echt in het buitenland ligt, met per antwoord waarom het mij helpt of juist tegenwerkt.
- De rode vlaggen in mijn eigen antwoorden.
- Een concrete lijst vragen die ik aan een Nederlandse fiscalist moet stellen voordat ik iets opricht, geformuleerd zodat de fiscalist er direct mee aan de slag kan.

Sluit af met de waarschuwing dat dit een voorbereiding is en geen advies.`,
  },
  {
    slug: "twintig-vragen-setup-agent",
    titel: "De 20 vragen voor u een setup-agent betaalt",
    pijn: "U betaalt een instapprijs en ontdekt de echte kosten pas in jaar twee",
    waarom:
      "De geadverteerde pakketprijs is bijna altijd jaar 1, zonder visum, zonder kantoorsubstance en zonder verplichte jaarrekening. De verlenging ligt structureel hoger. Deze prompt maakt van u de partij die de lastige vragen stelt, voordat u tekent.",
    prompt: `Je helpt me een setup-agent of bedrijfsvormingsbureau kritisch te ondervragen voordat ik betaal. Je verzint zelf geen tarieven, regels of termijnen. Je genereert alleen de vragen die ik moet stellen.

Vraag me eerst kort:
1. In welk land en welke zone of jurisdictie wil ik oprichten?
2. Wat ga ik precies doen (activiteit)?
3. Hoeveel mensen wil ik in dienst nemen, en hoeveel daarvan komen uit het buitenland?
4. Welk bedrag is mij geoffreerd, en wat zit daar volgens de offerte in?

Genereer daarna een lijst van twintig concrete vragen die ik schriftelijk aan die agent moet stellen, verdeeld over deze onderwerpen:
- Wat kost jaar 2 en jaar 3, uitgesplitst, en welke posten kunnen stijgen?
- Welke kosten zitten NIET in deze offerte (accountant, jaarrekening, kantoorruimte, visa, medische keuring, identiteitskaart, borgsommen, vertalingen, legalisaties)?
- Hoeveel visa krijg ik bij dit pakket, en waaraan is dat aantal gekoppeld?
- Wat gebeurt er als ik mijn activiteit wil wijzigen of uitbreiden?
- Wat kost het om er weer mee te stoppen, en hoe lang duurt een ontbinding?
- Wie is aansprakelijk als de vergunning wordt geweigerd nadat ik heb betaald, en krijg ik dan geld terug?
- Kan ik een bestaande klant spreken die dezelfde structuur bij jullie heeft opgezet?
- Wat is jullie rol bij het openen van een zakelijke bankrekening, en wat gebeurt er als de bank mij weigert?

Formuleer elke vraag zo dat een ontwijkend antwoord meteen opvalt. Voeg per vraag in een zin toe waar ik op moet letten in het antwoord.`,
  },
  {
    slug: "bankdossier",
    titel: "Het bankdossier",
    pijn: "Uw vergunning is rond, maar u krijgt geen zakelijke rekening open",
    waarom:
      "Dit is in de praktijk het echte knelpunt, niet de vergunning. Een setup-agent levert u een licentie en is dan klaar; of u geld kunt ontvangen is daarna uw probleem. Compliance-afdelingen wijzen af op een vage activiteitsomschrijving en een onduidelijke herkomst van middelen. Deze prompt herschrijft uw eigen verhaal naar wat zo'n afdeling wil lezen.",
    prompt: `Je helpt me mijn businessplan te herschrijven tot een dossier dat de compliance-afdeling van een bank wil lezen bij het openen van een zakelijke rekening. Je verzint niets: alle feiten komen van mij. Waar informatie ontbreekt, vraag je ernaar in plaats van iets aan te nemen.

Ik plak hieronder mijn eigen beschrijving van het bedrijf.

Herschrijf die tot de volgende onderdelen, in zakelijke, feitelijke taal zonder verkoopwoorden:

1. Wat het bedrijf precies doet, in concrete handelingen. Geen "wij ontzorgen ondernemers" maar "wij kopen X in bij leveranciers in land Y en verkopen door aan Z".
2. Herkomst van de middelen: waar komt het startkapitaal vandaan, en welk bewijsstuk hoort daarbij.
3. Verwachte geldstromen: hoeveel transacties per maand, welke bedragen, inkomend en uitgaand.
4. Tegenpartijen: uit welke landen komen mijn klanten en leveranciers.
5. Waarom dit bedrijf juist in dit land gevestigd is, in zakelijke termen.
6. Wie de uiteindelijk belanghebbenden zijn en hoe de eigendomsstructuur eruitziet.

Markeer daarna expliciet:
- Welke punten in mijn verhaal een compliance-afdeling waarschijnlijk als risicovol leest, en waarom.
- Welke documenten ik moet kunnen overleggen bij elk onderdeel.
- Welke informatie ik nog mis.

Hier is mijn beschrijving:
[PLAK HIER JE EIGEN BESCHRIJVING VAN HET BEDRIJF]`,
  },
  {
    slug: "contract-triage",
    titel: "Contract-triage: is uw vonnis straks iets waard",
    pijn: "U kiest Nederlands recht en ontdekt te laat dat uw vonnis daar niet uitvoerbaar is",
    waarom:
      "Een rechtskeuze is waardeloos als u het resultaat niet kunt executeren waar het vermogen van uw tegenpartij zit. Libie, Jemen en Somalie zijn geen partij bij het Verdrag van New York, dus daar is er geen verdragsroute voor een arbitraal vonnis. En elk contract dat nog naar DIFC-LCIA of EMAC verwijst, verwijst naar een opgeheven instituut.",
    prompt: `Je analyseert de geschilbeslechtingsclausules in een contract dat ik hieronder plak. Je geeft geen juridisch advies en je verzint geen wetgeving of jurisprudentie. Je taak is signaleren wat er staat, wat ontbreekt, en welke vragen ik aan een advocaat moet stellen.

Licht uit het contract:
1. De rechtskeuze: welk recht is van toepassing?
2. Het forum: welke rechter of welk arbitrage-instituut is aangewezen?
3. Bij arbitrage: welk instituut precies, welke zetel (plaats van arbitrage), welke taal, hoeveel arbiters?
4. De valuta van de vordering, en of rente apart is geregeld.
5. Of er een escalatieladder in staat (eerst overleg, dan mediation, dan arbitrage).

Benoem daarna:
- Wat ontbreekt van bovenstaande punten. Een ontbrekende zetel of taal is een reeel probleem, geen detail.
- Of het genoemde instituut nog bestaat onder die naam. Als je dat niet zeker weet, zeg dat, en zet het op mijn controlelijst.
- Of rente afsplitsbaar en apart becijferd is. Dit is belangrijk in landen waar rente op bezwaren kan stuiten bij de tenuitvoerlegging.
- De vragen die ik aan mijn advocaat moet stellen, waaronder in elk geval: waar zit het verhaalsvermogen van mijn tegenpartij, en is een vonnis of arbitraal vonnis daar uitvoerbaar?

Hier is het contract of de betreffende clausule:
[PLAK HIER DE TEKST]`,
  },
  {
    slug: "familie-governance",
    titel: "Familie als lokale beheerder: het gesprek dat niemand voert",
    pijn: "U regelt iets in het land van herkomst via een familielid, en het vertrouwen loopt stuk op onduidelijke afspraken",
    waarom:
      "Dit is de meest voorkomende situatie in de diaspora en tegelijk de minst besproken. Niemand durft er een document over te schrijven, want het voelt als wantrouwen. Maar juist het ontbreken van afspraken maakt de ruzie later onvermijdelijk. Deze prompt structureert het gesprek, en raakt geen enkel juridisch feit aan, dus er valt niets te hallucineren.",
    prompt: `Je helpt me een helder gesprek voorbereiden met een familielid of vertrouwenspersoon die iets voor mij gaat beheren in het buitenland (bijvoorbeeld vastgoed, een bedrijf of een project). Het doel is niet wantrouwen maar duidelijkheid, zodat de relatie heel blijft.

Je geeft geen juridisch advies. Je structureert alleen het gesprek.

Vraag me eerst:
1. Wat gaat deze persoon precies voor mij beheren?
2. Wat is onze relatie, en hoe lang kennen we elkaar in zakelijke zin?
3. Is er al iets afgesproken, en zo ja, mondeling of op papier?

Werk daarna samen met mij deze punten uit, en stel per punt een concrete vraag die ik in het gesprek kan gebruiken:

1. Beslissingsbevoegdheid: welke beslissingen mag deze persoon zelfstandig nemen, en vanaf welk bedrag of welke impact overlegt hij eerst met mij?
2. Geld: wie beheert welke rekening, wie mag betalingen doen, en tot welk bedrag?
3. Vergoeding: krijgt deze persoon iets voor zijn werk, en zo ja hoeveel en hoe vaak? Onbetaald werk tussen familie is de meest voorkomende bron van wrok.
4. Rapportage: hoe vaak en in welke vorm hoor ik hoe het ervoor staat, en wat gebeurt er als dat een keer uitblijft?
5. Onkosten: wie betaalt reis, telefoon, benzine en administratieve kosten, en hoe wordt dat verantwoord?
6. Documenten: op wiens naam staat wat, en wie bewaart de originelen?
7. Volmacht: als er een volmacht nodig is, wat mag daarmee wel en niet, en tot wanneer geldt hij? Een onbeperkte volmacht zonder einddatum is een risico voor ons allebei.
8. Stoppen: hoe beeindigen we deze afspraak als een van ons dat wil, zonder ruzie en zonder dat er iets blijft hangen?
9. Onenigheid: wie vragen we om te bemiddelen als we er samen niet uitkomen?

Sluit af met een korte samenvatting die ik met deze persoon kan delen, in warme maar duidelijke taal, zodat het geen contract lijkt maar wel alles vastlegt.`,
  },
];

export function getToolBySlug(slug: string): GratisTool | undefined {
  return GRATIS_TOOLS.find((t) => t.slug === slug);
}
