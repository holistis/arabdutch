import { Globe, Handshake, Search, BookOpen, TrendingUp, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import LuxeHero from "../components/LuxeHero";
import useSpotlight from "../components/Spotlight";

const diensten = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Interculturele Training",
    desc: "Wij trainen uw team in culturele intelligentie, van communicatiestijlen tot onderhandelingsdynamiek. Onmisbaar wanneer u Arabische markten betreedt of partners uit de regio ontvangt.",
    deliverables: ["2-daagse workshop op locatie", "Cultureel handboek (NL+AR)", "Follow-up coaching sessie"],
  },
  {
    icon: <Handshake className="w-7 h-7" />,
    title: "Business Matchmaking",
    desc: "U zoekt de juiste partner, wij vinden die voor u. Ons netwerk in Nederland én de Arabische wereld stelt ons in staat gerichte koppelingen te maken die tot echte resultaten leiden.",
    deliverables: ["Profielanalyse van uw bedrijf", "Geverifieerde shortlist (5-10 partners)", "Begeleide kennismaking"],
  },
  {
    icon: <Search className="w-7 h-7" />,
    title: "Marktonderzoek",
    desc: "Voordat u investeert, wilt u weten wat u te wachten staat. Wij leveren diepgaande analyses van Arabische markten: consumentengedrag, regelgeving, concurrentie en lokale nuances.",
    deliverables: ["40-60 pagina rapport", "Concurrentielandschap", "Aanbevelingen op maat"],
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Taal & Cultuur Consulting",
    desc: "Taal is meer dan woorden. Wij vertalen NL ↔ AR en begeleiden onderhandelingen, contractbesprekingen en introductiegesprekken, zodat elke boodschap overkomt zoals bedoeld.",
    deliverables: ["Beëdigde vertalingen", "Live tolkdiensten", "Culturele briefing per gesprek"],
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Lobbying & Advocacy",
    desc: "Wij openen deuren die anders gesloten blijven. Via ons netwerk en onze reputatie bij besluitvormers in Nederland én de Arabische wereld beïnvloeden wij beleid in uw voordeel.",
    deliverables: ["Stakeholdermapping", "Strategisch positiestuk", "Direct toegang tot besluitvormers"],
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Netwerkevenementen",
    desc: "Wij organiseren gerichte handelsmissies, tours en bijeenkomsten die duurzame zakelijke relaties opleveren, geen eenmalige handshakes, maar verbindingen die stand houden.",
    deliverables: ["Volledige tour-organisatie", "Curated deelnemerslijst", "Pre- & post-event begeleiding"],
  },
];

const proces = [
  { stap: "01", titel: "Kennismaking", desc: "Vrijblijvend gesprek waarin we uw ambitie, markt en context volledig in kaart brengen." },
  { stap: "02", titel: "Strategie", desc: "Wij stellen een tailormade plan op met deliverables, tijdlijn en investering." },
  { stap: "03", titel: "Uitvoering", desc: "Implementatie met onze experts ter plaatse, u krijgt wekelijks updates en directe contact." },
  { stap: "04", titel: "Resultaat & vervolg", desc: "Afsluitende analyse, geleverde waarde en doorlopende ondersteuning naar wens." },
];

export default function Diensten() {
  useSpotlight();
  useEffect(() => { document.title = "Diensten, ArabDutch | Consultancy Nederland & Arabische wereld"; }, []);

  return (
    <main className="pt-20 bg-[#0a0f1f]">
      <LuxeHero
        badge="Wat wij bieden"
        title={<>Diensten op<br /><span className="gradient-luxe italic">strategisch niveau</span></>}
        subtitle="Geen standaardpakketten. Elke opdracht is maatwerk, afgestemd op uw markt, uw sector en uw ambities."
      />

      {/* DIENSTEN, bento grid */}
      <section className="py-32 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(196,149,42,.3) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {diensten.map((d, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
                data-spotlight
                className="card-luxe-light rounded-3xl p-10 group">
                <div className="relative z-10 flex gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500/15 to-gold-500/5 group-hover:from-gold-500 group-hover:to-gold-600 text-gold-500 group-hover:text-white rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-gold-500/40 group-hover:-rotate-6 group-hover:scale-110">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-navy-900 text-3xl mb-3 leading-tight">{d.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-5">{d.desc}</p>
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      {d.deliverables.map((del, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCES */}
      <section className="py-32 bg-luxe-mesh relative overflow-hidden noise-overlay">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 glass-gold px-5 py-2.5 rounded-full">
              <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">Hoe wij werken</span>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl gradient-luxe">
              Vier stappen naar resultaat
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
            {proces.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                data-spotlight
                className="card-luxe rounded-2xl p-8 relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full glass-gold flex items-center justify-center font-display text-4xl shimmer-text">
                  {p.stap}
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-3 text-center">{p.titel}</h3>
                <p className="text-white/60 text-sm leading-relaxed text-center">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30"
          style={{ background: "radial-gradient(ellipse, rgba(196,149,42,.3) 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-bold text-5xl md:text-6xl text-navy-900 mb-6">
            Klaar om te starten?
          </h2>
          <p className="text-gray-500 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Plan een vrijblijvend strategiegesprek. Binnen 30 minuten weet u of ArabDutch waarde voor u kan toevoegen.
          </p>
          <Link to="/contact"
            className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-12 py-5 rounded-full transition-all shadow-xl shadow-gold-500/40 hover:shadow-gold-500/60 hover:scale-105 text-lg">
            Plan een gesprek <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
