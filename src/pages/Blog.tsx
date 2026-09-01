import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import posts from "../data/blogPosts";
import LuxeHero from "../components/LuxeHero";
import useSpotlight from "../components/Spotlight";

export default function Blog() {
  useSpotlight();
  useEffect(() => { document.title = "Blog, ArabDutch | Inzichten over Nederland & Arabische wereld"; }, []);

  return (
    <main className="pt-20 bg-[#0a0f1f]">
      <LuxeHero
        badge="Inzichten & updates"
        title={<>Verhalen vanuit<br /><span className="gradient-luxe italic">twee werelden</span></>}
        subtitle="Geen oppervlakkige content. Diepgaande analyses van onze opdrachten, marktontwikkelingen en culturele inzichten, uit eerste hand."
      />

      <section className="py-32 bg-luxe-mesh relative overflow-hidden noise-overlay">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((p, i) => (
              <motion.article key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}>
                <Link
                  to={`/blog/${p.slug}`}
                  data-spotlight
                  className="card-luxe rounded-3xl overflow-hidden block h-full group">
                  {p.afbeelding && (
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={p.afbeelding}
                        alt={p.titel}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f] via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="p-8 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="glass-gold text-gold-200 text-xs font-semibold px-3 py-1.5 rounded-full">{p.tag}</span>
                      <span className="flex items-center gap-1.5 text-white/40 text-xs">
                        <Calendar className="w-3 h-3" /> {p.datum}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-white text-3xl mb-4 leading-tight group-hover:text-gold-300 transition-colors">{p.titel}</h2>
                    <p className="text-white/60 leading-relaxed mb-5">{p.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold group-hover:gap-3 transition-all">
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
