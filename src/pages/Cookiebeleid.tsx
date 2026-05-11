import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

const DATUM = "11 mei 2026";

export default function Cookiebeleid() {
  useEffect(() => { document.title = "Cookiebeleid — ArabDutch"; }, []);
  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-6 h-6 text-gold-400" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Juridisch</span>
          </div>
          <h1 className="text-5xl font-serif font-bold">Cookiebeleid</h1>
          <p className="text-white/60 mt-3">Laatst bijgewerkt: {DATUM}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-headings:font-serif prose-headings:text-navy-900 prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">

          <h2>1. Wat zijn cookies?</h2>
          <p>Cookies zijn kleine tekstbestanden die via een website op uw computer, tablet of smartphone worden geplaatst. Zij slaan informatie op over uw websitebezoek, zodat de website u bij een volgend bezoek herkent of beter kan functioneren.</p>

          <h2>2. Welke cookies gebruiken wij?</h2>
          <p>Wij maken onderscheid tussen de volgende categorieën cookies:</p>

          <h3>Functionele cookies (altijd actief)</h3>
          <p>Deze cookies zijn strikt noodzakelijk voor het functioneren van de website. Zij slaan bijvoorbeeld uw cookievoorkeur op. Zonder deze cookies werkt de website niet correct. Er is geen toestemming vereist voor het plaatsen van functionele cookies.</p>
          <ul>
            <li><strong>arabdutch_cookie_consent</strong> — slaat uw cookievoorkeur op (1 jaar)</li>
          </ul>

          <h3>Analytische cookies (met toestemming)</h3>
          <p>Wij gebruiken analytische cookies om het gebruik van onze website te meten en te verbeteren. Deze cookies verzamelen geanonimiseerde gegevens zoals het aantal bezoekers, welke pagina's bezocht worden en hoe lang bezoekers op de site blijven.</p>
          <ul>
            <li>Indien van toepassing: Google Analytics 4 (geanonimiseerd IP, geen cross-site tracking)</li>
            <li>Bewaartermijn: maximaal 13 maanden</li>
          </ul>

          <h3>Marketing cookies (met toestemming)</h3>
          <p>Wij plaatsen momenteel geen marketing- of trackingcookies van derden. Mocht dit in de toekomst veranderen, dan zullen wij dit beleid bijwerken en opnieuw uw toestemming vragen.</p>

          <h2>3. Toestemming beheren</h2>
          <p>Bij uw eerste bezoek aan onze website vragen wij u toestemming voor het plaatsen van niet-essentiële cookies. U kunt uw voorkeur op elk moment wijzigen via de cookiebanner onderaan de pagina, of door uw browserinstellingen aan te passen.</p>
          <p>Houd er rekening mee dat het uitschakelen van bepaalde cookies de functionaliteit van de website kan beïnvloeden.</p>

          <h2>4. Cookies uitschakelen via uw browser</h2>
          <p>U kunt cookies ook beheren via uw browserinstellingen. Raadpleeg de helpfunctie van uw browser voor instructies:</p>
          <ul>
            <li>Google Chrome: Instellingen → Privacy en beveiliging → Cookies</li>
            <li>Mozilla Firefox: Opties → Privacy en beveiliging → Cookies</li>
            <li>Safari: Voorkeuren → Privacy → Cookies</li>
            <li>Microsoft Edge: Instellingen → Privacy, zoeken en services → Cookies</li>
          </ul>

          <h2>5. Cookies van derden</h2>
          <p>Onze website kan inhoud bevatten van externe partijen (zoals ingebedde video's of kaarten) die mogelijk ook cookies plaatsen. Wij hebben geen controle over deze cookies. Wij adviseren u het privacybeleid van deze derde partijen te raadplegen.</p>

          <h2>6. Uw rechten</h2>
          <p>U heeft recht op inzage in de persoonsgegevens die via cookies worden verwerkt, en het recht op verwijdering, beperking of bezwaar. Zie onze <Link to="/privacyverklaring" className="text-gold-600 hover:underline">Privacyverklaring</Link> voor een volledig overzicht van uw rechten onder de AVG.</p>

          <h2>7. Wijzigingen</h2>
          <p>ArabDutch behoudt zich het recht voor dit cookiebeleid te wijzigen. De meest actuele versie is te vinden op deze pagina. Wij adviseren u deze pagina regelmatig te raadplegen.</p>

          <h2>8. Contact</h2>
          <p>Heeft u vragen over ons cookiebeleid? Neem dan contact op via <a href="mailto:info@arabdutch.com" className="text-gold-600 hover:underline">info@arabdutch.com</a>.</p>

          <p className="text-sm text-gray-400 mt-12">© {new Date().getFullYear()} ArabDutch — Boschdijk 520, 5621 JG Eindhoven</p>
        </div>
      </section>
    </main>
  );
}
