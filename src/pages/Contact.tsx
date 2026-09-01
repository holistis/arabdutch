import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Sparkles, Package } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import useSpotlight from "../components/Spotlight";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

const PAKKETTEN = [
  { titel: "Starter Marokko", prijs: "€3.000" },
  { titel: "Business Marokko", prijs: "€25.000" },
  { titel: "Enterprise Marokko", prijs: "€70.000" },
];

const LOSSE_DIENSTEN = [
  { titel: "Bedrijfsoprichting Marokko (SARL)", prijs: "€1.800" },
  { titel: "FZE in Dubai of Abu Dhabi", prijs: "€2.500" },
  { titel: "Bankaccount opening Marokko/VAE", prijs: "€950" },
  { titel: "Beëdigde NL ↔ AR vertaling (per pagina)", prijs: "€45" },
  { titel: "Live tolkdienst (per dag)", prijs: "€450" },
  { titel: "Cultureel training (per dag, in-house)", prijs: "€1.200" },
];

export default function Contact() {
  useSpotlight();
  const { t } = useTranslation();
  const location = useLocation();
  useEffect(() => { document.title = "Contact, ArabDutch | Neem contact op"; }, []);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [selected, setSelected] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  // Prefill via ?service=... query param (bv. vanuit Pakketten-pagina)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const svc = params.get("service");
    if (svc) setSelected([svc]);
  }, [location.search]);

  const toggle = (titel: string) => {
    setSelected(s => s.includes(titel) ? s.filter(x => x !== titel) : [...s, titel]);
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY ?? "");
    formData.append("subject", selected.length > 0
      ? `Offerte-aanvraag: ${selected.join(", ")}`
      : "Nieuw contactbericht via arabdutch.com");
    formData.append("from_name", "ArabDutch Website");
    formData.append("redirect", "false");
    if (selected.length > 0) {
      formData.append("geselecteerde_diensten", selected.join(" | "));
    }

    try {
      const endpoint = "https://api.web3forms.com/submit";
      const res = await fetch(endpoint, { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        formRef.current?.reset();
        setSelected([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="pt-20 bg-[#0a0f1f]">
      {/* HERO */}
      <section className="relative bg-luxe-mesh py-24 overflow-hidden noise-overlay">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full blur-3xl float-orb"
          style={{ background: "radial-gradient(circle, rgba(196,149,42,.3) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl float-orb"
          style={{ background: "radial-gradient(circle, rgba(244,215,138,.2) 0%, transparent 70%)", animationDelay: "4s" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-3 mb-8 glass-gold px-5 py-2.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">{t("contact.label")}</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white leading-[0.95] mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-white/70 text-xl max-w-2xl leading-relaxed font-light">
              {t("contact.sub")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-24 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(196,149,42,.3) 0%, transparent 60%)" }} />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 relative z-10">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            data-spotlight
            className="md:col-span-7 card-luxe-light rounded-3xl p-10 relative z-10">
            <h2 className="font-display font-bold text-4xl text-navy-900 mb-8">{t("contact.title")}</h2>

            {status === "sent" ? (
              <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/30 rounded-2xl p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-xl shadow-gold-500/40">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <p className="font-display font-bold text-3xl text-navy-900 mb-3">{t("contact.sent")}</p>
                <p className="text-gray-600 mb-8 text-lg">{t("contact.sentSub")}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-gold-600 font-semibold hover:underline"
                >
                  Nog een bericht sturen
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                {status === "error" && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-red-700 text-sm">{t("contact.error")}</p>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">{t("contact.name")}</label>
                  <input name="name" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">{t("contact.email")}</label>
                  <input name="email" type="email" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">{t("contact.company")}</label>
                  <input name="onderwerp" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>

                {/* SERVICE SELECTOR */}
                <div className="bg-gradient-to-br from-gold-500/5 to-transparent border-2 border-gold-500/20 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="w-4 h-4 text-gold-600" />
                    <label className="text-sm font-semibold text-navy-900">
                      Waarin bent u geïnteresseerd? <span className="text-gray-400 font-normal">(optioneel, meerdere mogelijk)</span>
                    </label>
                  </div>

                  <p className="text-xs font-semibold text-gold-700 uppercase tracking-widest mb-2">Pakketten Marokko</p>
                  <div className="grid sm:grid-cols-3 gap-2 mb-4">
                    {PAKKETTEN.map(p => {
                      const isSel = selected.includes(p.titel);
                      return (
                        <button
                          key={p.titel}
                          type="button"
                          onClick={() => toggle(p.titel)}
                          className={`text-left rounded-xl border-2 px-3 py-2.5 transition-all ${
                            isSel
                              ? "border-gold-500 bg-gold-500/10 shadow-md"
                              : "border-gray-200 bg-white hover:border-gold-500/40"
                          }`}>
                          <p className={`text-xs font-bold leading-tight ${isSel ? "text-navy-900" : "text-navy-900"}`}>{p.titel}</p>
                          <p className={`text-xs mt-0.5 ${isSel ? "text-gold-700" : "text-gray-400"}`}>vanaf {p.prijs}</p>
                        </button>
                      );
                    })}
                  </div>

                  <p className="text-xs font-semibold text-gold-700 uppercase tracking-widest mb-2">Losse diensten</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {LOSSE_DIENSTEN.map(d => {
                      const isSel = selected.includes(d.titel);
                      return (
                        <button
                          key={d.titel}
                          type="button"
                          onClick={() => toggle(d.titel)}
                          className={`flex items-start gap-2 text-left rounded-xl border-2 px-3 py-2 transition-all ${
                            isSel
                              ? "border-gold-500 bg-gold-500/10"
                              : "border-gray-200 bg-white hover:border-gold-500/40"
                          }`}>
                          <div className={`w-4 h-4 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                            isSel ? "bg-gold-500 border-gold-500" : "border-gray-300"
                          }`}>
                            {isSel && <CheckCircle className="w-3 h-3 text-white" strokeWidth={3} />}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold text-navy-900 leading-tight">{d.titel}</p>
                            <p className={`text-xs mt-0.5 ${isSel ? "text-gold-700 font-semibold" : "text-gray-400"}`}>{d.prijs}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {selected.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gold-500/20 flex items-center justify-between gap-3">
                      <p className="text-xs text-gray-600">
                        <span className="font-bold text-navy-900">{selected.length}</span> geselecteerd
                      </p>
                      <button type="button" onClick={() => setSelected([])}
                        className="text-xs text-gray-500 hover:text-gold-600 underline">
                        Selectie wissen
                      </button>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 mt-3 italic">
                    Niet zeker wat u zoekt? Laat het veld leeg en omschrijf uw vraag hieronder, wij denken met u mee.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">
                    {t("contact.message")} {selected.length === 0 && <span className="text-gray-400 font-normal text-xs">(of beschrijf vrij wat u zoekt)</span>}
                  </label>
                  <textarea name="message" required rows={5}
                    placeholder={selected.length > 0
                      ? "Vertel ons meer over uw situatie, tijdlijn en budget..."
                      : "Beschrijf vrijuit wat u zoekt, wij koppelen het aan de juiste dienst of stellen maatwerk voor."}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-500 transition-colors resize-none placeholder:text-gray-400 placeholder:text-sm" />
                </div>
                <button type="submit" disabled={status === "loading"} className="btn-shine inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-full transition-all w-full shadow-xl shadow-gold-500/30 hover:shadow-gold-500/50 mt-2">
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      {t("contact.sending")}
                    </>
                  ) : (
                    <>{t("contact.send")} <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-5 flex flex-col gap-4">
            <h2 className="font-display font-bold text-3xl text-navy-900 mb-2">{t("footer.contact")}</h2>
            {[
              { icon: <Mail className="w-5 h-5" />, label: "E-mail", value: "info@arabdutch.com", href: "mailto:info@arabdutch.com" },
              { icon: <Phone className="w-5 h-5" />, label: "Telefoon", value: "+31 6 40 84 01 08", href: "tel:+31640840108" },
              { icon: <MapPin className="w-5 h-5" />, label: "Adres", value: "Boschdijk 520, 5621 JG Eindhoven", href: "#" },
              { icon: <Clock className="w-5 h-5" />, label: "Bereikbaar", value: "Maandag t/m vrijdag, 9:00 – 20:00", href: "#" },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                data-spotlight
                className="card-luxe-light rounded-2xl p-6 flex gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500/15 to-gold-500/5 group-hover:from-gold-500 group-hover:to-gold-600 text-gold-500 group-hover:text-white rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-gold-500/40">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{c.label}</p>
                  <p className="font-display font-bold text-navy-900 text-lg group-hover:text-gold-600 transition-colors">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
