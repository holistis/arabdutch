import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import LuxeHero from "../components/LuxeHero";
import useSpotlight from "../components/Spotlight";

const projecten = [
  {
    datum: "Oktober 2025",
    tag: "Vastgoed & Investering",
    land: "Marokko",
    titel: "Van Nederland naar Marokko: investeerders naar Temara",
    desc: "Slimme investeerders kiezen voor Temara & Rabat. ArabDutch begeleidde Nederlandse investeerders bij het verkennen van vastgoedkansen in de snelst groeiende regio van Marokko.",
    impact: "€2.4M aan transacties gefaciliteerd",
  },
  {
    datum: "September 2025",
    tag: "Innovatietour",
    land: "Saoedi-Arabië & Libië",
    titel: "Klantentour Agritech Nederland",
    desc: "Een bijzondere tour waarbij cliënten uit Saoedi-Arabië en Libië kennis maakten met Nederlandse agritech-innovaties bij Hoogendoorn en LetsGrow.",
    impact: "3 vervolgcontracten in onderhandeling",
  },
  {
    datum: "Mei 2025",
    tag: "Partnership",
    land: "Saoedi-Arabië → Afrika",
    titel: "ArabDutch & Manea — Cybersecurity",
    desc: "Een nieuwe stap richting cybersecurityuitbreiding in Afrika via een strategisch partnership tussen ArabDutch en Manea (Saoedi-Arabië).",
    impact: "Marktbetreding in 3 Afrikaanse landen",
  },
  {
    datum: "Juli 2024",
    tag: "Culturele Reis",
    land: "Marokko",
    titel: "Fossielenreis naar de Ourika Vallei",
    desc: "Een onvergetelijke georganiseerde fossielenreis naar Marokko — cultuur, natuur en zakelijke relaties gecombineerd in één unieke ervaring.",
    impact: "12 deelnemers, langdurige relaties",
  },
];

export default function OnsWerk() {
  useSpotlight();
  useEffect(() => { document.title = "Ons Werk — ArabDutch | Projecten & Resultaten"; }, []);

  return (
    <main className="pt-20 bg-[#0a0f1f]">
      <LuxeHero
        badge="Onze resultaten"
        title={<>Concrete<br /><span className="gradient-luxe italic">opdrachten</span>, bewezen<br /><span className="text-stroke">resultaten</span></>}
        subtitle="Dit is een selectie van wat wij voor onze klanten realiseerden — in Marokko, de Golfregio, Noord-Afrika en daarbuiten."
      />

      {/* PROJECTEN */}
      <section className="py-32 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
          style={{ background: "radial-gradient(circle, rgba(196,149,42,.3) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {projecten.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                data-spotlight
                className="card-luxe-light rounded-3xl p-10 group overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5 flex-wrap">
                    <span className="bg-gold-500/10 text-gold-600 text-xs font-semibold px-3 py-1.5 rounded-full">{p.tag}</span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Calendar className="w-3 h-3" /> {p.datum}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <MapPin className="w-3 h-3" /> {p.land}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-navy-900 text-3xl mb-4 leading-tight group-hover:text-gold-600 transition-colors">{p.titel}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{p.desc}</p>
                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Impact</p>
                      <p className="font-display font-bold text-navy-900 text-lg">{p.impact}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gold-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBE CTA */}
      <section className="py-32 bg-luxe-mesh relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-aurora opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-8 glass-gold px-5 py-2.5 rounded-full">
              <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">Samenwerken</span>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-8 leading-[0.95]">
              <span className="shimmer-text">Uw project op deze lijst?</span>
            </h2>
            <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Neem contact op en ontdek wat ArabDutch voor u kan realiseren.
            </p>
            <Link to="/contact"
              className="btn-shine inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-14 py-6 rounded-full transition-all shadow-2xl shadow-gold-500/50 hover:shadow-gold-500/70 hover:scale-105 text-lg glow-gold">
              Start een gesprek <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
