import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Logos() {
  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Definitief</span>
          <h1 className="text-5xl font-serif font-bold mt-2">ArabDutch Logo</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-navy-900 rounded-3xl p-12 mb-8 shadow-2xl"
          >
            <img
              src="/logo.png"
              alt="ArabDutch definitief logo"
              className="w-80 h-80 mx-auto rounded-full object-cover"
            />
          </motion.div>

          <div className="flex items-center justify-center gap-3 bg-green-50 border border-green-200 rounded-2xl px-6 py-4 mb-8">
            <Check className="w-5 h-5 text-green-500" />
            <p className="text-green-800 font-semibold">Definitief logo — verwerkt in navbar, homepage en favicon</p>
          </div>

          <p className="text-gray-500 leading-relaxed">
            Gouden klassieke calligrafie · Ornamenteel medaillon · Windmolen · Brug · Halve maan
          </p>
        </div>
      </section>
    </main>
  );
}
