import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "arabdutch_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-navy-900 border border-white/10 rounded-2xl shadow-2xl px-6 py-5 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
          <p className="text-white/80 text-sm leading-relaxed">
            Wij gebruiken alleen functionele opslag om uw taalkeuze en deze melding te onthouden. Wij volgen u niet en gebruiken geen trackingcookies.
            Lees meer in ons{" "}
            <Link to="/cookiebeleid" className="text-gold-400 hover:underline">cookiebeleid</Link>{" "}
            en onze{" "}
            <Link to="/privacyverklaring" className="text-gold-400 hover:underline">privacyverklaring</Link>.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-white/50 hover:text-white text-sm transition-colors px-3 py-1.5"
          >
            Weigeren
          </button>
          <button
            onClick={accept}
            className="bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Accepteren
          </button>
          <button
            onClick={decline}
            aria-label="Sluiten"
            className="text-white/30 hover:text-white transition-colors ml-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
