import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const DATUM = "1 september 2026";

export default function Privacyverklaring() {
  useEffect(() => { document.title = "Privacyverklaring, ArabDutch"; }, []);
  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-gold-400" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Juridisch</span>
          </div>
          <h1 className="text-5xl font-serif font-bold">Privacyverklaring</h1>
          <p className="text-white/60 mt-3">Laatst bijgewerkt: {DATUM}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-headings:font-serif prose-headings:text-navy-900 prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">

          <h2>1. Wie zijn wij?</h2>
          <p>ArabDutch is een consultancybureau gevestigd te Eindhoven, Nederland. Wij zijn de verwerkingsverantwoordelijke voor de persoonsgegevens die via onze website en dienstverlening worden verwerkt.</p>
          <ul>
            <li><strong>Bedrijfsnaam:</strong> ArabDutch</li>
            <li><strong>Adres:</strong> Boschdijk 520, 5621 JG Eindhoven</li>
            <li><strong>E-mail:</strong> info@arabdutch.com</li>
            <li><strong>Telefoon:</strong> +31 6 40 84 01 08</li>
            <li><strong>Website:</strong> https://arabdutch.com</li>
          </ul>

          <h2>2. Welke persoonsgegevens verwerken wij?</h2>
          <p>Wij verwerken uitsluitend persoonsgegevens die u zelf aan ons verstrekt of die noodzakelijk zijn voor onze dienstverlening:</p>
          <ul>
            <li>Naam en contactgegevens (e-mailadres, telefoonnummer)</li>
            <li>Bedrijfsnaam en functietitel</li>
            <li>De inhoud van berichten die u via ons contactformulier stuurt</li>
            <li>Technische gegevens die uw browser standaard meestuurt bij het opvragen van een pagina (waaronder IP-adres en browsertype) en die bij onze hostingpartij kortstondig in serverlogs terechtkomen. Wij analyseren deze niet en koppelen ze niet aan u als persoon.</li>
          </ul>

          <h2>3. Waarom verwerken wij uw gegevens?</h2>
          <p>Wij verwerken persoonsgegevens voor de volgende doeleinden:</p>
          <ul>
            <li><strong>Dienstverlening:</strong> om uitvoering te geven aan een opdracht of overeenkomst</li>
            <li><strong>Communicatie:</strong> om te reageren op uw vragen en contactverzoeken</li>
            <li><strong>Marketing:</strong> om u, uitsluitend met uw uitdrukkelijke toestemming, te informeren over onze diensten en inzichten</li>
            <li><strong>Wettelijke verplichtingen:</strong> voor belasting- en boekhoudkundige doeleinden</li>
          </ul>

          <h2>4. Rechtsgronden voor verwerking</h2>
          <p>Wij verwerken uw persoonsgegevens op basis van de volgende rechtsgronden (AVG artikel 6):</p>
          <ul>
            <li>Uitvoering van een overeenkomst</li>
            <li>Toestemming (voor marketingcommunicatie en niet-essentiële cookies)</li>
            <li>Gerechtvaardigd belang (voor klantrelatiebeheer en beveiliging)</li>
            <li>Wettelijke verplichting (voor financiële administratie)</li>
          </ul>

          <h2>5. Hoe lang bewaren wij uw gegevens?</h2>
          <ul>
            <li>Contactformuliergegevens: maximaal 2 jaar na laatste contact</li>
            <li>Klantgegevens bij actieve opdracht: 7 jaar (fiscale bewaarplicht)</li>
            <li>Aanmeldingen voor onze nieuwsbrief of voor een rapport: tot u zich afmeldt</li>
          </ul>

          <h2>6. Worden uw gegevens gedeeld met derden?</h2>
          <p>Wij verkopen uw persoonsgegevens nooit aan derden. Hieronder staan de verwerkers die wij inschakelen, met naam genoemd zodat u weet waar uw gegevens terechtkomen:</p>
          <ul>
            <li><strong>Supabase:</strong> de database waarin een contactaanvraag, een aanmelding voor een rapport of een nieuwsbriefinschrijving wordt opgeslagen. Gehost binnen de EU.</li>
            <li><strong>Web3Forms:</strong> verstuurt ons een notificatie zodra u een formulier invult, zodat wij uw aanvraag zien.</li>
            <li><strong>Railway:</strong> de hostingpartij waarop deze website draait, met servers binnen de EU.</li>
            <li><strong>Stripe:</strong> uitsluitend wanneer u een betaling doet. Uw betaalgegevens komen bij Stripe binnen en niet bij ons.</li>
            <li><strong>Zakenpartners:</strong> alleen met uw expliciete toestemming in het kader van een opdracht</li>
            <li><strong>Autoriteiten:</strong> als wij daartoe wettelijk verplicht zijn</li>
          </ul>
          <p>Wij gebruiken geen externe analytics-diensten en geen advertentienetwerken. Uw IP-adres wordt door ons niet naar een externe dienst gestuurd om uw land te bepalen; de taal van de site wordt afgeleid uit de taalinstelling van uw eigen browser.</p>
          <p>Wel houden wij zelf bij hoe vaak een pagina wordt bekeken. Daarbij slaan wij uitsluitend het pad en de dag op, dus bijvoorbeeld dat de pagina /diensten op 1 september is bekeken. Er wordt geen IP-adres, sessie-identificatie, apparaatgegeven of verwijzende site bewaard. Twee bezoeken van dezelfde persoon zijn voor ons niet van elkaar te onderscheiden en een individuele bezoeker is uit deze cijfers niet te herleiden. Er worden hiervoor geen cookies geplaatst. Als uw browser Do Not Track of Global Privacy Control meestuurt, tellen wij uw bezoek helemaal niet mee.</p>

          <h2>7. Internationale doorgifte</h2>
          <p>Wij kunnen gegevens doorgeven aan partijen buiten de Europese Economische Ruimte (EER), in het bijzonder aan samenwerkingspartners in de Arabische wereld. Dit geschiedt uitsluitend indien er passende waarborgen zijn zoals standaardcontractbepalingen van de Europese Commissie of expliciete toestemming.</p>

          <h2>8. Uw rechten onder de AVG</h2>
          <p>U heeft de volgende rechten met betrekking tot uw persoonsgegevens:</p>
          <ul>
            <li><strong>Inzage:</strong> u kunt een overzicht opvragen van uw gegevens die wij verwerken</li>
            <li><strong>Rectificatie:</strong> u kunt onjuiste gegevens laten corrigeren</li>
            <li><strong>Verwijdering:</strong> u kunt verzoeken om verwijdering van uw gegevens</li>
            <li><strong>Beperking:</strong> u kunt vragen om beperkte verwerking</li>
            <li><strong>Bezwaar:</strong> u kunt bezwaar maken tegen verwerking op grond van gerechtvaardigd belang</li>
            <li><strong>Overdraagbaarheid:</strong> u kunt uw gegevens in een gangbaar formaat opvragen</li>
            <li><strong>Intrekken toestemming:</strong> u kunt eerder gegeven toestemming altijd intrekken</li>
          </ul>
          <p>Verzoeken kunt u indienen via <a href="mailto:info@arabdutch.com" className="text-gold-600 hover:underline">info@arabdutch.com</a>. Wij reageren binnen 30 dagen.</p>

          <h2>9. Klachten</h2>
          <p>Heeft u een klacht over de verwerking van uw persoonsgegevens? U kunt een klacht indienen bij de Autoriteit Persoonsgegevens: <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noreferrer" className="text-gold-600 hover:underline">autoriteitpersoonsgegevens.nl</a></p>

          <h2>10. Cookies</h2>
          <p>Zie ons <Link to="/cookiebeleid" className="text-gold-600 hover:underline">cookiebeleid</Link> voor informatie over welke cookies wij gebruiken en hoe u uw voorkeuren kunt beheren.</p>

          <h2>11. Beveiliging</h2>
          <p>Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen ongeautoriseerde toegang, verlies of misbruik. Onze website maakt gebruik van HTTPS-versleuteling.</p>

          <h2>12. Wijzigingen</h2>
          <p>Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen. De meest actuele versie is altijd te vinden op deze pagina. Bij ingrijpende wijzigingen informeren wij u via e-mail indien u een actieve klantrelatie met ons heeft.</p>
        </div>
      </section>
    </main>
  );
}
