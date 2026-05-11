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
  type: "intro" | "h2" | "p" | "quote" | "afbeelding" | "lijst";
  tekst?: string;
  items?: string[];
  src?: string;
  alt?: string;
  bijschrift?: string;
}

const posts: BlogPost[] = [
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
        tekst: "De vastgoedmarkt in Temara biedt op dit moment een zeldzame combinatie: relatief lage instapprijzen, solide huurvraag vanuit lokale professionals en expats, én een overheid die actief investeert in infrastructuur — van snelwegverbindingen tot het nieuwe TGV-station in Rabat. Appartementen die vijf jaar geleden 60.000 euro kostten, worden nu voor het dubbele verkocht.",
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
        tekst: "Met het Wereldkampioenschap voetbal 2030 dat deels in Marokko wordt gehouden, investeert de Marokkaanse overheid miljarden in stadions, hotels, wegen en spoorverbindingen. Dit zorgt voor een structurele waardetoename van vastgoed in de grote steden — en Rabat staat bovenaan de lijst van begunstigde regio's.",
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
        tekst: "In september 2025 organiseerde ArabDutch een meerdaagse klantentour voor een delegatie van zakelijke relaties uit Saoedi-Arabië en Libië. Het programma stond volledig in het teken van Nederlandse agritech-innovaties — met als hoogtepunten de bezoeken aan Hoogendoorn Growth Management en LetsGrow.com.",
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
        tekst: "Zowel Saoedi-Arabië als Libië staan voor een urgente uitdaging: hoe produceer je voedsel in een droog klimaat met schaarse watervoorraden? Nederland heeft decennialang pionierswerk verricht op dit gebied. Onze kassen, sensornetwerken en datagestuurd telen zijn wereldwijd toonaangevend. Voor onze gasten was dit bezoek dan ook geen toeristische trip — het was een serieuze verkenning van technologieën die zij thuis willen implementeren.",
      },
      {
        type: "h2",
        tekst: "Hoogendoorn Growth Management",
      },
      {
        type: "p",
        tekst: "Hoogendoorn is marktleider in klimaat- en procescomputers voor de glastuinbouw. Tijdens het bezoek kregen onze gasten een uitgebreide rondleiding door de demo-omgeving en een technische presentatie over hoe sensortechnologie en AI worden ingezet om optimale groeiomstandigheden te creëren — met minimaal water- en energieverbruik.",
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
        tekst: "LetsGrow.com — data als fundament",
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
        tekst: "De tour resulteerde in meerdere concrete gesprekken over pilots en samenwerkingsverbanden. ArabDutch fungeert hierbij als de brug: wij begrijpen de culturele en zakelijke context aan beide kanten, en zorgen dat technologieleveranciers en afnemers elkaar daadwerkelijk vinden — en begrijpen.",
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
    excerpt: "ArabDutch & Manea — een nieuwe stap richting cybersecurity-uitbreiding in Afrika.",
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
        bijschrift: "Manea Cybersecurity — toonaangevend in de Arabische regio",
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
        tekst: "Afrika staat voor een snelle digitale transformatie. Van e-government tot mobiel bankieren — de digitale infrastructuur groeit snel. Maar cyberdreigingen groeien mee. Veel Afrikaanse organisaties missen de expertise en technologie om zichzelf adequaat te beschermen. Manea's bewezen aanpak uit de Golfregio is bij uitstek schaalbaar naar de Afrikaanse context.",
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
        tekst: "Cybersecurity is geen luxe meer — het is een fundament. Wij brengen de beste technologie van de Arabische wereld naar Afrika, met ArabDutch als onze gids.",
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
    excerpt: "Een onvergetelijke fossielenreis naar Marokko — georganiseerd door ArabDutch.",
    afbeelding: "/ourika.jpg",
    inhoud: [
      {
        type: "intro",
        tekst: "Marokko is meer dan een zakelijke bestemming. Het is een land met een rijke cultuur, adembenemende landschappen en een geologische geschiedenis die teruggaat tot honderden miljoenen jaren geleden. In juli 2024 organiseerde ArabDutch een bijzondere reis naar de Ourika Vallei — een combinatie van cultuur, natuur en een uniek bezoek aan de fossielengebieden van Oued Zem.",
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
        tekst: "De Ourika Vallei ligt op ongeveer een uur rijden van Marrakesh, ingeklemd tussen de rode rotsen van de Hoge Atlas. Het is een wereld die ver af staat van de drukke medina — hier ruist de rivier, bloeien de amandelbomen en wonen Berberfamilies die al generaties lang in dezelfde valleien leven. Voor onze gasten was het een aangename schok hoe snel je van de moderne stad in een tijdloos landschap terechtkomt.",
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
          "Goniatiten — voorlopers van de ammoniet",
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
        tekst: "Meer dan een reis — een ervaring",
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
