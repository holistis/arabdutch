import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Copy, Check, Lock, AlertTriangle, ArrowRight } from "lucide-react";
import LuxeHero from "../components/LuxeHero";
import useSpotlight from "../components/Spotlight";
import { GRATIS_TOOLS } from "../data/gratisTools";
import { supabase } from "../lib/supabase";

/**
 * /gratis-tools
 *
 * Bewuste ontwerpkeuze: de tools worden als TEKSTBLOK op de pagina zelf
 * geleverd, niet als PDF. Daarmee vervalt het leveringsprobleem dat de
 * rapporten wel hadden (een knop die belooft binnen 24 uur iets toe te sturen
 * dat nog gemaakt moet worden). Hier is de levering onmiddellijk en er is geen
 * bestand dat iemand moet aanmaken.
 *
 * Ze draaien in het eigen ChatGPT- of Claude-account van de bezoeker, dus er
 * zijn geen doorlopende kosten voor ons, hoeveel mensen dit ook gebruiken.
 */

const OPEN_KEY = "arabdutch_tools_open";

function KopieerKnop({ tekst }: { tekst: string }) {
  const [gekopieerd, setGekopieerd] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(tekst);
          setGekopieerd(true);
          setTimeout(() => setGekopieerd(false), 2000);
        } catch {
          // Klembord kan geblokkeerd zijn. Niet erg: de tekst staat al zichtbaar op de pagina.
        }
      }}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
        gekopieerd
          ? "bg-green-600 text-white"
          : "bg-navy-900 text-white hover:bg-navy-800"
      }`}
    >
      {gekopieerd ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {gekopieerd ? "Gekopieerd" : "Kopieer de prompt"}
    </button>
  );
}

export default function GratisTools() {
  useSpotlight();
  const [email, setEmail] = useState("");
  const [hpBedrijf, setHpBedrijf] = useState("");
  const [segment, setSegment] = useState<"" | "mijzelf" | "bedrijf">("");
  const [open, setOpen] = useState(false);
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(OPEN_KEY) === "1") {
      setOpen(true);
    }
  }, []);

  const ontgrendel = async () => {
    setFout("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFout("Vul een geldig e-mailadres in.");
      return;
    }
    if (!segment) {
      setFout("Geef even aan waarvoor u dit gebruikt, dat bepaalt wat wij u sturen.");
      return;
    }
    // Honeypot: bots vullen dit verborgen veld vaak in, echte bezoekers niet.
    if (hpBedrijf.trim().length > 0) {
      setOpen(true);
      return;
    }
    setBezig(true);
    try {
      await supabase.from("leads").insert({
        email,
        bron: `gratis-tools:${segment}`,
      });
    } catch {
      // Opslaan mislukt: de bezoeker mag daar geen last van hebben, hij krijgt de tools gewoon.
    } finally {
      setOpen(true);
      if (typeof window !== "undefined") localStorage.setItem(OPEN_KEY, "1");
      setBezig(false);
    }
  };

  return (
    <div className="bg-cream min-h-screen">
      <LuxeHero
        badge="Gratis, direct bruikbaar"
        title="Vijf hulpmiddelen die wij zelf gebruiken"
        subtitle="Geen download, geen wachttijd. U plakt ze in uw eigen ChatGPT of Claude en gebruikt ze vandaag nog."
      />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4"
        >
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-900 leading-relaxed">
            <p className="font-semibold mb-1">Waarom deze prompts u geen wetgeving uitleggen</p>
            <p>
              Taalmodellen verzinnen bij juridische vragen geregeld wetsartikelen, tarieven en termijnen die niet bestaan.
              Onderzoek van Stanford vond op dat type vraag foutpercentages tot ver boven de helft. Daarom laten deze
              hulpmiddelen de AI nooit de wet uitleggen. Ze interviewen u, structureren uw eigen situatie, of stellen de
              vragen die u aan een bank, agent of fiscalist moet stellen. De feiten komen van u, niet van het model.
            </p>
          </div>
        </motion.div>

        {!open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-12"
          >
            <h2 className="font-serif font-bold text-2xl text-navy-900 mb-2">
              Alle vijf tegelijk open
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Een e-mailadres opent ze allemaal. Wij sturen u hooguit een keer per maand iets, en u zegt met een klik op.
            </p>

            {/* Honeypot, verborgen voor echte bezoekers */}
            <div style={{ position: "absolute", left: "-9999px", height: 0, width: 0, overflow: "hidden" }} aria-hidden="true">
              <label>Bedrijf</label>
              <input type="text" tabIndex={-1} autoComplete="off" value={hpBedrijf} onChange={(e) => setHpBedrijf(e.target.value)} />
            </div>

            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
              Waarvoor gebruikt u dit?
            </label>
            <div className="flex gap-3 mb-5 flex-wrap">
              {([
                { v: "mijzelf", l: "Voor mijzelf, ik orienteer me" },
                { v: "bedrijf", l: "Voor mijn bedrijf, ik heb concrete plannen" },
              ] as const).map((o) => (
                <button
                  key={o.v}
                  type="button"
                  onClick={() => { setSegment(o.v); setFout(""); }}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                    segment === o.v
                      ? "bg-navy-900 text-white border-navy-900"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {o.l}
                </button>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setFout(""); }}
                onKeyDown={(e) => { if (e.key === "Enter") void ontgrendel(); }}
                placeholder="uw@bedrijf.nl"
                className="flex-1 min-w-[240px] px-5 py-3.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:outline-none text-navy-900"
              />
              <button
                type="button"
                onClick={() => void ontgrendel()}
                disabled={bezig}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold hover:from-gold-400 hover:to-gold-500 transition-all disabled:opacity-60"
              >
                {bezig ? "Even geduld" : "Open alle vijf"}
              </button>
            </div>
            {fout && <p className="text-red-600 text-sm mt-3">{fout}</p>}
          </motion.div>
        )}

        <div className="space-y-8">
          {GRATIS_TOOLS.map((tool, i) => (
            <motion.div
              key={tool.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              data-spotlight
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8"
            >
              <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-3">
                {tool.pijn}
              </p>
              <h3 className="font-serif font-bold text-2xl text-navy-900 mb-3">{tool.titel}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{tool.waarom}</p>

              {open ? (
                <>
                  <pre className="bg-navy-900 text-gray-100 rounded-2xl p-6 text-[13px] leading-relaxed whitespace-pre-wrap font-mono max-h-96 overflow-y-auto mb-4">
                    {tool.prompt}
                  </pre>
                  <KopieerKnop tekst={tool.prompt} />
                </>
              ) : (
                <div className="flex items-center gap-2 text-gray-400 text-sm bg-gray-50 rounded-xl px-5 py-4">
                  <Lock className="w-4 h-4" />
                  Vul hierboven uw e-mailadres in om deze te openen
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-navy-900 rounded-3xl p-10 text-center"
        >
          <h2 className="font-serif font-bold text-3xl text-white mb-4">
            Liever dat wij het samen doorlopen?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
            Deze hulpmiddelen brengen uw eigen situatie in kaart. Wilt u daarna weten wat in uw geval
            verstandig is, dan kijken we in een strategiegesprek samen naar de route.
          </p>
          <Link
            to="/strategiegesprek"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold px-8 py-4 rounded-full hover:from-gold-400 hover:to-gold-500 transition-all"
          >
            Bekijk het strategiegesprek <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
