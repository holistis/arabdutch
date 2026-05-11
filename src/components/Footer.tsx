import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AD</span>
              </div>
              <span className="text-white font-semibold text-lg">ArabDutch</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Bruggenbouwer tussen Nederland en de Arabische wereld. Cultuur, business en vertrouwen centraal.
            </p>
          </div>

          <div>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Navigatie</p>
            <div className="flex flex-col gap-2">
              {[
                { to: "/over-ons", label: "Over ons" },
                { to: "/diensten", label: "Diensten" },
                { to: "/ons-werk", label: "Ons werk" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map(l => (
                <Link key={l.to} to={l.to} className="text-white/60 hover:text-white text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@arabdutch.com" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4" /> info@arabdutch.com
              </a>
              <a href="tel:+31640840108" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4" /> +31 6 40 84 01 08
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> Boschdijk 520, 5621 JG Eindhoven
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} ArabDutch · Alle rechten voorbehouden</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Privacy</a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
