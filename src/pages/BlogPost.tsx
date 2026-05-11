import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";
import posts, { Section } from "../data/blogPosts";

function renderSection(s: Section, i: number) {
  switch (s.type) {
    case "intro":
      return (
        <p key={i} className="text-xl text-gray-600 leading-relaxed font-light border-l-4 border-gold-500 pl-6 mb-8">
          {s.tekst}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-4">
          {s.tekst}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="text-gray-600 leading-relaxed mb-5">
          {s.tekst}
        </p>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-8 bg-navy-900 text-white rounded-2xl px-8 py-6">
          <p className="text-lg font-serif italic leading-relaxed">"{s.tekst}"</p>
        </blockquote>
      );
    case "lijst":
      return (
        <ul key={i} className="mb-5 space-y-2">
          {s.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-600">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "afbeelding":
      return (
        <figure key={i} className="my-8">
          <img
            src={s.src}
            alt={s.alt}
            className="w-full rounded-2xl object-cover max-h-96"
          />
          {s.bijschrift && (
            <figcaption className="text-sm text-gray-400 text-center mt-2 italic">
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

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Terug naar Blog
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-gold-500/20 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" /> {post.tag}
            </span>
            <span className="flex items-center gap-1 text-gray-400 text-sm">
              <Calendar className="w-3 h-3" /> {post.datum}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            {post.titel}
          </h1>
        </div>
      </section>

      {post.afbeelding && (
        <div className="max-w-4xl mx-auto px-6 -mt-8">
          <img
            src={post.afbeelding}
            alt={post.titel}
            className="w-full rounded-2xl object-cover max-h-[480px] shadow-2xl"
          />
        </div>
      )}

      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-6"
        >
          {post.inhoud.map((s, i) => renderSection(s, i))}

          <div className="mt-16 pt-8 border-t border-gray-100">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Terug naar alle artikelen
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
