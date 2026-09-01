import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle, ShieldCheck, AlertCircle, ArrowRight, CheckCircle, XCircle, Sparkles } from "lucide-react";
import landGidsen from "../data/landGidsen";
import useSpotlight from "../components/Spotlight";

const tabs = ["Belasting", "Visum", "Bedrijf oprichten", "Vastgoed", "Leven", "Cultuur", "Kansen & Risico's"] as const;
type Tab = typeof tabs[number];

const risicoConfig = {
  "laag": { kleur: "bg-green-500/20 text-green-300 border-green-500/40", icon: <ShieldCheck className="w-4 h-4" /> },
  "medium": { kleur: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40", icon: <AlertCircle className="w-4 h-4" /> },
  "hoog": { kleur: "bg-orange-500/20 text-orange-300 border-orange-500/40", icon: <AlertTriangle className="w-4 h-4" /> },
  "zeer-hoog": { kleur: "bg-red-500/20 text-red-300 border-red-500/40", icon: <AlertTriangle className="w-4 h-4" /> },
};

export default function LandGids() {
  useSpotlight();
  const { slug } = useParams<{ slug: string }>();
  const land = landGidsen.find(l => l.slug === slug);
  const [actieveTab, setActieveTab] = useState<Tab>("Belasting");

  useEffect(() => {
    if (land) document.title = `${land.naam}, ArabDutch Landengids`;
  }, [land]);

  if (!land) return <Navigate to="/landen" replace />;

  const r = risicoConfig[land.risicoNiveau];

  function getSectie() {
    switch (actieveTab) {
      case "Belasting": return land!.belasting;
      case "Visum": return land!.visum;
      case "Bedrijf oprichten": return land!.bedrijfOprichten;
      case "Vastgoed": return land!.vastgoed;
      case "Leven": return land!.leven;
      case "Cultuur": return land!.cultuur;
      default: return null;
    }
  }

  const sectie = getSectie();

  return (
    <main className="pt-20 bg-[#0a0f1f]">
      {/* HERO */}
      <section className="relative bg-luxe-mesh py-20 overflow-hidden noise-overlay">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full blur-3xl float-orb"
          style={{ background: "radial-gradient(circle, rgba(196,149,42,.3) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl float-orb"
          style={{ background: "radial-gradient(circle, rgba(244,215,138,.2) 0%, transparent 70%)", animationDelay: "4s" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            to="/landen"
            className="inline-flex items-center gap-2 text-gold-300 text-sm font-semibold hover:gap-3 transition-all mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Terug naar alle landen
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="flex items-start gap-8 mb-10 flex-wrap">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gold-500/40 blur-2xl scale-110" />
              <span className="relative text-8xl drop-shadow-2xl">{land.vlag}</span>
            </div>
            <div className="flex-1 min-w-[300px]">
              <div className="inline-flex items-center gap-3 mb-3 glass-gold px-4 py-2 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">{land.regio}</span>
              </div>
              <h1 className="font-display font-bold text-6xl md:text-7xl text-white leading-[0.95] mb-3">{land.naam}</h1>
              <p className="text-white/50 text-lg">{land.munteenheid} · Hoofdstad: {land.hoofdstad}</p>
            </div>
            <div className={`${r.kleur} border backdrop-blur-sm px-5 py-3 rounded-full flex items-center gap-2 font-semibold text-sm`}>
              {r.icon} {land.risicoLabel}
            </div>
          </motion.div>

          <p className="text-white/70 text-lg leading-relaxed max-w-4xl mb-10">{land.samenvatting}</p>

          {/* Sleutelcijfers */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {land.sleutelcijfers.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                data-spotlight
                className="card-luxe rounded-2xl p-4">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{s.label}</p>
                <p className="text-white font-display font-bold text-lg">{s.waarde}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="sticky top-20 z-30 glass-dark border-b border-gold-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-1 -mb-px">
            {tabs.map(t => (
              <button
                key={t}
                onClick={() => setActieveTab(t)}
                className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${
                  actieveTab === t
                    ? "border-gold-400 text-gold-300"
                    : "border-transparent text-white/60 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(196,149,42,.3) 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {actieveTab !== "Kansen & Risico's" && sectie ? (
            <motion.div key={actieveTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-navy-900 mb-6 leading-[0.95]">{actieveTab}</h2>
              <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/30 rounded-2xl p-8 mb-10">
                <p className="text-gray-700 leading-relaxed text-lg">{sectie.samenvatting}</p>
              </div>
              <div className="space-y-4">
                {sectie.punten.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    data-spotlight
                    className="card-luxe-light rounded-2xl p-6 flex gap-4">
                    <div className="w-9 h-9 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold-500/30">
                      <span className="text-white text-sm font-bold">{i + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{p}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="kansen" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-display font-bold text-4xl text-navy-900 mb-8 flex items-center gap-3">
                    <CheckCircle className="w-9 h-9 text-green-500" /> Kansen
                  </h2>
                  <div className="space-y-3">
                    {land.kansen.map((k, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex gap-3 p-5 bg-green-50 rounded-2xl border border-green-100">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{k}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-display font-bold text-4xl text-navy-900 mb-8 flex items-center gap-3">
                    <XCircle className="w-9 h-9 text-red-500" /> Risico's
                  </h2>
                  <div className="space-y-3">
                    {land.risicos.map((r, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex gap-3 p-5 bg-red-50 rounded-2xl border border-red-100">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{r}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-luxe-mesh relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-8 glass-gold px-5 py-2.5 rounded-full">
              <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">Persoonlijk advies</span>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 leading-tight">
              Persoonlijk advies over<br /><span className="shimmer-text">{land.naam}</span>?
            </h2>
            <p className="text-white/70 text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              ArabDutch heeft directe contacten, lokale kennis en juridische partners in {land.naam}. Wij begeleiden uw traject van A tot Z.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-10 py-5 rounded-full transition-all shadow-xl shadow-gold-500/40 hover:scale-105"
              >
                Gesprek plannen <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/inzichten"
                className="glass-strong inline-flex items-center gap-2 text-white hover:text-gold-300 font-semibold px-10 py-5 rounded-full transition-all"
              >
                Rapporten bekijken
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
