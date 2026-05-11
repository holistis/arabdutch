import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, ShieldCheck, AlertCircle } from "lucide-react";
import landGidsen from "../data/landGidsen";

const risicoConfig = {
  "laag": { kleur: "bg-green-100 text-green-700", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
  "medium": { kleur: "bg-yellow-100 text-yellow-700", icon: <AlertCircle className="w-3.5 h-3.5" /> },
  "hoog": { kleur: "bg-orange-100 text-orange-700", icon: <AlertTriangle className="w-3.5 h-3.5" /> },
  "zeer-hoog": { kleur: "bg-red-100 text-red-700", icon: <AlertTriangle className="w-3.5 h-3.5" /> },
};

export default function Landen() {
  useEffect(() => { document.title = "Landengidsen — ArabDutch | Leven & Ondernemen in de Arabische wereld"; }, []);

  const maghreb = landGidsen.filter(l => l.regio === "Maghreb");
  const golf = landGidsen.filter(l => l.regio === "Golf");
  const rest = landGidsen.filter(l => l.regio !== "Maghreb" && l.regio !== "Golf");

  function LandKaart({ land }: { land: typeof landGidsen[0] }) {
    const r = risicoConfig[land.risicoNiveau];
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl border border-gray-100 hover:border-gold-500/40 transition-all hover:shadow-lg group overflow-hidden"
      >
        <div className="bg-navy-900 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{land.vlag}</span>
            <div>
              <h3 className="text-white font-bold text-lg">{land.naam}</h3>
              <p className="text-white/40 text-xs">{land.regio} · {land.hoofdstad}</p>
            </div>
          </div>
          <span className={`${r.kleur} text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1`}>
            {r.icon} {land.risicoLabel}
          </span>
        </div>
        <div className="p-6">
          <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">{land.samenvatting}</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {land.sleutelcijfers.slice(0, 2).map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400 mb-0.5">{s.label}</p>
                <p className="font-bold text-navy-900 text-sm">{s.waarde}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {["Belasting", "Visum", "Bedrijf", "Vastgoed", "Leven", "Cultuur"].map(t => (
              <span key={t} className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full">{t}</span>
            ))}
          </div>
          <Link
            to={`/landen/${land.slug}`}
            className="flex items-center gap-2 text-gold-500 hover:text-gold-600 font-semibold text-sm group-hover:gap-3 transition-all"
          >
            Volledige gids bekijken <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em]">Landengidsen</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6 max-w-3xl">
            Als Nederlander of Vlaming leven en ondernemen in de Arabische wereld
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Per land: belasting, visum, bedrijfsoprichting, vastgoed, kosten van levensonderhoud en culturele do's & don'ts. Opgesteld door ArabDutch — op basis van directe ervaring ter plaatse.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-serif font-bold text-navy-900">Maghreb</h2>
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-sm">Marokko · Tunesië · Libië</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {maghreb.map(l => <LandKaart key={l.slug} land={l} />)}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-serif font-bold text-navy-900">Golfregio</h2>
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-sm">VAE · Saoedi-Arabië · Qatar</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {golf.map(l => <LandKaart key={l.slug} land={l} />)}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-serif font-bold text-navy-900">Levant & Noord-Afrika</h2>
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-sm">Egypte · Jordanië · Irak</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {rest.map(l => <LandKaart key={l.slug} land={l} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Uw land ontbreekt?</h2>
          <p className="text-gray-500 mb-8 text-lg">
            Wij werken continu aan uitbreidingen. Heeft u een specifiek land in gedachten — Yemen, Bahrein, Oman, Koeweit, Syrië of Libanon? Neem contact op en wij informeren u zodra de gids beschikbaar is.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-10 py-4 rounded-full transition-colors">
            Verzoek indienen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
