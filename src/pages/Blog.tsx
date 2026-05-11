import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import posts from "../data/blogPosts";

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
                transition={{ delay: i * 0.1 }}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group block h-full bg-gray-50 rounded-2xl overflow-hidden hover:bg-gold-500/5 transition-colors border border-transparent hover:border-gold-500/20">
                  {p.afbeelding && (
                    <img
                      src={p.afbeelding}
                      alt={p.titel}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="p-8">
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
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
