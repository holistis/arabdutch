import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projecten = [
  {
    datum: "Oktober 2025",
    tag: "Vastgoed & Investering",
    titel: "Van Nederland naar Marokko: investeerders naar Temara",
    desc: "Slimme investeerders kiezen voor Temara & Rabat. ArabDutch begeleidde Nederlandse investeerders bij het verkennen van vastgoedkansen in de snelst groeiende regio van Marokko.",
  },
  {
    datum: "September 2025",
    tag: "Innovatietour",
    titel: "Klantentour Saoedi-Arabië & Libië — Agritech Nederland",
    desc: "Een bijzondere tour waarbij cliënten uit Saoedi-Arabië en Libië kennis maakten met Nederlandse agritech-innovaties bij Hoogendoorn en LetsGrow.",
  },
  {
    datum: "Mei 2025",
    tag: "Partnership",
    titel: "ArabDutch & Manea — Cybersecurity in Afrika",
    desc: "Een nieuwe stap richting cybersecurityuitbreiding in Afrika via een strategisch partnership tussen ArabDutch en Manea (Saoedi-Arabië).",
  },
  {
    datum: "Juli 2024",
    tag: "Culturele Reis",
    titel: "Fossielenreis naar de Ourika Vallei, Marokko",
    desc: "Een onvergetelijke georganiseerde fossielenreis naar Marokko — cultuur, natuur en zakelijke relaties gecombineerd in één unieke ervaring.",
  },
];

export default function OnsWerk() {
  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Onze resultaten</span>
          <h1 className="text-5xl font-serif font-bold mt-2 max-w-2xl leading-tight">Ons werk</h1>
          <p className="text-white/70 text-xl mt-4 max-w-2xl">
            Van vastgoed­investeringen tot innovatietours — een greep uit onze projecten.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {projecten.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gold-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gold-500/10 text-gold-500 text-xs font-semibold px-3 py-1 rounded-full">{p.tag}</span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <Calendar className="w-3 h-3" /> {p.datum}
                  </span>
                </div>
                <h3 className="font-bold text-navy-900 text-xl mb-3 leading-tight">{p.titel}</h3>
                <p className="text-gray-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold-500 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Uw project op deze lijst?</h2>
          <p className="text-white/80 text-lg mb-8">Neem contact op en ontdek wat ArabDutch voor u kan realiseren.</p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-white text-gold-500 font-semibold px-10 py-4 rounded-full hover:bg-gold-50 transition-colors">
            Start een gesprek <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
