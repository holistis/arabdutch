import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/diensten", label: "Diensten" },
  { to: "/ons-werk", label: "Ons werk" },
  { to: "/inzichten", label: "Inzichten" },
  { to: "/landen", label: "Landengidsen" },
  { to: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="ArabDutch" className="w-11 h-11 rounded-full object-cover" />
          <span className="text-white font-semibold text-lg tracking-wide">ArabDutch</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                pathname === l.to
                  ? "text-gold-400"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Neem contact op
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-900 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
