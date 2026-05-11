import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle, ShieldCheck, AlertCircle, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import landGidsen from "../data/landGidsen";

const tabs = ["Belasting", "Visum", "Bedrijf oprichten", "Vastgoed", "Leven", "Cultuur", "Kansen & Risico's"] as const;
type Tab = typeof tabs[number];

const risicoConfig = {
  "laag": { kleur: "bg-green-100 text-green-700 border-green-200", icon: <ShieldCheck className="w-4 h-4" /> },
  "medium": { kleur: "bg-yellow-100 text-yellow-700 border-yellow-200", icon: <AlertCircle className="w-4 h-4" /> },
  "hoog": { kleur: "bg-orange-100 text-orange-700 border-orange-200", icon: <AlertTriangle className="w-4 h-4" /> },
  "zeer-hoog": { kleur: "bg-red-100 text-red-700 border-red-200", icon: <AlertTriangle className="w-4 h-4" /> },
};

export default function LandGids() {
  const { slug } = useParams<{ slug: string }>();
  const land = landGidsen.find(l => l.slug === slug);
  const [actieveTab, setActieveTab] = useState<Tab>("Belasting");

  useEffect(() => {
    if (land) document.title = `${land.naam} — ArabDutch Landengids`;
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
    <main className="pt-20">
      {/* HERO */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/landen"
            className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Terug naar alle landen
          </Link>
          <div className="flex items-start gap-6 mb-8">
            <span className="text-6xl">{land.vlag}</span>
            <div>
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-1">{land.regio}</p>
              <h1 className="text-5xl font-serif font-bold">{land.naam}</h1>
              <p className="text-white/50 mt-1">{land.munteenheid} · Hoofdstad: {land.hoofdstad}</p>
            </div>
            <div className={`ml-auto ${r.kleur} border px-4 py-2 rounded-full flex items-center gap-2 font-semibold text-sm flex-shrink-0`}>
              {r.icon} {land.risicoLabel}
            </div>
          </div>
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-10">{land.samenvatting}</p>

          {/* Sleutelcijfers */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {land.sleutelcijfers.map((s, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white/40 text-xs mb-1">{s.label}</p>
                <p className="text-white font-bold">{s.waarde}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-0 -mb-px">
            {tabs.map(t => (
              <button
                key={t}
                onClick={() => setActieveTab(t)}
                className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  actieveTab === t
                    ? "border-gold-500 text-gold-600"
                    : "border-transparent text-gray-500 hover:text-navy-900"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {actieveTab !== "Kansen & Risico's" && sectie ? (
            <motion.div key={actieveTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">{actieveTab}</h2>
              <div className="bg-gold-500/5 border border-gold-500/20 rounded-2xl p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">{sectie.samenvatting}</p>
              </div>
              <div className="space-y-4">
                {sectie.punten.map((p, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">{p}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="kansen" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-500" /> Kansen
                  </h2>
                  <div className="space-y-3">
                    {land.kansen.map((k, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">{k}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6 flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-red-500" /> Risico's
                  </h2>
                  <div className="space-y-3">
                    {land.risicos.map((r, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">{r}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Wilt u persoonlijk advies over {land.naam}?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            ArabDutch heeft directe contacten, lokale kennis en juridische partners in {land.naam}. Wij begeleiden uw traject van A tot Z.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-semibold px-10 py-4 rounded-full transition-colors"
            >
              Gesprek plannen <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/inzichten"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-10 py-4 rounded-full transition-colors"
            >
              Rapporten downloaden
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
