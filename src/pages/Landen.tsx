import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, ShieldCheck, AlertCircle } from "lucide-react";
import landGidsen from "../data/landGidsen";
import LuxeHero from "../components/LuxeHero";
import useSpotlight from "../components/Spotlight";

const risicoConfig = {
  "laag": { kleur: "bg-green-500/20 text-green-300 border-green-500/30", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
  "medium": { kleur: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30", icon: <AlertCircle className="w-3.5 h-3.5" /> },
  "hoog": { kleur: "bg-orange-500/20 text-orange-300 border-orange-500/30", icon: <AlertTriangle className="w-3.5 h-3.5" /> },
  "zeer-hoog": { kleur: "bg-red-500/20 text-red-300 border-red-500/30", icon: <AlertTriangle className="w-3.5 h-3.5" /> },
};

export default function Landen() {
  useSpotlight();
  useEffect(() => { document.title = "Landengidsen — ArabDutch | Leven & Ondernemen in de Arabische wereld"; }, []);

  const maghreb = landGidsen.filter(l => l.regio === "Maghreb");
  const golf = landGidsen.filter(l => l.regio === "Golf");
  const rest = landGidsen.filter(l => l.regio !== "Maghreb" && l.regio !== "Golf");

  function LandKaart({ land }: { land: typeof landGidsen[0] }) {
    const r = risicoConfig[land.risicoNiveau];
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        data-spotlight
        className="card-luxe rounded-3xl overflow-hidden group"
      >
        <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-[#0a0f1f] p-6 flex items-center justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-aurora opacity-30" />
          <div className="flex items-center gap-4 relative z-10">
            <span className="text-5xl drop-shadow-2xl">{land.vlag}</span>
            <div>
              <h3 className="text-white font-display font-bold text-2xl">{land.naam}</h3>
              <p className="text-white/50 text-xs uppercase tracking-widest mt-0.5">{land.regio} · {land.hoofdstad}</p>
            </div>
          </div>
          <span className={`${r.kleur} border text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 relative z-10 backdrop-blur-sm`}>
            {r.icon} {land.risicoLabel}
          </span>
        </div>
        <div className="p-6 relative z-10">
          <p className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-3">{land.samenvatting}</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {land.sleutelcijfers.slice(0, 2).map((s, i) => (
              <div key={i} className="glass-gold rounded-xl p-3">
                <p className="text-xs text-gold-200/70 mb-0.5">{s.label}</p>
                <p className="font-bold text-white text-sm">{s.waarde}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {["Belasting", "Visum", "Bedrijf", "Vastgoed", "Leven", "Cultuur"].map(t => (
              <span key={t} className="bg-white/5 border border-white/10 text-white/60 text-xs px-2.5 py-1 rounded-full">{t}</span>
            ))}
          </div>
          <Link
            to={`/landen/${land.slug}`}
            className="flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm group-hover:gap-3 transition-all"
          >
            Volledige gids bekijken <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    );
  }

  function RegioSectie({ titel, landen, ondertitel }: { titel: string; landen: typeof landGidsen; ondertitel: string }) {
    return (
      <div className="mb-20">
        <div className="flex items-center gap-6 mb-10">
          <h2 className="font-display font-bold text-4xl text-white">{titel}</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gold-500/40 to-transparent" />
          <span className="text-white/40 text-sm uppercase tracking-widest hidden md:block">{ondertitel}</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landen.map(l => <LandKaart key={l.slug} land={l} />)}
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20 bg-[#0a0f1f]">
      <LuxeHero
        badge="Landengidsen"
        title={<>Als Nederlander of Vlaming<br /><span className="gradient-luxe italic">leven & ondernemen</span><br />in de Arabische wereld</>}
        subtitle="Per land: belasting, visum, bedrijfsoprichting, vastgoed, kosten van levensonderhoud en culturele do's & don'ts. Opgesteld door ArabDutch — op basis van directe ervaring ter plaatse."
      />

      <section className="py-32 bg-luxe-mesh relative overflow-hidden noise-overlay">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {maghreb.length > 0 && <RegioSectie titel="Maghreb" ondertitel="Marokko · Tunesië · Libië" landen={maghreb} />}
          {golf.length > 0 && <RegioSectie titel="Golfregio" ondertitel="VAE · Saoedi-Arabië · Qatar" landen={golf} />}
          {rest.length > 0 && <RegioSectie titel="Levant & Noord-Afrika" ondertitel="Egypte · Jordanië · Irak" landen={rest} />}
        </div>
      </section>

      <section className="py-32 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(196,149,42,.3) 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-bold text-5xl md:text-6xl text-navy-900 mb-6">
            Uw land ontbreekt?
          </h2>
          <p className="text-gray-500 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Wij werken continu aan uitbreidingen. Heeft u een specifiek land in gedachten — Yemen, Bahrein, Koeweit, Syrië of Libanon? Neem contact op en wij informeren u zodra de gids beschikbaar is.
          </p>
          <Link to="/contact"
            className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-12 py-5 rounded-full transition-all shadow-xl shadow-gold-500/40 hover:shadow-gold-500/60 hover:scale-105 text-lg">
            Verzoek indienen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
