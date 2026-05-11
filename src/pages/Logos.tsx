import { motion } from "framer-motion";
import { AlertCircle, Check } from "lucide-react";

export default function Logos() {
  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
            Logo Concept
          </span>
          <h1 className="text-5xl font-serif font-bold mt-2">AI Calligrafie</h1>
          <p className="text-gray-300 mt-4 max-w-2xl">
            Stijl: klassieke gouden calligrafie, ornamenteel medaillon, windmolen + brug + halve maan.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          {/* Main AI generated logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-navy-900 rounded-2xl overflow-hidden mb-8"
          >
            <img
              src="/logos/ai-calligraphy-v1.png"
              alt="AI Calligrafie concept"
              className="w-full max-w-lg mx-auto block p-8"
            />
          </motion.div>

          {/* Warning about Arabic text */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 flex gap-4">
            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 mb-1">Arabische tekst klopt niet helemaal</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                De AI heeft de letters niet correct gespeld — het staat er niet als <strong>عرب داتش</strong>.
                Genereer een nieuwe versie met onderstaande prompt en het wordt perfect.
              </p>
            </div>
          </div>

          {/* Style verdict */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10 flex gap-4">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-800 mb-1">Stijl is perfect</p>
              <p className="text-green-700 text-sm leading-relaxed">
                Gouden calligrafie + ornamenteel medaillon met 8-punt sterren + windmolen + brug + halve maan — dit is exact de richting.
                Genereer met de prompt hieronder voor correcte Arabische spelling.
              </p>
            </div>
          </div>

          {/* Prompt to generate correct version */}
          <div className="bg-navy-900 text-white rounded-2xl p-8 mb-10">
            <h2 className="font-serif font-bold text-2xl text-gold-400 mb-4">
              Prompt voor correcte versie
            </h2>
            <p className="text-gray-300 text-sm mb-4">Plak dit in ChatGPT (GPT-4o) of Adobe Firefly:</p>
            <pre className="bg-black/30 rounded-xl p-5 text-gold-400 text-sm leading-relaxed whitespace-pre-wrap font-mono">
{`Premium consultancy logo: circular ornate golden medallion
with Islamic 8-point star border on deep navy blue background.
Inside the medallion: large classical Arabic Thuluth calligraphy
spelling exactly "عرب داتش" in flowing gold strokes.
Below the calligraphy inside the circle: a detailed Dutch
windmill on the left, an elegant arched bridge in the center,
and an Islamic crescent moon on the right — all in gold.
Symmetrical, McKinsey-level premium, like an Ottoman imperial
seal. Gold (#D4A847) on navy (#0F1A30). Isolated logo,
no background, ultra detailed, vector clean style.`}
            </pre>
          </div>

          {/* Next steps */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="font-bold text-navy-900 text-xl mb-4">Volgende stap</h2>
            <ol className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="bg-gold-500 text-navy-900 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">1</span>
                Genereer nieuwe versie met bovenstaande prompt (focus op exacte Arabische spelling)
              </li>
              <li className="flex gap-3">
                <span className="bg-gold-500 text-navy-900 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">2</span>
                Sla op als <code className="bg-gray-200 px-2 py-0.5 rounded text-sm">public/logos/ai-calligraphy-v2.png</code>
              </li>
              <li className="flex gap-3">
                <span className="bg-gold-500 text-navy-900 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">3</span>
                Laat me weten — ik werk het dan uit als definitief logo, favicon en site-header
              </li>
            </ol>
          </div>

        </div>
      </section>
    </main>
  );
}
