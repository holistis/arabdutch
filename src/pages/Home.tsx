import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, TrendingUp, BookOpen, Handshake, Search, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const services = [
  { icon: <Globe className="w-5 h-5" />, title: "Interculturele Training", desc: "Navigeren in culturele verschillen en diversiteit voor duurzame internationale samenwerking." },
  { icon: <Handshake className="w-5 h-5" />, title: "Business Matchmaking", desc: "Verbinden van bedrijven en professionals aan weerszijden van de brug." },
  { icon: <Search className="w-5 h-5" />, title: "Marktonderzoek", desc: "Strategisch inzicht in Arabische consumentenmarkten en regelgeving." },
  { icon: <BookOpen className="w-5 h-5" />, title: "Taal & Cultuur Consulting", desc: "Professionele vertaling en interculturele begeleiding NL ↔ AR." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Lobbying & Advocacy", desc: "Strategische beïnvloeding van besluitvorming op twee continenten." },
  { icon: <Users className="w-5 h-5" />, title: "Netwerkevenementen", desc: "Curated evenementen die echte zakelijke relaties opleveren." },
];

const cases = [
  { tag: "Vastgoed", land: "Marokko", titel: "Investeerders naar Temara & Rabat begeleid" },
  { tag: "Agritech", land: "Saoedi-Arabië & Libië", titel: "Klantentour langs Nederlandse innovators" },
  { tag: "Cybersecurity", land: "Afrika", titel: "Partnership Manea — uitbreiding naar Afrika" },
];

export default function Home() {
  useEffect(() => { document.title = "ArabDutch — Bruggenbouwer tussen Nederland en de Arabische wereld"; }, []);
  return (
    <main className="pt-20">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-navy-900 min-h-screen flex items-center overflow-hidden">
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        {/* gold glow */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-20 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #C4952A 0%, transparent 70%)" }} />

        <div className="max-w-6xl mx-auto px-6 py-32 relative z-10 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col md:flex-row items-center gap-16">
          <motion.div variants={fade} className="flex-shrink-0 hidden md:block">
            <img src="/logo.png" alt="ArabDutch logo" className="w-72 h-72 rounded-full object-cover shadow-2xl shadow-gold-500/20" />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fade} className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em]">
                Connecting Cultures · Bridging Opportunities
              </span>
            </motion.div>

            <motion.h1 variants={fade} className="text-6xl md:text-8xl font-serif font-bold text-white leading-[1.05] mb-8">
              De brug tussen<br />
              <span className="text-gold-400">Nederland</span> en de<br />
              Arabische wereld
            </motion.h1>

            <motion.p variants={fade} className="text-white/60 text-xl leading-relaxed max-w-2xl mb-12">
              ArabDutch verbindt ondernemers, instellingen en investeerders met betrouwbare partners — met diepgaande kennis van cultuur, business en regelgeving.
            </motion.p>

            <motion.div variants={fade} className="flex flex-wrap gap-4">
              <Link to="/diensten"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-gold-500/20">
                Onze diensten <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium px-8 py-4 transition-colors">
                Gesprek plannen <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
          </motion.div>

          {/* stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-12 left-6 right-6 max-w-6xl">
            <div className="border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { n: "13+", label: "Professionals" },
                { n: "10+", label: "Landen bereikt" },
                { n: "5+", label: "Jaar ervaring" },
                { n: "2", label: "Talen NL · AR" },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-3xl font-serif font-bold text-white">{s.n}</p>
                  <p className="text-white/40 text-sm mt-1">{s.label}</p>
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
                <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em]">Dienstverlening</span>
              </div>
              <h2 className="text-5xl font-serif font-bold text-navy-900 leading-tight">
                Wat wij<br />voor u doen
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed">
              Zonder kennis van de regio, de cultuur en het zakelijke landschap lopen projecten vertraging op of mislukken ze. ArabDutch biedt een realistisch en volledig kader.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden">
            {services.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white p-8 hover:bg-navy-900 group transition-colors duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-gold-500/10 text-gold-500 group-hover:bg-gold-500 group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="font-bold text-navy-900 group-hover:text-white text-lg mb-3 transition-colors duration-300">{s.title}</h3>
                <p className="text-gray-400 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">{s.desc}</p>
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
                <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em]">Onze filosofie</span>
              </div>
              <blockquote className="text-4xl font-serif font-bold text-navy-900 leading-tight mb-8">
                "Succesvolle samenwerking begint met echt begrip."
              </blockquote>
              <p className="text-gray-500 leading-relaxed mb-6">
                Wij ondersteunen zowel Arabische ondernemers in Nederland als Nederlandse bedrijven die voet aan de grond willen krijgen in Arabische markten. Maatwerk, vertrouwen en culturele precisie staan daarbij centraal.
              </p>
              <p className="text-gray-400 text-sm font-semibold">— Abdoellah, Oprichter ArabDutch</p>
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
      <section className="py-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em]">Samenwerken</span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Klaar om de brug te slaan?
          </h2>
          <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto">
            Plan een vrijblijvend gesprek en ontdek wat ArabDutch voor uw organisatie kan betekenen.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-12 py-5 rounded-full transition-all shadow-lg shadow-gold-500/20 text-lg">
            Gesprek plannen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
