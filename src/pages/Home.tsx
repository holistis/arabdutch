import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, TrendingUp, BookOpen, Handshake, Search, ChevronRight, Sparkles, Star, Award, Quote } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useSpotlight from "../components/Spotlight";
import Testimonials from "../components/Testimonials";
import NewsletterSignup from "../components/NewsletterSignup";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const SERVICE_KEYS = [
  { icon: <Globe className="w-6 h-6" />, key: "training", size: "md" },
  { icon: <Handshake className="w-6 h-6" />, key: "matching", size: "lg" },
  { icon: <Search className="w-6 h-6" />, key: "research", size: "md" },
  { icon: <BookOpen className="w-6 h-6" />, key: "language", size: "md" },
  { icon: <TrendingUp className="w-6 h-6" />, key: "lobbying", size: "lg" },
  { icon: <Users className="w-6 h-6" />, key: "events", size: "md" },
] as const;

const cases = [
  { tag: "Vastgoed", land: "Marokko", titel: "Investeerders naar Temara & Rabat begeleid" },
  { tag: "Agritech", land: "Saoedi-Arabië & Libië", titel: "Klantentour langs Nederlandse innovators" },
  { tag: "Cybersecurity", land: "Afrika", titel: "Partnership Manea — uitbreiding naar Afrika" },
];

const MARQUEE_REGIONS = [
  "Marokko", "Verenigde Arabische Emiraten", "Saoedi-Arabië", "Tunesië", "Egypte",
  "Jordanië", "Qatar", "Libië", "Irak", "Algerije", "Bahrein", "Oman",
];

const Sparkle = ({ top, left, delay, size = 5 }: { top: string; left: string; delay: number; size?: number }) => (
  <span className="sparkle-dot" style={{ top, left, animationDelay: `${delay}s`, width: size, height: size }} />
);

// Animated counter
function Counter({ value, suffix = "+", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const sp = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animate(mv, value, { duration, ease: [0.2, 0.8, 0.2, 1] });
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [mv, value, duration]);

  useEffect(() => {
    return sp.on("change", v => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
    });
  }, [sp, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

// Magnetic button wrapper
function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`btn-magnetic ${className}`}
      onMouseMove={(e) => {
        const el = ref.current!;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
      }}
      onMouseLeave={() => {
        const el = ref.current!;
        el.style.setProperty("--mx", `0px`);
        el.style.setProperty("--my", `0px`);
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  useSpotlight();
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 400]);

  useEffect(() => { document.title = "ArabDutch — Bruggenbouwer tussen Nederland en de Arabische wereld"; }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMouseParallax({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="pt-20 bg-[#0a0f1f]">

      {/* ═══════════════════════════════════════════════════════════
          HERO — cinematic
          ═══════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative bg-luxe-mesh min-h-screen flex items-center overflow-hidden noise-overlay">
        {/* parallax floating orbs */}
        <motion.div
          style={{ y: orbY1, x: mouseParallax.x * 0.6, translateY: orbY1 }}
          className="absolute -top-20 -right-20 w-[700px] h-[700px] rounded-full blur-3xl float-orb"
        >
          <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(196,149,42,.4) 0%, transparent 65%)" }} />
        </motion.div>
        <motion.div
          style={{ y: orbY2, x: mouseParallax.x * -0.4 }}
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl float-orb"
        >
          <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(244,215,138,.3) 0%, transparent 65%)", animationDelay: "4s" }} />
        </motion.div>

        {/* grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "100px 100px" }} />

        {/* sparkles */}
        {[
          { t: "12%", l: "18%", d: 0 }, { t: "25%", l: "85%", d: 0.7 }, { t: "60%", l: "8%", d: 1.4 },
          { t: "78%", l: "75%", d: 2.1 }, { t: "18%", l: "55%", d: 1.0 }, { t: "45%", l: "92%", d: 1.8 },
          { t: "85%", l: "40%", d: 0.4 }, { t: "33%", l: "30%", d: 2.3 }, { t: "70%", l: "60%", d: 0.9 },
        ].map((s, i) => <Sparkle key={i} top={s.t} left={s.l} delay={s.d} />)}

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto px-6 py-32 relative z-10 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col lg:flex-row items-center gap-16">

            {/* LOGO + ORBIT */}
            <motion.div variants={fade} className="flex-shrink-0 hidden lg:block relative">
              <div className="relative w-80 h-80">
                {/* rotating orbit rings */}
                <div className="absolute inset-0 rounded-full border border-gold-500/20" style={{ animation: "border-spin 20s linear infinite" }} />
                <div className="absolute -inset-6 rounded-full border border-gold-400/15" style={{ animation: "border-spin 30s linear infinite reverse" }} />
                <div className="absolute -inset-12 rounded-full border border-gold-300/10" style={{ animation: "border-spin 40s linear infinite" }} />
                {/* glow */}
                <div className="absolute inset-0 rounded-full blur-3xl bg-gold-500/30 scale-110" />
                {/* logo */}
                <motion.img
                  style={{ x: mouseParallax.x * -0.3, y: mouseParallax.y * -0.3 }}
                  src="/logo.png" alt="ArabDutch logo"
                  className="relative w-full h-full rounded-full object-cover shadow-2xl shadow-gold-500/40 ring-4 ring-gold-500/30"
                />
                {/* floating accent */}
                <motion.div
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -top-2 -right-2 w-12 h-12 rounded-full glass-gold flex items-center justify-center">
                  <Star className="w-5 h-5 text-gold-300 fill-gold-300" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
              <motion.div variants={fade} className="inline-flex items-center gap-3 mb-8 glass-gold px-5 py-2.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">
                  {t("hero.badge")}
                </span>
              </motion.div>

              <motion.h1 variants={fade} className="font-display font-bold text-white leading-[0.95] mb-8 text-6xl md:text-7xl lg:text-8xl">
                {t("hero.line1")}<br />
                <span className="gradient-luxe italic">{t("hero.highlight")}</span> {t("hero.line2")}<br />
                <span className="text-stroke">{t("hero.line3")}</span>
              </motion.h1>

              <motion.p variants={fade} className="text-white/70 text-xl leading-relaxed max-w-2xl mb-12 font-light">
                {t("hero.sub")}
              </motion.p>

              <motion.div variants={fade} className="flex flex-wrap gap-4 items-center">
                <Magnetic>
                  <Link to="/diensten"
                    className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-gold-500/40 hover:shadow-gold-500/70 hover:scale-105">
                    {t("hero.cta1")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link to="/contact"
                    className="glass-strong inline-flex items-center gap-2 text-white hover:text-gold-200 font-medium px-8 py-4 rounded-full transition-all duration-300">
                    {t("hero.cta2")} <ChevronRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-white/40 text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MARQUEE — landen
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0f1f] py-12 border-y border-gold-500/10 overflow-hidden">
        <div className="marquee">
          <div className="marquee-track">
            {[...MARQUEE_REGIONS, ...MARQUEE_REGIONS].map((r, i) => (
              <div key={i} className="flex items-center gap-4 whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="font-display text-3xl text-white/60 hover:text-gold-300 transition-colors">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          COUNTERS — premium stats
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-luxe-mesh py-32 relative overflow-hidden noise-overlay">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, #C4952A 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 glass-gold px-5 py-2.5 rounded-full">
              <Award className="w-3.5 h-3.5 text-gold-300" />
              <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">In cijfers</span>
            </div>
            <h2 className="font-display font-bold text-6xl md:text-7xl gradient-luxe">
              De impact die wij maken
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: 13, label: t("stats.professionals"), suffix: "+" },
              { n: 10, label: t("stats.countries"), suffix: "+" },
              { n: 5, label: t("stats.experience"), suffix: "+" },
              { n: 3, label: t("stats.languages"), suffix: "" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                data-spotlight
                className="card-luxe rounded-2xl p-8 text-center"
              >
                <p className="font-display text-6xl md:text-7xl shimmer-text mb-3">
                  <Counter value={s.n} suffix={s.suffix} />
                </p>
                <p className="text-white/50 text-sm uppercase tracking-widest">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DIENSTEN — bento grid 3D
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(196,149,42,.3) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-16 items-end mb-20">
            <div>
              <div className="inline-flex items-center gap-3 mb-6 bg-gold-500/10 border border-gold-500/30 px-4 py-2 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-gold-600 text-xs font-semibold uppercase tracking-[0.25em]">{t("services.label")}</span>
              </div>
              <h2 className="font-display font-bold text-5xl md:text-7xl text-navy-900 leading-[0.95]">
                {t("services.heading")}
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed">
              {t("services.sub")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICE_KEYS.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
                data-spotlight
                className={`card-luxe-light rounded-3xl p-8 group ${s.size === "lg" ? "md:row-span-1" : ""}`}>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-500/15 to-gold-500/5 group-hover:from-gold-500 group-hover:to-gold-600 text-gold-500 group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-gold-500/40 group-hover:-rotate-6 group-hover:scale-110">
                    {s.icon}
                  </div>
                  <h3 className="font-display font-bold text-navy-900 text-2xl mb-3 leading-tight">{t(`services.${s.key}.title`)}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{t(`services.${s.key}.desc`)}</p>
                  <div className="flex items-center gap-2 text-gold-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Meer info <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Magnetic>
              <Link to="/diensten" className="btn-shine inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-xl">
                Alle diensten <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          QUOTE / PHILOSOPHY — cinematic split
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-luxe-mesh relative overflow-hidden noise-overlay">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30"
          style={{ background: "radial-gradient(circle, rgba(244,215,138,.2) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="md:col-span-7">
              <div className="inline-flex items-center gap-3 mb-8 glass-gold px-5 py-2.5 rounded-full">
                <Quote className="w-3.5 h-3.5 text-gold-300" />
                <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">{t("philosophy.label")}</span>
              </div>

              <Quote className="w-16 h-16 text-gold-500/40 mb-6" />

              <blockquote className="font-display italic text-4xl md:text-6xl text-white leading-[1.1] mb-8">
                "{t("philosophy.quote")}"
              </blockquote>

              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl">
                {t("philosophy.text")}
              </p>
              <p className="text-gold-300 text-sm font-semibold uppercase tracking-widest">{t("philosophy.author")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 space-y-4">
              {cases.map((c, i) => (
                <motion.div
                  key={i}
                  data-spotlight
                  className="card-luxe rounded-2xl p-6 flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl glass-gold flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold-300 uppercase tracking-wider mb-2">{c.tag} · {c.land}</p>
                    <p className="font-semibold text-white text-lg leading-snug">{c.titel}</p>
                  </div>
                </motion.div>
              ))}
              <Link to="/ons-werk" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold-300 font-medium transition-colors pt-2 px-6">
                Bekijk alle projecten <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════════════════════════ */}
      <Testimonials />

      {/* ═══════════════════════════════════════════════════════════
          NEWSLETTER
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(196,149,42,.3) 0%, transparent 60%)" }} />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <NewsletterSignup variant="light" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA — grand finale
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-40 bg-luxe-mesh relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-aurora opacity-60 pointer-events-none" />

        {/* floating orbs */}
        <div className="absolute top-10 left-20 w-96 h-96 rounded-full blur-3xl opacity-40 float-orb" style={{ background: "radial-gradient(circle, #C4952A 0%, transparent 70%)" }} />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 float-orb" style={{ background: "radial-gradient(circle, #F4D78A 0%, transparent 70%)", animationDelay: "3s" }} />

        {/* sparkles */}
        <Sparkle top="20%" left="15%" delay={0.5} />
        <Sparkle top="70%" left="85%" delay={1.5} />
        <Sparkle top="40%" left="50%" delay={2.5} />
        <Sparkle top="15%" left="80%" delay={1.0} />
        <Sparkle top="85%" left="20%" delay={2.0} />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-8 glass-gold px-5 py-2.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">{t("cta.label")}</span>
            </div>

            <h2 className="font-display font-bold text-6xl md:text-8xl mb-8 leading-[0.95]">
              <span className="shimmer-text">{t("cta.title")}</span>
            </h2>

            <p className="text-white/70 text-xl md:text-2xl mb-14 max-w-3xl mx-auto font-light leading-relaxed">
              {t("cta.sub")}
            </p>

            <Magnetic>
              <Link to="/contact"
                className="btn-shine inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-14 py-6 rounded-full transition-all shadow-2xl shadow-gold-500/50 hover:shadow-gold-500/70 hover:scale-105 text-lg glow-gold">
                {t("cta.button")} <ArrowRight className="w-5 h-5" />
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
