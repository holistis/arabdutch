export interface LandSectie {
  samenvatting: string;
  punten: string[];
}

export interface LandData {
  slug: string;
  naam: string;
  vlag: string;
  hoofdstad: string;
  regio: string;
  munteenheid: string;
  risicoNiveau: "laag" | "medium" | "hoog" | "zeer-hoog";
  risicoLabel: string;
  samenvatting: string;
  sleutelcijfers: { label: string; waarde: string }[];
  belasting: LandSectie;
  visum: LandSectie;
  bedrijfOprichten: LandSectie;
  vastgoed: LandSectie;
  leven: LandSectie;
  cultuur: LandSectie;
  kansen: string[];
  risicos: string[];
}

const landGidsen: LandData[] = [
  {
    slug: "marokko",
    naam: "Marokko",
    vlag: "🇲🇦",
    hoofdstad: "Rabat",
    regio: "Maghreb",
    munteenheid: "MAD (Marokkaanse dirham)",
    risicoNiveau: "laag",
    risicoLabel: "Laag risico",
    samenvatting:
      "Marokko is voor Nederlanders en Vlamingen veruit het meest toegankelijke Arabische land om te wonen of te ondernemen. Politiek stabiel, met een belastingverdrag met Nederland, een groeiende middenklasse en een moderne infrastructuur in Casablanca en Rabat. ArabDutch begeleidt hier actief investeerders.",
    sleutelcijfers: [
      { label: "Inkomstenbelasting", waarde: "0–38%" },
      { label: "BTW", waarde: "20%" },
      { label: "Verdrag Nederland", waarde: "Ja (1972/2008)" },
      { label: "Min. bedrijfskapitaal", waarde: "€900 (SARL)" },
      { label: "Kosten vs. Nederland", waarde: "−35 tot −40%" },
    ],
    belasting: {
      samenvatting:
        "Nederland en Marokko hebben een belastingverdrag (gesloten 1972, gemoderniseerd 2008). Dat beschermt u tegen dubbele belasting. Zodra u meer dan 183 dagen per jaar in Marokko verblijft en u formeel uitschrijft uit Nederland, bent u fiscaal inwoner van Marokko en betaalt u Marokkaanse inkomstenbelasting.",
      punten: [
        "Marokkaans inkomstenbelasting (IR): schijven van 0% (t/m MAD 30.000) tot 38% (boven MAD 180.000 per jaar) — in euro circa €0–€16.500",
        "Pensioenuitkering uit Nederland: op basis van het verdrag belast in Nederland, niet in Marokko — u hoeft geen Marokkaanse belasting te betalen over uw AOW of bedrijfspensioen",
        "Huurinkomsten uit Marokko: belast in Marokko (15–20%), aangifte bij Direction Générale des Impôts (DGI)",
        "Dividenden uit Marokkaans bedrijf: 15% bronbelasting, via verdrag verrekenbaar",
        "Praktisch stappenplan: 1) Schrijf u uit bij Nederlandse gemeente, 2) Vraag woonplaatsbewijs aan bij Marokkaanse gemeente, 3) Meld uitschrijving bij Nederlandse Belastingdienst (via M-formulier), 4) Vraag fiscaal inwoners­certificaat aan bij DGI",
        "BTW (TVA) in Marokko: 20% standaard. Als Marokkaans bedrijf bent u BTW-plichtig boven MAD 500.000 omzet per jaar (~€45.000)",
        "Sociale zekerheid: Nederland en Marokko hebben een verdrag — u kunt kiezen of u Nederlands stelsel (SVB) vrijwillig voortzet voor AOW-opbouw (~€1.200/jaar premie)",
      ],
    },
    visum: {
      samenvatting:
        "Nederlanders en Belgen hebben geen visum nodig voor verblijf tot 90 dagen. Voor langer verblijf hebt u een verblijfsvergunning nodig (Carte de Séjour).",
      punten: [
        "Visumvrij tot 90 dagen per 180 dagen — geen aanvraag nodig, stempel bij aankomst",
        "Carte de Séjour (verblijfsvergunning): aan te vragen bij het Service des Étrangers van uw gemeente. Vereisten: bewijs van woning (huurcontract of eigendomsakte), bewijs van inkomen of bankafschriften (min. ~€500/maand), strafblad (Verklaring Omtrent Gedrag, gelegaliseerd en vertaald)",
        "Verlenging: jaarlijks, relatief soepel als aan voorwaarden voldaan",
        "Gezinshereniging: echtgeno(o)t(e) en minderjarige kinderen mogen meekomen op basis van uw Carte de Séjour",
        "Studenten: studentenvisum via Marokkaanse ambassade in Den Haag vóór vertrek aanvragen",
        "Werkvisum: bij werkgever in loondienst regelt de Marokkaanse werkgever een werkvergunning (ANAPEC-procedure)",
        "Zelfstandigen/ondernemers: Carte de Séjour als houder van Marokkaans bedrijf, aangevuld met registratie Registre du Commerce",
      ],
    },
    bedrijfOprichten: {
      samenvatting:
        "Marokko staat volledig open voor buitenlandse investeerders. 100% buitenlands eigendom is toegestaan in de meeste sectoren. De meest gekozen rechtsvorm voor kleine en middelgrote ondernemers is de SARL (vergelijkbaar met de Nederlandse BV).",
      punten: [
        "SARL (Société à Responsabilité Limitée = Marokkaanse BV): minimumkapitaal MAD 10.000 (~€900). Aandeelhouders aansprakelijk tot ingebracht kapitaal. Notariële akte verplicht. Registratie bij Tribunal de Commerce. Tijdsduur: 2–4 weken",
        "SASU (vereenvoudigde eenpersoons-SARL): voor eenmanszaak, zelfde procedure, geen minimumkapitaal vereist (wettelijk MAD 1 toegestaan)",
        "Casablanca Finance City (CFC): speciaal statuut voor internationale holding- en dienstbedrijven. Voordelen: 15% vennootschapsbelasting (vs. 31% normaal), geen dividendbelasting voor buitenlandse aandeelhouders, vrije deviezenbeweging. Vereiste: min. 3 internationale medewerkers en kantoor in Casablanca Finance City",
        "Vrije Zones (Tanger MedPort, Kénitra): 5 jaar vrijstelling vennootschapsbelasting, daarna 8.75%. Ideaal voor productie en export",
        "Vennootschapsbelasting (IS): 31% normaal, 10% voor bedrijven met winst onder MAD 300.000 per jaar. CFC: 15%",
        "Arbeidsrecht: Marokkaans arbeidsrecht is werknemersvriendelijk. Proeftijd: 3–6 maanden. Ontslagvergoeding: 1 maand per dienstjaar. Minimumloon (SMIG): MAD 3.111/maand (~€280)",
        "Praktisch: huur een lokale accountant (~€200/maand) en juridisch adviseur voor oprichting. ArabDutch begeleidt het volledige traject",
      ],
    },
    vastgoed: {
      samenvatting:
        "Nederlanders en Belgen mogen vrij onroerend goed kopen in Marokko — geen beperkingen op het aantal objecten of de locatie (met uitzondering van landbouwgrond). De markt in Temara, Rabat en Casablanca groeit sterk.",
      punten: [
        "Volledig eigendom voor buitenlanders toegestaan (behalve landbouwgrond — die is verboden voor niet-Marokkanen)",
        "Aankoopkosten: 4% registratiebelasting + 1–2% notariskosten + kadasterrechten (~0.5%) = totaal circa 6–7% bovenop aankoopprijs",
        "Hypotheek via Marokkaanse bank: mogelijk maar beperkt voor buitenlanders zonder Marokkaans inkomen. Banques Populaires en CIH Bank zijn meest toegankelijk. Rente: 4.5–6%",
        "Huurrendement: Casablanca 5–8%, Marrakech 6–9%, Temara/Rabat 4–6%. Hoger dan gemiddeld in Nederland",
        "Populaire regio's voor Nederlanders: Temara (nabij Rabat, modern, veilig), Casablanca (zakelijk centrum), Marrakech (vakantie + investering), Agadir (toerisme)",
        "Nieuwe projecten: Aménagement de la Côte de Rabat, Nouvelle Ville de Zenata (Casablanca). Prijzen nog 30–50% onder West-Europa",
        "Verhuurinkomsten: belast in Marokko (15% forfaitair of werkelijke kosten), aangifte via DGI. Vrijstelling eerste 5 jaar voor nieuwe sociale woningbouw",
        "Repatriëring van winst: toegestaan via erkende Marokkaanse bank (Office des Changes formulier). Geen beperkingen bij legale transacties",
      ],
    },
    leven: {
      samenvatting:
        "Marokko is comfortabel bewoonbaar voor Nederlanders en Belgen. De kosten liggen 35–40% lager dan in Nederland, de infrastructuur in grote steden is modern en er is een significante Nederlandstalige gemeenschap.",
      punten: [
        "Maandelijkse kosten (koppel, gemiddeld): €800–1.400 inclusief huur. Equivalent levensstijl kost in Nederland €2.000–3.000",
        "Huur appartement (2 slaapkamers): Casablanca centrum €500–900, Temara/Rabat €350–600, Marrakech medina €300–500, Agadir €250–450",
        "Gezondheidszorg: schrijf u in bij een privé­verzekeraar (Allianz Care, Cigna Global: €100–250/maand voor expat dekking). Grote privéklinieken in Casablanca (Clinique Ghandi, CHU Ibn Sina) op Europees niveau",
        "Zorgverzekering Nederland (ZVW): vervalt bij uitschrijving uit Nederland. U kunt ZVW vrijwillig voortzetten bij CZ/VGZ als tijdelijk alternatief (beperkt)",
        "AOW-opbouw: stopt bij uitschrijving. SVB-vrijwillige verzekering mogelijk (~€1.200/jaar) om gaten te vullen. Advies: doe dit als u van plan bent langer dan 3 jaar te blijven",
        "Schoolonderwijs: Casablanca en Rabat hebben meerdere Franstalige scholen (Lycée Lyautey, École Française), een Engelstalige internationale school en Nederlandse expat netwerken",
        "Bankrekening: open een rekening bij Attijariwafa Bank, Banque Populaire of CIH Bank. Vereist: paspoort + verblijfbewijs + bewijs van inkomen. Optioneel: Wise of Revolut voor grensoverschrijdende transfers",
        "Internet & telefonie: 4G/5G dekking in steden uitstekend. Maroc Telecom en IAM bieden goedkope abonnementen (€15–25/maand voor data + bellen)",
      ],
    },
    cultuur: {
      samenvatting:
        "Marokko is een moslimland met een sterke Franse en Berberse invloed. Voor zakelijk contact is culturele kennis essentieel. ArabDutch traint uw team in Marokkaanse zakelijke etiquette.",
      punten: [
        "Taal: Darija (Marokkaans Arabisch) is de omgangstaal, Fusha (Standaard Arabisch) in officiële context, Frans is de zakelijke taal — essentieel voor contracten en vergaderingen. In Casablanca en Rabat verstaan veel mensen Engels",
        "Religie: Islam. Respecteer de ramadan (zakelijke activiteiten vertragen, geen eten/drinken in het openbaar overdag). Vrijdag is de heilige dag — vergaderingen vermijden",
        "Alcohol: wettelijk toegestaan voor niet-moslims in hotels, restaurants en supermarkten. Niet geaccepteerd in openbare ruimten of traditionele wijken (medina)",
        "Kleding: zakelijk formeel gekleed. Vrouwen doen er goed aan in het openbaar schouders en knieën te bedekken, al is dit in Casablanca flexibeler dan in kleinere steden",
        "Zakelijke etiquette: persoonlijke relaties gaan voor efficiency. Verwacht meerdere ontmoetingen vóór een deal. Thee drinken is onderdeel van de onderhandeling — weiger niet. 'Inshallah' (als God het wil) hoeft geen uitstel te betekenen — peilen of er urgentie is, is een kunst",
        "Punctualiteit: verwacht enige flexibiliteit. Wees zelf op tijd maar wees niet verbaasd als de Marokkaanse partner 15–30 min later is",
        "Ramadan: zakelijk tempo daalt. Ideaal om relaties te versterken via iftar-uitnodigingen. Nooit eten/drinken/roken in aanwezigheid van vastende collega's",
        "Onderhandelingscultuur: indirecte communicatie. 'Nee' wordt zelden direct gezegd — leer de signalen herkennen. ArabDutch begeleidt u bij dit proces",
      ],
    },
    kansen: [
      "Vastgoedinvestering in Temara, Rabat en Casablanca — groeiende markt, rendement 5–9%",
      "Agritech en precisielandbouw — Marokko heeft grote ambities voor voedselzekerheid en zoekt Nederlandse expertise",
      "Toerisme en hospitality — nieuwe kustprojecten langs Atlantische en Middellandse Zeekust",
      "Hernieuwbare energie — Noor Ouarzazate (grootste zonnepark ter wereld) trekt leveranciers en dienstverleners",
      "Logistics & e-commerce — Tanger Med Port als Afrikaans distributiecentrum van Europe",
      "Onderwijs en training — groeiende vraag naar internationale kwaliteitsonderwijs en bijscholing",
      "Gezondheidszorg — private ziekenhuizen en medische technologie in opkomst",
      "Samenwerking met GITEX Africa — Marokko positioneert zich als tech-hub voor heel Afrika",
    ],
    risicos: [
      "Bureaucratie: procedures verlopen traag; reken op meer tijd dan gepland",
      "Valutarisico: MAD is niet vrij inwisselbaar — repatriëren van winst vereist administratie bij Office des Changes",
      "Eigendomsrecht landbouwgrond: verboden voor buitenlanders — controleer kadasteruittreksels zorgvuldig bij aankoop",
      "Taalbarrière: Darija niet toegankelijk zonder kennis; Frans is minimumvereiste voor zakendoen",
      "Corruptierisico: aanwezig in bepaalde sectoren en procedures — zorg voor transparante contracten en lokale begeleiding",
    ],
  },

  {
    slug: "vae",
    naam: "Verenigde Arabische Emiraten",
    vlag: "🇦🇪",
    hoofdstad: "Abu Dhabi (Dubai: zakelijk centrum)",
    regio: "Golf",
    munteenheid: "AED (Dirham, gekoppeld aan USD)",
    risicoNiveau: "laag",
    risicoLabel: "Laag risico",
    samenvatting:
      "De VAE — en Dubai in het bijzonder — is de meest internationale bestemming in de Arabische wereld voor westerse ondernemers. Geen inkomstenbelasting, 100% buitenlands eigendom mogelijk in Free Zones, uitstekende infrastructuur en een kosmopolitische samenleving. Het instapniveau is hoger dan Marokko maar de mogelijkheden zijn enorm.",
    sleutelcijfers: [
      { label: "Inkomstenbelasting", waarde: "0%" },
      { label: "Corporate tax (mainland)", waarde: "9% (2023)" },
      { label: "Corporate tax (free zone)", waarde: "0% (export)" },
      { label: "BTW", waarde: "5%" },
      { label: "Kosten vs. Nederland", waarde: "+20 tot +40%" },
    ],
    belasting: {
      samenvatting:
        "De VAE heeft géén inkomstenbelasting voor particulieren. Uw salaris of winst als eigenaar is volledig belastingvrij. In 2023 is wel een vennootschapsbelasting van 9% ingevoerd voor bedrijven met winst boven AED 375.000 (~€93.000). Free Zone bedrijven die alleen buiten de VAE handelen blijven 0% corporate tax betalen.",
      punten: [
        "Inkomstenbelasting: 0% — geen aangifte, geen heffing op salaris, dividend of persoonlijke winst",
        "Corporate Tax (CT) 2023: 9% op winst boven AED 375.000 (~€93.000). Kleine bedrijven (winst onder AED 375.000): 0%",
        "Free Zone bedrijven: 0% CT als u uitsluitend buiten de VAE handelt. Handel BINNEN de VAE vanuit Free Zone: 9% CT van toepassing",
        "BTW: 5% — één van de laagste ter wereld. Verplicht boven AED 375.000 omzet per jaar",
        "Nederland-VAE belastingverdrag: er is GEEN formeel belastingverdrag, maar er is ook geen belastingrisico — de VAE heft schlicht geen IB. Formeel verblijf in VAE (>183 dagen) + uitschrijving Nederland = geen Nederlandse belastingplicht",
        "Kritiek punt: Nederland beschouwt de VAE als een 'laagbelastend land'. Meld uw emigratie tijdig bij Belastingdienst. Fictieve woonplaats­regel: wie vertrek naar belastingparadijs, kan tot 10 jaar na vertrek nog in NL belastingplichtig blijven — regel dit goed met een fiscaal adviseur",
        "Dividenden uit Nederland naar VAE: Nederland heft 15% dividendbelasting bij uitkering naar laagbelastende landen (Wet Bronbelasting 2021) — advies nodig bij houdingstructuur",
      ],
    },
    visum: {
      samenvatting:
        "Nederlanders en Belgen krijgen automatisch 90 dagen bij aankomst (visa on arrival). Voor langer verblijf of werk zijn diverse opties beschikbaar, waaronder het befaamde Golden Visa.",
      punten: [
        "Toeristenvisum: 30 dagen (verlengbaar tot 90 dagen) bij aankomst, gratis voor EU-burgers",
        "Werkvisum: via werkgever/sponsor. Vereist medische keuring, politieverklaring, diploma-legalisatie. Leidt tot Emiraten ID (verblijfsvergunning = residence visa + Emirates ID)",
        "Investor Visa (2 jaar): minimaal AED 750.000 (~€185.000) investering in vastgoed of bedrijf. Eenvoudigste optie voor ondernemers",
        "Golden Visa (10 jaar): minimaal AED 2.000.000 (~€495.000) in vastgoed ÓFTEWEL status als talent (dokter, wetenschapper, artiest, topsporter) of senior manager. Geen sponsor nodig, verlenging automatisch",
        "Freelance Visa: via TECOM (Dubai) of Twofour54 (Abu Dhabi). Staat u toe als zelfstandige te werken zonder eigen bedrijf te hoeven oprichten",
        "Familie: echtgeno(o)t(e) en kinderen meenemen kan via Family Sponsorship (u als sponsor). Vereist minimumsalaris AED 4.000/maand",
      ],
    },
    bedrijfOprichten: {
      samenvatting:
        "Keuze tussen Mainland (Dubai Mainland, Abu Dhabi Mainland) en een Free Zone. Mainland geeft toegang tot de hele VAE-markt maar vereist lokale sponsor of agent. Free Zones geven 100% eigendom en belastingvoordelen maar handelsgebied is beperkt.",
      punten: [
        "Free Zone (aanbevolen voor internationale handel): 100% buitenlands eigendom. Geen lokale partner nodig. 0% corporate tax op exportactiviteiten. Populair: DMCC (Dubai Multi Commodities Centre), IFZA, RAKEZ, Abu Dhabi Global Market (ADGM), Dubai International Financial Centre (DIFC)",
        "DMCC (meest prestigieus): oprichtingskosten ~AED 15.000–25.000 (~€3.700–6.200) + jaarlijkse licentie. Toegang tot DMCC netwerk van 22.000+ bedrijven",
        "IFZA (goedkoopste Free Zone): oprichtingskosten ~AED 12.000 (~€3.000). Goed voor consultancy, handel, technologie",
        "Mainland LLC: minimaal 51% Emiraten partner VERPLICHT (historisch), maar sectoren waarvoor dit niet meer geldt groeien snel (professionele services). Via een Corporate Services Agent (nominee) kun je effectief 100% eigendom behouden — juridisch advies noodzakelijk",
        "Oprichtingstijd: 1–3 weken voor Free Zone, 3–6 weken voor Mainland",
        "Kosten levensonderhoud als ondernemer: huur kantoor in Free Zone verplicht (flexdesk ~AED 15.000/jaar of eigen kantoor). Totale jaarkosten Free Zone bedrijf: AED 20.000–40.000/jaar (~€5.000–10.000)",
        "Arbeidsrecht: VAE arbeidswet is gemoderniseerd (2022). Werknemers hebben sterke rechten. Minimumuurloon bestaat niet, maar DIFC en ADGM hebben eigen regels. Vrijdag + zaterdag = weekend (overheidsdiensten), maar privé sector heeft flexibiliteit",
      ],
    },
    vastgoed: {
      samenvatting:
        "Buitenlanders mogen vastgoed kopen in aangewezen 'freehold zones' in Dubai, Abu Dhabi en Sharjah. De markt in Dubai is transparant, professioneel en aantrekkelijk voor internationale investeerders.",
      punten: [
        "Freehold zones Dubai: Downtown Dubai, Dubai Marina, Palm Jumeirah, Jumeirah Village Circle, Business Bay, Dubai Hills Estate — volledig eigendom voor buitenlanders",
        "Aankoopkosten: 4% Dubai Land Department (DLD) registratievergoeding + 2% makelaar + 0.5–1% overige kosten = totaal ~7% bovenop aankoopprijs",
        "Huurrendement: 5–8% bruto in Dubai (hoger dan Amsterdam of Rotterdam). Netto na kosten en belastingen: 4–6%",
        "Hypotheek: mogelijk via VAE-banken (Emirates NBD, ADCB). Voor niet-residenten: max 50% LTV. Rentepercentage: 4.5–6.5% variabel. Vereist: bewijs van inkomen, 6 maanden bankafschriften",
        "Golden Visa via vastgoed: aankoop van min. AED 2.000.000 (~€495.000) geeft recht op 10-jaar Golden Visa — populaire combinatie",
        "Nieuwbouwmarkt: off-plan projecten kunnen 20–40% goedkoper zijn dan opgeleverd. Risico: vertraging of faillissement (kies developer met RERA-registratie)",
        "Abu Dhabi vastgoed: Al Reem Island, Yas Island, Saadiyat Island. Markt minder internationaal dan Dubai maar stabiel. Freehold voor buitenlanders ook hier van toepassing",
      ],
    },
    leven: {
      samenvatting:
        "De VAE is duurder dan Nederland op wonen en auto, maar goedkoper op eten, elektronica en entertainment. Het no-income-tax voordeel compenseert de hogere kosten aanzienlijk bij middelgrote tot hogere inkomens.",
      punten: [
        "Maandelijkse kosten (koppel, gemiddeld): €3.000–5.000 inclusief huur. Huur appartement 2 slaapkamers Dubai: AED 8.000–18.000/maand (~€2.000–4.500)",
        "Gezondheidszorg: uitstekend op privéniveau. Verplichte zorgverzekering in Dubai (DHA-wetgeving) voor residenten. Werkgever betaalt voor werknemers. Als ondernemer: ~AED 5.000–15.000/jaar (~€1.250–3.750)",
        "Nederlandse Belastingdienst: meld emigratie voor vertrek via M-formulier. Stuur kopie van VAE verblijfsvergunning mee. Verbreek zo veel mogelijk banden met Nederland (bankrekeningen, auto, etc.) voor de emigratiedatum",
        "Cultuurschok: alcohol is legaal in hotels/restaurants/slijterijen. Homoseksualiteit is verboden (discreet gedrag in openbare ruimten). Kleding: westerse kleding in winkelcentra/strand normaal, maar decolletés en korte broeken in moskeeën en overheidskantoren verboden",
        "Rijbewijs: internationaal rijbewijs omzetten naar VAE-rijbewijs. Met EU-rijbewijs kan dit veelal direct zonder examens",
        "Ramadan: werktijden inkorten (werkgevers wettelijk verplicht). Niet eten/drinken in openbaar overdag — wetgeving wordt gehandhaafd",
        "Nederlandse gemeenschap: grote en actieve NL expat community in Dubai (NL Business Council, NL consulate). Eenvoudig Nederlandse scholen en clubs te vinden",
      ],
    },
    cultuur: {
      samenvatting:
        "De VAE is internationaler dan andere Golfstaten maar blijft een islamitisch land met strenge wetgeving. In zakelijk opzicht is Dubai bijzonder westers georiënteerd.",
      punten: [
        "Taal: Arabisch officieel, maar Engels is de zakelijke taal in Dubai. Geen Arabisch nodig voor dagelijks leven in Dubai — wel een teken van respect om basisgroeten te kennen (As-salamu alaykum, Shukran)",
        "Dresscode zakelijk: formeel en professioneel. In overheids­kantoren en buiten: schouders en knieën bedekt houden",
        "Alcohol: legaal in aangewezen locaties (hotels, clubs, restaurants). Openbaar dronkenschap = arrestatie",
        "Drugs: absoluut verboden, ook kleine hoeveelheden. Gevolg: gevangenis of deportatie",
        "Zakelijke relaties: Emiraten zakelijk­ partners werken formeel. Wasta (netwerk/connecties) is essentieel. Geduld bij besluit­vorming — geen haast",
        "Ramadan: sterk gerespecteerd. Zakelijk tempo vertraagt in de middag. Iftar-uitnodigingen zijn een krachtig zakelijk instrument",
        "Vrijdag: heilige dag, geen werkafspraken. Werkweek loopt van maandag t/m vrijdag (overheid), maar privé bedrijven zijn flexibel",
        "Kritisch: fotografeer nooit overheids­gebouwen, militaire installaties, luchthavens of individuen zonder toestemming",
      ],
    },
    kansen: [
      "Free Zone bedrijfsvestiging als EMEA-hub (Europa, Midden-Oosten, Afrika) — gunstige ligging tussen tijdzones",
      "Vastgoedinvestering Dubai — huurrendement 5–8%, stabiele markt, Golden Visa bonus",
      "Fintech & blockchain — DIFC en ADGM zijn de meest progressieve financiële regulatoren in de regio",
      "Duurzame energie en cleantech — VAE heeft ambitieuze klimaatdoelen (COP28) en zoekt Europese technologie",
      "Healthcare en medtech — snel groeiende sector, high-end zorgmarkt",
      "E-commerce en logistiek — Dubai als doorvoerhaven naar heel Afrika en Azië",
      "Luxe retail en toerisme — premium markt met hoge koopkracht",
    ],
    risicos: [
      "Hoge levenskosten — wonen en levensonderhoud zijn aanmerkelijk duurder dan in Marokko of Tunesië",
      "Juridisch systeem: commerciële geschillen via DIFC Courts (Common Law) of lokale rechtbank (Civil Law). Kies het juiste forum in uw contract",
      "Culturele wetgeving: gedragsregels strikt gehandhaafd — publieke kus, drugs, dronkenschap kunnen leiden tot arrestatie",
      "Fiscale transparantie NL: Nederlandse belastingdienst volgt emigratie naar laagbelastende landen nauw — regel dit zorgvuldig",
      "Kafala-systeem (werkgeversafhankelijkheid): werknemer is afhankelijk van sponsor voor verblijf. Hervormd in 2022 maar nog relevant",
      "Politieke stabiliteit: hoog niveau maar geen democratische rechtsstaat — persvrijheid en burgerrechten beperkt",
    ],
  },

  {
    slug: "saoedi-arabie",
    naam: "Saoedi-Arabië",
    vlag: "🇸🇦",
    hoofdstad: "Riyad",
    regio: "Golf",
    munteenheid: "SAR (Saoedische Riyal, gekoppeld aan USD)",
    risicoNiveau: "medium",
    risicoLabel: "Medium risico",
    samenvatting:
      "Saoedi-Arabië ondergaat een historische transformatie via Vision 2030. Geen inkomstenbelasting, astronomische investeringsprojecten (NEOM, Red Sea Project) en een markt van 35 miljoen consumenten. Cultureel is het de meest conservatieve bestemming — maar de beperkingen voor expats zijn de afgelopen jaren sterk versoepeld.",
    sleutelcijfers: [
      { label: "Inkomstenbelasting expat", waarde: "0%" },
      { label: "Corporate tax buitenlands", waarde: "20%" },
      { label: "Zakat (Saoedische aandeelhouder)", waarde: "2.5%" },
      { label: "BTW", waarde: "15%" },
      { label: "Verdrag Nederland", waarde: "Ja (1990)" },
    ],
    belasting: {
      samenvatting:
        "Expats betalen geen inkomstenbelasting in Saoedi-Arabië. Saoedische bedrijven betalen Zakat (religieuze heffing). Buitenlandse bedrijven betalen 20% corporate income tax. Er is een belastingverdrag met Nederland.",
      punten: [
        "Inkomstenbelasting: 0% voor buitenlandse werknemers op salaris",
        "Corporate Tax: 20% voor buitenlandse bedrijven (niet-Saoedisch aandeelhouder). Gemengde bedrijven (Saoedi + buitenlands): proportioneel",
        "Zakat: 2.5% op vermogen van Saoedische aandeelhouders (islamitische belasting). Winstbelasting voor Saoedische aandeelhouder = Zakat, niet corporate tax",
        "BTW: 15% (verhoogd van 5% naar 15% in 2020). Registratieplicht boven SAR 375.000 (~€93.000) omzet",
        "Belastingverdrag NL-SA (1990): beschermt Nederlandse bedrijven en werknemers tegen dubbele belasting",
        "Withholding tax (bronheffing): op diensten, rente, royalties betaald aan buitenlandse partijen: 5–15%. Neem dit mee in prijsonderhandelingen",
        "Special Economic Zones (SEZs): 0% corporate tax voor 50 jaar. King Abdullah Economic City (KAEC), NEOM Industrial Zone. Voor productie en logistiek ideaal",
      ],
    },
    visum: {
      samenvatting:
        "Saoedi-Arabië heeft de visumregels sterk versoepeld. Toeristen kunnen nu eenvoudig een e-Visa aanvragen. Voor werk geldt nog altijd het sponsorsysteem (Iqama).",
      punten: [
        "Toeristenvisum (e-Visa): online aanvragen via visa.visitsaudi.com. 90 dagen per jaar. Kosten: SAR 535 (~€130). Meervoudig gebruik. Vereist reisverzekering",
        "Werkvisum + Iqama: sponsor (Saoedische werkgever) vraagt werkvergunning aan via Ministry of Human Resources. Werkgever verantwoordelijk voor alles (visum, verblijf, medische keuring). Iqama = verblijfsvergunning (meevermeld in paspoort als label)",
        "Iqama voor ondernemers: bij eigen Saoedisch bedrijf of investering. SAGIA (nu Saudi Investment Authority - MISA) regelt dit",
        "Premium Residency (Iqama dhahabi): betaalde permanente verblijfsvergunning. Kosten: SAR 800.000 (~€197.000) eenmalig of SAR 100.000/jaar. Volledig eigendom zonder Saoedische sponsor. Beperkte aantal beschikbaar",
        "Visumaanvraag voor dienstreizen: zakelijk visum via ambassade Saoedi-Arabië Den Haag. Uitnodiging van Saoedische partner vereist",
      ],
    },
    bedrijfOprichten: {
      samenvatting:
        "Via Vision 2030 heeft Saoedi-Arabië de business-klimaat sterk verbeterd. 100% buitenlands eigendom is mogelijk in meer sectoren dan ooit. MISA (Ministry of Investment) is de centrale poort.",
      punten: [
        "MISA (Ministry of Investment of Saudi Arabia): centrale aanmeldpunt voor buitenlandse investeerders. Vergunning aanvragen via misa.gov.sa. Tijdsduur: 3–8 weken",
        "Limited Liability Company (LLC): meest gebruikte vorm. Minimumkapitaal afhankelijk van sector (productie: SAR 30M, diensten: SAR 500.000). 100% buitenlands eigendom toegestaan in steeds meer sectoren",
        "Joint Venture met Saoedische partner: vereist in bepaalde sectoren (overheid, media, telecom). Voordeel: lokale wasta (connecties) en Saoedisering­verplichtingen (Nitaqat) zijn makkelijker te halen",
        "Nitaqat (Saoedisering): verplichting om percentage Saoedische werknemers in dienst te nemen. Percentage hangt af van sector en bedrijfsgrootte. Groen (compliant) of rood (niet compliant, sancties)",
        "Special Economic Zones: NEOM, King Salman Energy Park (SPARK), Ras Al-Khair Industrial City, Future Mineralization Zone. In SEZs gelden aparte regelgeving en belastingvrijstellingen",
        "Regional Headquarters (RHQ) programma: buitenlandse bedrijven die hun MENA-hoofdkantoor in Riyadh vestigen, krijgen speciale licenties en voordelen. Deadline voor bedrijven die met Saoedische overheid willen zakendoen: 2024 (inmiddels actief programma)",
        "Kosten oprichting: notaris, vertaling, legalisatie van documenten = SAR 10.000–30.000 (~€2.500–7.500) + MISA-vergunningskosten",
      ],
    },
    vastgoed: {
      samenvatting:
        "De Saoedische vastgoedmarkt groeit explosief door Vision 2030 en de toenemende urbanisatie. Buitenlanders mogen vastgoed kopen in aangewezen gebieden. De markt in Riyadh en Jeddah is professioneel.",
      punten: [
        "Buitenlanders mogen vastgoed kopen in: Riyadh, Jeddah, Mekka-grensgebieden (niet in Mekka/Medina zelf), NEOM en Special Economic Zones",
        "Eigendomsrecht niet-moslims: buitenlanders mogen residentieel en commercieel vastgoed kopen maar niet in de twee heilige steden",
        "Aankoopkosten: 5% overdrachtsbelasting (Real Estate Transaction Tax) + 2% makelaar + notariskosten. Totaal: ~8–9%",
        "Huurrendement Riyadh: 5–7%. Jeddah: 4–6%. NEOM (toekomstig): onzeker maar speculatief hoog",
        "Hypotheek: Saudi Real Estate Refinance Company (SRC) voor Saoediërs. Buitenlanders via Saoedische bank — moeilijk zonder Iqama. Aanbeveling: aankoopfinanciering via eigen middelen of internationale financiering",
        "NEOM: megaproject (500 miljard USD) in het noordwesten van Saoedi-Arabië. The Line, Trojena, Sindalah. Vastgoed nog in vroege fase maar enorme speculatieve belangstelling van internationale investeerders",
      ],
    },
    leven: {
      samenvatting:
        "Leven als expat in Saoedi-Arabië is de afgelopen jaren drastisch veranderd. Bioscopen zijn open, vrouwen rijden auto, gemengde sociale evenementen zijn normaal. Het is niet Dubai — maar het is ook niet meer het Saoedi-Arabië van 2010.",
      punten: [
        "Maandelijkse kosten (expat): SAR 8.000–18.000 (~€1.980–4.460). Veelal vergoed door werkgever als expat package (woning, auto, vluchten NL retour per jaar)",
        "Expatpakket: meeste internationale bedrijven bieden housing allowance (~SAR 3.000–8.000/maand), vervoer, schoolkosten kinderen, jaarlijkse vluchten. Netto-salaris is belastingvrij",
        "Gezondheidszorg: privé verzekering verplicht. Grote privéziekenhuizen in Riyadh en Jeddah (King Faisal Specialist Hospital) op internationale standaard. Kosten: SAR 5.000–15.000/jaar",
        "Alcohol: strikt verboden. Openbaar of privé. Thuisbereiding is illegaal. Geen uitzonderingen voor expats",
        "Sociale leven: sterk verbeterd. Bioscopen open (AMC, VOX). Gemengde restaurants, festivals, concerten (Riyadh Season). Internationale restaurants volop aanwezig",
        "Rijbewijs: EU-rijbewijs is direct inwisselbaar voor Saoedi-rijbewijs voor expats met Iqama",
        "Vrouwen: mogen reizen zonder mannelijke voogd, auto rijden, in de meeste sectoren werken. Abaya (gewaad) niet meer verplicht — wel bescheiden kleding sterk aanbevolen",
      ],
    },
    cultuur: {
      samenvatting:
        "Saoedi-Arabië is het hart van de islamitische wereld. Mekka en Medina bepalen de religieuze kalender en sfeer van het hele land. Zakelijke cultuur is formeel en relatie­gestuurd.",
      punten: [
        "Taal: Arabisch. Engels is de zakelijke taal in internationale sectoren. Geen Arabisch = beperkt dagelijks leven buiten zakelijke kring",
        "Gebedsijden: 5x per dag sluiten winkels en kantoren 15–30 min. Plan vergaderingen nooit pal voor of tijdens gebed",
        "Kleding: mannen formeel gekleed. Vrouwen: bescheiden, armen en benen bedekken. Geen niqab-verplichting meer maar respect voor lokale normen is essentieel",
        "Wasta: persoonlijke connecties zijn alles. Een introductie via een vertrouwde tussenpersoon opent meer deuren dan de beste presentatie",
        "Onderhandelingsstijl: indirect, geduldig, op basis van vertrouwen. Contracten zijn begin van een relatie, niet het einde. Flexibiliteit bij uitvoering is normaal",
        "Ramadan: meest heilige maand. Zakelijk ritme vertraagt sterk. Niemand eet of drinkt overdag in openbaar — expats ook niet. Ideaal moment om relaties te versterken via iftar-diners",
        "Majlis: informele bijeenkomsten bij Saoedische businessmannen thuis of op kantoor zijn uiterst waardevol voor networking — accepteer uitnodigingen altijd",
      ],
    },
    kansen: [
      "Vision 2030 megaprojecten: NEOM, Red Sea Project, Diriyah Gate, Qiddiya — biljoenen aan infrastructuur",
      "Agritech en food security — Saoedi-Arabië importeert 80% van zijn voedsel en investeert enorm in lokale productie. Nederlandse kennis is direct gevraagd",
      "Hernieuwbare energie — NEOM op 100% groene energie, massale tender voor zonne- en windenergie",
      "Healthcare en farmacie — snel groeiende sector, Vision 2030 doel: 70% lokale gezondheidszorg",
      "Toerisme — van 0 naar 100 miljoen toeristen per jaar (2030 doel). Hotels, attracties, logistiek volop in opbouw",
      "Financiële sector — Tadawul (Saudi beurs) is de grootste in MENA. Fintech groeit explosief",
      "Logistiek en supply chain — Saudi Land Bridge, havens, vrije zones",
    ],
    risicos: [
      "Strenge wetgeving: gewoonten die in Europa normaal zijn (kritiek uiten, LGBTQ+, alcohol) zijn strafbaar",
      "Bureaucratie en Nitaqat: werknemers-quotum voor Saoediërs kan uw personeels­planning beperken",
      "Betaling­srisico: grote overheidscontracten kunnen vertraging in betaling oplopen — bouw betalingsgaranties in uw contracten",
      "Geopolitiek: spanning met Iran, Jemen-conflict aan zuidgrens — monitor de situatie",
      "Reputatierisico: Saoedi-Arabië staat onder internationaal toezicht na Khashoggi-affaire — ESG-gevoelige bedrijven doen due diligence",
    ],
  },

  {
    slug: "tunesie",
    naam: "Tunesië",
    vlag: "🇹🇳",
    hoofdstad: "Tunis",
    regio: "Maghreb",
    munteenheid: "TND (Tunesische Dinar)",
    risicoNiveau: "medium",
    risicoLabel: "Medium risico",
    samenvatting:
      "Tunesië is de meest onbekende maar aantrekkelijkste fiscale optie voor Nederlanders die internationaal actief zijn. Het offshore-statuut geeft exportbedrijven 0% belasting. De kosten zijn extreem laag, het land is relatief veilig en Franstalig. Politiek is er onzekerheid sinds president Saied de macht concentreerde in 2021.",
    sleutelcijfers: [
      { label: "Inkomstenbelasting", waarde: "0–35%" },
      { label: "Offshore corporate tax", waarde: "0%" },
      { label: "BTW", waarde: "19%" },
      { label: "Verdrag Nederland", waarde: "Ja (1995)" },
      { label: "Kosten vs. Nederland", waarde: "−50 tot −60%" },
    ],
    belasting: {
      samenvatting:
        "Tunesië heeft een van de meest aantrekkelijke fiscale regimes voor exportgerichte bedrijven ter wereld. Offshore-status geeft 0% inkomstenbelasting en 0% vennootschapsbelasting voor de eerste 10 jaar, daarna 50% korting.",
      punten: [
        "Offshore status (Totally Exporting Company): bedrijf dat 100% exporteert buiten Tunesië. Belasting: 0% vennootschapsbelasting voor eerste 10 jaar, daarna 50% korting (ca. 13.75% i.p.v. 27.5%). Geen douane op import grondstoffen",
        "Inkomstenbelasting particulieren: schijven van 0% (t/m TND 5.000 ~€1.500/jaar) tot 35% (boven TND 50.000 ~€15.000/jaar). Tunesisch inkomen is sterk geprogredeerd maar absoluut laag door kosten",
        "Geen belastingverdrag? Er IS een verdrag met Nederland (1995) — maar het is minder uitgebreid dan het Marokko-verdrag. Pensioen uit NL: in NL belast. Zakelijk inkomen uit Tunesië: in Tunesië belast",
        "Belastingvrijstelling bij repatriëring: offshore bedrijf mag winst vrij repatriëren naar buitenland in vreemde valuta (dinar is niet vrij inwisselbaar!)",
        "BTW: 19% standaard. Offshore bedrijven zijn vrijgesteld van Tunesische BTW op exportdiensten",
        "Socialezekerheids­bijdrage (CNSS): 26.19% werkgeversdeel + 9.18% werknemersdeel. Voor kleine bedrijven sterk drukkend",
      ],
    },
    visum: {
      samenvatting:
        "Nederlanders en Belgen hebben geen visum nodig voor 90 dagen. Verblijfsvergunning is eenvoudiger te verkrijgen dan in andere Arabische landen.",
      punten: [
        "Visumvrij: 90 dagen voor EU-burgers, stempel bij aankomst. Meld u aan bij lokale politie binnen 3 dagen na aankomst (in hotels automatisch geregeld)",
        "Carte de Séjour (verblijfsvergunning): aanvraag bij Secrétariat d'État à l'Immigration. Vereisten: woonbewijs, inkomensbewijs, strafblad. Minder bureaucratisch dan Marokko",
        "Bedrijfsvestiging = verblijfsrecht: als directeur van Tunesisch bedrijf krijgt u automatisch carte de séjour als ondernemer",
        "Lange termijn: visum en verblijf zijn relatief eenvoudig voor EU-burgers — Tunesië heeft belang bij aantrekken van buitenlands kapitaal",
      ],
    },
    bedrijfOprichten: {
      samenvatting:
        "Oprichting van een offshore SARL in Tunesië is relatief snel en goedkoop. Het biedt enorme fiscale voordelen voor bedrijven die diensten leveren aan klanten buiten Tunesië.",
      punten: [
        "SARL offshore (meest gekozen): 100% buitenlands eigendom. Minimumkapitaal TND 1.000 (~€300). Oprichting via notaris + API (Agence de Promotion de l'Industrie et de l'Innovation). Tijdsduur: 1–3 weken",
        "Vereiste: 100% van omzet van buiten Tunesië. Tunesische markt betreden = verlies offshore status",
        "Personeel: lokaal personeel aannemen is goedkoop (minimumloon TND 500/maand ~€150). Hoge opgeleide IT-professionals beschikbaar voor TND 2.000–4.000/maand (~€600–1.200)",
        "Tunis Digital Hub: overheidsinititiaf voor tech-startups en digitale diensten. Voordelen: gesubsidieerde kantoorruimte, coaching, overheids­contracten",
        "Bankrekening: open rekening in vreemde valuta (EUR, USD) bij BIAT of Amen Bank. Verplicht voor offshore bedrijf",
        "Arbeidsmarkt: sterke IT-sector (outsourcing naar Europa), meertalig (Arabisch, Frans, Engelse basis). Populair voor customer support centers",
      ],
    },
    vastgoed: {
      samenvatting:
        "Tunesisch vastgoed is spotgoedkoop vergeleken met Europa. Er zijn wel beperkingen voor buitenlanders — u hebt een speciale vergunning nodig (autorisation du gouverneur).",
      punten: [
        "Buitenlanders mogen kopen: ja, maar vereist gouverneursvergunning (Autorisation du gouverneur). Procedure: 1–3 maanden. Niet ingewikkeld maar bureaucratisch",
        "Aankoopkosten: 5% registratievergoeding + notariskosten (1–2%) + diverse kleine heffingen = totaal ~7–8%",
        "Prijzen: appartement 2 slaapkamers in Tunis La Marsa of Sidi Bou Saïd: TND 200.000–400.000 (~€60.000–120.000). Aan de kust (Hammamet, Sousse): TND 150.000–300.000 (~€45.000–90.000)",
        "Huurrendement: 6–10% bruto. Toeristische verhuur (Airbnb-achtig) actief maar regulering toenemend",
        "Nadeel: Tunesische dinar is niet vrij inwisselbaar. Winst repatriëren als particulier is complex. Als offshore bedrijf (EUR-rekening) wel mogelijk",
        "Valutarisico: TND is gedeprecieerd sterk vs. EUR — aankoop nu is voordelig, maar huurinkomsten in TND verliezen waarde bij omwisseling",
      ],
    },
    leven: {
      samenvatting:
        "Tunesië is voor westerlingen een verrassend comfortabel land. Laagste kosten in de Maghreb, uitstekend mediterraan klimaat, Franstalig, kosmopolitische sfeer in Tunis en aan de kust.",
      punten: [
        "Maandelijkse kosten (koppel): TND 2.500–4.500 (~€750–1.350) inclusief huur. Uitstekende levensstandaard voor Europese normen",
        "Huur woning Tunis (La Marsa, Sidi Bou Saïd, Les Berges du Lac): TND 800–2.000/maand (~€240–600)",
        "Internet: snel en relatief goedkoop. Telecom: Ooredoo, Orange, Tunisie Telecom. 4G beschikbaar in alle steden",
        "Gezondheidszorg: privé klinieken in Tunis zijn betaalbaar en competent (€20–50 per consult). Buitenlandse zorgverzekering sterk aanbevolen",
        "Schoolonderwijs: Lycée Français de Tunis, American Cooperative School. Degelijk Franstalig onderwijs",
        "Sociale sfeer: Tunesische samenleving is opener dan andere Arabische landen. Gemengde cafés, bikinistrand, bars — meer vrijheid dan Marokko of Golf",
        "Alcohol: legaal, verkrijgbaar in supermarkten, restaurants en bars. Geen beperkingen voor niet-moslims",
        "Politieke onzekerheid: president Saied concentreerde macht 2021. Geen directe impact op expats maar de economie staat onder druk (hoge inflatie, tekorten, IMF-leningen)",
      ],
    },
    cultuur: {
      samenvatting:
        "Tunesië is het meest liberale Arabische land. Frans is de tweede officiële taal in de praktijk. Vrouwen hebben constitutionele gelijkheid. De zakelijke cultuur is deels mediterraan (relatiematig) en deels Europees (agenda-gedreven).",
      punten: [
        "Taal: Arabisch officieel, Frans zakelijk en in onderwijs, Tunesisch dialect (Darija Tunsi) omgangstaal",
        "Vrouwen: gelijke rechten in de grondwet. Hijab optioneel. Vrouwen actief in alle sectoren inclusief politiek en rechtswezen",
        "Zakelijke vergadering: minder formeel dan Golf, meer mediterraan. Vertraging van 15–20 min normaal. Koffie/thee essentieel",
        "Religie: islam, maar gematigd. Ramadan wordt gerespecteerd maar niet met dezelfde strengheid als Golf. Bars blijven open tijdens ramadan (voor toeristen)",
        "Netwerken: Club de la Presse, UTICA (werkgeversorganisatie), IACE (economische experts). Tunesische elite is Franstalig en westers georiënteerd",
      ],
    },
    kansen: [
      "Offshore IT en digital services hub — goedkoop, Franstalig, opgeleide markt, dichtbij EU-tijdzone",
      "Toerisme en eco-toerisme — Sahara, medina's, mediterrane kust, beperkte toeristenmassa",
      "Groene energie — Tunesië heeft 330 dagen zon per jaar en ambitieuze exportplannen naar EU (via Elmed kabel naar Italië)",
      "Agrovoeding — olijfolie, dadels, vis. EU-exportmarkt al actief, potentieel voor meer",
      "Farmaceutische productie — loonkosten laag, kwaliteits­standaarden hoog",
      "Onderwijs — grote studentenpopulatie, IT-talent beschikbaar voor fractie van Europese loonkosten",
    ],
    risicos: [
      "Politieke onzekerheid — Saied-regime gaat richting autoritair bestuur, rechtsstaat onder druk",
      "Economische kwetsbaarheid — hoge staatsschuld, afhankelijkheid van IMF, chronische tekorten",
      "Valutarisico — TND is inconvertibel voor particulieren. Winst repatriëren als particulier is complex",
      "Bureaucratie — vastgoedvergunning, bedrijfsregistratie: traag en papier-intensief",
    ],
  },

  {
    slug: "egypte",
    naam: "Egypte",
    vlag: "🇪🇬",
    hoofdstad: "Caïro",
    regio: "Noord-Afrika / Midden-Oosten",
    munteenheid: "EGP (Egyptisch pond)",
    risicoNiveau: "medium",
    risicoLabel: "Medium risico",
    samenvatting:
      "Egypte is de grootste Arabische economie (110 miljoen inwoners) en biedt enorme marktkansen. De bureaucratie is zwaar, de munt daalt structureel, maar de vrije zones zijn aantrekkelijk en er is een belastingverdrag met Nederland. Caïro heeft een kosmopolitische elite en een levendige zakelijke scene.",
    sleutelcijfers: [
      { label: "Inkomstenbelasting", waarde: "0–27.5%" },
      { label: "BTW", waarde: "14%" },
      { label: "Verdrag Nederland", waarde: "Ja (1999)" },
      { label: "Inflatie (2024)", waarde: "~30%" },
      { label: "Kosten vs. Nederland", waarde: "−55 tot −65%" },
    ],
    belasting: {
      samenvatting:
        "Egypte heeft een belastingverdrag met Nederland. Inkomstenbelasting is progressief tot 27.5%. De vrije zones bieden aantrekkelijke vrijstellingen.",
      punten: [
        "Inkomstenbelasting: schijven 0% (t/m EGP 15.000) tot 27.5% (boven EGP 400.000/jaar). In euro bij huidige koers (1 EUR ≈ 55 EGP): 27.5% op inkomen boven ~€7.300/jaar",
        "Belastingverdrag NL-EG (1999): beschermt u tegen dubbele belasting. Pensioen uit NL: in NL belast. Zakelijk inkomen in Egypte: in Egypte belast",
        "BTW: 14%. Verplicht boven EGP 500.000 omzet per jaar",
        "Vrije zones (Free Zones): 100% vrijstelling van inkomsten-, omzet- en invoerbelasting. General Authority for Free Zones and Investment (GAFI) verleent licenties. Locaties: Port Said, Nasr City, Alexandria, Ismailia",
        "Bronheffing (WHT): 20% op diensten aan buitenlandse partners, 10% op rente, 5% op dividenden",
        "Valutarisico: EGP heeft meerdere devaluaties doorgemaakt (2016, 2022, 2023). Verdiensten in EGP verliezen waarde snel bij omwisseling naar EUR. Borg: verdien in USD/EUR of structureer via vrije zone met valutavrijheid",
      ],
    },
    visum: {
      samenvatting:
        "Nederlanders en Belgen kunnen een visum on arrival krijgen of een e-Visa aanvragen. Verblijfsvergunning via normale procedure.",
      punten: [
        "Visum on arrival: USD 25 bij aankomst. 30 dagen. Verlengbaar bij lokale moqataa (districtskantoor)",
        "e-Visa: online aanvragen via visa2egypt.gov.eg. Enkelvoudig (30 dagen) of meervoudig (180 dagen). Kosten: USD 25–60",
        "Verblijfsvergunning (Residence Permit): aanvraag via Passport, Immigration and Nationality Authority. Categorieën: werk, investeringen, eigendom. Jaarlijkse verlenging",
        "Werk als expat: arbeidsvergunning via Ministry of Manpower. Egypte stelt quotum: max 10% buitenlandse werknemers bij bedrijven. Uitzondering voor vrije zones en expat-posities",
      ],
    },
    bedrijfOprichten: {
      samenvatting:
        "Egypte heeft de afgelopen jaren het registratieproces vereenvoudigd. GAFI (General Authority for Investment and Free Zones) is het centrale punt voor buitenlandse investeerders.",
      punten: [
        "LLC (Limited Liability Company / Sharikat Tawsiyya): meest gebruikt. Minimumkapitaal EGP 1.000 (~€18). 100% buitenlands eigendom in de meeste sectoren. Tijdsduur: 2–4 weken via GAFI",
        "GAFI One Stop Shop: centrale loket voor registratie, vergunningen, belasting, sociale zekerheid. Aanzienlijk verbeterd na 2019-hervormingen",
        "Free Zone bedrijf: 100% vrijstelling belasting. Vereist: min. USD 1.000.000 investering in productie. Diensten-vrije zone: USD 100.000. Locaties: Port Said, Ismailia, Alexandria, Suez",
        "New Administrative Capital: nieuw overheidscentrum 45 km van Caïro. Veel multinationals verplaatsen hoofdkantoor erheen. Kansen voor vroege positionering",
        "Joint Stock Company (SAE): voor grote investeringen, beursnotering. Minimumkapitaal EGP 2.000.000. Vereist bij sectoren als petroleum, media",
        "Belang: accountant en juridisch adviseur zijn essentieel in Egypte. Bureaucratie is complex en persoonlijk netwerk is alles",
      ],
    },
    vastgoed: {
      samenvatting:
        "Egypte biedt de goedkoopste vastgoedprijzen van de regio maar de muntontwaarding tast de waarde in euro uit. Buitenlanders mogen maximaal 2 objecten kopen.",
      punten: [
        "Buitenlanders mogen maximaal 2 objecten kopen. Geen toestemming vereist, wel registratie bij kadaster",
        "Aankoopprijzen: New Cairo appartement 2 slaapkamers: EGP 3.000.000–8.000.000 (~€55.000–145.000). Hurghada of El Gouna: EGP 2.000.000–5.000.000 (~€36.000–91.000)",
        "Aankoopkosten: 2.5% registratie + makelaar + notaris = totaal ca. 4–6%",
        "Huurrendement: 8–12% in EGP — aantrekkelijk op papier maar EGP-waarde daalt structureel",
        "Toeristische verhuur: El Gouna (luxe resort), Ain Sokhna, Sahel (Noordkust) — seizoensgebonden maar populair bij Arabische bezoekers",
        "Advies: koop in USD-denomineerde projecten of contracteer in USD om valutarisico te beperken",
      ],
    },
    leven: {
      samenvatting:
        "Caïro is een megastad met enorm contrast. New Cairo en Heliopolis zijn westers-georiënteerde buurten waar expats comfortabel wonen. De kosten zijn extreem laag maar inflatie erodeert koopkracht.",
      punten: [
        "Maandelijkse kosten expat (New Cairo): EGP 15.000–30.000 (~€270–545). Extraordinair laag voor Europese levensstandaard",
        "Huur appartement New Cairo (3 slaapkamers, gemeubileerd): EGP 8.000–20.000/maand (~€145–365)",
        "Gezondheidszorg: privéklinieken in New Cairo en Caïro (Dar Al Fouad, As-Salam International) op hoog niveau. Kosten laag (€20–80 per consult). Buitenlandse verzekering aanbevolen",
        "Luchtvervuiling Caïro: significant probleem. New Cairo en 6th of October City zijn schoner",
        "Veiligheid: stabiel voor expats in expat-gebieden. Politieke demonstraties vermijden. Terrorisme risico is aanwezig maar beperkt in toeristische zones",
        "Transport: uber actief in Caïro. Metro beperkt maar uitbreidend. Auto rijden in Caïro is chaotisch maar breed gedaan",
      ],
    },
    cultuur: {
      samenvatting:
        "Egypte heeft een fascinerende mengeling van faraonische, Arabische en mediterrane cultuur. De bevolking is hartelijk en gastvrij. Zakelijk is netwerken cruciaal — wasta werkt overal.",
      punten: [
        "Taal: Egyptisch Arabisch is de meest begrepen Arabische dialect in de hele Arabische wereld (tv, film). Engels is zakelijk gangbaar bij bedrijven en overheid",
        "Religie: islam overheersend (90%), met een significante christelijke minderheid (Kopten, 10%). Religieuze spanning bestaat maar is niet dagelijks voelbaar voor expats",
        "Ramadan: sterk gevierd. Werkuren inkorten. Straten levendig 's nachts (na iftar). Uitstekend moment voor netwerken en relaties verdiepen",
        "Zakelijk: informeel en familiair na eerste drempel. Wasta is allesbepalend. Investeer in persoonlijke relaties vóór u zaken doet",
        "Kleding: in zakenomgeving formeel. In toeristische gebieden (Luxor, Hurghada) casual. In Caïro: vrouwen doen er goed aan schouders en knieën te bedekken buiten hotels",
      ],
    },
    kansen: [
      "Grootste Arabische consumentenmarkt (110 miljoen inwoners) — enorm potentieel voor consumer goods, retail, food",
      "Suez Canal Economic Zone (SCZone) — logistiek en industrie met belastingvrijstelling",
      "Nieuwe Administratieve Hoofdstad — vastgoed, kantoren, infrastructure in volle opbouw",
      "Toerisme — piramides, Rode Zee, Nijl. Herstel post-COVID, groeiende internationale aankomsten",
      "Agrarische sector — Egypte wil 3 miljoen hectare nieuwe landbouwgrond ontginnen (Toshka Project)",
      "Digitalisering — start-up scene groeit snel in Caïro (Ride, Swvl, Breadfast — succesverhalen)",
    ],
    risicos: [
      "Valutarisico: EGP heeft meerdere grote devaluaties ondergaan. Verdiensten in EGP zijn kwetsbaar",
      "Bureaucratie: zwaar, traag, persoonsgericht. Zonder goede lokale partners en accountant riskeert u vertragingen en boetes",
      "Inflatie: structureel hoog (25–35%). Koopkracht van lokale inkomsten snel erodeer",
      "Politieke vrijheid: president Sisi leidt een autoritair regime. Critici, journalisten en NGO's worden onderdrukt — niet direct relevant voor zakenleven maar risico voor reputatie",
      "Betalingsmoraal: langere betaaltermijnen normaal. Bouw garanties en vooruitbetalingen in uw contracten",
    ],
  },

  {
    slug: "jordanie",
    naam: "Jordanië",
    vlag: "🇯🇴",
    hoofdstad: "Amman",
    regio: "Levant",
    munteenheid: "JOD (Jordaanse dinar, gekoppeld aan USD)",
    risicoNiveau: "laag",
    risicoLabel: "Laag risico",
    samenvatting:
      "Jordanië is het meest stabiele en westers-vriendelijke Arabische land in de Levant. Amman heeft een kosmopolitische sfeer, uitstekende infrastructuur en een groot expat-netwerk. De Aqaba Special Economic Zone biedt belastingvoordelen. Geen olierijkdom maar een dienstverlenende economie met veel kansen.",
    sleutelcijfers: [
      { label: "Inkomstenbelasting", waarde: "5–20%" },
      { label: "Corporate tax", waarde: "20% (standaard)" },
      { label: "Aqaba SEZ corporate tax", waarde: "5%" },
      { label: "BTW", waarde: "16%" },
      { label: "Verdrag Nederland", waarde: "Nee" },
    ],
    belasting: {
      samenvatting:
        "Jordanië heeft geen belastingverdrag met Nederland. Inkomstenbelasting is progressief maar laag. Aqaba is een belastingparadijs binnen Jordanië.",
      punten: [
        "Inkomstenbelasting particulieren: 5% (JOD 0–5.000) tot 20% (boven JOD 1.000.000/jaar). In euro (1 EUR ≈ 0.80 JOD): 20% op inkomen boven €1.25M/jaar — effectief laag",
        "Corporate tax: 20% standaard. Banken: 35%. Telecoms: 24%",
        "Aqaba Special Economic Zone (ASEZ): corporate tax 5%, geen BTW, geen import/export belasting. Ideaal voor handels- en logistieke bedrijven",
        "Geen verdrag met Nederland: pensioen/dividend uit NL kan zowel in NL als JO belast worden. Risico minimaal bij lagere inkomens — voor hogere inkomens: haal fiscaal advies",
        "Dividenden: 0% bronheffing — dividenduitkering aan buitenlandse aandeelhouder is belastingvrij in Jordanië",
        "BTW: 16% standaard. ASEZ: geen BTW",
      ],
    },
    visum: {
      samenvatting:
        "Nederlanders krijgen gratis visum on arrival voor 30 dagen. Verlengbaar. Jordan Pass combineert visum en toegang tot Petra.",
      punten: [
        "Visum on arrival: gratis voor Nederlanders en Belgen. 30 dagen. Verlengbaar bij Civil Status and Passports Department in Amman",
        "Jordan Pass: online kopen voor aankomst. Inclusief visum + toegang tot meer dan 40 attracties (o.a. Petra). Sterk aanbevolen voor korte bezoeken",
        "Verblijfsvergunning: voor langer verblijf aanvragen via Public Security Directorate. Relatief eenvoudig bij bewijs van woning, inkomen en schoon strafblad",
        "Werkvergunning: via Jordaanse werkgever. Quota voor buitenlanders per sector — maar in praktijk flexibel bij gespecialiseerde functies",
      ],
    },
    bedrijfOprichten: {
      samenvatting:
        "Jordanië is relatief eenvoudig voor bedrijfsoprichting. Het investeringsklimaat is degelijk en de overheid verwelkomt buitenlandse investeerders, zeker in ASEZ.",
      punten: [
        "LLC (Limited Liability Company): meest gebruikte vorm. Minimumkapitaal JOD 1.000 (~€1.250). 100% buitenlands eigendom in meeste sectoren. Oprichting via Ministry of Industry, Trade and Supply. Tijdsduur: 1–2 weken",
        "Aqaba Special Economic Zone: 5% corporate tax, geen invoerrechten, geen BTW. Aantrekkelijk voor handel (haven), logistiek, toerisme, industrie. Aparte registratie via Aqaba Special Economic Zone Authority (ASEZA)",
        "Jordan Investment Commission (JIC): centrale loket voor grote investeringen (> JOD 50.000). Biedt faciliteiten: belastingvrijstelling 5–10 jaar voor strategische sectoren",
        "Sectoren vrij voor buitenlanders: industrieel, diensten, toerisme. Sectoren met beperkingen: retail onder bepaalde drempels, media",
        "Arbeidsmarkt: goed opgeleid, meertalig (Arabisch + Engels wijdverbreid). Minimumloon: JOD 260/maand (~€325). Sterk onder Arabische normen",
        "Aqaba haven: directe toegang tot Rode Zee, doorvoer naar Irak en Saudi-Arabië — logistiek sleutelpositie",
      ],
    },
    vastgoed: {
      samenvatting:
        "Buitenlanders mogen vastgoed kopen in Jordanië maar regels zijn complexer dan Marokko. Amman heeft een levendige vastgoedmarkt.",
      punten: [
        "Buitenlanders mogen kopen in aangewezen gebieden (niet in alle zones). Vergunning van Prime Minister's Office vereist voor bepaalde locaties",
        "Aankoopprijzen Amman (Abdoun, Sweifieh, Abdali): JOD 150.000–400.000 (~€187.000–500.000) voor appartement 2-3 slaapkamers",
        "Aankoopkosten: 9% registratiebelasting (verlaagd naar 4% voor eerste aankoop Jordaniërs, voor buitenlanders 9%) + 2% makelaar = ~11%",
        "Huurrendement: 4–6% in Amman",
        "Aqaba: goedkoper vastgoed (JOD 50.000–150.000) en belastingvrij in de ASEZ",
      ],
    },
    leven: {
      samenvatting:
        "Amman is een van de meest comfortabele Arabische steden voor westerse expats. Hoog niveau van Engelstaligheid, goede gezondheidszorg, actief expatnetwerk.",
      punten: [
        "Maandelijkse kosten koppel Amman: JOD 1.500–2.500 (~€1.875–3.125). Vergelijkbaar met een middelgrote Europese stad",
        "Huur appartement 2 slaapkamers Amman (Abdoun/Sweifieh): JOD 500–900/maand (~€625–1.125)",
        "Gezondheidszorg: uitstekend. Jordanië staat bekend als medisch toerisme bestemming voor de regio. Privéklinieken (Jordan Hospital, Istishari Hospital) op westers niveau",
        "Alcohol: legaal. Supermarkten, restaurants, bars in Amman vrij toegankelijk",
        "Veiligheid: een van de veiligste landen in de regio. Hoog niveau van politiepresentie, stabiel politiek klimaat ondanks vluchtelingeninstroom (Syrisch, Iraaks, Palestijns)",
        "Taal: Arabisch officieel, Engelse communicatie wijdverbreid in zakelijke en sociale kring. Eenvoudiger dan Marokko of Egypte voor niet-Arabisch sprekers",
      ],
    },
    cultuur: {
      samenvatting:
        "Jordanië is een gematigd islamitisch land met sterke westerse oriëntatie. Koning Abdullah II is sterk pro-westers. De bevolking staat bekend om gastvrijheid.",
      punten: [
        "Taal: Arabisch, maar Engels is bijna universeel in Amman bij hoger opgeleiden en zakenkring",
        "Religie: islam (97%), christelijke minderheid (3%) — een van de grootste christelijke gemeenschappen in de Arabische wereld",
        "Zakelijk: relatief direct vergeleken met andere Arabische landen. Vergaderingen starten op tijd, agenda wordt gevolgd. Persoonlijke relatie wel waardevol maar minder dominant dan in Golf",
        "Vrouwen in zakenleven: goed vertegenwoordigd in Jordanië. Vrouwelijke directeuren zijn niet ongewoon",
        "Gastvrijheid: Jordaniërs zijn buitengewoon gastvrij. Thee en koffie zijn culturele rituelen — weiger niet",
      ],
    },
    kansen: [
      "Aqaba Special Economic Zone — belastingvrij, strategische haven, toegang tot regio",
      "Healthcare en medisch toerisme — Jordanië is al regionaal medisch centrum. Kansen voor equipmentleveranciers en investeerders",
      "Vluchtelingeneconomie — 1.5 miljoen Syrische vluchtelingen = grote vraag naar voedsel, onderwijs, woningbouw, diensten (deels NGO-gedreven)",
      "Hernieuwbare energie — Jordanië heeft 300+ zonnedagen per jaar en ambitieuze groene energie targets",
      "Toerisme — Petra, Wadi Rum, Dode Zee. Groei in internationale bezoekers, kansen in luxe hospitality",
      "Water en irrigatietechnologie — Jordanië is een van de waterarmste landen ter wereld. Nederlandse expertise hoogst relevant",
    ],
    risicos: [
      "Geen belastingverdrag met Nederland — risico op dubbele belasting bij hogere inkomens",
      "Geografische positie: buurlanden zijn Syrië (instabiel), Irak (instabiel), Israël/Palestina (conflictzone). Indirecte impact op economie",
      "Economische druk: hoge staatsschuld, afhankelijkheid van buitenlandse hulp (VS, Golf), hoge werkloosheid",
      "Vastgoedkosten voor buitenlanders: 9% registratiebelasting is hoog",
    ],
  },

  {
    slug: "qatar",
    naam: "Qatar",
    vlag: "🇶🇦",
    hoofdstad: "Doha",
    regio: "Golf",
    munteenheid: "QAR (Qatarese Riyal, gekoppeld aan USD)",
    risicoNiveau: "laag",
    risicoLabel: "Laag risico",
    samenvatting:
      "Qatar is de rijkste natie ter wereld per capita dankzij aardgas. Na het WK 2022 heeft Qatar enorme infrastructuur maar ook een overheidssurplus. Voor bedrijven en expats in bepaalde sectoren (sport, onderwijs, energie, bouw, consulting) zijn er uitstekende kansen. Levensstijl is comfortabel maar conservatief.",
    sleutelcijfers: [
      { label: "Inkomstenbelasting expat", waarde: "0%" },
      { label: "Corporate tax", waarde: "10%" },
      { label: "BTW", waarde: "Geen (0%)" },
      { label: "Verdrag Nederland", waarde: "Ja (2008)" },
      { label: "BNP per capita", waarde: "€75.000+ (wereldtop)" },
    ],
    belasting: {
      samenvatting:
        "Qatar heft geen inkomstenbelasting voor particulieren en geen BTW. Corporate tax is 10% voor buitenlandse bedrijven. Er is een belastingverdrag met Nederland.",
      punten: [
        "Inkomstenbelasting: 0% voor werknemers. Salaris volledig belastingvrij",
        "Corporate tax: 10% voor buitenlandse bedrijven. Geen belasting voor bedrijven met 100% Qatarese eigendom",
        "BTW: 0% — Qatar heeft (nog) geen BTW ingevoerd. Dit geeft een competitief voordeel",
        "Verdrag NL-Qatar (2008): beschermt tegen dubbele belasting. Pensioen uit NL: belast in NL. Zakelijk inkomen Qatar: belast in Qatar (10% CT, 0% IB)",
        "Withholding tax: 5% op diensten aan buitenlandse partijen. 7% op rente. 0% op dividenden",
        "Qatar Financial Centre (QFC): aparte fiscale zone in Doha. Corporate tax: 10% op Qatar-bron inkomsten. Volledig buitenlands eigendom. Aantrekkelijk voor financiële, professionele en zakelijke dienstverlening",
      ],
    },
    visum: {
      samenvatting:
        "Nederlanders en Belgen krijgen gratis visum on arrival voor 30 dagen. Qatar heeft een van de meest versoepelde visumregimes in de Golf.",
      punten: [
        "Visum on arrival: gratis, 30 dagen, voor EU-burgers inclusief Nederland en België. Verlengbaar",
        "Hayya Card (WK 2022 erfenis): digitaal multi-entry bezoekerspas. Beschikbaar voor bezoeken aan wedstrijden/evenementen, inmiddels uitgebreid voor zakelijke bezoekers",
        "Werkvisum + Residence Permit: via Qatarese werkgever (sponsor). Kafala-systeem: werkgever is verantwoordelijk. Hervormd in 2020 — werknemers mogen nu van werkgever wisselen en vertrekken zonder toestemming",
        "Investor Residence: bij investering van min. QAR 200.000 (~€50.000) in Qatarese bedrijf of vastgoed. 5-jaar verblijfsvergunning",
        "Familie: sponsor brengt familie mee via family sponsorship",
      ],
    },
    bedrijfOprichten: {
      samenvatting:
        "Qatar vereist traditioneel een lokale partner. Via de QFC kunt u 100% eigendom behouden. Directe toegang tot Qatarese overheidscontracten vereist lokale aanwezigheid.",
      punten: [
        "LLC Qatar (met lokale partner): 51% Qatarese partner verplicht buiten QFC. Steeds meer sectoren gaan open voor 100% buitenlands eigendom",
        "Qatar Financial Centre (QFC): 100% buitenlands eigendom. Eigen rechtssysteem (Common Law, Engelstaliger). 10% CT op Qatar-bron inkomsten. Gericht op professionele dienstverlening, fintech, consulting, verzekeringen",
        "Sectors voor 100% buitenlands eigendom (buiten QFC, groeiende lijst): IT, onderwijs, gezondheidszorg, sport, toerisme — na goedkeuring Ministry of Commerce",
        "Government tenders: grote publieke contracten vereisen Qatarese registratie (CR) en vaak lokale partner. Post-WK veel lopende projecten (uitbreiding metro, NEOM-equivalent Lusail City)",
        "Oprichtingskosten LLC: QAR 2.000–5.000 (~€500–1.250) + notaris + lokale partner regeling",
        "Arbeidsmarkt: 90% van de bevolking is expat. Kwalificeerde Qatarese werknemers zijn schaars en duur",
      ],
    },
    vastgoed: {
      samenvatting:
        "Buitenlanders mogen in aangewezen zones kopen. Markt is stabiel en professioneel na WK-boom.",
      punten: [
        "Freehold zones voor buitenlanders: The Pearl, Lusail Marina, Al Kharaej, Al Dafna, Onaiza, Al Qassar, Al Refaa, Al Mansoura, Fereej Bin Dirham, Al Doha Al Jadidah",
        "Aankoopprijs Pearl Qatar appartement: QAR 700.000–2.000.000 (~€175.000–500.000)",
        "Huurrendement: 5–7% in Pearl Qatar en Lusail",
        "Investor Residence via vastgoed: aankoop boven QAR 200.000 geeft verblijfsrecht",
        "Markt post-WK: vraag gedaald maar markt stabiel. Goede entry point voor lange termijn investeerders",
      ],
    },
    leven: {
      samenvatting:
        "Doha is een ultramoderne stad met uitstekende expat-faciliteiten. Belastingvrij salaris, hoge koopkracht, maar ook hoge huurprijzen en conservatieve sociale normen.",
      punten: [
        "Maandelijkse kosten koppel Doha: QAR 10.000–20.000 (~€2.500–5.000). Vergelijkbaar met Amsterdam bij goede expat package",
        "Expat package: veelal inclusief woning (QAR 8.000–15.000/maand huurtoelage), auto, jaarlijkse vluchten, schoolkosten",
        "Alcohol: alleen in hotels en een beperkt aantal restaurants voor expats. Geen openbare verkoop. Qatar Distribution Company (QDC) verkoopt alcohol aan gecertificeerde expats (licence vereist)",
        "Gezondheidszorg: uitstekend. Hamad Medical Corporation is het staatsgezondheidssysteem op hoog niveau. Sidra Medicine (internationale normen)",
        "Klimaat: extreem heet mei–september (40–50°C). Buitenactiviteiten beperkt. Oktober–april aangenaam",
        "Doha expat scene: actief. Nederlandse ambassade, Business Council Netherlands–Qatar, groot aanbod internationale scholen (Doha College, Qatar Academy)",
      ],
    },
    cultuur: {
      samenvatting:
        "Qatar is conservatiever dan Dubai maar opener dan Saudi-Arabië. Qatarese nationals zijn een minderheid in eigen land. Zakelijk is English de voertaal.",
      punten: [
        "Taal: Arabisch officieel, maar Engels is de primaire zakelijke taal. Qatarese nationals spreken vrijwel allemaal goed Engels",
        "Kleding: formeel en bescheiden. Buiten hotels: schouders en knieën bedekken (ook voor mannen in overheidsgebouwen)",
        "LGBTQ+: verboden en strafbaar — discreet gedrag noodzakelijk",
        "Ramadan: sterk gevierd, ook zakelijk. Niet eten/drinken in openbaar overdag",
        "Zakelijk: formeel, vriendelijk maar afgemeten. Qatarese besluitvormers werken langzaam — geduld. Wasta essentieel voor grote contracten",
        "Sport als opening: via voetbal, golf, tennis (Qatar Open) is netwerkeren met Qatarese business elite goed mogelijk",
      ],
    },
    kansen: [
      "Post-WK infrastructure leverage: Metro Qatar, Msheireb Downtown Doha, Lusail City — uitbouw nog jaren gaande",
      "LNG-sector: Qatar is 's werelds grootste LNG-exporteur. Technologie, engineering, logistiek supply chain",
      "Onderwijs City: 6 Amerikaanse universiteiten op één campus. Kansen voor onderwijs-tech en corporate training",
      "Sport en events: FIFA-erfenis. Qatar wil permanent events-hub worden. Sport management, event organisatie",
      "Duurzaamheid en water: Qatar wil 100% hernieuwbaar in 2035. Cleantech, ontziltingsinstallaties",
    ],
    risicos: [
      "Dure markt: wonen en personeel zijn aanzienlijk duurder dan Maghreb-landen",
      "Kafala-risico: ondanks hervormingen is de positie van buitenlandse werknemer afhankelijk van de werkgever",
      "Kleine markt: 3 miljoen inwoners (waarvan 300.000 Qatarezen). Schaal beperkt voor consumentenproducten",
      "Regionale afhankelijkheid: boycot van 2017–2021 (Saudi, VAE, Egypte, Bahrein) toonde kwetsbaarheid",
    ],
  },

  {
    slug: "libie",
    naam: "Libië",
    vlag: "🇱🇾",
    hoofdstad: "Tripoli (GNU) / Tobruk (HoR)",
    regio: "Maghreb",
    munteenheid: "LYD (Libische dinar)",
    risicoNiveau: "zeer-hoog",
    risicoLabel: "Zeer hoog risico",
    samenvatting:
      "Libië heeft de 9e grootste oliereserves ter wereld en een vrijwel ongedederde reconstructiemarkt na jaren burgeroorlog. Voor Nederlandse bedrijven met de juiste lokale partners zijn de kansen enorm — maar het risico is navenant. Het Nederlandse ministerie van Buitenlandse Zaken adviseert: reis niet naar Libië. ArabDutch heeft directe contacten in Tripoli en de westelijke regio en begeleidt uitsluitend ervaren operators.",
    sleutelcijfers: [
      { label: "Inkomstenbelasting", waarde: "5–15%" },
      { label: "Corporate tax", waarde: "20%" },
      { label: "Oliereserves", waarde: "9e ter wereld" },
      { label: "Reisadvies NL", waarde: "Niet reizen (rood)" },
      { label: "Verdrag Nederland", waarde: "Nee" },
    ],
    belasting: {
      samenvatting:
        "Het Libische belastingstelsel is eenvoudig op papier maar niet-functioneel in de praktijk door politieke verdeeldheid. De meeste buitenlandse bedrijven opereren via Tunesische of Maltese holdingstructuren.",
      punten: [
        "Inkomstenbelasting: 5–15% progressief (onder GNU-wetgeving West-Libië)",
        "Corporate tax: 20% op bedrijfswinst. In praktijk niet goed gehandhaafd",
        "Oliesector: volledig onder staatsbedrijf NOC (National Oil Corporation). Contracten met NOC zijn de enige serieuze route voor energie-gerelateerde bedrijven",
        "Holding structuur aanbeveling: Tunesische of Maltese holding als moederbedrijf, Libische dochter voor operaties. Minimaleert fiscal en juridisch risico",
        "Betalingen: voorkeur USD in cash of internationale bankoverschrijving. Libische banken zijn grotendeels disfunctioneel voor buitenlandse bedrijven",
        "Geen belastingverdrag met Nederland",
      ],
    },
    visum: {
      samenvatting:
        "Visum voor Libië is uitsluitend via ambassade (Tunis of Malta) te verkrijgen. Geen visum on arrival voor westerse reizigers.",
      punten: [
        "Visum: vereist uitnodigingsbrief van Libische sponsor + aanvraag via ambassade in Tunis of Rome. Tijdsduur: variabel (dagen tot weken)",
        "Reisadvies: Ministerie van Buitenlandse Zaken NL: code rood (niet reizen). Particulieren en bedrijven doen dit op eigen risico",
        "Veiligheid: ontvoeringen voor losgeld zijn reëel in bepaalde gebieden. Tripoli relatief stabiel onder GNU, maar situatie verandert snel",
        "ArabDutch-begeleiding: wij begeleiden alleen ervaren operators met aantoonbare lokale verankering. Cold visits zijn absoluut af te raden",
        "Zakelijke delegaties: via formele uitnodiging van Libische minister of staatsinstelling is bezoek aan Tripoli in groepsverband mogelijk met veiligheidsprotocol",
      ],
    },
    bedrijfOprichten: {
      samenvatting:
        "Theoretisch zijn er investeringswetten. In de praktijk is oprichting complex en afhankelijk van uw lokale netwerk en de politieke situatie.",
      punten: [
        "Libisch bedrijf: Joint Venture verplicht met Libische partner. Geen 100% buitenlands eigendom buiten speciale regelingen",
        "Sector kansen: olie-diensten, bouw (reconstructie), voedselimport, gezondheidszorg, beveiliging, communicatie",
        "NOC-contracten: de enige betrouwbare contracten in de energiesector. Via NOC in Tripoli (GNU-gebied) of parallel AGOCO in Bengazi (HoR-gebied)",
        "Betalingszekerheid: Letters of Credit (LC) via grote internationale banken zijn essentieel. Vertrouw niet op directe betalingstoezeggingen",
        "Timing: post-conflict reconstructie creëert historische kansen maar timing is alles. Politieke stabilisatie is vereist voor serieuze investering — dit kan morgen of over 3 jaar zijn",
      ],
    },
    vastgoed: {
      samenvatting: "Vastgoedinvestering voor buitenlanders is op dit moment niet aan te bevelen vanwege eigendomsrecht-onzekerheid en veiligheidssituatie.",
      punten: [
        "Geen betrouwbaar kadaster — eigendomsrechten zijn dispuut in veel gevallen",
        "Huisvesting voor expats: via werkgever geregeld in beveiligde complexen (compounds) in Tripoli",
        "Huurprijzen in USD: stijgend door schaarste en olie-sector aanwezigheid",
        "Aanbeveling: geen privé-vastgoedinvestering in Libië totdat politieke stabilisatie bereikt is",
      ],
    },
    leven: {
      samenvatting: "Expatlevens in Libië zijn uitsluitend voor gespecialiseerde professionals in specifieke sectoren en met volledige veiligheidsprocedures.",
      punten: [
        "Beveiligde compounds in Tripoli voor internationale medewerkers (olie, bouw, NGO's)",
        "Alcohol: strikt verboden",
        "Medische faciliteiten: beperkt. Medische evacuatieplan verplicht voor elke expat",
        "Bewegingsvrijheid: sterk beperkt buiten beveiligde zones",
        "Communicatie: internet en telefonie functioneel in grote steden",
        "Salarisniveaus voor expats in Libië zijn significant hoger dan andere landen als compensatie voor risico (hardship premium)",
      ],
    },
    cultuur: {
      samenvatting: "Libische samenleving is tribaal, islamitisch en traditioneel. Stamverbanden zijn politiek en zakelijk bepalend.",
      punten: [
        "Taal: Arabisch (Libisch dialect). Frans of Italiaans als tweede taal in bepaalde kringen (koloniale erfenis). Engels beperkt",
        "Religie: soennitische islam, conservatief. Volledige inachtneming van islamitische normen vereist",
        "Tribale structuur: kennis van welke stam uw partner vertegenwoordigt is zakelijk cruciaal. ArabDutch heeft dit netwerk",
        "Vertrouwen: in Libische zakencultuur is persoonlijk vertrouwen absoluut fundamenteel. Contracten zijn secundair aan mondelinge toezeggingen",
        "Wasta: in Libië heet het 'wasata' — identiek principe. Zonder sterke tussenpersoon kom je nergens",
      ],
    },
    kansen: [
      "Post-conflict reconstructie — infrastructuur, scholen, ziekenhuizen, wegen: allemaal te herbouwen",
      "Oliesector — als enige grote onbenutte OPEC-lid-kapaciteit. Technologie, onderhoud, engineering",
      "Voedselimport — Libië importeert 90% van zijn voedsel. Nederlandse agrovoeding heeft een directe markt",
      "Telecommunicatie — netwerkinvesteringen nodig. Mobiele penetratie laag",
      "Waterinfrastructuur — Great Man-Made River project vereist onderhoud en uitbreiding",
    ],
    risicos: [
      "Veiligheidsrisico: actieve gewapende groepen, ontvoeringsrisico, militaire activiteit",
      "Politieke fragmentatie: twee regeringen, geen centrale autoriteit voor contractrecht",
      "Betalingsrisico: hoog. Altijd LC of vooruitbetaling vereisen",
      "Reputatierisico: associatie met Libische entiteiten kan internationaal reputatieschade geven",
      "Sancties: check EU en VS sanctielijsten voor Libische tegenpartijen (OFAC, EU Council)",
    ],
  },

  {
    slug: "irak",
    naam: "Irak",
    vlag: "🇮🇶",
    hoofdstad: "Bagdad",
    regio: "Midden-Oosten",
    munteenheid: "IQD (Iraakse dinar)",
    risicoNiveau: "hoog",
    risicoLabel: "Hoog risico",
    samenvatting:
      "Irak heeft de 5e grootste oliereserves ter wereld en een economie in wederopbouw. Bagdad en zuidelijk Irak zijn risicovol; de Kurdistan Regio (Erbil, Sulaymaniyah) is relatief stabiel en steeds aantrekkelijker voor buitenlandse investeerders. KRG heeft eigen investeringswetten, betere infrastructuur en meer vrijheid.",
    sleutelcijfers: [
      { label: "Corporate tax", waarde: "15–35%" },
      { label: "Oliereserves", waarde: "5e ter wereld" },
      { label: "KRG (Kurdistan) risico", waarde: "Hoog (maar beheersbaar)" },
      { label: "Reisadvies NL (Bagdad)", waarde: "Niet reizen (rood)" },
      { label: "Reisadvies NL (KRG)", waarde: "Oranje — waakzaamheid" },
    ],
    belasting: {
      samenvatting:
        "Het Iraakse belastingsysteem is complex en slecht gehandhaafd buiten de oliesector. KRG heeft eigen investeringsstimulansen.",
      punten: [
        "Corporate tax Irak: 15% op bedrijfswinst (met uitzondering van olie = 35%)",
        "Inkomstenbelasting: 3–15% progressief. In praktijk nauwelijks geïnd bij buitenlandse werknemers",
        "KRG Investeringswet 4 van 2006: belastingvrijstelling voor goedgekeurde investeringen tot 10 jaar",
        "Oliecontracten: alleen via Ministry of Oil in Bagdad (buiten KRG). Service Contracts — geen concessies",
        "Geen verdrag met Nederland",
        "Praktisch: alle internationale bedrijven gebruiken Jordaanse of Turkse houdingstructuur voor Iraakse activiteiten",
      ],
    },
    visum: {
      samenvatting:
        "Visum voor Irak via ambassade. KRG heeft eigen e-Visa systeem. Reisadvies is kritisch — volg het nauwgezet.",
      punten: [
        "Irak visum: via ambassade in Brussel of Den Haag (beperkt). Uitnodiging Iraakse sponsor vereist",
        "KRG (Kurdistan Regional Government) e-Visa: via gov.krd/evisa. Eenvoudiger dan Iraaks federaal visum. Geldig alleen voor KRG-gebied",
        "Reisadvies NL: Bagdad en Anbar — niet reizen (rood). KRG — oranje (waakzaamheid, beperkt reizen)",
        "Veiligheidsprotocol: bij bezoek aan KRG verplicht: contact NL ambassade Bagdad melden, beveiligingsbedrijf inschakelen, compound-verblijf",
        "Erbil International Airport: directe vluchten vanuit Istanbul (Turkish Airlines), Dubai (flydubai), Beiroet",
      ],
    },
    bedrijfOprichten: {
      samenvatting:
        "KRG biedt de meest toegankelijke investeringsomgeving in Irak. Erbil heeft een groeiende expat business community.",
      punten: [
        "KRG Investeringsautoriteit (IDAL): centrale loket voor investeerders in Kurdistan. Belastingvrijstelling 10 jaar voor goedgekeurde projecten. Locaties: Erbil, Sulaymaniyah, Dohuk",
        "Sectoren KRG: olie (productie en raffinaderijen), toerisme (mountainresorts), agrarisch, bouw, gezondheidszorg, onderwijs",
        "Lokale partner: vereist voor Iraaks federaal bedrijf (min. 51% Iraaks). In KRG flexibeler — 100% buitenlands eigendom in bepaalde sectoren na goedkeuring",
        "Iraaks federaal bedrijf Bagdad: voor oliesector contracten met Ministry of Oil — complex, tijdrovend, risicovol zonder sterke lokale partner",
        "Erbil business community: groeiend netwerk van internationale bedrijven (VK, VS, Duitsland, Turkije). Board of Erbil Chamber of Commerce is toegankelijk",
      ],
    },
    vastgoed: {
      samenvatting: "Vastgoedinvestering alleen realistisch in KRG (Erbil). Snelgroeiende markt maar hoge risico-premie.",
      punten: [
        "Erbil: grootste en stabielste stad van KRG. Luxe appartementencomplexen voor expats (Dream City, Italian Village, American Village)",
        "Prijzen Erbil: USD 70.000–200.000 voor appartement. Snel stijgend de laatste jaren",
        "Huurrendement Erbil: 8–12% — hoog door expat-vraag (NGO's, oliebedrijven, diplomatieke missies)",
        "Eigendomsrecht: onzeker bij escalatie van spanning. Investeer alleen wat u kunt missen",
        "Federaal Irak vastgoed: niet aanbevolen voor buitenlandse investeerders op dit moment",
      ],
    },
    leven: {
      samenvatting: "KRG (Erbil) is leefbaar voor expats met veiligheidsprotocollen. Bagdad is uitsluitend voor geclearede professionals met security team.",
      punten: [
        "Erbil: relatief normaal expat leven. Restaurants, malls (Family Mall, Dream City Mall), internationale hotels. Alcohol verkrijgbaar (Christelijke minderheid's invloed)",
        "Veiligheid KRG: Peshmerga (Koerdische strijdkrachten) houden gebied redelijk stabiel. Maar ISIS-dreigingen en Iran-proxy spanningen bestaan",
        "Compound living: de standaard voor expats. Beveiligde residentiële complexen",
        "Medisch: Erbil heeft privéziekenhuizen op acceptabel niveau. Medische evacuatieplan (MEDEVAC) naar Amman of Istanbul verplicht",
        "Salarissen: expat hardship premium is significant. Irak/KRG posities betalen 30–100% meer dan vergelijkbare rollen in de VAE",
      ],
    },
    cultuur: {
      samenvatting: "Iraaks Arabisch en Koerdisch zijn de twee culturen. KRG heeft een eigen, meer gemoedelijke cultuur die deels Europese invloeden kent.",
      punten: [
        "Taal: Arabisch (Bagdad), Koerdisch (KRG). Engels gesproken in zakelijke kring, met name in KRG",
        "Religie: soennitische en sji'itische islam (politiek sterk gekleurd). In KRG ook christenen, Yezidi's. Religie is minder alledaags aanwezig dan in Saudi-Arabië",
        "Stamcultuur: net als Libië spelen stamverbanden (Ashiret) een grote rol in politiek en zakenleven",
        "Alcohol: verboden in federaal Irak (wettelijk). In KRG-gebied beschikbaar in restaurants en winkels",
        "Zakelijk: relatiematig en geduldig. Introductie via vertrouwde tussenpersoon essentieel",
      ],
    },
    kansen: [
      "KRG olie & gas — productie en raffinaderijen groeien sterk. Nederlandse technologie en engineering gevraagd",
      "Wederopbouw Mosul — UNESCO en internationale donoren financieren grootschalige reconstructie",
      "Agrarische sector — Mesopotamisch rivierengebied, potentieel voor moderne landbouw",
      "Gezondheidszorg — enorme vraag naar moderne ziekenhuizen en medische apparatuur",
      "Toerisme KRG — berglandschap, Koerdische cultuur, pionierskansen in luxury hospitality",
      "Infrastructuur — wegen, bruggen, energienetwerk: alles te herbouwen",
    ],
    risicos: [
      "Veiligheidssituatie: dynamisch en onvoorspelbaar, met name buiten KRG",
      "Politieke instabiliteit: Iran-proxy milities, politieke machtsstrijd, corruptie op alle niveaus",
      "Betalingsrisico: hoog in federaal Irak. KRG iets beter maar olieprijs-afhankelijk",
      "Juridisch: geen functionerend rechtssysteem voor handelsgeschillen in de praktijk",
      "Reputatierisico: voor ESG-gevoelige bedrijven is Irak-aanwezigheid uitlegbaar maar vraagt voorbereiding",
    ],
  },
];

export default landGidsen;
