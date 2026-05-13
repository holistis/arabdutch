export interface BlogPost {
  slug: string;
  datum: string;
  tag: string;
  titel: string;
  excerpt: string;
  afbeelding?: string;
  inhoud: Section[];
}

export interface Section {
  type: "intro" | "h2" | "p" | "quote" | "afbeelding" | "lijst" | "video";
  tekst?: string;
  items?: string[];
  src?: string;
  alt?: string;
  bijschrift?: string;
  videoId?: string;
  videotitel?: string;
}

const posts: BlogPost[] = [
  {
    slug: "kemkem-fossielenjacht-merzouga",
    datum: "13 mei 2026",
    tag: "Avontuur & Natuur",
    titel: "Fossielenjacht in de Kem Kem: waar Spinosaurus en Carcharodontosaurus nog in de rotsen zitten",
    excerpt: "De rode bergen van Kem Kem bewaren een geheim van 95 miljoen jaar. Tanden van vleesetende reuzen, botten van zeereptielenen rotstekeningen van mensen die er lang voor ons stonden. ArabDutch brengt je er naartoe, met een gids, op veilige plekken, en je mag iets meenemen.",
    afbeelding: "/kemkem-fossielen-collectie.jpg",
    inhoud: [
      {
        type: "intro",
        tekst: "Stel je voor: je zit op je knieen in het rode zand van de Marokkaanse Sahara. In je hand houd je een tand. Scherp, zwaar, donkerbruin van mineralisatie. Hij is 95 miljoen jaar oud en behoorde toe aan een van de grootste roofdieren die ooit op aarde leefde. Welkom in de Kem Kem.",
      },
      {
        type: "h2",
        tekst: "Wat is de Kem Kem?",
      },
      {
        type: "p",
        tekst: "De Kem Kem Groep is een geologische formatie langs de grens van Marokko en Algerije, niet ver van de duinen van Merzouga. Wetenschappers noemen het de gevaarlijkste ecosysteem uit de prehistorie: een tropische rivierdelta van het Laat-Krijt, bevolkt door meerdere reusachtige roofdieren tegelijk. Nergens anders op aarde zijn zoveel grote carnivore dinosaurussen op dezelfde plek gevonden.",
      },
      {
        type: "lijst",
        items: [
          "Spinosaurus aegyptiacus: grootste vleesetende dinosaurus ooit, half op land, half in het water. Langer dan een T-rex.",
          "Carcharodontosaurus saharicus: schedel zo groot als een volwassen mens, tanden als messen.",
          "Deltadromeus agilis: slanke, snelle roofdino van acht meter lang.",
          "Onchopristis numidus: een reusachtige zaagvis van zes meter met getande snuit.",
          "Rugops primus, Bahariasaurus en tientallen andere soorten, inclusief krokodilachtigen en grote zeeschildpadden.",
        ],
      },
      {
        type: "p",
        tekst: "Wat dit gebied zo bijzonder maakt: de fossielen liggen in specifieke lagen van rode zandsteen die door erosie aan het oppervlak komen. Niet in alle bergen: alleen in bepaalde formaties. De lokale gravers kennen die lagen uit hun hoofd, overgeleverd van generatie op generatie.",
      },
      {
        type: "video",
        videoId: "uwvlyFSchnM",
        videotitel: "Fossielencollectie Kem Kem: tanden en botten van land en zeedinosaurussen",
        bijschrift: "Een collectie fossielen uit de Kem Kem: tanden van Spinosaurus, Carcharodontosaurus en zeereptielenen. Ouder dan de bekende vondsten van Oued Zem.",
      },
      {
        type: "h2",
        tekst: "De rotsgravures: mensen kwamen hier al lang voor ons",
      },
      {
        type: "p",
        tekst: "Terwijl je door de rode rotswanden loopt, valt je blik op ingekraste tekeningen. Paarden, kamelen, geometrische vormen, letters van mensen die hier eeuwen geleden stonden en hetzelfde gevoel hadden: dit is een plek die je niet vergeet. Deze petrogliefen zijn stille getuigen van een lange menselijke aanwezigheid in dit ogenschijnlijk verlaten landschap.",
      },
      {
        type: "afbeelding",
        src: "/kemkem-petroglyphs.jpg",
        alt: "Prehistorische rotsgravures met ingekraste tekeningen van kamelen en letters in rode zandsteen, Kem Kem regio",
        bijschrift: "Ingekraste rotsgravures in de rode zandsteen van de Kem Kem, met een paard of kameel en symbolen van vroegere bezoekers.",
      },
      {
        type: "h2",
        tekst: "Het werk achter de vondst",
      },
      {
        type: "p",
        tekst: "De fossielen komen niet vanzelf tevoorschijn. Lokale mannen uit de regio Merzouga werken dagelijks in de bergen, soms diep in zelfgegraven tunnels, soms op steile hellingen die alleen te voet bereikbaar zijn. Ze beginnen vroeg, voor de hitte ondraaglijk wordt. Met beitel, hamer en borstel werken ze met uiterste precisie. Eén verkeerde beweging beschadigt onherstelbaar wat 95 miljoen jaar intact bleef.",
      },
      {
        type: "video",
        videoId: "ZvzBnTgJvkQ",
        videotitel: "Fossielenjacht: precisiewerk in de woestijnhitte",
        bijschrift: "Hoe de gravers te werk gaan nadat het eerste zware graafwerk is gedaan. Geduld, precisie en extreme hitte.",
      },
      {
        type: "video",
        videoId: "vVmYfAaFGTI",
        videotitel: "Binnen in een actieve fossielentunnel",
        bijschrift: "Een blik in een vers gegraven tunnel in de bergwand. Buiten boven de 40 graden, binnen opvallend koel.",
      },
      {
        type: "quote",
        tekst: "Wat vroeger regelmatig gevonden werd, ligt nu diep verborgen of is simpelweg verdwenen. Het is een zeldzaam voorrecht om deze stukken nog in zo'n complete staat te zien.",
      },
      {
        type: "h2",
        tekst: "Wat je in de hand houdt",
      },
      {
        type: "p",
        tekst: "Op de kartonnen planken die de mannen op de grond uitleggen liggen tientallen stukken. Tanden van verschillende soorten, herkenbaar aan vorm en kleur. Wervelstukken. Schubben van oerpantservissen. Botfragmenten van reusachtige krokodillen. De afwisseling is duizelingwekkend. Dit zijn geen replica's of museum-afgietsels. Dit zijn de originelen, net uit de grond.",
      },
      {
        type: "afbeelding",
        src: "/kemkem-tand-hand.jpg",
        alt: "Fossiele dinosaurustand in een hand, rode woestijnbodem op de achtergrond, Kem Kem Marokko",
        bijschrift: "Een fossiele tand, vermoedelijk van een grote theropode, gevonden in de rode lagen van de Kem Kem formatie.",
      },
      {
        type: "afbeelding",
        src: "/kemkem-fossielen-veld.jpg",
        alt: "Uitgespreide fossielencollectie op karton in de woestijn: tanden, botten, schubben van prehistoric dieren",
        bijschrift: "Een selectie vondsten uitgelegd op karton in het veld. Tanden, botten en schubben van Cretaceous-tijdperk.",
      },
      {
        type: "h2",
        tekst: "Jouw expeditie met ArabDutch",
      },
      {
        type: "p",
        tekst: "ArabDutch organiseert kleinschalige fossielenexpedities naar de Kem Kem en omgeving, voor individuen en groepen tot vijf personen. Je wordt opgehaald per jeep en begeleid door onze vaste gids ter plaatse, een man die de bergen kent als zijn broekzak. Je zoekt mee op veilige, bekende locaties. Geen risico, geen avontuur dat verkeerd afloopt.",
      },
      {
        type: "lijst",
        items: [
          "Ophalen per jeep vanuit je hotel in Merzouga of Erfoud.",
          "Begeleiding door een ervaren lokale gids die de vindplaatsen kent.",
          "Zoeken op veilige plekken, weg van instabiele tunnels en steile hellingen.",
          "Je mag een selectie kleine fossielen meenemen als aandenken.",
          "We assisteren bij het correct inpakken en, indien gewenst, bij het transport van fossielen en edelstenen vanuit Marokko naar de EU.",
          "Hotel, vervoer en alle logistiek regelen we voor je, alles tegen kostprijs.",
        ],
      },
      {
        type: "video",
        videoId: "VQrrRVRrIO4",
        videotitel: "Marokkaanse theeceremonie met lokale fossielenexperts in Merzouga",
        bijschrift: "Onder het genot van verse muntthee vertellen de lokale kenners over hun vondsten: Spinosaurus, Carcharodontosaurus en de rijkdom van de Kem Kem.",
      },
      {
        type: "p",
        tekst: "De trip is meer dan een excursie. Het is een ontmoeting met de mensen die dit erfgoed bewaken, met een landschap dat niets van zijn kracht heeft verloren, en met een stukje geschiedenis dat je letterlijk in de hand kunt houden. Heb je interesse in transport of aankoop van fossielen, edelstenen of andere authentieke producten uit Marokko naar de EU? Wij denken graag mee.",
      },
      {
        type: "quote",
        tekst: "Wij brengen je op plekken waar de massa niet komt. Wij kennen de verhalen achter de stenen en de mensen achter het werk.",
      },
      {
        type: "p",
        tekst: "Neem contact op via onze contactpagina voor meer informatie, prijzen en beschikbaarheid. We maken van elke trip een persoonlijke, onvergetelijke ervaring.",
      },
    ],
  },
  {
    slug: "merzouga-woestijn-avontuur-complete-gids",
    datum: "13 mei 2026",
    tag: "Avontuur & Natuur",
    titel: "Merzouga: de complete woestijngids voor een authentieke Sahara-beleving",
    excerpt: "Quads over de duinen, kamperen onder een hemel vol sterren, je laten begraven in gloeiend woestijnzand voor je gewrichten, verse kamelenmelk drinken bij zonsopgang. En dat alles in de omgeving van Erg Chebbi, een van de mooiste duingebieden van Afrika. ArabDutch regelt het van A tot Z.",
    afbeelding: "/kemkem-petroglyphs.jpg",
    inhoud: [
      {
        type: "intro",
        tekst: "Merzouga is meer dan een bestemming. Het is een gevoel. De rode duinen van Erg Chebbi rijzen tot 150 meter op uit het vlakke land. De stilte is zo diep dat je je eigen hartslag hoort. En als de zon ondergaat achter de bergen, kleurt de hemel in tinten die geen fotograaf ooit volledig vastlegt. Dit is waar wij je naartoe brengen.",
      },
      {
        type: "h2",
        tekst: "Erg Chebbi: de duinen die alles overheersen",
      },
      {
        type: "p",
        tekst: "De zandduinen van Erg Chebbi zijn een van de grootste en mooiste ergs van Marokko, tot 150 meter hoog, oranjegoud bij zonsopkomst en diep rood bij ondergaande zon. Dit is de klassieke plek voor kameelritten bij dageraad, voor het kamperen in een Berbertent midden in het zand en voor het gevoel van absolute eenzaamheid in een wereld die ineens heel groot lijkt.",
      },
      {
        type: "video",
        videoId: "c1kJYtXW-6o",
        videotitel: "Panorama rode bergen Merzouga",
        bijschrift: "Uitgestrekte vlaktes van de Sahara, met de rode bergen op de achtergrond en de graafplaatsen die de prehistorie bewaken.",
      },
      {
        type: "h2",
        tekst: "Quads, enduro's en crossmotors",
      },
      {
        type: "p",
        tekst: "Wie van avontuur houdt, vindt hier zijn gading. In de omgeving van Merzouga kun je quads huren voor een rit over de vlaktes en door de duinen, enduro-motoren voor wie meer technisch terrein wil verkennen, of crossmotoren voor de echte off-road liefhebber. Onze gids kent de beste routes, de uitkijkpunten en de plekken waar toeristen nooit komen.",
      },
      {
        type: "h2",
        tekst: "De zandbegraafnis: traditionele geneeskunde van de Sahara",
      },
      {
        type: "p",
        tekst: "In de zomermaanden, als de woestijnbodem opgestookt is tot ver boven de 50 graden, zoeken mensen de duinen op voor een heel bijzonder ritueel: de zandbegraafnis. Je wordt tot je nek begraven in het gloeiende zand, met alleen je hoofd boven de grond. Twintig tot dertig minuten. Het is een eeuwenoude Sahara-traditie die lokaal bekend staat als effectief bij reumatische klachten, gewrichtspijn en spierproblemen. Wetenschappelijk onderzoek bevestigt dat de intense warmte de doorbloeding stimuleert en ontspanning bevordert. Mensen reizen van ver om dit te ervaren.",
      },
      {
        type: "quote",
        tekst: "Je gaat in de grond als iemand met pijnlijke gewrichten en je komt eruit als iemand die de aarde heeft gevoeld. Het is raar, intens en onvergetelijk.",
      },
      {
        type: "h2",
        tekst: "Kamperen in de woestijn: gratis, vrij en onvergetelijk",
      },
      {
        type: "p",
        tekst: "De woestijn rond Merzouga is vrij toegankelijk. Kamperen is gratis en legaal. Met een slaapzak en een mat slaap je onder een hemel vol sterren, zo helder dat de Melkweg zichtbaar is als een brede witte band. Geen lichtpollutie, geen geluid. Alleen de wind, het zand en de nacht. Onze gids kent de veiligste en mooiste kampeerspots, ver van de drukke toeristenoorden.",
      },
      {
        type: "video",
        videoId: "WNdT4OBaPaY",
        videotitel: "De rode bergen en de omgeving van Merzouga vanuit panoramisch perspectief",
        bijschrift: "De uitgestrekte, ruige schoonheid van de Marokkaanse Sahara rondom Merzouga.",
      },
      {
        type: "h2",
        tekst: "Kameelritten en verse kamelenmelk",
      },
      {
        type: "p",
        tekst: "Een kameelrit bij zonsopkomst door Erg Chebbi is een van die ervaringen die je leven lang bijblijft. De rust van het dier, het ritme van de stap, het licht dat langzaam over de duinen trekt. Na de rit wacht verse kamelenmelk bij de lokale familie die onze partner is in de regio. Kamelenmelk is rijker aan vitamine C en ijzer dan koemelk, bevat probiotische stoffen en is van nature laag in lactose. De smaak is licht zoutig, fris en volledig anders dan je verwacht.",
      },
      {
        type: "h2",
        tekst: "Verse dadels en de gastvrijheid van de lokale bevolking",
      },
      {
        type: "p",
        tekst: "De mensen in de omgeving van Merzouga zijn Berbers en Sahrawi die al generaties lang in dit landschap wonen. Hun gastvrijheid is geen toeristische act: het is wie ze zijn. Je wordt uitgenodigd voor thee, voor eten, voor een gesprek. De dadels in deze regio worden geplukt van palmen die rechtstreeks uit de woestijnbodem groeien. Vers, zacht, met een smaak die niets te maken heeft met wat je in een supermarkt vindt.",
      },
      {
        type: "h2",
        tekst: "De fossielenjacht: een wereld op zich",
      },
      {
        type: "p",
        tekst: "De regio rond Merzouga grenst aan de Kem Kem formatie, een van de rijkste fossielengebieden ter wereld. Tanden van Spinosaurus en Carcharodontosaurus, botten van zeedinosaurussen, schubben van oervissen. Wie mee wil zoeken, doet dat samen met onze gids op veilige locaties. Je mag een selectie kleine vondsten meenemen. Lees meer in ons uitgebreide artikel over de Kem Kem fossielenjacht.",
      },
      {
        type: "video",
        videoId: "Mk8Zln9-dnM",
        videotitel: "Gravers in de bergen van Kem Kem: tunnels uithouwen voor fossielen",
        bijschrift: "Lokale gravers houwen diep in de rotsen, op zoek naar overblijfselen van miljoenen jaren oud. Dit is de werkelijkheid achter elke fossielenvondst.",
      },
      {
        type: "h2",
        tekst: "Wat ArabDutch voor je regelt",
      },
      {
        type: "p",
        tekst: "Wij organiseren de complete trip, van ophalen per jeep tot hotel, maaltijden, activiteiten en lokale begeleiding. Alles tegen kostprijs, voor individuen of kleine groepen van maximaal vijf personen. Geen massatoerisme, geen vaste pakketten. Elke trip is persoonlijk samengesteld op basis van wat jij wilt meemaken.",
      },
      {
        type: "lijst",
        items: [
          "Ophalen per jeep vanuit jouw locatie in Marokko.",
          "Hotel in Merzouga of bivak in de woestijn, jouw keuze.",
          "Kameelrit bij zonsopkomst met verse kamelenmelk.",
          "Quad, enduro of crossmotor huren met begeleiding.",
          "Zandbegraafnis (op aanvraag, in de zomermaanden).",
          "Fossielenjacht in de Kem Kem met lokale gids op veilige locaties.",
          "Vrij kamperen onder de sterren, of een Berber-tent in de duinen.",
          "Optioneel: assistentie bij transport van fossielen, edelstenen of andere producten vanuit Marokko naar de EU.",
        ],
      },
      {
        type: "p",
        tekst: "Voor meer informatie, beschikbaarheid en prijzen: neem contact op via onze contactpagina. We beantwoorden elke vraag persoonlijk.",
      },
      {
        type: "quote",
        tekst: "Wij nemen je mee buiten de gebaande paden. Onze passie is om de authentieke kant van Marokko te laten zien, van de diepste fossielmijnen tot de hoogste duinen.",
      },
    ],
  },
  {
    slug: "gitex-future-health-africa-casablanca-2026",
    datum: "8 mei 2026",
    tag: "Netwerk & Events",
    titel: "Casablanca als Afrika's gezondheidshub: wat GITEX Future Health 2026 betekent voor Nederlandse healthtech",
    excerpt: "Drie dagen op de eerste editie ooit van GITEX Future Health Africa. 300+ exposanten, 50+ investeerders uit 30 landen, en een continent dat hardop kiest voor gezondheidssoevereiniteit. ArabDutch was er, en wat we zagen verandert het speelveld.",
    afbeelding: "/gitex-health-casablanca-cover.png",
    inhoud: [
      {
        type: "intro",
        tekst: "Van 4 tot 6 mei 2026 was Casablanca het zenuwcentrum van de Afrikaanse gezondheidszorg. De eerste editie van GITEX Future Health Africa bracht ministers, ziekenhuisdirecteuren, AI-onderzoekers, fondsen en honderden bedrijven samen onder één centraal thema: hoe bouwt Afrika een eigen, soevereine gezondheidssector? ArabDutch was er drie dagen lang en kwam thuis met een glasheldere overtuiging: Nederlandse healthtech mag deze trein niet missen.",
      },
      {
        type: "afbeelding",
        src: "/gitex-health-casablanca-organizers.png",
        alt: "Abdoellah Ouadoudi bij Organizers Office van GITEX Future Health Africa Morocco 2026",
        bijschrift: "Founder Abdoellah Ouadoudi bij het Organizers Office van GITEX Future Health Africa, Casablanca",
      },
      {
        type: "h2",
        tekst: "Waarom Casablanca, en waarom nu?",
      },
      {
        type: "p",
        tekst: "GITEX is Dubai. Het is geen vanzelfsprekendheid dat het merk zijn eerste health-editie buiten de Golf neerzet, laat staan in Marokko. Toch is de keuze logisch: Casablanca ligt op vier uur van Amsterdam, vormt de toegangspoort tot Franstalig Afrika én tot de Atlantische kust, en Marokko investeert miljarden in ziekenhuizen, medische universiteiten en digitale gezondheidsinfrastructuur. De Mohammed VI Foundation for Science and Health (FM6SS), het Ministerie van Volksgezondheid en Kaoun International tilden de eerste editie samen op.",
      },
      {
        type: "p",
        tekst: "Het resultaat: meer dan 300 exposanten, 50+ investeerders, delegaties uit ruim 30 landen, van Senegal en Nigeria tot Saoedi-Arabië, de VAE, Frankrijk en de Verenigde Staten. Het Executive Summit voerde de boventoon onder een titel die je niet snel vergeet: 'Financing Health Sovereignty: From Dependency to Dominance.'",
      },
      {
        type: "afbeelding",
        src: "/gitex-health-casablanca-hall.png",
        alt: "GITEX Future Health Africa beursvloer Casablanca",
        bijschrift: "De beursvloer met startup-zones: Idea Stage, Pre-Seed en Series & Beyond",
      },
      {
        type: "h2",
        tekst: "Vier verhalen die boven kwamen drijven",
      },
      {
        type: "p",
        tekst: "Een beursvloer met 300 exposanten levert ruis op. Maar als je drie dagen lang luistert in plaats van verkoopt, kristalliseren er een paar thema's uit. Dit zijn de vier die we mee terug namen naar Nederland.",
      },
      {
        type: "lijst",
        items: [
          "Soevereiniteit boven afhankelijkheid: Afrikaanse ministers willen geen donatiemodel meer, maar eigen productie, eigen data, eigen infrastructuur. Wie zo praat, zoekt partners, geen leveranciers.",
          "AI in de spreekkamer: de MedAI 2026 Conference (FM6SS) bracht clinici, onderzoekers en wereldwijde AI-leiders samen. Diagnostiek, beeldvorming en taalmodellen voor onderbediende talen kregen het podium.",
          "Het ziekenhuis verlaat het ziekenhuis: zorg verschuift naar preventie, monitoring en telehealth. Imani Health uit de VS, dat we op het Pre-Seed plein troffen, bouwt aan AI-vertaling tussen patiënt en arts over heel Afrika. Precies het soort schaalbare missie waar GITEX op draait.",
          "Geld is er, als je voorbereid binnenkomt: sponsors op platinum-niveau (Morocco Healthcare Supplier, Orange, Sanofi) gaven aan dat ze actief joint ventures zoeken met Europese partijen die schaalbare technologie kunnen leveren.",
        ],
      },
      {
        type: "afbeelding",
        src: "/gitex-health-casablanca-team.jpg",
        alt: "ArabDutch team Abdoellah Ouadoudi en Marouane Arrob bij GITEX Future Health Africa",
        bijschrift: "Abdoellah Ouadoudi (founder) en Marouane Arrob (project manager): de ArabDutch-delegatie in Casablanca",
      },
      {
        type: "h2",
        tekst: "Wat dit betekent voor Nederlandse bedrijven",
      },
      {
        type: "p",
        tekst: "Nederland heeft een onderschatte positie in healthtech. We bouwen MRI-software, klinische beslissingssystemen, beademings-IoT, e-health-platforms en chirurgische robotica op wereldniveau, én we hebben de traditie om met opkomende markten samen te werken zonder paternalisme. Dat laatste hoorde ik op deze beurs vaak terug: Afrikaanse beslissers zoeken partners die luisteren in plaats van dicteren.",
      },
      {
        type: "p",
        tekst: "Concreet: voor Nederlandse medtech-leveranciers, ziekenhuis-IT-bedrijven, AI-startups in de zorg, opleidingsinstellingen en investeringsfondsen liggen er nu kansen die er over twee jaar veel duurder uitzien. De pre-seed en seed-rondes worden nu gevoerd. De pilots worden nu opgezet. De distributie-partnerschappen worden nu beklonken.",
      },
      {
        type: "quote",
        tekst: "Wij willen niet alleen technologie importeren. Wij willen partners die met ons opbouwen, die hun engineers naar Casablanca sturen en die geloven dat Afrika geen testmarkt is, maar een thuismarkt.",
      },
      {
        type: "h2",
        tekst: "Wie we spraken",
      },
      {
        type: "p",
        tekst: "We hadden gesprekken met platinum-sponsor MHS (Morocco Healthcare Supplier) over distributie van Nederlandse medische technologie in Marokko en West-Afrika; met Orange over telemedicine-infrastructuur; met Sanofi-vertegenwoordigers over publiek-private samenwerking in Noord-Afrika; en met meerdere Afrikaanse healthtech-startups die op zoek zijn naar Europese productontwikkeling en CE-certificering. Daarnaast troffen we de organisatoren van GITEX Future Health en de FM6SS, die volgend jaar opnieuw in Casablanca samenkomen.",
      },
      {
        type: "h2",
        tekst: "De rol van ArabDutch",
      },
      {
        type: "p",
        tekst: "Een beurs bezoeken is één ding. Er rendement uit halen, is iets heel anders. ArabDutch doet precies wat onze naam belooft: we vormen de brug tussen Nederlandse healthtech-bedrijven en Arabisch-Afrikaanse beslissers. Wij kennen de taal, de cultuur, de juridische voetangels en, minstens zo belangrijk, de mensen die op deze beurs koffie dronken. Onze rol is om Nederlandse partijen niet als toeristen, maar als geloofwaardige partners te introduceren.",
      },
      {
        type: "quote",
        tekst: "GITEX Future Health Africa was geen netwerkfeestje. Het was een statement: Afrika bouwt zelf aan zijn gezondheidssysteem, en Europa is welkom, mits met respect en serieuze waarde.",
      },
      {
        type: "h2",
        tekst: "Vooruit kijken",
      },
      {
        type: "p",
        tekst: "ArabDutch komt terug naar Casablanca. We werken op dit moment aan een Nederlandse healthtech-delegatie voor de tweede editie in 2027: een gecureerde groep bedrijven die we vooraf matchen met de juiste Marokkaanse en pan-Afrikaanse partijen. Geen massabezoek, maar gerichte gesprekken die ergens toe leiden.",
      },
      {
        type: "p",
        tekst: "Bent u een Nederlands healthtech-bedrijf, ziekenhuis, fonds of onderzoeksinstelling met ambitie in Noord-Afrika of de Golfregio? Neem contact op met ArabDutch voor een vrijblijvend verkennend gesprek. We delen graag onze observaties, contacten en aanbevelingen uit Casablanca.",
      },
    ],
  },
  {
    slug: "vision-2030-vs-vision-2040",
    datum: "8 mei 2026",
    tag: "Strategie",
    titel: "Vision 2030 of Vision 2040? Waar moet u nú instappen",
    excerpt: "Saoedi-Arabië, VAE, Qatar én Oman publiceren strategische masterplannen. Welk land past bij welk type Nederlands bedrijf?",
    inhoud: [
      {
        type: "intro",
        tekst: "De Golfregio is in volle transformatie. Saoedi-Arabië pompt $1 biljoen in Vision 2030, de VAE positioneert zich als wereldspeler met We the UAE 2031, Qatar werkt aan National Vision 2030, en Oman volgt met Vision 2040. Voor Nederlandse bedrijven is dit hét moment om te kiezen. Maar waar?",
      },
      {
        type: "h2",
        tekst: "Saoedi-Arabië: schaal en snelheid",
      },
      {
        type: "p",
        tekst: "Vision 2030 is geen marketingplaatje. NEOM ($500 miljard), Qiddiya (entertainment-mega-city), de Rode Zee Resorts en Diriyah maken het land tot 's werelds grootste bouwplaats. Voor Nederlandse bedrijven in agritech, infrastructuur, watertechnologie, smart cities en duurzame energie is dit goud, als u snel kunt opschalen en bereid bent om in een complex bureaucratisch systeem te opereren.",
      },
      {
        type: "lijst",
        items: [
          "Beste fit: agritech, watertechnologie, infra, mining, toerisme",
          "Investering: hoog ($500K+ voor serieuze marktbetreding)",
          "Tempo: zeer snel, beslissingen binnen weken mogelijk",
          "Risico: bureaucratie, lokaliseringsverplichtingen, langetermijncommitment vereist",
        ],
      },
      {
        type: "h2",
        tekst: "VAE: hub voor de hele regio",
      },
      {
        type: "p",
        tekst: "Geen masterplan vraagt zoveel kapitaal als Dubai of Abu Dhabi. De VAE is uw springplank: 50+ free zones, 0% inkomstenbelasting, banken die internationaal opereren en het beste talent uit de hele regio. Voor Nederlandse SaaS-, fintech-, logistiek- en B2B-services-bedrijven is het de logische eerste stap.",
      },
      {
        type: "lijst",
        items: [
          "Beste fit: fintech, SaaS, logistiek, professionele dienstverlening",
          "Investering: gemiddeld (€50K-€150K opstart)",
          "Tempo: zeer snel, bedrijf binnen 2 weken operationeel",
          "Risico: hoge operationele kosten, intense concurrentie",
        ],
      },
      {
        type: "h2",
        tekst: "Qatar: strategische precisie",
      },
      {
        type: "p",
        tekst: "Qatar Financial Centre opereert onder Engels recht, biedt 10% vennootschapsbelasting en 100% buitenlands eigendom. Sinds het WK 2022 is het land geopend voor toerisme én voor zakelijke buitenlanders. Nederlandse bedrijven in energie, financiële diensten, sport en MICE (Meetings, Incentives, Conferences, Exhibitions) vinden hier een klein maar kapitaalkrachtig publiek.",
      },
      {
        type: "h2",
        tekst: "Oman: de onontdekte kans",
      },
      {
        type: "p",
        tekst: "Vision 2040 is bewust minder bombastisch. Oman positioneert zich als de logistieke poort tussen Afrika, Azië en de Golf via de haven van Duqm. Geen Dubai-prijzen, wél Vision 2040-subsidies voor logistiek, toerisme, mining en visserij. Voor Nederlandse MKB-bedrijven die zonder kapitaalgevecht willen opereren is dit hét moment.",
      },
      {
        type: "quote",
        tekst: "Wie nu kiest tussen deze vier kan over vijf jaar terugkijken op de slimste businessbeslissing van zijn carrière. Wie wacht, kijkt vanaf de zijlijn.",
      },
      {
        type: "h2",
        tekst: "Welke kiezen?",
      },
      {
        type: "p",
        tekst: "De juiste keuze hangt af van uw sector, kapitaal, tempo en risicotolerantie. ArabDutch maakt voor klanten een gepersonaliseerde landenmatching, gebaseerd op uw KPI's en netwerk-aanwezigheid. Neem contact op voor een vrijblijvende analyse.",
      },
    ],
  },
  {
    slug: "wk-2030-marokko-kansen",
    datum: "20 maart 2026",
    tag: "Investering",
    titel: "WK 2030 in Marokko: €5 miljard infrastructuurkansen voor NL-bedrijven",
    excerpt: "Marokko organiseert samen met Spanje en Portugal het WK 2030. De investeringen zijn er nu al. Dit zijn de sectoren waar Nederlandse bedrijven écht kunnen instappen.",
    inhoud: [
      {
        type: "intro",
        tekst: "Dat Marokko het WK 2030 binnenhaalde was een verrassing voor de buitenwacht. Voor wie de regio kent, was het de logische uitkomst van vijf jaar strategisch positioneren. En het echte werk begint nu: €5 miljard aan investeringen in stadions, hotels, snelwegen, hogesnelheidstreinen en luchthavens. Voor Nederlandse bedrijven zijn de openingen aanzienlijk, als u weet waar u moet kijken.",
      },
      {
        type: "h2",
        tekst: "Stadioncluster: Casablanca, Tanger, Marrakech, Agadir",
      },
      {
        type: "p",
        tekst: "Vijf stadions worden gebouwd of gerenoveerd. Het Grand Stade Hassan II in Casablanca wordt met 115.000 plaatsen het grootste voetbalstadion ter wereld. Nederlandse expertise in stadionakoestiek (Royal HaskoningDHV), gras- en sportveldtechnologie, evacuatie-engineering en duurzame koeltechnieken is ronduit gewild. Lokale aannemers zoeken actief Europese specialisten.",
      },
      {
        type: "h2",
        tekst: "HSR: Casablanca naar Marrakech",
      },
      {
        type: "p",
        tekst: "De TGV Al Boraq wordt verlengd van Tanger via Rabat-Casablanca tot Marrakech en Agadir. Dat is €3 miljard aan rails, stations en signaling. Nederlandse bedrijven (Strukton, BAM Infra, Movares) hebben al ervaring in de regio en de aanbestedingen lopen via 2027.",
      },
      {
        type: "h2",
        tekst: "Hotels: €1.5 miljard tot 2030",
      },
      {
        type: "p",
        tekst: "Voor het WK is een capaciteit van 50.000 extra bedden nodig. Vier- en vijfsterren hotels rond de speelsteden. Voor Nederlandse hotelketens (Citizen M, Eden), interieurbouwers, technische installateurs en horeca-tech is dit een open markt. Marokkaanse vastgoedontwikkelaars zoeken actief Europese kwaliteitspartners.",
      },
      {
        type: "lijst",
        items: [
          "Tanger Med: uitbreiding container terminal (logistiek-tech, automatisering)",
          "Rabat-Salé Airport: nieuwe terminal (luchtvaarttech, beveiliging)",
          "Casablanca Finance City: €800M uitbreiding (fintech, juridische dienstverlening)",
          "Marrakech Smart City: sensor-infrastructuur en data-platforms",
        ],
      },
      {
        type: "h2",
        tekst: "Hoe instappen?",
      },
      {
        type: "p",
        tekst: "Marokkaanse aanbestedingen vereisen vrijwel altijd een lokale partner. Het opbouwen van die relaties duurt maanden tot jaren. Wie nu start, is in 2027 operationeel. ArabDutch begeleidt Nederlandse bedrijven door dit proces: van partnerselectie tot due diligence en contractbesprekingen.",
      },
      {
        type: "quote",
        tekst: "WK's zijn voor de meeste landen een uitgavenpost. Voor Marokko is het de katalysator van een complete economische upgrade. Wie meedoet, profiteert decennialang.",
      },
      {
        type: "p",
        tekst: "Wilt u weten welke kansen passen bij uw bedrijf? Neem contact op met ArabDutch voor een vrijblijvende verkenning.",
      },
    ],
  },
  {
    slug: "temara-investering",
    datum: "14 oktober 2025",
    tag: "Investering",
    titel: "Van Nederland naar Marokko: waarom slimme investeerders kiezen voor Temara",
    excerpt: "Nieuwe contacten, groeiende kansen en vastgoed in Marokko: Temara & Rabat in de spotlight.",
    afbeelding: "/appartement.jpg",
    inhoud: [
      {
        type: "intro",
        tekst: "Temara, gelegen op slechts tien kilometer van de Marokkaanse hoofdstad Rabat, is bezig aan een stille opmars. Wat ooit een rustige kuststad was, transformeert snel tot een van de meest aantrekkelijke bestemmingen voor Nederlandse en Europese investeerders die op zoek zijn naar rendement buiten Europa.",
      },
      {
        type: "h2",
        tekst: "Waarom Temara & Rabat?",
      },
      {
        type: "p",
        tekst: "Marokko heeft de afgelopen jaren een indrukwekkende economische stabiliteit getoond. De combinatie van politieke continuïteit, een groeiende middenklasse en strategische ligging tussen Europa en Afrika maakt het land aantrekkelijk voor langetermijninvesteringen. Binnen Marokko springt de regio Rabat-Temara er specifiek uit door de aanwezigheid van overheidsinstanties, diplomatieke vertegenwoordigingen en een goed opgeleide beroepsbevolking.",
      },
      {
        type: "afbeelding",
        src: "/appartement2.jpg",
        alt: "Appartementencomplex Temara",
        bijschrift: "Modern vastgoed in de regio Temara-Rabat",
      },
      {
        type: "h2",
        tekst: "Vastgoedkansen voor Nederlandse investeerders",
      },
      {
        type: "p",
        tekst: "De vastgoedmarkt in Temara biedt op dit moment een zeldzame combinatie: relatief lage instapprijzen, solide huurvraag vanuit lokale professionals en expats, én een overheid die actief investeert in infrastructuur, van snelwegverbindingen tot het nieuwe TGV-station in Rabat. Appartementen die vijf jaar geleden 60.000 euro kostten, worden nu voor het dubbele verkocht.",
      },
      {
        type: "lijst",
        items: [
          "Gemiddeld rendement van 5–8% per jaar op verhuurde appartementen",
          "Geen vermogensbelasting voor buitenlandse eigenaren bij correcte structurering",
          "Mogelijkheid tot aankoop via Marokkaans bankrekening of overmaking in vreemde valuta",
          "Groeiende toeristische sector drijft vraag naar vakantieverhuur",
        ],
      },
      {
        type: "h2",
        tekst: "De rol van ArabDutch",
      },
      {
        type: "p",
        tekst: "ArabDutch begeleidt Nederlandse investeerders van oriëntatie tot notariële overdracht. Wij kennen de lokale markt, spreken de taal en hebben een netwerk van betrouwbare notarissen, makelaars en belastingadviseurs in de regio. Zo voorkomt u de valkuilen die buitenlandse kopers zonder lokale kennis regelmatig treffen.",
      },
      {
        type: "quote",
        tekst: "Investeren in Marokko voelt voor veel Nederlanders nog als een grote stap. Maar met de juiste begeleiding is het een van de soliedste keuzes die je op dit moment kunt maken.",
      },
      {
        type: "afbeelding",
        src: "/wk2030.jpg",
        alt: "WK 2030 Marokko",
        bijschrift: "Het WK 2030 in Marokko versnelt investeringen in infrastructuur en vastgoed",
      },
      {
        type: "h2",
        tekst: "WK 2030 als extra katalysator",
      },
      {
        type: "p",
        tekst: "Met het Wereldkampioenschap voetbal 2030 dat deels in Marokko wordt gehouden, investeert de Marokkaanse overheid miljarden in stadions, hotels, wegen en spoorverbindingen. Dit zorgt voor een structurele waardetoename van vastgoed in de grote steden, en Rabat staat bovenaan de lijst van begunstigde regio's.",
      },
      {
        type: "p",
        tekst: "Wilt u meer weten over investeringsmogelijkheden in Temara of Rabat? Neem contact op met ArabDutch voor een vrijblijvend gesprek.",
      },
    ],
  },
  {
    slug: "klantentour-saoedi-arabie",
    datum: "9 september 2025",
    tag: "Innovatie",
    titel: "Bruggen bouwen met innovatie: een succesvolle klantentour uit Saoedi-Arabië en Libië",
    excerpt: "Onlangs begeleidde ArabDutch een bijzondere klantentour met bezoeken aan Hoogendoorn en LetsGrow voor agritech-technologieën.",
    afbeelding: "/hoogendoorn1.jpeg",
    inhoud: [
      {
        type: "intro",
        tekst: "In september 2025 organiseerde ArabDutch een meerdaagse klantentour voor een delegatie van zakelijke relaties uit Saoedi-Arabië en Libië. Het programma stond volledig in het teken van Nederlandse agritech-innovaties, met als hoogtepunten de bezoeken aan Hoogendoorn Growth Management en LetsGrow.com.",
      },
      {
        type: "afbeelding",
        src: "/hoogendoorn1.jpeg",
        alt: "Bezoek Hoogendoorn Growth Management",
        bijschrift: "De delegatie bij Hoogendoorn Growth Management in 's-Gravenzande",
      },
      {
        type: "h2",
        tekst: "Waarom agritech?",
      },
      {
        type: "p",
        tekst: "Zowel Saoedi-Arabië als Libië staan voor een urgente uitdaging: hoe produceer je voedsel in een droog klimaat met schaarse watervoorraden? Nederland heeft decennialang pionierswerk verricht op dit gebied. Onze kassen, sensornetwerken en datagestuurd telen zijn wereldwijd toonaangevend. Voor onze gasten was dit bezoek dan ook geen toeristische trip. Het was een serieuze verkenning van technologieën die zij thuis willen implementeren.",
      },
      {
        type: "h2",
        tekst: "Hoogendoorn Growth Management",
      },
      {
        type: "p",
        tekst: "Hoogendoorn is marktleider in klimaat- en procescomputers voor de glastuinbouw. Tijdens het bezoek kregen onze gasten een uitgebreide rondleiding door de demo-omgeving en een technische presentatie over hoe sensortechnologie en AI worden ingezet om optimale groeiomstandigheden te creëren, met minimaal water- en energieverbruik.",
      },
      {
        type: "lijst",
        items: [
          "Geavanceerde klimaatregeling op basis van real-time sensordata",
          "Integratie met externe weerdata voor predictief telen",
          "Bewezen resultaten in waterarme regio's wereldwijd",
          "Schaalbaar van kleine pilotinstallatie tot industriële kassen",
        ],
      },
      {
        type: "h2",
        tekst: "LetsGrow.com: data als fundament",
      },
      {
        type: "p",
        tekst: "Het tweede bezoek bracht de delegatie naar LetsGrow.com, een platform dat tuinbouwdata van honderden sensoren en machines centraliseert. Het stelt telers in staat om op basis van feiten te sturen in plaats van op gevoel. Voor regio's die van nul af aan een moderne agrarische sector willen opbouwen, is dit soort datagedreven aanpak bijzonder waardevol.",
      },
      {
        type: "quote",
        tekst: "Nederland heeft niet het grootste land, maar wel de slimste manier van telen. Dat is precies wat wij naar huis willen brengen.",
      },
      {
        type: "h2",
        tekst: "Resultaat: concrete vervolgstappen",
      },
      {
        type: "p",
        tekst: "De tour resulteerde in meerdere concrete gesprekken over pilots en samenwerkingsverbanden. ArabDutch fungeert hierbij als de brug: wij begrijpen de culturele en zakelijke context aan beide kanten, en zorgen dat technologieleveranciers en afnemers elkaar daadwerkelijk vinden, en begrijpen.",
      },
      {
        type: "p",
        tekst: "Bent u een Nederlandse technologiebedrijf dat wil groeien in het Midden-Oosten of Noord-Afrika? Of bent u een Arabische organisatie die Nederlandse kennis wil inzetten? ArabDutch verbindt u.",
      },
    ],
  },
  {
    slug: "partnership-manea",
    datum: "13 mei 2025",
    tag: "Partnership",
    titel: "Partnership met Manea Saoedi-Arabië",
    excerpt: "ArabDutch & Manea: een nieuwe stap richting cybersecurity-uitbreiding in Afrika.",
    afbeelding: "/maneacybersecurity.png",
    inhoud: [
      {
        type: "intro",
        tekst: "ArabDutch is een strategisch partnerschap aangegaan met Manea, een toonaangevend Saoedi-Arabisch cybersecuritybedrijf. Dit partnerschap markeert een belangrijke stap in onze missie om innovatieve technologieoplossingen te verbinden tussen het Arabische wereld en Afrika.",
      },
      {
        type: "afbeelding",
        src: "/maneacybersecurity.png",
        alt: "Manea Cybersecurity",
        bijschrift: "Manea Cybersecurity: toonaangevend in de Arabische regio",
      },
      {
        type: "h2",
        tekst: "Wie is Manea?",
      },
      {
        type: "p",
        tekst: "Manea is een gespecialiseerd cybersecuritybedrijf gevestigd in Saoedi-Arabië, met jarenlange ervaring in het beveiligen van kritieke infrastructuur, overheidsnetwerken en private organisaties in de Golfregio. Met een portfolio dat loopt van penetratietesten tot beheerde beveiligingsdiensten (MSSP), behoort Manea tot de best gepositioneerde spelers in de regio.",
      },
      {
        type: "afbeelding",
        src: "/manealogo.jpeg",
        alt: "Manea logo",
        bijschrift: "",
      },
      {
        type: "h2",
        tekst: "Waarom dit partnerschap?",
      },
      {
        type: "p",
        tekst: "Afrika staat voor een snelle digitale transformatie. Van e-government tot mobiel bankieren: de digitale infrastructuur groeit snel. Maar cyberdreigingen groeien mee. Veel Afrikaanse organisaties missen de expertise en technologie om zichzelf adequaat te beschermen. Manea's bewezen aanpak uit de Golfregio is bij uitstek schaalbaar naar de Afrikaanse context.",
      },
      {
        type: "lijst",
        items: [
          "Gezamenlijke marktbenadering in Noord- en West-Afrika",
          "Introductie van Manea's diensten bij Afrikaanse overheidsinstanties",
          "Lokale aanwezigheid via ArabDutch's netwerk in Marokko en omgeving",
          "Kennisoverdracht en training voor lokale cybersecurity-professionals",
        ],
      },
      {
        type: "h2",
        tekst: "De rol van ArabDutch",
      },
      {
        type: "p",
        tekst: "ArabDutch treedt op als de brug tussen Manea en de Afrikaanse markt. Wij brengen lokale marktkennis, cultureel begrip en een uitgebreid netwerk van zakelijke en overheidscontacten in. Dit stelt Manea in staat om snel en effectief voet aan de grond te krijgen in regio's waar taal, cultuur en zakelijk klimaat sterk afwijken van de Golfregio.",
      },
      {
        type: "quote",
        tekst: "Cybersecurity is geen luxe meer. Het is een fundament. Wij brengen de beste technologie van de Arabische wereld naar Afrika, met ArabDutch als onze gids.",
      },
      {
        type: "h2",
        tekst: "Vooruitblik",
      },
      {
        type: "p",
        tekst: "In de komende maanden verwachten we de eerste gezamenlijke projecten van start te laten gaan. ArabDutch en Manea zijn in gesprek met meerdere organisaties in Marokko, Senegal en Nigeria. Wij houden u op de hoogte van de ontwikkelingen via onze blog en sociale kanalen.",
      },
    ],
  },
  {
    slug: "fossielen-ourika-vallei",
    datum: "31 juli 2024",
    tag: "Cultuur & Reizen",
    titel: "Fossielen zoeken en ontspannen in de Ourika Vallei",
    excerpt: "Een onvergetelijke fossielenreis naar Marokko, georganiseerd door ArabDutch.",
    afbeelding: "/ourika.jpg",
    inhoud: [
      {
        type: "intro",
        tekst: "Marokko is meer dan een zakelijke bestemming. Het is een land met een rijke cultuur, adembenemende landschappen en een geologische geschiedenis die teruggaat tot honderden miljoenen jaren geleden. In juli 2024 organiseerde ArabDutch een bijzondere reis naar de Ourika Vallei: een combinatie van cultuur, natuur en een uniek bezoek aan de fossielengebieden van Oued Zem.",
      },
      {
        type: "afbeelding",
        src: "/ourika.jpg",
        alt: "Ourika Vallei Marokko",
        bijschrift: "De prachtige Ourika Vallei in de Atlasgebergte",
      },
      {
        type: "h2",
        tekst: "De Ourika Vallei",
      },
      {
        type: "p",
        tekst: "De Ourika Vallei ligt op ongeveer een uur rijden van Marrakesh, ingeklemd tussen de rode rotsen van de Hoge Atlas. Het is een wereld die ver af staat van de drukke medina: hier ruist de rivier, bloeien de amandelbomen en wonen Berberfamilies die al generaties lang in dezelfde valleien leven. Voor onze gasten was het een aangename schok hoe snel je van de moderne stad in een tijdloos landschap terechtkomt.",
      },
      {
        type: "h2",
        tekst: "Fossielen zoeken in Oued Zem",
      },
      {
        type: "p",
        tekst: "Een van de hoogtepunten van de reis was een excursie naar de fossielengebieden rond Oued Zem, in de regio Béni Mellal-Khénifra. Marokko is wereldwijd bekend om zijn uitzonderlijke fossielenrijkdom: trilobiten, ammoniten, goniatiten en zelfs resten van uitgestorven zeedieren zijn in deze regio in grote getale gevonden.",
      },
      {
        type: "afbeelding",
        src: "/ouedzemfossielen1.jpg",
        alt: "Fossielen Oued Zem",
        bijschrift: "Fossielenvondsten in de regio Oued Zem",
      },
      {
        type: "lijst",
        items: [
          "Trilobiten uit het Ordovicium (450 miljoen jaar oud)",
          "Ammoniten in perfecte spiraalvorm",
          "Goniatiten: voorlopers van de ammoniet",
          "Lokale gidsen met generatielange kennis van de vindplaatsen",
        ],
      },
      {
        type: "afbeelding",
        src: "/ouedzemfossielen2.jpg",
        alt: "Fossielenzoeken Marokko",
        bijschrift: "Op zoek naar fossielen in de Marokkaanse rotsen",
      },
      {
        type: "h2",
        tekst: "Meer dan een reis: een ervaring",
      },
      {
        type: "p",
        tekst: "Voor ArabDutch zijn culturele reizen niet los te zien van onze zakelijke missie. We geloven dat goede zakelijke relaties worden gebouwd op vertrouwen, en vertrouwen groeit het snelst wanneer mensen elkaar leren kennen buiten de vergaderzaal. De reis naar de Ourika Vallei was precies dat: een moment van verbinding, verwondering en gedeelde herinneringen.",
      },
      {
        type: "afbeelding",
        src: "/ouedzemfossielen3.jpg",
        alt: "Fossielengebied Marokko",
        bijschrift: "Het indrukwekkende landschap rondom de fossielengebieden",
      },
      {
        type: "quote",
        tekst: "Je kunt geen betere teambuilding bedenken dan samen op je knieën zitten in de Marokkaanse aarde, op zoek naar iets wat 400 miljoen jaar geleden leefde.",
      },
      {
        type: "h2",
        tekst: "Interesse in een vergelijkbare reis?",
      },
      {
        type: "p",
        tekst: "ArabDutch organiseert op maat gemaakte zakenreizen en culturele excursies naar Marokko en andere landen in de Arabische wereld. Of u nu op zoek bent naar een incentivetrip voor uw team, een kennismakingsreis met potentiële zakenpartners of een combinatie van zakelijk en cultureel: wij regelen het van A tot Z. Neem contact op voor de mogelijkheden.",
      },
    ],
  },
];

export default posts;
