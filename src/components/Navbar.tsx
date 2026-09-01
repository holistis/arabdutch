import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const links: { to: string; key?: string; label?: string }[] = [
    { to: "/", key: "nav.home" },
    { to: "/diensten", key: "nav.services" },
    { to: "/pakketten", label: "Pakketten" },
    { to: "/gratis-tools", label: "Gratis tools" },
    { to: "/inzichten", key: "nav.insights" },
    { to: "/landen", key: "nav.countries" },
    { to: "/over-ons", key: "nav.about" },
    { to: "/blog", key: "nav.blog" },
  ];

  const labelFor = (l: typeof links[0]) => l.label ?? t(l.key!);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-gold-500/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gold-500/40 blur-md group-hover:bg-gold-500/60 transition-all" />
            <img src="/logo.png" alt="ArabDutch" className="relative w-11 h-11 rounded-full object-cover ring-2 ring-gold-500/40 group-hover:ring-gold-500/80 transition-all" />
          </div>
          <span className="text-white font-semibold text-lg tracking-wide group-hover:text-gold-300 transition-colors">ArabDutch</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative text-sm font-medium transition-colors ${
                pathname === l.to ? "text-gold-400" : "text-white/70 hover:text-white"
              }`}
            >
              {labelFor(l)}
              {pathname === l.to && <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="btn-shine bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-dark border-t border-gold-500/10 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-white/80 hover:text-gold-300 font-medium transition-colors">
              {labelFor(l)}
            </Link>
          ))}
          <LanguageSwitcher mobile />
          <Link to="/contact" onClick={() => setOpen(false)}
            className="btn-shine bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold px-5 py-2 rounded-full text-center shadow-lg shadow-gold-500/30">
            {t("nav.cta")}
          </Link>
        </div>
      )}
    </nav>
  );
}
