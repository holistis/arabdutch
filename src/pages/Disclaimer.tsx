import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

const DATUM = "11 mei 2026";

export default function Disclaimer() {
  useEffect(() => { document.title = "Disclaimer — ArabDutch"; }, []);
  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-gold-400" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Juridisch</span>
          </div>
          <h1 className="text-5xl font-serif font-bold">Disclaimer</h1>
          <p className="text-white/60 mt-3">Laatst bijgewerkt: {DATUM}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-headings:font-serif prose-headings:text-navy-900 prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">

          <h2>1. Gebruik van deze website</h2>
          <p>ArabDutch (hierna: "wij", "ons" of "ArabDutch") beheert de website arabdutch.com. Door gebruik te maken van deze website gaat u akkoord met de voorwaarden van deze disclaimer.</p>

          <h2>2. Informatie op deze website</h2>
          <p>De informatie op deze website is uitsluitend bedoeld voor algemene informatiedoeleinden. Hoewel wij grote zorgvuldigheid betrachten bij het samenstellen en bijhouden van de inhoud, kunnen wij de volledigheid, juistheid of actualiteit van de informatie niet garanderen.</p>
          <p>Niets op deze website vormt juridisch, fiscaal, financieel of zakelijk advies. Raadpleeg altijd een gekwalificeerde adviseur voor beslissingen die zijn gebaseerd op informatie van deze website.</p>

          <h2>3. Aansprakelijkheid</h2>
          <p>ArabDutch is niet aansprakelijk voor schade die voortvloeit uit:</p>
          <ul>
            <li>Het gebruik van of vertrouwen op informatie op deze website</li>
            <li>Technische storingen, onderbrekingen of onbeschikbaarheid van de website</li>
            <li>Virussen of andere schadelijke software die via de website zijn overgedragen</li>
            <li>Het gebruik van externe websites waarnaar wij linken</li>
            <li>Beslissingen genomen op basis van gepubliceerde inzichten, analyses of marktinformatie</li>
          </ul>

          <h2>4. Externe links</h2>
          <p>Onze website kan links bevatten naar externe websites. Wij zijn niet verantwoordelijk voor de inhoud, het privacybeleid of de betrouwbaarheid van deze externe websites. Het opnemen van een link houdt geen aanbeveling in.</p>

          <h2>5. Intellectueel eigendom</h2>
          <p>Alle inhoud op deze website — inclusief teksten, logo's, afbeeldingen, grafisch materiaal, rapporten en analyses — is het intellectuele eigendom van ArabDutch of wordt met toestemming gebruikt. Het is niet toegestaan om enige inhoud te kopiëren, verveelvoudigen, verspreiden of openbaar maken zonder onze voorafgaande schriftelijke toestemming.</p>

          <h2>6. Bescherming van bedrijfsinformatie en analyses</h2>
          <p>De door ArabDutch gepubliceerde marktanalyses, rapporten, whitepapers en inzichten zijn vertrouwelijk en uitsluitend bestemd voor de ontvanger(s). Verspreiding, publicatie of gebruik voor commerciële doeleinden zonder schriftelijke toestemming van ArabDutch is niet toegestaan en kan leiden tot aansprakelijkheid.</p>

          <h2>7. Toepasselijk recht</h2>
          <p>Op deze disclaimer en alle geschillen die daarmee verband houden, is uitsluitend Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Oost-Brabant.</p>

          <h2>8. Wijzigingen</h2>
          <p>ArabDutch behoudt zich het recht voor deze disclaimer te allen tijde en zonder voorafgaande kennisgeving te wijzigen. Wij adviseren u deze pagina regelmatig te raadplegen.</p>

          <h2>9. Contact</h2>
          <p>Voor vragen over deze disclaimer kunt u contact opnemen via <a href="mailto:info@arabdutch.com" className="text-gold-600 hover:underline">info@arabdutch.com</a>.</p>
        </div>
      </section>
    </main>
  );
}
