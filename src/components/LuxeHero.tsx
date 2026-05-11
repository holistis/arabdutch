import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

const Sparkle = ({ top, left, delay }: { top: string; left: string; delay: number }) => (
  <span className="sparkle-dot" style={{ top, left, animationDelay: `${delay}s` }} />
);

interface Props {
  badge: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  height?: "short" | "tall";
}

export default function LuxeHero({ badge, title, subtitle, children, height = "short" }: Props) {
  return (
    <section className={`relative bg-luxe-mesh ${height === "tall" ? "min-h-[80vh]" : "py-32"} flex items-center overflow-hidden noise-overlay`}>
      {/* floating orbs */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-3xl float-orb"
        style={{ background: "radial-gradient(circle, rgba(196,149,42,.3) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl float-orb"
        style={{ background: "radial-gradient(circle, rgba(244,215,138,.2) 0%, transparent 70%)", animationDelay: "4s" }} />

      {/* grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "100px 100px" }} />

      {/* sparkles */}
      <Sparkle top="20%" left="15%" delay={0} />
      <Sparkle top="40%" left="80%" delay={1.0} />
      <Sparkle top="70%" left="25%" delay={2.0} />
      <Sparkle top="30%" left="55%" delay={1.5} />
      <Sparkle top="80%" left="70%" delay={0.6} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}>
          <div className="inline-flex items-center gap-3 mb-8 glass-gold px-5 py-2.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">{badge}</span>
          </div>
          <h1 className="font-display font-bold text-white leading-[0.95] mb-8 text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/70 text-xl leading-relaxed max-w-3xl font-light">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-12">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
