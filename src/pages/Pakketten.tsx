import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Rocket, Briefcase, Building2, Star, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import LuxeHero from "../components/LuxeHero";
import useSpotlight from "../components/Spotlight";

const pakketten = [
  {
    icon: <Rocket className="w-7 h-7" />,
    naam: "Starter",
    voorWie: "MKB-ondernemer met concrete vraag",
    prijs: "€3.000",
    marktPrijs: "€10.000",
    duur: "2–4 weken",
    includes: [
      "Verdiepende marktscan van uw doelland (15-25p rapport)",
      "Shortlist van 5 potentiële partners",
      "Eén begeleid Zoom-introductiegesprek",
      "Cultuurbriefing voor uw team (2 uur webinar)",
      "Templates: NDA + intentieverklaring NL/AR",
      "30 dagen e-mail support",
    ],
    cta: "Boek Starter",
    populair: false,
    stripeLink: "https://buy.stripe.com/3cIbJ13XWaVdae2d8T7ok0c",
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    naam: "Professional",
    voorWie: "Bedrijf dat marktentree wil realiseren",
    prijs: "€25.000",
    marktPrijs: "€85.000",
    duur: "6–10 weken",
    includes: [
      "Volledige marktentree-strategie (40-60p strategiedocument)",
      "Bedrijfsoprichting in doelland (SARL/FZE/LLC)",
      "Bankaccount opening — wij regelen de procedure",
      "Belasting- en juridische structurering",
      "10 geverifieerde lokale partners + warme introductie",
      "On-site bezoek (1 dag, exclusief reiskosten)",
      "Cultureel training (4 uur on-site of online)",
      "90 dagen WhatsApp-support",
      "Toegang Premium kennisbank (12 maanden)",
    ],
    cta: "Boek Professional",
    populair: true,
    stripeLink: "https://buy.stripe.com/dRm3cv3XW5ATgCq9WH7ok0d",
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    naam: "Enterprise",
    voorWie: "Multinational of investment vehicle",
    prijs: "€70.000",
    marktPrijs: "€235.000",
    duur: "3–6 maanden",
    includes: [
      "Multi-landen strategiedocument (80-120p)",
      "Bedrijfsoprichting in 1-3 landen + bank- en fiscale structurering",
      "Dedicated project manager + 2 senior consultants",
      "Stakeholder mapping bij overheid en branche",
      "Handelsmissie of investor tour (3-5 dagen)",
      "M&A / JV begeleiding indien van toepassing",
      "Volledige due diligence van 3 partners",
      "Maandelijkse strategie-reviews (12 maanden)",
      "Directe lijn met ArabDutch Founder",
      "20% korting op vervolg-engagement",
    ],
    cta: "Boek Enterprise",
    populair: false,
    stripeLink: "https://buy.stripe.com/9B628r1PO2oHae26Kv7ok0e",
  },
];

const losseDiensten = [
  { titel: "Bedrijfsoprichting Marokko (SARL)", prijs: "€1.800", markt: "€5.500", duur: "3-4 weken" },
  { titel: "FZE in Dubai of Abu Dhabi", prijs: "€2.500", markt: "€7.000", duur: "2-3 weken" },
  { titel: "Bankaccount opening Marokko/VAE", prijs: "€950", markt: "€2.800", duur: "4-6 weken" },
  { titel: "Beëdigde NL ↔ AR vertaling (per pagina)", prijs: "€45", markt: "€95", duur: "48 uur" },
  { titel: "Live tolkdienst (per dag)", prijs: "€450", markt: "€1.200", duur: "n.t.b." },
  { titel: "Cultureel training (per dag, in-house)", prijs: "€1.200", markt: "€3.500", duur: "1 dag" },
];

export default function Pakketten() {
  useSpotlight();
  useEffect(() => { document.title = "Pakketten — ArabDutch | Done-for-you marktentree NL ↔ Arabische wereld"; }, []);

  return (
    <main className="pt-20 bg-[#0a0f1f]">
      <LuxeHero
        badge="Done-for-you pakketten"
        title={<>U levert de visie.<br /><span className="gradient-luxe italic">Wij leveren het traject.</span></>}
        subtitle="Transparante pakketprijzen voor de complete marktentree-route. 60-70% onder de tarieven van Big 4 consultancies — zonder concessies aan kwaliteit."
      />

      {/* PAKKETTEN */}
      <section className="py-32 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(196,149,42,.3) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {pakketten.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                data-spotlight
                className={`relative rounded-3xl p-8 flex flex-col ${
                  p.populair
                    ? "bg-gradient-to-br from-navy-900 to-[#0a0f1f] text-white shadow-2xl shadow-gold-500/40 ring-4 ring-gold-500/40 scale-105 md:scale-110"
                    : "card-luxe-light"
                }`}
              >
                {p.populair && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-widest">
                    Meest gekozen
                  </div>
                )}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  p.populair ? "bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-xl shadow-gold-500/40" : "bg-gradient-to-br from-gold-500/15 to-gold-500/5 text-gold-600"
                }`}>{p.icon}</div>

                <h3 className={`font-display font-bold text-3xl mb-2 ${p.populair ? "text-white" : "text-navy-900"}`}>{p.naam}</h3>
                <p className={`text-sm mb-5 ${p.populair ? "text-white/60" : "text-gray-500"}`}>{p.voorWie}</p>

                <div className="flex items-end gap-3 mb-2">
                  <span className={`font-display font-bold text-5xl ${p.populair ? "shimmer-text" : "text-navy-900"}`}>{p.prijs}</span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-sm line-through ${p.populair ? "text-white/40" : "text-gray-400"}`}>{p.marktPrijs}</span>
                  <span className={`text-xs font-semibold ${p.populair ? "text-green-400" : "text-green-600"}`}>marktprijs</span>
                  <span className={`text-xs ${p.populair ? "text-white/60" : "text-gray-500"}`}>· {p.duur}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {p.includes.map((f, j) => (
                    <li key={j} className={`flex gap-3 text-sm ${p.populair ? "text-white/80" : "text-gray-700"}`}>
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.populair ? "text-gold-300" : "text-gold-500"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={p.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-shine inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-full transition-all w-full ${
                    p.populair
                      ? "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white shadow-xl shadow-gold-500/40"
                      : "bg-navy-900 hover:bg-navy-800 text-white shadow-lg"
                  }`}
                >
                  {p.cta} — {p.prijs} <ArrowRight className="w-4 h-4" />
                </a>
                <p className={`text-center text-xs mt-3 ${p.populair ? "text-white/40" : "text-gray-400"}`}>
                  <Shield className="w-3 h-3 inline mr-1" /> Vaste prijs · Geen verrassingen
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOSSE DIENSTEN */}
      <section className="py-32 bg-luxe-mesh relative overflow-hidden noise-overlay">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 glass-gold px-5 py-2.5 rounded-full">
              <Star className="w-3.5 h-3.5 text-gold-300" />
              <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">Losse diensten</span>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-4 gradient-luxe">
              À la carte
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Heeft u alleen een specifieke dienst nodig? Wij leveren ook losse modules tegen vaste prijzen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {losseDiensten.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                data-spotlight
                className="card-luxe rounded-2xl p-6 flex items-center justify-between gap-4 group">
                <div className="flex-1">
                  <p className="font-display font-bold text-white text-lg leading-tight mb-1">{d.titel}</p>
                  <p className="text-white/40 text-xs">Doorlooptijd: {d.duur}</p>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-2xl shimmer-text">{d.prijs}</p>
                  <p className="text-white/30 text-xs line-through">markt: {d.markt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-10 py-4 rounded-full transition-all shadow-xl shadow-gold-500/40">
              Offerte aanvragen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-luxe-light relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-5xl md:text-6xl text-navy-900 mb-4">
              Veelgestelde vragen
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { v: "Waarom zijn jullie prijzen zoveel lager dan Big 4?", a: "Wij hebben een fundamenteel andere structuur: dedicated specialisten zonder dure kantoorhiërarchieën in London of Riyadh. Onze overheadkosten zijn 70% lager dan McKinsey of BCG — die besparing geven wij direct door aan onze klanten zonder kwaliteitsconcessie." },
              { v: "Krijg ik mijn geld terug als ik niet tevreden ben?", a: "Ja. Bij elke betaalde dienst geldt een 14-dagen geld-terug-garantie. Bij projecten van >€3.000 geldt een tussentijds review-moment na week 2, waarbij u kunt stoppen tegen vergoeding van geleverde uren." },
              { v: "Werken jullie ook voor non-EU klanten?", a: "Ja. Wij werken voor Nederlandse, Belgische, Duitse en Arabische klanten. Voor non-EU klanten geldt reverse charge op BTW." },
              { v: "Hoe garanderen jullie kwaliteit?", a: "Elke opdracht heeft een senior consultant als hoofdverantwoordelijke met minimaal 10 jaar regio-ervaring. Onze deliverables worden intern gepeer-reviewed. Klanten krijgen wekelijkse updates en een dedicated project-portaal." },
              { v: "Wat is jullie ervaring met Sharia-compliance?", a: "Voor opdrachten waar Sharia-compliance vereist is (Saoedi-Arabië, Bahrein, Koeweit) werken wij samen met gecertificeerde Sharia-adviseurs. Wij coördineren het volledige proces." },
              { v: "Kunnen jullie ook in het Arabisch communiceren met onze partners?", a: "Ja. Onze consultants zijn native NL/AR-sprekers. Wij voeren onderhandelingen, schrijven contracten en faciliteren vergaderingen vloeiend in beide talen." },
            ].map((f, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-gold-500/40 transition-colors">
                <summary className="font-display font-bold text-navy-900 text-lg cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{f.v}</span>
                  <span className="w-8 h-8 rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center flex-shrink-0 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-gray-600 leading-relaxed mt-4">{f.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
