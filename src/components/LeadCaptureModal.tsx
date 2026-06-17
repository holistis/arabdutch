import { useState } from "react";
import { X, Download, Lock, CheckCircle } from "lucide-react";
import { supabase } from "../lib/supabase";

interface Props {
  rapport: { titel: string; beschrijving: string; land?: string; isGratis?: boolean; prijs?: string };
  onClose: () => void;
}

export default function LeadCaptureModal({ rapport, onClose }: Props) {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bedrijf, setBedrijf] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  // Betaalde rapporten worden (nog) niet automatisch geleverd. Tot de levering
  // live is, vangen we geinteresseerde kopers eerlijk op een wachtlijst i.p.v.
  // ze naar een Stripe-betaling te sturen die niets oplevert.
  const isPremium = rapport.isGratis === false;

  async function submit(e: { preventDefault(): void }) {
    e.preventDefault();
    setStatus("loading");
    try {
      // 1. Sla lead op in Supabase
      await supabase.from("leads").insert({
        email,
        naam,
        bedrijf: bedrijf || null,
        land_interesse: rapport.land ?? null,
        bron: isPremium ? "wachtlijst-premium" : "rapport",
      });

      // 2. E-mail notificatie via Web3Forms (als key beschikbaar is)
      const key = import.meta.env.VITE_WEB3FORMS_KEY as string;
      if (key) {
        const fd = new FormData();
        fd.append("access_key", key);
        fd.append(
          "subject",
          isPremium
            ? `⭐ Wachtlijst premium-rapport: ${rapport.titel}`
            : `📥 Rapport download: ${rapport.titel}`,
        );
        fd.append("naam", naam);
        fd.append("email", email);
        fd.append("bedrijf", bedrijf || "—");
        fd.append("rapport", `${rapport.titel}${rapport.prijs ? ` (${rapport.prijs})` : ""}`);
        await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      }

      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <X className="w-5 h-5" />
        </button>

        {status === "done" ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">
              {isPremium ? "U staat op de wachtlijst" : "Aanvraag ontvangen"}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {isPremium ? (
                <>U krijgt als eerste bericht op <strong>{email}</strong> zodra dit premium-rapport
                  beschikbaar is, met een introductiekorting voor wie op de wachtlijst staat.</>
              ) : (
                <>Wij sturen u het rapport binnen 24 uur toe op <strong>{email}</strong>. Controleer ook uw spammap.</>
              )}
            </p>
            <button
              onClick={onClose}
              className="bg-navy-900 text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-navy-800 transition-colors"
            >
              Sluiten
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="flex items-center gap-2 mb-1">
              <Lock className="w-4 h-4 text-gold-500" />
              <span className="text-gold-500 text-xs font-semibold uppercase tracking-widest">
                {isPremium ? "Premium-rapport · wachtlijst" : "Gratis rapport"}
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-navy-900 mb-1 leading-tight">{rapport.titel}</h3>
            <p className="text-gray-500 text-sm mb-2">{rapport.beschrijving}</p>
            {isPremium && (
              <p className="text-gray-600 text-sm mb-6 bg-gold-500/5 border border-gold-500/20 rounded-lg p-3">
                Dit rapport wordt op dit moment afgerond. Laat uw gegevens achter en u krijgt als
                eerste bericht zodra het klaar is, met een introductiekorting.
              </p>
            )}

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Naam *</label>
                <input
                  required
                  value={naam}
                  onChange={e => setNaam(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                  placeholder="Jan de Vries"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">E-mailadres *</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                  placeholder="jan@bedrijf.nl"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Bedrijfsnaam</label>
                <input
                  value={bedrijf}
                  onChange={e => setBedrijf(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                  placeholder="Optioneel"
                />
              </div>
              {status === "error" && (
                <p className="text-red-500 text-xs">Er is iets misgegaan. Probeer het opnieuw of mail naar info@arabdutch.com.</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                {status === "loading"
                  ? "Versturen..."
                  : isPremium
                    ? "Zet mij op de wachtlijst"
                    : "Ontvang het rapport gratis"}
              </button>
              <p className="text-center text-xs text-gray-400">
                Geen spam. Uw gegevens worden vertrouwelijk behandeld conform onze privacyverklaring.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
