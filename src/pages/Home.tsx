import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, TrendingUp, BookOpen, Handshake, Search, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const Sparkle = ({ top, left, delay }: { top: string; left: string; delay: number }) => (
  <span className="sparkle-dot" style={{ top, left, animationDelay: `${delay}s` }} />
);

const SERVICE_KEYS = [
  { icon: <Globe className="w-5 h-5" />, key: "training" },
  { icon: <Handshake className="w-5 h-5" />, key: "matching" },
  { icon: <Search className="w-5 h-5" />, key: "research" },
  { icon: <BookOpen className="w-5 h-5" />, key: "language" },
  { icon: <TrendingUp className="w-5 h-5" />, key: "lobbying" },
  { icon: <Users className="w-5 h-5" />, key: "events" },
] as const;

const cases = [
  { tag: "Vastgoed", land: "Marokko", titel: "Investeerders naar Temara & Rabat begeleid" },
  { tag: "Agritech", land: "Saoedi-Arabië & Libië", titel: "Klantentour langs Nederlandse innovators" },
  { tag: "Cybersecurity", land: "Afrika", titel: "Partnership Manea — uitbreiding naar Afrika" },
];

export default function Home() {
  const { t } = useTranslation();
  useEffect(() => { document.title = "ArabDutch — Bruggenbouwer tussen Nederland en de Arabische wereld"; }, []);
  return (
    <main className="pt-20">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative animated-gradient-bg min-h-screen flex items-center overflow-hidden">
        {/* aurora layer */}
        <div className="absolute inset-0 bg-aurora pointer-events-none" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        {/* gold glow */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-30 rounded-full blur-3xl float-slow"
          style={{ background: "radial-gradient(circle, #C4952A 0%, transparent 70%)" }} />
        <div className="absolute -left-32 bottom-0 w-[500px] h-[500px] opacity-25 rounded-full blur-3xl float-slow" style={{ animationDelay: "3s", background: "radial-gradient(circle, #F4D78A 0%, transparent 70%)" }} />

        {/* sparkles */}
        <Sparkle top="15%" left="25%" delay={0} />
        <Sparkle top="30%" left="80%" delay={0.8} />
        <Sparkle top="65%" left="15%" delay={1.6} />
        <Sparkle top="80%" left="70%" delay={2.4} />
        <Sparkle top="20%" left="60%" delay={1.2} />
        <Sparkle top="45%" left="90%" delay={2.0} />

        <div className="max-w-6xl mx-auto px-6 py-32 relative z-10 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col md:flex-row items-center gap-16">
          <motion.div variants={fade} className="flex-shrink-0 hidden md:block relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-gold-500/40 scale-110" />
            <img src="/logo.png" alt="ArabDutch logo" className="relative w-72 h-72 rounded-full object-cover shadow-2xl shadow-gold-500/40 ring-4 ring-gold-500/30 glow-gold" />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fade} className="inline-flex items-center gap-3 mb-8 glass-gold px-4 py-2 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-gold-300 text-xs font-semibold uppercase tracking-[0.2em]">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1 variants={fade} className="text-6xl md:text-8xl font-serif font-bold text-white leading-[1.05] mb-8">
              {t("hero.line1")}<br />
              <span className="shimmer-text">{t("hero.highlight")}</span> {t("hero.line2")}<br />
              {t("hero.line3")}
            </motion.h1>

            <motion.p variants={fade} className="text-white/70 text-xl leading-relaxed max-w-2xl mb-12">
              {t("hero.sub")}
            </motion.p>

            <motion.div variants={fade} className="flex flex-wrap gap-4">
              <Link to="/diensten"
                className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-gold-500/40 hover:shadow-gold-500/60 hover:scale-105">
                {t("hero.cta1")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact"
                className="glass inline-flex items-center gap-2 text-white hover:text-gold-300 font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10">
                {t("hero.cta2")} <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
          </motion.div>

          {/* stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-12 left-6 right-6 max-w-6xl mx-auto">
            <div className="glass-dark rounded-2xl px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { n: "13+", label: t("stats.professionals") },
                { n: "10+", label: t("stats.countries") },
                { n: "5+", label: t("stats.experience") },
                { n: "2", label: t("stats.languages") },
              ].map(s => (
                <div key={s.label} className="text-center md:text-left">
                  <p className="text-3xl font-serif font-bold shimmer-text">{s.n}</p>
                  <p className="text-white/50 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DIENSTEN ─────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold-500" />
                <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em]">{t("services.label")}</span>
              </div>
              <h2 className="text-5xl font-serif font-bold text-navy-900 leading-tight">
                {t("services.heading")}
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed">
              {t("services.sub")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICE_KEYS.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                className="card-hover-lift relative bg-white border border-gray-100 hover:border-gold-500/40 p-8 rounded-2xl group cursor-pointer overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold-500/0 group-hover:bg-gold-500/10 blur-3xl transition-all duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500/20 to-gold-500/5 text-gold-500 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold-500/30">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg mb-3">{t(`services.${s.key}.title`)}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t(`services.${s.key}.desc`)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-right">
            <Link to="/diensten" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-600 font-semibold text-sm">
              Alle diensten <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUOTE / MISSIE ───────────────────────────────────── */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gold-500" />
                <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em]">{t("philosophy.label")}</span>
              </div>
              <blockquote className="text-4xl font-serif font-bold text-navy-900 leading-tight mb-8">
                "{t("philosophy.quote")}"
              </blockquote>
              <p className="text-gray-500 leading-relaxed mb-6">
                {t("philosophy.text")}
              </p>
              <p className="text-gray-400 text-sm font-semibold">{t("philosophy.author")}</p>
            </div>

            <div className="space-y-4">
              {cases.map((c, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-100 hover:border-gold-500/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gold-500 uppercase tracking-wider mb-1">{c.tag} · {c.land}</p>
                    <p className="font-semibold text-navy-900">{c.titel}</p>
                  </div>
                </motion.div>
              ))}
              <Link to="/ons-werk" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-navy-900 font-medium transition-colors pt-2">
                Bekijk alle projecten <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-32 animated-gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-60 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <Sparkle top="20%" left="15%" delay={0.5} />
        <Sparkle top="70%" left="85%" delay={1.5} />
        <Sparkle top="40%" left="50%" delay={2.5} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6 glass-gold px-4 py-2 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-gold-300 text-xs font-semibold uppercase tracking-[0.2em]">{t("cta.label")}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            <span className="shimmer-text">{t("cta.title")}</span>
          </h2>
          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">
            {t("cta.sub")}
          </p>
          <Link to="/contact"
            className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-12 py-5 rounded-full transition-all shadow-2xl shadow-gold-500/40 hover:shadow-gold-500/60 hover:scale-105 text-lg glow-gold">
            {t("cta.button")} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
