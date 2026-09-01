import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, ArrowRight, Sparkles, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import posts, { type Section } from "../data/blogPosts";

function renderSection(s: Section, i: number) {
  switch (s.type) {
    case "intro":
      return (
        <p key={i} className="text-2xl text-gray-700 leading-relaxed font-light border-l-4 border-gold-500 pl-8 mb-10 italic">
          {s.tekst}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="font-display font-bold text-4xl text-navy-900 mt-14 mb-5 leading-tight">
          {s.tekst}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="text-gray-600 leading-relaxed mb-6 text-lg">
          {s.tekst}
        </p>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-12 bg-gradient-to-br from-navy-900 to-[#0a0f1f] text-white rounded-3xl px-10 py-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-aurora opacity-30" />
          <Quote className="w-10 h-10 text-gold-400 mb-4 relative z-10" />
          <p className="text-2xl font-display italic leading-relaxed relative z-10">"{s.tekst}"</p>
        </blockquote>
      );
    case "lijst":
      return (
        <ul key={i} className="mb-8 space-y-3">
          {s.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-700 text-lg leading-relaxed">
              <span className="mt-2.5 w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "afbeelding":
      return (
        <figure key={i} className="my-10">
          <img
            src={s.src}
            alt={s.alt}
            className="w-full rounded-3xl object-cover max-h-[500px] shadow-2xl"
          />
          {s.bijschrift && (
            <figcaption className="text-sm text-gray-500 text-center mt-4 italic">
              {s.bijschrift}
            </figcaption>
          )}
        </figure>
      );
    case "video":
      return (
        <figure key={i} className="my-10 flex flex-col items-center">
          <div className="w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "9/16" }}>
            <iframe
              src={`https://www.youtube.com/embed/${s.videoId}?rel=0`}
              title={s.videotitel || "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          {s.bijschrift && (
            <figcaption className="text-sm text-gray-500 text-center mt-4 italic">
              {s.bijschrift}
            </figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) document.title = `${post.titel}, ArabDutch Blog`;
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const otherPosts = posts.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="pt-20 bg-[#0a0f1f]">
      {/* HERO */}
      <section className="relative bg-luxe-mesh py-24 overflow-hidden noise-overlay">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full blur-3xl float-orb"
          style={{ background: "radial-gradient(circle, rgba(196,149,42,.3) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold-300 text-sm font-semibold hover:gap-3 transition-all mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Terug naar Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="inline-flex items-center gap-2 glass-gold text-gold-200 text-xs font-semibold px-4 py-2 rounded-full">
                <Tag className="w-3 h-3" /> {post.tag}
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/40 text-sm">
                <Calendar className="w-3.5 h-3.5" /> {post.datum}
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white leading-[1.05] max-w-4xl">
              {post.titel}
            </h1>
            {post.excerpt && (
              <p className="text-white/60 text-xl mt-6 max-w-3xl font-light leading-relaxed">{post.excerpt}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* HERO IMAGE */}
      {post.afbeelding && (
        <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            src={post.afbeelding}
            alt={post.titel}
            className="w-full rounded-3xl object-cover max-h-[520px] shadow-2xl ring-4 ring-gold-500/20"
          />
        </div>
      )}

      {/* CONTENT */}
      <section className="py-24 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(196,149,42,.3) 0%, transparent 60%)" }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto px-6 relative z-10"
        >
          {post.inhoud.map((s, i) => renderSection(s, i))}

          <div className="mt-20 pt-10 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Alle artikelen
            </Link>
            <Link
              to="/contact"
              className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-gold-500/30"
            >
              Plan een gesprek <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* GERELATEERD */}
      {otherPosts.length > 0 && (
        <section className="py-24 bg-luxe-mesh relative overflow-hidden noise-overlay">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="inline-flex items-center gap-3 mb-8 glass-gold px-5 py-2.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">Verder lezen</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-12">Misschien ook interessant</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {otherPosts.map(p => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="card-luxe rounded-3xl overflow-hidden group block"
                >
                  {p.afbeelding && (
                    <div className="relative overflow-hidden h-56">
                      <img src={p.afbeelding} alt={p.titel} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f] via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="glass-gold text-gold-200 text-xs font-semibold px-3 py-1 rounded-full">{p.tag}</span>
                      <span className="text-white/40 text-xs">{p.datum}</span>
                    </div>
                    <h3 className="font-display font-bold text-white text-2xl mb-3 leading-tight group-hover:text-gold-300 transition-colors">{p.titel}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
