import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Sparkles, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import LuxeHero from "../components/LuxeHero";
import useSpotlight from "../components/Spotlight";
import { supabase } from "../lib/supabase";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

const pakketten = [
  {
    duur: "30 min",
    titel: "Quick Strategy Call",
    prijs: "€149",
    marktPrijs: "€420",
    ideaal: "Eerste oriëntatie, gerichte vraag",
    levering: "Direct via video-call, follow-up notities binnen 24u",
    stripeLink: "https://buy.stripe.com/aFafZhcusfbtae29WH7ok09",
    features: [
      "30-minuten one-on-one met senior consultant",
      "Vooraf intake-formulier voor focus",
      "Schriftelijke samenvatting en next steps",
      "Toegang tot kennisbank (3 maanden)",
    ],
    populair: false,
  },
  {
    duur: "60 min",
    titel: "Deep Dive Strategy",
    prijs: "€299",
    marktPrijs: "€840",
    ideaal: "Diepgaand vraagstuk, marktentree-strategie",
    levering: "Video-call + analyse-document, follow-up gesprek na 14 dagen",
    stripeLink: "https://buy.stripe.com/14A9AT0LK5AT0Dsc4P7ok0a",
    features: [
      "60-minuten diepgaande sessie",
      "Maatwerk-analyse vooraf op uw casus",
      "Concreet actieplan met fasering",
      "Toegang tot kennisbank (6 maanden)",
      "Follow-up call van 30 min binnen 30 dagen",
      "WhatsApp-support 2 weken na gesprek",
    ],
    populair: true,
  },
  {
    duur: "90 min",
    titel: "Executive Strategy Session",
    prijs: "€499",
    marktPrijs: "€1.400",
    ideaal: "Board-level beslissing, multi-landenstrategie",
    levering: "Premium video-call met 2 consultants, volledig strategiedocument",
    stripeLink: "https://buy.stripe.com/14AeVdgKId3lae22uf7ok0b",
    features: [
      "90-minuten met 2 senior consultants (NL + AR expertise)",
      "Pre-call due diligence van uw markt",
      "Volledig strategiedocument (25-40p)",
      "Toegang tot kennisbank (12 maanden)",
      "2 follow-up calls binnen 90 dagen",
      "Directe WhatsApp-toegang tot consultant",
      "20% korting op vervolg-engagement",
    ],
    populair: false,
  },
];

export default function Strategiegesprek() {
  useSpotlight();
  useEffect(() => { document.title = "Strategiegesprek — ArabDutch | Boek een 1-op-1 met senior consultant"; }, []);

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ naam: "", email: "", bedrijf: "", pakket: "", vraag: "" });

  async function submit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await supabase.from("leads").insert({
        naam: form.naam,
        email: form.email,
        bedrijf: form.bedrijf || null,
        land_interesse: form.pakket,
        bron: "strategiegesprek",
      });
      if (WEB3FORMS_KEY) {
        const fd = new FormData();
        fd.append("access_key", WEB3FORMS_KEY);
        fd.append("subject", `📞 Boekingsverzoek: ${form.pakket}`);
        fd.append("naam", form.naam);
        fd.append("email", form.email);
        fd.append("bedrijf", form.bedrijf || "—");
        fd.append("pakket", form.pakket);
        fd.append("vraag", form.vraag);
        await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      }
      setSubmitted(true);
    } catch { /* fail silent */ }
  }

  return (
    <main className="pt-20 bg-[#0a0f1f]">
      <LuxeHero
        badge="Strategiegesprek"
        title={<>Praat direct met een<br /><span className="gradient-luxe italic">senior consultant</span></>}
        subtitle="Geen verkoopgesprek. Geen aannames. Een gerichte strategische sessie waarin wij uw vraagstuk diepgaand bespreken en u met een concreet actieplan vertrekt."
      />

      {/* PAKKETTEN */}
      <section className="py-32 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(196,149,42,.3) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {pakketten.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                data-spotlight
                className={`relative rounded-3xl p-8 flex flex-col ${
                  p.populair
                    ? "bg-gradient-to-br from-navy-900 to-[#0a0f1f] text-white shadow-2xl shadow-gold-500/30 ring-4 ring-gold-500/30 scale-105 md:scale-110"
                    : "card-luxe-light"
                }`}
              >
                {p.populair && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-widest">
                    Meest gekozen
                  </div>
                )}
                <div className="mb-4">
                  <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3 ${p.populair ? "text-gold-300" : "text-gold-600"}`}>
                    <Clock className="w-3.5 h-3.5" /> {p.duur}
                  </div>
                  <h3 className={`font-display font-bold text-3xl leading-tight mb-2 ${p.populair ? "text-white" : "text-navy-900"}`}>{p.titel}</h3>
                  <p className={`text-sm ${p.populair ? "text-white/60" : "text-gray-500"}`}>{p.ideaal}</p>
                </div>

                <div className="flex items-end gap-3 mb-6">
                  <span className={`font-display font-bold text-5xl ${p.populair ? "shimmer-text" : "text-navy-900"}`}>{p.prijs}</span>
                  <div className="pb-2">
                    <p className={`text-xs line-through ${p.populair ? "text-white/40" : "text-gray-400"}`}>{p.marktPrijs}</p>
                    <p className={`text-xs font-semibold ${p.populair ? "text-green-400" : "text-green-600"}`}>Markt-tarief</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className={`flex gap-3 text-sm ${p.populair ? "text-white/80" : "text-gray-700"}`}>
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.populair ? "text-gold-300" : "text-gold-500"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={p.stripeLink || "#boeken"}
                  target={p.stripeLink ? "_blank" : undefined}
                  rel={p.stripeLink ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (!p.stripeLink) {
                      e.preventDefault();
                      setForm(f => ({ ...f, pakket: p.titel }));
                      document.getElementById("boeken")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`btn-shine inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition-all w-full ${
                    p.populair
                      ? "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white shadow-xl shadow-gold-500/40"
                      : "bg-navy-900 hover:bg-navy-800 text-white shadow-lg"
                  }`}
                >
                  Boek {p.duur} — {p.prijs} <ArrowRight className="w-4 h-4" />
                </a>
                <p className={`text-center text-xs mt-3 ${p.populair ? "text-white/40" : "text-gray-400"}`}>
                  <Shield className="w-3 h-3 inline mr-1" /> 100% geld terug bij ongenoegen
                </p>
              </motion.div>
            ))}
          </div>

          {/* BOEKINGSFORM */}
          <div id="boeken" className="mt-24 grid md:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="md:col-span-5">
              <div className="inline-flex items-center gap-3 mb-4 bg-gold-500/10 border border-gold-500/30 px-4 py-2 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                <span className="text-gold-600 text-xs font-semibold uppercase tracking-[0.25em]">Aanvragen</span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-900 leading-[0.95] mb-6">
                Klaar om een<br /><span className="text-gold-600">strategie te ontwikkelen</span>?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                Vul het formulier in en wij sturen u binnen 1 werkdag de boekings­bevestiging met betaal­link en intake-vragen.
              </p>
              <div className="space-y-3">
                {[
                  "Senior consultants — geen junior medewerkers",
                  "Voorbereiding op basis van uw industrie",
                  "100% vertrouwelijk — NDA op verzoek",
                  "Geld-terug-garantie binnen 14 dagen",
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              data-spotlight
              className="md:col-span-7 card-luxe-light rounded-3xl p-10">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-xl">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-navy-900 mb-3">Verzoek ontvangen</h3>
                  <p className="text-gray-600 mb-6">Wij sturen u binnen 1 werkdag de betaalbevestiging en intake-vragen.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-2">Naam *</label>
                      <input required value={form.naam} onChange={e => setForm(f => ({ ...f, naam: e.target.value }))}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-2">E-mail *</label>
                      <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Bedrijf</label>
                    <input value={form.bedrijf} onChange={e => setForm(f => ({ ...f, bedrijf: e.target.value }))}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Pakket *</label>
                    <select required value={form.pakket} onChange={e => setForm(f => ({ ...f, pakket: e.target.value }))}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors">
                      <option value="">Kies een pakket...</option>
                      {pakketten.map(p => <option key={p.titel}>{p.titel} ({p.duur} · {p.prijs})</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Korte beschrijving van uw vraag *</label>
                    <textarea required rows={4} value={form.vraag} onChange={e => setForm(f => ({ ...f, vraag: e.target.value }))}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="btn-shine inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-8 py-4 rounded-full transition-all w-full shadow-xl shadow-gold-500/30">
                    Verzoek versturen <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-luxe-mesh relative overflow-hidden noise-overlay">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Liever eerst een vrijblijvend gesprek?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Stuur ons een bericht en wij bellen binnen 1 werkdag terug — zonder kosten of verplichting.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 glass-strong hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-full transition-all">
            Contact opnemen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
