import { motion } from "framer-motion";
import { ShieldCheck, FileSearch, Scale } from "lucide-react";
import useSpotlight from "./Spotlight";

/**
 * Voorheen een testimonials-blok. Bewust vervangen: ArabDutch is een jong
 * bureau en had op dit moment nog geen afgeronde klantcases. Klantcitaten
 * tonen die er niet zijn, is misleiding, ongeacht hoe voorzichtig ze zijn
 * geformuleerd. Zodra er echte, met toestemming gedeelde cases zijn, kan hier
 * een testimonials-blok terugkomen met naam en akkoord van de klant.
 *
 * Wat hier nu staat doet hetzelfde vertrouwenswerk, maar dan waar: onze
 * werkwijze, onze grenzen, en waar wij ons aan binden.
 */

const pijlers = [
  {
    icon: FileSearch,
    titel: "Wij tonen de bron",
    tekst:
      "Elk cijfer in onze landengidsen is te herleiden naar een officiële bron met datum. Regelgeving in de regio verandert snel en veel adviespagina's staan vol verouderde tarieven. Wat wij niet zeker weten, benoemen wij als onzeker in plaats van het glad te strijken.",
  },
  {
    icon: Scale,
    titel: "Wij noemen ook wat tegenzit",
    tekst:
      "Een adviseur die alleen kansen laat zien, verkoopt u iets. Wij benoemen de vallen die pas na jaren zichtbaar worden: verlengingskosten die boven de instapprijs liggen, een status die u vijf jaar kwijt bent bij overschrijding, of geld dat u niet meer uit het land krijgt omdat het verkeerd is ingebracht.",
  },
  {
    icon: ShieldCheck,
    titel: "Wij zeggen ook nee",
    tekst:
      "Past een land of een structuur niet bij uw plan, dan zeggen wij dat voordat u betaalt. Wij werken niet met stromanconstructies en adviseren geen route waarvan wij de risico's niet kunnen overzien. Voor zwaarwegende fiscale en juridische vragen verwijzen wij naar een specialist in dat rechtsgebied.",
  },
];

export default function Testimonials() {
  useSpotlight();
  return (
    <section className="py-32 bg-luxe-mesh relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 glass-gold px-5 py-2.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-300" />
            <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">Onze werkwijze</span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-4 gradient-luxe">
            Vertrouwen wordt verdiend
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Wij zijn een jong bureau en tonen liever geen klantcitaten dan citaten die wij niet kunnen laten bevestigen. Waar wij ons wel aan binden, staat hieronder.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pijlers.map((p, i) => (
            <motion.div
              key={p.titel}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              data-spotlight
              className="card-luxe rounded-3xl p-8 flex flex-col">
              <p.icon className="w-10 h-10 text-gold-400/60 mb-5" />
              <h3 className="font-display font-bold text-white text-xl mb-3">{p.titel}</h3>
              <p className="text-white/70 leading-relaxed flex-1">{p.tekst}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-12 max-w-2xl mx-auto">
          Zodra wij trajecten hebben afgerond waarvan de opdrachtgever instemt met publicatie, plaatsen wij hier echte cases met naam en toestemming.
        </p>
      </div>
    </section>
  );
}
