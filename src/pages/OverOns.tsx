import { Users, Target, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LuxeHero from "../components/LuxeHero";
import useSpotlight from "../components/Spotlight";

const teamGroepen = [
  { rol: "Directeur & Founder", omschrijving: "Stuurt het bedrijf aan en zorgt voor strategische richting en klantrelaties.", leden: ["Abdoellah Ouaoudi"] },
  { rol: "Consultants", omschrijving: "Bieden op maat gemaakte adviezen en begeleiding bij projecten in beide markten.", leden: ["Samir Kheder", "Yasmine Bousandrous", "Mariam Kheder"] },
  { rol: "Project Managers", omschrijving: "Coördineren de uitvoering van opdrachten en zorgen dat projecten soepel verlopen.", leden: ["Ismael Gumbs", "Joyce Rademakers", "Abdelsamad El-Hasni", "Marouane Arrob"] },
  { rol: "Marketing & Communicatie", omschrijving: "Versterkt onze zichtbaarheid, branding, website en interculturele communicatie.", leden: ["Harry"] },
  { rol: "Vertalers", omschrijving: "Faciliteren professionele vertalingen NL ↔ AR zodat communicatie altijd vloeiend verloopt.", leden: ["Said Kadir", "Fatima Radi"] },
  { rol: "Financiën & Administratie", omschrijving: "Beheert boekhouding, facturatie en financiële planning.", leden: ["Anton"] },
];

const initialen = (naam: string) =>
  naam.split(" ").filter(Boolean).map(w => w[0]).join("").slice(0, 2).toUpperCase();

const waarden = [
  { icon: <Target className="w-6 h-6" />, title: "Onze missie", text: "Ondernemers, investeerders en instellingen succesvol verbinden met de Arabische wereld — en andersom. Niet als tussenpersoon, maar als strategische partner." },
  { icon: <Heart className="w-6 h-6" />, title: "Onze waarden", text: "Vertrouwen gaat boven alles. Wij zeggen wat we doen, en doen wat we zeggen. Cultureel respect, integriteit en langetermijndenken zitten in ons DNA." },
  { icon: <Users className="w-6 h-6" />, title: "Ons netwerk", text: "Actieve relaties met ondernemers, overheden en investeerders in Marokko, Saoedi-Arabië, Libië, de VAE en Nederland — opgebouwd door jaren aanwezig te zijn." },
];

export default function OverOns() {
  useSpotlight();
  useEffect(() => { document.title = "Over Ons — ArabDutch | Team & Missie"; }, []);

  return (
    <main className="pt-20 bg-[#0a0f1f]">
      <LuxeHero
        badge="Wie zijn wij"
        title={<>Twee culturen.<br /><span className="gradient-luxe italic">Eén missie.</span></>}
        subtitle="Wij zijn Nederlanders met Arabische wortels — en Arabieren met Nederlands begrip. Dat is geen toeval, het is ons fundament."
      />

      {/* ACHTERGROND */}
      <section className="py-32 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
          style={{ background: "radial-gradient(circle, rgba(196,149,42,.4) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="md:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6 bg-gold-500/10 border border-gold-500/30 px-4 py-2 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-gold-600 text-xs font-semibold uppercase tracking-[0.25em]">Onze achtergrond</span>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-navy-900 leading-[0.95] mb-8">
              Geboren tussen<br />twee werelden
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>ArabDutch is opgericht door Abdoellah — in Nederland geboren, met diepe culturele wortels in de Arabische wereld. Die tweeledige identiteit is geen bijzaak; het is precies wat ons onderscheidt. Wij spreken beide talen, kennen beide culturen van binnenuit en weten hoe zaken écht gedaan worden aan weerszijden van de brug.</p>
              <p>Waar andere adviseurs werken vanuit theorie, werken wij vanuit vertrouwen en relaties die door de jaren zijn opgebouwd — in Marokko, Saoedi-Arabië, Libië, de VAE en Nederland. Ons team van 12 professionals combineert juridische, financiële, taalkundige en zakelijke expertise.</p>
              <p>Wij geloven dat de grootste kansen liggen op het snijvlak van twee werelden. Ons werk is om u daar te brengen — efficiënt, betrouwbaar en met resultaat.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 space-y-4">
            {waarden.map((v, i) => (
              <div key={i}
                data-spotlight
                className="card-luxe-light rounded-2xl p-6 flex gap-5 group">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-500/15 to-gold-500/5 group-hover:from-gold-500 group-hover:to-gold-600 text-gold-500 group-hover:text-white rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-gold-500/40 group-hover:-rotate-6">
                  {v.icon}
                </div>
                <div>
                  <p className="font-display font-bold text-navy-900 text-xl mb-2">{v.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-32 bg-luxe-mesh relative overflow-hidden noise-overlay">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 glass-gold px-5 py-2.5 rounded-full">
              <Users className="w-3.5 h-3.5 text-gold-300" />
              <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">Ons team</span>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-4 gradient-luxe">
              12 professionals · 2 continenten
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Eén gemeenschappelijk doel: uw project laten slagen.
            </p>
          </motion.div>

          <div className="flex flex-col gap-10">
            {teamGroepen.map((groep, gi) => (
              <motion.div key={gi}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: gi * 0.05 }}>
                <div className="flex items-center gap-4 mb-5">
                  <h3 className="font-display font-bold text-white text-2xl">{groep.rol}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-gold-500/40 to-transparent" />
                </div>
                <p className="text-white/50 text-sm mb-5 max-w-3xl">{groep.omschrijving}</p>
                <div className="flex flex-wrap gap-4">
                  {groep.leden.map((naam, li) => (
                    <div key={li}
                      data-spotlight
                      className="card-luxe rounded-2xl px-6 py-4 flex items-center gap-3 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold-500/30 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-sm">{initialen(naam)}</span>
                      </div>
                      <span className="font-semibold text-white">{naam}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="mt-20 glass-strong rounded-3xl p-10 text-center">
            <p className="text-white/80 leading-relaxed text-lg max-w-3xl mx-auto font-light">
              Naast ons vaste team werken wij samen met een selecte groep vertrouwde partners en specialisten in Nederland en de Arabische wereld. Dat stelt ons in staat om élke opdracht — hoe specifiek ook — met de juiste expertise aan te pakken.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30"
          style={{ background: "radial-gradient(ellipse, rgba(196,149,42,.3) 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-bold text-5xl md:text-6xl text-navy-900 mb-6">
            Wilt u ons team ontmoeten?
          </h2>
          <p className="text-gray-500 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Plan een persoonlijke kennismaking — wij komen graag bij u langs, of u bij ons in Eindhoven.
          </p>
          <Link to="/contact"
            className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-12 py-5 rounded-full transition-all shadow-xl shadow-gold-500/40 hover:shadow-gold-500/60 hover:scale-105 text-lg">
            Kennismakingsgesprek plannen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
