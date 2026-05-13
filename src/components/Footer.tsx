import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="ArabDutch" className="w-10 h-10 rounded-full object-cover" />
              <span className="text-white font-semibold text-lg">ArabDutch</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {t("footer.tagline")}
            </p>
            <div className="text-white/30 text-xs space-y-1">
              <p>KvK: <span className="text-white/50">86816632</span></p>
              <p>BTW: <span className="text-white/50">NL004319767B61</span></p>
            </div>
          </div>

          <div>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">{t("footer.nav")}</p>
            <div className="flex flex-col gap-2">
              {[
                { to: "/diensten", label: t("nav.services") },
                { to: "/pakketten", label: "Pakketten" },
                { to: "/strategiegesprek", label: "Strategiegesprek" },
                { to: "/inzichten", label: t("nav.insights") },
                { to: "/landen", label: t("nav.countries") },
                { to: "/over-ons", label: t("nav.about") },
                { to: "/blog", label: t("nav.blog") },
                { to: "/contact", label: t("nav.contact") },
              ].map(l => (
                <Link key={l.to} to={l.to} className="text-white/60 hover:text-white text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">{t("footer.legal")}</p>
            <div className="flex flex-col gap-2">
              {[
                { to: "/privacyverklaring", label: "Privacyverklaring" },
                { to: "/disclaimer", label: "Disclaimer" },
                { to: "/algemene-voorwaarden", label: "Algemene Voorwaarden" },
                { to: "/cookiebeleid", label: "Cookiebeleid" },
              ].map(l => (
                <Link key={l.to} to={l.to} className="text-white/60 hover:text-white text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">{t("footer.contact")}</p>
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
              <div className="flex gap-3 mt-2">
                <a href="https://www.youtube.com/@ArabDutch" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white/60 hover:text-white transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://x.com/ArabDutchbridge" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.622 5.905-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/arabdutch" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 text-white/60 hover:text-white transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} AO Services (ArabDutch) · {t("footer.rights")} · Eindhoven</p>
          <div className="flex gap-4">
            <Link to="/privacyverklaring" className="text-white/40 hover:text-white text-xs transition-colors">Privacy</Link>
            <Link to="/disclaimer" className="text-white/40 hover:text-white text-xs transition-colors">Disclaimer</Link>
            <Link to="/algemene-voorwaarden" className="text-white/40 hover:text-white text-xs transition-colors">AV</Link>
            <Link to="/cookiebeleid" className="text-white/40 hover:text-white text-xs transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
