import { motion } from "framer-motion";
import { Check } from "lucide-react";

const logos = [
  {
    nummer: 1,
    naam: "Klassieke Calligrafie",
    bestand: "/logos/logo-1-bridge-windmill.svg",
    beschrijving:
      "Bold Arabische calligrafie met daaronder een brug die de windmolen en halve maan verbindt. Krachtig en direct.",
    tags: ["Calligrafie", "Brug", "Windmolen"],
  },
  {
    nummer: 2,
    naam: "Medaillon",
    bestand: "/logos/logo-2-monogram-AD.svg",
    beschrijving:
      "Arabische letters in een rond medaillon met islamitische geometrische ornamenten. Formeel en tijdloos.",
    tags: ["Medaillon", "Geometrisch", "Premium"],
  },
  {
    nummer: 3,
    naam: "Skyline",
    bestand: "/logos/logo-3-skyline.svg",
    beschrijving:
      "Visueel verhaal: Hollandse windmolen, brug en Arabische koepel boven de Arabische naam. Vol karakter.",
    tags: ["Verhaal", "Skyline", "Cultuur"],
  },
  {
    nummer: 4,
    naam: "Moorse Boog",
    bestand: "/logos/logo-4-shield-emblem.svg",
    beschrijving:
      "Stijlvolle Moorse/Andalusische puntboog met halve maan-finial, geometrisch ornament en Arabische naam centraal.",
    tags: ["Moors", "Architectuur", "Heraldisch"],
  },
  {
    nummer: 5,
    naam: "Minimaal & Bold",
    bestand: "/logos/logo-5-minimal-wordmark.svg",
    beschrijving:
      "Grote Arabische calligrafie als hoofdelement, subtiele brug-windmolen-halve maan boven. Modern en strak.",
    tags: ["Minimalistisch", "Modern", "Bold"],
  },
];

export default function Logos() {
  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
            Logo Keuze
          </span>
          <h1 className="text-5xl font-serif font-bold mt-2">Vijf concepten</h1>
          <p className="text-gray-300 mt-4 max-w-2xl">
            Alle vijf logo's gebruiken stijlvolle Arabische calligrafie (عرب داتش)
            als hoofdelement, gecombineerd met brug, windmolen en halve maan.
            Kies de variant die het beste bij ArabDutch past.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {logos.map((logo, i) => (
              <motion.div
                key={logo.nummer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-transparent hover:border-gold-500/30 transition-colors"
              >
                <div className="bg-navy-900 p-6 flex items-center justify-center">
                  <img
                    src={logo.bestand}
                    alt={logo.naam}
                    className="w-full max-w-md"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gold-500 text-navy-900 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {logo.nummer}
                    </span>
                    <h2 className="font-bold text-navy-900 text-2xl">
                      {logo.naam}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {logo.beschrijving}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {logo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gold-500/10 text-gold-600 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-navy-900 text-white rounded-2xl p-10 text-center">
            <Check className="w-8 h-8 text-gold-400 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold mb-3">Welke is het?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Laat me weten welk nummer je kiest (of welke combinatie van
              elementen) — dan werken we die uit als het definitieve logo in PNG,
              SVG en favicon-formaat.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
