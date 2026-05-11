import { useEffect } from "react";
import { FileText } from "lucide-react";

const DATUM = "11 mei 2026";

export default function AlgemeneVoorwaarden() {
  useEffect(() => { document.title = "Algemene Voorwaarden — ArabDutch"; }, []);
  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-gold-400" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Juridisch</span>
          </div>
          <h1 className="text-5xl font-serif font-bold">Algemene Voorwaarden</h1>
          <p className="text-white/60 mt-3">Versie 1.0 — Laatst bijgewerkt: {DATUM}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-headings:font-serif prose-headings:text-navy-900 prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">

          <h2>Artikel 1 — Definities</h2>
          <ul>
            <li><strong>ArabDutch:</strong> de besloten vennootschap ArabDutch, gevestigd te Eindhoven</li>
            <li><strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die ArabDutch opdracht geeft tot het verrichten van diensten</li>
            <li><strong>Overeenkomst:</strong> de schriftelijke of digitale opdrachtsbevestiging tussen ArabDutch en Opdrachtgever</li>
            <li><strong>Diensten:</strong> alle door ArabDutch te leveren consultancy-, bemiddelings-, vertalings-, onderzoeks- en adviesdiensten</li>
          </ul>

          <h2>Artikel 2 — Toepasselijkheid</h2>
          <p>Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, overeenkomsten en leveringen van ArabDutch. Afwijkingen zijn uitsluitend geldig indien schriftelijk overeengekomen. De toepasselijkheid van algemene voorwaarden van de Opdrachtgever wordt uitdrukkelijk van de hand gewezen.</p>

          <h2>Artikel 3 — Totstandkoming overeenkomst</h2>
          <p>Een overeenkomst komt tot stand op het moment dat Opdrachtgever de offerte van ArabDutch schriftelijk of digitaal aanvaardt, of op het moment dat ArabDutch een opdracht schriftelijk bevestigt. Offertes zijn 30 dagen geldig tenzij anders vermeld.</p>

          <h2>Artikel 4 — Uitvoering van diensten</h2>
          <p>ArabDutch voert opdrachten uit naar beste inzicht en vermogen, overeenkomstig de maatstaven van een goed vakman. ArabDutch heeft een inspanningsverplichting, tenzij uitdrukkelijk een resultaat is overeengekomen. ArabDutch is gerechtigd bij de uitvoering derden in te schakelen.</p>

          <h2>Artikel 5 — Tarieven en betaling</h2>
          <ul>
            <li>Tarieven worden per opdracht of periode overeengekomen en zijn exclusief BTW, tenzij anders vermeld</li>
            <li>Facturatie vindt maandelijks achteraf of per mijlpaal plaats, tenzij anders afgesproken</li>
            <li>Betaaltermijn: 14 dagen na factuurdatum</li>
            <li>Bij overschrijding van de betaaltermijn is de wettelijke handelsrente van toepassing, plus €75,- administratiekosten</li>
            <li>Reis- en verblijfkosten worden doorbelast tenzij anders overeengekomen</li>
          </ul>

          <h2>Artikel 6 — Vertrouwelijkheid</h2>
          <p>Partijen verplichten zich over en weer tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst ontvangen. Informatie is vertrouwelijk als dit uitdrukkelijk is vermeld of als de aard van de informatie dat vereist. Deze verplichting blijft van kracht na beëindiging van de overeenkomst.</p>

          <h2>Artikel 7 — Intellectueel eigendom</h2>
          <p>Alle door ArabDutch geproduceerde analyses, rapporten, strategieën, modellen, sjablonen en andere werken blijven intellectueel eigendom van ArabDutch, tenzij schriftelijk anders overeengekomen. Opdrachtgever verkrijgt een niet-exclusief gebruiksrecht voor eigen bedrijfsdoeleinden. Doorverkoop, verhuur of beschikbaarstelling aan derden is niet toegestaan zonder toestemming.</p>

          <h2>Artikel 8 — Aansprakelijkheid</h2>
          <p>De aansprakelijkheid van ArabDutch is beperkt tot het bedrag dat in het kader van de betreffende opdracht in rekening is gebracht, gemaximeerd op €25.000,-. ArabDutch is niet aansprakelijk voor:</p>
          <ul>
            <li>Indirecte schade, gevolgschade, gederfde winst of gemiste besparingen</li>
            <li>Schade als gevolg van onjuiste of onvolledige informatie verstrekt door Opdrachtgever</li>
            <li>Schade door overmacht, waaronder begrepen politieke onrust, valutaschommelingen, stremmingen in het internationale betalingsverkeer en overheidsmaatregelen</li>
          </ul>

          <h2>Artikel 9 — Opzegging en ontbinding</h2>
          <p>Opdrachtgever kan een lopende opdracht opzeggen met inachtneming van een opzegtermijn van 30 dagen. Bij tussentijdse opzegging door Opdrachtgever zijn alle verrichte werkzaamheden en gemaakte kosten direct opeisbaar. ArabDutch kan de overeenkomst met onmiddellijke ingang ontbinden bij wanbetaling of surseance van betaling van Opdrachtgever.</p>

          <h2>Artikel 10 — Toepasselijk recht en geschillen</h2>
          <p>Op alle overeenkomsten met ArabDutch is uitsluitend Nederlands recht van toepassing. Geschillen worden in eerste instantie door partijen in onderling overleg opgelost. Indien dat niet lukt, worden zij voorgelegd aan de bevoegde rechter van het arrondissement Oost-Brabant te 's-Hertogenbosch.</p>

          <h2>Artikel 11 — Wijzigingen</h2>
          <p>ArabDutch behoudt zich het recht voor deze algemene voorwaarden te wijzigen. De meest actuele versie is gepubliceerd op arabdutch.com/algemene-voorwaarden. Bij wijzigingen worden lopende overeenkomsten gerespecteerd.</p>

          <p className="text-sm text-gray-400 mt-12">© {new Date().getFullYear()} ArabDutch — Boschdijk 520, 5621 JG Eindhoven</p>
        </div>
      </section>
    </main>
  );
}
