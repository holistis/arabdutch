import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    datum: "14 oktober 2025",
    tag: "Investering",
    titel: "Van Nederland naar Marokko: waarom slimme investeerders kiezen voor Temara",
    excerpt: "Nieuwe contacten, groeiende kansen en vastgoed in Marokko: Temara & Rabat in de spotlight.",
  },
  {
    datum: "9 september 2025",
    tag: "Innovatie",
    titel: "Bruggen bouwen met innovatie: een succesvolle klantentour uit Saoedi-Arabië en Libië",
    excerpt: "Onlangs begeleidde ArabDutch een bijzondere klantentour met bezoeken aan Hoogendoorn en LetsGrow voor agritech-technologieën.",
  },
  {
    datum: "13 mei 2025",
    tag: "Partnership",
    titel: "Partnership met Manea Saoedi-Arabië",
    excerpt: "ArabDutch & Manea — een nieuwe stap richting cybersecurity-uitbreiding in Afrika.",
  },
  {
    datum: "31 juli 2024",
    tag: "Cultuur & Reizen",
    titel: "Fossielen zoeken en ontspannen in de Ourika Vallei",
    excerpt: "Een onvergetelijke fossielenreis naar Marokko — georganiseerd door ArabDutch.",
  },
];

export default function Blog() {
  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Inzichten & updates</span>
          <h1 className="text-5xl font-serif font-bold mt-2">Blog</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((p, i) => (
              <motion.article key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-gold-500/5 transition-colors border border-transparent hover:border-gold-500/20 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gold-500/10 text-gold-500 text-xs font-semibold px-3 py-1 rounded-full">{p.tag}</span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <Calendar className="w-3 h-3" /> {p.datum}
                  </span>
                </div>
                <h2 className="font-bold text-navy-900 text-xl mb-3 leading-tight group-hover:text-gold-500 transition-colors">{p.titel}</h2>
                <p className="text-gray-500 leading-relaxed mb-4">{p.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-gold-500 text-sm font-semibold group-hover:gap-2 transition-all">
                  Lees meer <ArrowRight className="w-4 h-4" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
