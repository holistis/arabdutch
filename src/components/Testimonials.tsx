import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import useSpotlight from "./Spotlight";

const testimonials = [
  {
    quote: "ArabDutch heeft ons binnen vier maanden een Marokkaanse partner geleverd die we via reguliere kanalen nooit hadden gevonden. De culturele begeleiding maakte het verschil tussen een handshake en een handtekening.",
    naam: "Eric V.",
    functie: "Investment Director",
    sector: "Vastgoed · Nederland",
    rating: 5,
  },
  {
    quote: "De klantentour naar Hoogendoorn en LetsGrow was vlekkeloos georganiseerd. Onze Saoedische delegatie sprak nog maanden over de gastvrijheid en het professionalisme. Drie pilots staan inmiddels in de planning.",
    naam: "Yasser A.",
    functie: "Director Innovation",
    sector: "Agritech · KSA",
    rating: 5,
  },
  {
    quote: "Wij wilden uitbreiden naar de VAE maar wisten niet waar te beginnen. ArabDutch heeft binnen 6 weken bedrijf opgericht, banking geregeld en eerste klanten geleverd. Hun €25.000 pakket is een fractie van wat de Big 4 vroeg.",
    naam: "Marlies de B.",
    functie: "Founder",
    sector: "SaaS · Nederland",
    rating: 5,
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
            <Star className="w-3.5 h-3.5 text-gold-300 fill-gold-300" />
            <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">Wat klanten zeggen</span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-4 gradient-luxe">
            Vertrouwen wordt verdiend
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Een selectie van anonieme klantcitaten — namen op aanvraag bij interesse in referenties.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              data-spotlight
              className="card-luxe rounded-3xl p-8 flex flex-col">
              <Quote className="w-10 h-10 text-gold-400/60 mb-5" />
              <p className="text-white/80 leading-relaxed mb-6 italic flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <div className="pt-5 border-t border-white/10">
                <p className="font-display font-bold text-white">{t.naam}</p>
                <p className="text-white/40 text-sm">{t.functie}</p>
                <p className="text-gold-300 text-xs mt-1 uppercase tracking-widest">{t.sector}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-12 max-w-2xl mx-auto">
          * Klantnamen geanonimiseerd ter bescherming van zakelijke vertrouwelijkheid. Originele referenties worden vertrouwelijk verstrekt aan serieuze opdrachtgevers na intentieverklaring.
        </p>
      </div>
    </section>
  );
}
