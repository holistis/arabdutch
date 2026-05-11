import { useState } from "react";
import { Send, CheckCircle, Mail } from "lucide-react";
import { supabase } from "../lib/supabase";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

interface Props {
  variant?: "dark" | "light";
  compact?: boolean;
}

export default function NewsletterSignup({ variant = "dark", compact = false }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      await supabase.from("subscribers").insert({ email, bron: "newsletter" });
      if (WEB3FORMS_KEY) {
        const fd = new FormData();
        fd.append("access_key", WEB3FORMS_KEY);
        fd.append("subject", "📩 Nieuwe nieuwsbrief-inschrijving");
        fd.append("email", email);
        await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      }
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className={`${variant === "dark" ? "glass-gold" : "bg-gold-50 border border-gold-200"} rounded-2xl p-6 flex items-center gap-3`}>
        <CheckCircle className={`w-6 h-6 ${variant === "dark" ? "text-gold-300" : "text-gold-600"}`} />
        <p className={`text-sm ${variant === "dark" ? "text-white" : "text-navy-900"}`}>
          Bedankt! U ontvangt onze maandelijkse market intelligence in uw inbox.
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={submit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="uw@email.com"
          className={`flex-1 rounded-full px-5 py-3 text-sm focus:outline-none ${
            variant === "dark"
              ? "bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-gold-400"
              : "bg-white border-2 border-gray-200 text-navy-900 focus:border-gold-500"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-shine bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-gold-500/30 disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={submit} className={`${variant === "dark" ? "glass-strong" : "bg-white border border-gray-200 shadow-xl"} rounded-3xl p-8 md:p-10`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className={`font-display font-bold text-xl ${variant === "dark" ? "text-white" : "text-navy-900"}`}>
            ArabDutch Market Intelligence
          </p>
          <p className={`text-xs uppercase tracking-widest ${variant === "dark" ? "text-gold-300" : "text-gold-600"}`}>
            Maandelijks · gratis · 2.000+ lezers
          </p>
        </div>
      </div>
      <p className={`text-sm mb-6 leading-relaxed ${variant === "dark" ? "text-white/60" : "text-gray-500"}`}>
        Marktupdates, regelgeving en strategische inzichten over de Arabische wereld. Direct in uw inbox. Geen spam — uitschrijven kan altijd.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="uw@email.com"
          className={`flex-1 rounded-full px-5 py-3 text-sm focus:outline-none ${
            variant === "dark"
              ? "bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-gold-400"
              : "bg-gray-50 border-2 border-gray-200 text-navy-900 focus:border-gold-500"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-shine inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-gold-500/30 disabled:opacity-60"
        >
          {status === "loading" ? "Aanmelden..." : "Aanmelden"} <Send className="w-4 h-4" />
        </button>
      </div>
      {status === "error" && <p className="text-red-400 text-xs mt-3">Er ging iets mis. Probeer opnieuw.</p>}
    </form>
  );
}
