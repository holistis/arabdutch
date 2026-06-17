import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, FileText, Globe, TrendingUp, Building, Home as HomeIcon, Users, BookOpen, Sparkles, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import LeadCaptureModal from "../components/LeadCaptureModal";
import LuxeHero from "../components/LuxeHero";
import useSpotlight from "../components/Spotlight";

const categorieIcons: Record<string, React.ReactElement> = {
  bedrijfsoprichting: <Building className="w-4 h-4" />,
  belasting: <TrendingUp className="w-4 h-4" />,
  vastgoed: <HomeIcon className="w-4 h-4" />,
  leven: <Users className="w-4 h-4" />,
  cultuur: <BookOpen className="w-4 h-4" />,
  algemeen: <Globe className="w-4 h-4" />,
};

const categorieLabels: Record<string, string> = {
  bedrijfsoprichting: "Bedrijfsoprichting",
  belasting: "Belasting & Fiscaal",
  vastgoed: "Vastgoed",
  leven: "Leven als expat",
  cultuur: "Cultuur & Etiquette",
  algemeen: "Algemeen",
};

const landKleuren: Record<string, string> = {
  marokko: "from-red-900 via-red-700 to-green-900",
  vae: "from-red-800 via-green-700 to-green-900",
  "saoedi-arabie": "from-green-900 via-emerald-700 to-green-800",
  tunesie: "from-red-900 via-red-700 to-slate-900",
  egypte: "from-red-800 via-yellow-800 to-amber-900",
  jordanie: "from-green-800 via-red-700 to-red-900",
  qatar: "from-rose-900 via-purple-900 to-slate-900",
  libie: "from-green-900 via-emerald-900 to-slate-900",
  irak: "from-red-900 via-amber-900 to-slate-900",
  oman: "from-red-900 via-emerald-900 to-white",
  algemeen: "from-navy-900 to-slate-800",
};

// Pricing strategie: ArabDutch = 65% onder markt (McKinsey/BCG/BMI Research voor vergelijkbare scope)
// Tier 1 (Gratis): preview / light reports — lead magnet
// Tier 2 (€79): standaard country/topic report 20-30p
// Tier 3 (€149): diepgaand sector + actiegids 30-45p
// Tier 4 (€249): premium strategisch, met contacten + tools 40-60p

const rapporten = [
  // === GRATIS (lead magnets / previews) ===
  {
    slug: "zakendoen-marokko-2026",
    titel: "Zakendoen in Marokko 2026",
    beschrijving: "Toegankelijke introductie: bedrijfsoprichting, belasting, CFC-statuut, culturele etiquette en zakelijk netwerken in Marokko.",
    land: "marokko", landNaam: "Marokko", vlag: "🇲🇦",
    categorie: "bedrijfsoprichting", isGratis: true, paginas: 24, datum: "Mei 2026", tier: "intro",
  },
  {
    slug: "expat-vae-belasting",
    titel: "Expat in de VAE — Fiscale gids",
    beschrijving: "Geen inkomstenbelasting, maar wél verplichtingen in Nederland. Alles over uw fiscale positie als Dutch expat in Dubai of Abu Dhabi.",
    land: "vae", landNaam: "VAE", vlag: "🇦🇪",
    categorie: "belasting", isGratis: true, paginas: 20, datum: "Maart 2026", tier: "intro",
  },
  {
    slug: "leven-marokko-nederlander",
    titel: "Als Nederlander leven in Marokko",
    beschrijving: "Van uitschrijven in Nederland tot zorgverzekering, bankrekening, AOW en dagelijks leven in Casablanca, Rabat of Marrakech.",
    land: "marokko", landNaam: "Marokko", vlag: "🇲🇦",
    categorie: "leven", isGratis: true, paginas: 16, datum: "Mei 2026", tier: "intro",
  },
  {
    slug: "offshore-tunesie-nederlanders",
    titel: "Offshore ondernemen in Tunesië",
    beschrijving: "Het best bewaarde geheim van de Maghreb: 0% belasting via offshore-statuut, IT-talent voor €800/maand, 3 uur vliegen van Amsterdam.",
    land: "tunesie", landNaam: "Tunesië", vlag: "🇹🇳",
    categorie: "bedrijfsoprichting", isGratis: true, paginas: 14, datum: "April 2026", tier: "intro",
  },
  {
    slug: "culturele-etiquette-golfregio",
    titel: "Culturele etiquette in de Golfregio",
    beschrijving: "Onderhandelen, geschenken, kleding, ramadan, Majlis. Praktische handleiding voor uw eerste of vijftigste zakenreis naar VAE, KSA, Qatar of Oman.",
    land: "algemeen", landNaam: "Golfregio", vlag: "🕌",
    categorie: "cultuur", isGratis: true, paginas: 26, datum: "Mei 2026", tier: "intro",
  },

  // === €79 STANDAARD ===
  {
    slug: "vastgoed-marokko-complete-gids",
    titel: "Vastgoed in heel Marokko — Complete marktgids 2026",
    beschrijving: "De meest complete vastgoedgids voor Marokko: marktanalyse en rendementen per stad (Casablanca, Rabat, Marrakech, Tanger, Agadir, Fes), koopprocedure voor Nederlanders stap voor stap, belasting & notariskosten, hypotheekmogelijkheden en 18 geselecteerde projecten. Gratis 6-pagina preview.",
    land: "marokko", landNaam: "Marokko", vlag: "🇲🇦",
    categorie: "vastgoed", isGratis: false, paginas: 34, datum: "Mei 2026", prijs: "€79", marktPrijs: "€220", tier: "standaard",
    stripeUrl: "https://buy.stripe.com/14A00j3XW2oHdqe3yj7ok00",
  },
  {
    slug: "jordanie-asez-vrije-zone",
    titel: "Aqaba ASEZ — De stille winnaar",
    beschrijving: "Speciale Economische Zone Aqaba: 5% vennootschapsbelasting, 100% buitenlands eigendom, strategische haven richting Saoedi-Arabië en de Golf. Inclusief stappenplan.",
    land: "jordanie", landNaam: "Jordanië", vlag: "🇯🇴",
    categorie: "bedrijfsoprichting", isGratis: false, paginas: 24, datum: "Mei 2026", prijs: "€79", marktPrijs: "€220", tier: "standaard",
    stripeUrl: "https://buy.stripe.com/dRmfZh0LKaVd99Y5Gr7ok01",
  },
  {
    slug: "egypte-vastgoed-mar-mediterranee",
    titel: "Vastgoed Egypte — New Alamein & Noordkust",
    beschrijving: "De Mediterraanse goudkust: marktanalyse, vergunningseisen voor buitenlanders, rendementen en infrastructuurontwikkeling 2026-2030. Gratis preview beschikbaar.",
    land: "egypte", landNaam: "Egypte", vlag: "🇪🇬",
    categorie: "vastgoed", isGratis: false, paginas: 26, datum: "Juni 2026", prijs: "€79", marktPrijs: "€220", tier: "standaard",
    stripeUrl: "https://buy.stripe.com/dRmcN5fGE6EX99Yc4P7ok08",
  },

  // === €149 DIEPGAAND ===
  {
    slug: "saudi-vision-2030-kansen",
    titel: "Saudi Vision 2030 — Sectorkansen NL",
    beschrijving: "Diepgaande sector-analyse: van NEOM tot agritech, infrastructuur en watertechnologie. €1 biljoen investeringen ontleed per sector. Inclusief aanbestedingenmatrix en 25 lokale contacten.",
    land: "saoedi-arabie", landNaam: "Saoedi-Arabië", vlag: "🇸🇦",
    categorie: "bedrijfsoprichting", isGratis: false, paginas: 38, datum: "Februari 2026", prijs: "€149", marktPrijs: "€420", tier: "diepgaand",
    stripeUrl: "https://buy.stripe.com/14A3cv664fbt3PE1qb7ok02",
  },
  {
    slug: "qatar-financial-centre-gids",
    titel: "Qatar Financial Centre — Setup gids",
    beschrijving: "Volledige procedure voor Nederlandse ondernemers: QFC vs Free Zone, kapitaaleisen, belasting (10%), residency, bankvoorkeuren en compliance. Stap-voor-stap met juridische templates.",
    land: "qatar", landNaam: "Qatar", vlag: "🇶🇦",
    categorie: "bedrijfsoprichting", isGratis: false, paginas: 34, datum: "Juni 2026", prijs: "€149", marktPrijs: "€420", tier: "diepgaand",
    stripeUrl: "https://buy.stripe.com/dRm28r9ig4wP4TIgl57ok03",
  },
  {
    slug: "oman-2040-nederlandse-kansen",
    titel: "Oman Vision 2040 — Strategische kansen",
    beschrijving: "Geen Dubai-prijzen, wél strategische ligging. Sectoren: logistiek (Duqm), toerisme, mining en visserij. Belasting, residency, partnerstructuren en 15 geverifieerde lokale contacten.",
    land: "oman", landNaam: "Oman", vlag: "🇴🇲",
    categorie: "bedrijfsoprichting", isGratis: false, paginas: 36, datum: "Juni 2026", prijs: "€149", marktPrijs: "€420", tier: "diepgaand",
    stripeUrl: "https://buy.stripe.com/eVq3cv7a8bZh0Ds4Cn7ok04",
  },

  // === €249 PREMIUM ===
  {
    slug: "wk2030-marokko-aanbestedingen",
    titel: "WK 2030 Marokko — €5B aanbestedingen",
    beschrijving: "Premium strategische gids: alle 23 sectoren, €5 miljard aan stadia/HSR/hotels/luchthavens, tendering-procedures, 40+ lokale partnerprofielen, juridische templates en regionale prioriteiten Casablanca-Tanger-Marrakech-Agadir.",
    land: "marokko", landNaam: "Marokko", vlag: "🇲🇦",
    categorie: "bedrijfsoprichting", isGratis: false, paginas: 56, datum: "Juni 2026", prijs: "€249", marktPrijs: "€700", tier: "premium",
    stripeUrl: "https://buy.stripe.com/fZueVddyw2oH71Q0m77ok05",
  },
  {
    slug: "irak-wederopbouw-nederlandse-bedrijven",
    titel: "Irak wederopbouw — €88B kansenmatrix",
    beschrijving: "Premium-rapport: $88 miljard aan aanbestedingen tot 2030. Sectoren waterzuivering, energie, telecom, infrastructuur — gefocust op Koerdistan en Basra. Risk-rating per provincie, 30+ contacten, juridische analyse en sectie security/operations.",
    land: "irak", landNaam: "Irak", vlag: "🇮🇶",
    categorie: "bedrijfsoprichting", isGratis: false, paginas: 52, datum: "Juni 2026", prijs: "€249", marktPrijs: "€700", tier: "premium",
    stripeUrl: "https://buy.stripe.com/3cI6oH7a80gz5XMfh17ok06",
  },
  {
    slug: "vision-2030-vs-2040-vergelijking",
    titel: "Vision 2030 vs 2040 — Strategische landenkeuze",
    beschrijving: "De ultieme keuzegids: KSA, VAE, Qatar of Oman — welk land past bij welk type Nederlands bedrijf? Volledige beslismatrix, kosten-baten per sector, 50+ contacten regionaal, en ArabDutch's eigen positioneringsraamwerk.",
    land: "algemeen", landNaam: "Golfregio", vlag: "🕌",
    categorie: "bedrijfsoprichting", isGratis: false, paginas: 48, datum: "Mei 2026", prijs: "€249", marktPrijs: "€700", tier: "premium",
    stripeUrl: "https://buy.stripe.com/6oUfZhcus4wP3PEgl57ok07",
  },
];

const filters = ["Alle", "Marokko", "VAE", "Saoedi-Arabië", "Tunesië", "Qatar", "Egypte", "Jordanië", "Oman", "Irak", "Bedrijfsoprichting", "Belasting", "Vastgoed", "Leven", "Cultuur"];

export default function Inzichten() {
  useSpotlight();
  useEffect(() => { document.title = "Data & Inzichten — ArabDutch | Rapporten & Landengidsen"; }, []);
  const [actievFilter, setActievFilter] = useState("Alle");
  const [modalRapport, setModalRapport] = useState<typeof rapporten[0] | null>(null);

  const gefilterd = rapporten.filter(r => {
    if (actievFilter === "Alle") return true;
    const f = actievFilter.toLowerCase();
    return r.landNaam.toLowerCase() === f || r.categorie === f || categorieLabels[r.categorie]?.toLowerCase() === f;
  });

  return (
    <main className="pt-20 bg-[#0a0f1f]">
      <LuxeHero
        badge="Data & Inzichten"
        title={<>De meest complete<br /><span className="gradient-luxe italic">kennisbank</span></>}
        subtitle="Diepgaande rapporten, landengidsen en marktanalyses — opgesteld door ArabDutch op basis van jarenlange ervaring in Marokko, de Golf en de Levant. Voor investeerders, ondernemers en expats."
      >
        <div className="flex flex-wrap gap-12 border-t border-gold-500/20 pt-8 max-w-4xl">
          {[
            { n: "12+", label: "Publicaties" },
            { n: "10+", label: "Landen geanalyseerd" },
            { n: "8", label: "Gratis rapporten" },
            { n: "200+", label: "Pagina's research" },
          ].map(s => (
            <div key={s.label}>
              <p className="text-4xl font-display font-bold shimmer-text">{s.n}</p>
              <p className="text-white/40 text-sm mt-1 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </LuxeHero>

      {/* FEATURED */}
      <section className="py-20 bg-luxe-mesh relative overflow-hidden noise-overlay">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            data-spotlight
            className="card-luxe rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0">
            <div className="p-14 flex flex-col justify-between relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 glass-gold px-4 py-2 rounded-full w-fit">
                  <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                  <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">Aanbevolen</span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{rapporten[0].vlag}</span>
                  <span className="text-white/50 text-sm uppercase tracking-widest">{rapporten[0].landNaam} · {rapporten[0].datum}</span>
                </div>
                <h2 className="font-display font-bold text-white text-4xl md:text-5xl leading-tight mb-6">{rapporten[0].titel}</h2>
                <p className="text-white/60 leading-relaxed mb-8 text-lg">{rapporten[0].beschrijving}</p>
                <div className="flex items-center gap-5 text-white/40 text-sm mb-8">
                  <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {rapporten[0].paginas} pagina's</span>
                  <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> PDF</span>
                </div>
              </div>
              <button
                onClick={() => setModalRapport(rapporten[0])}
                className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-8 py-4 rounded-full transition-all w-fit shadow-xl shadow-gold-500/40"
              >
                <Download className="w-4 h-4" /> Gratis downloaden
              </button>
            </div>
            <div className={`bg-gradient-to-br ${landKleuren[rapporten[0].land]} p-14 flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-aurora opacity-30" />
              <div className="text-center relative z-10">
                <div className="text-9xl mb-6 drop-shadow-2xl">{rapporten[0].vlag}</div>
                <p className="text-white/70 text-xs uppercase tracking-[0.3em] mb-2">ArabDutch Research</p>
                <p className="text-white font-display text-3xl font-bold mt-2 max-w-sm">{rapporten[0].titel}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-32 bg-luxe-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(196,149,42,.3) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <div className="inline-flex items-center gap-3 mb-4 bg-gold-500/10 border border-gold-500/30 px-4 py-2 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-gold-600 text-xs font-semibold uppercase tracking-[0.25em]">Alle publicaties</span>
              </div>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-navy-900 leading-[0.95]">
                {gefilterd.length} {gefilterd.length === 1 ? "rapport" : "rapporten"}
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActievFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  actievFilter === f
                    ? "bg-navy-900 text-white shadow-lg shadow-navy-900/30"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gold-500/40 hover:text-gold-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gefilterd.map((r, i) => {
              const tierBadge = r.tier === "premium" ? { kleur: "bg-gradient-to-r from-purple-500 to-pink-500", label: "Premium" }
                : r.tier === "diepgaand" ? { kleur: "bg-gradient-to-r from-navy-700 to-navy-900", label: "Diepgaand" }
                : r.tier === "standaard" ? { kleur: "bg-gradient-to-r from-blue-600 to-blue-800", label: "Standaard" }
                : null;
              return (
              <motion.div key={r.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.05, 0.4) }}
                data-spotlight
                className="card-luxe-light rounded-3xl overflow-hidden group flex flex-col">
                <div className={`bg-gradient-to-br ${landKleuren[r.land] ?? "from-navy-900 to-slate-800"} h-40 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-aurora opacity-40" />
                  <span className="text-7xl drop-shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500">{r.vlag}</span>
                  {!r.isGratis && r.marktPrijs && (
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full">
                      <span className="text-[10px] font-bold text-red-600">−65%</span>
                    </div>
                  )}
                </div>
                <div className="p-7 flex-1 flex flex-col relative z-10">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="bg-gold-500/10 text-gold-600 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      {categorieIcons[r.categorie]} {categorieLabels[r.categorie]}
                    </span>
                    {r.isGratis
                      ? <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">Gratis</span>
                      : tierBadge && <span className={`${tierBadge.kleur} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>{tierBadge.label}</span>
                    }
                  </div>
                  <h3 className="font-display font-bold text-navy-900 text-2xl mb-3 leading-tight group-hover:text-gold-600 transition-colors">{r.titel}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{r.beschrijving}</p>

                  {!r.isGratis && (
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-3xl font-display font-bold text-navy-900">{r.prijs}</span>
                      {r.marktPrijs && <span className="text-gray-400 text-sm line-through pb-1">{r.marktPrijs}</span>}
                      {r.marktPrijs && <span className="text-green-600 text-xs font-semibold pb-1.5">marktprijs</span>}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-400 text-xs">{r.paginas} pag · {r.datum}</span>
                    <div className="flex items-center gap-3">
                      {!r.isGratis && (
                        <button
                          onClick={() => setModalRapport(r)}
                          className="flex items-center gap-1 text-gray-400 hover:text-gray-600 text-xs transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" /> Preview
                        </button>
                      )}
                      {r.isGratis ? (
                        <button
                          onClick={() => setModalRapport(r)}
                          className="flex items-center gap-1.5 text-gold-500 hover:text-gold-600 font-semibold text-sm transition-colors"
                        >
                          <Download className="w-4 h-4" /> Download
                        </button>
                      ) : (
                        // Betaalde rapporten: tot de automatische levering live is, gaat de
                        // knop naar de wachtlijst i.p.v. een Stripe-betaling zonder levering.
                        // (stripeUrl blijft in de data bewaard voor zodra de levering werkt.)
                        <button
                          type="button"
                          onClick={() => setModalRapport(r)}
                          className="flex items-center gap-1.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold text-xs px-4 py-2 rounded-full transition-all shadow-md shadow-gold-500/30"
                        >
                          Op wachtlijst · {r.prijs}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )})}
          </div>

          {/* Pricing toelichting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-20 bg-gradient-to-br from-navy-900 to-[#0a0f1f] rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-aurora opacity-30 pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-6 glass-gold px-4 py-2 rounded-full">
                  <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">Onze pricing</span>
                </div>
                <h3 className="font-display font-bold text-4xl mb-6 leading-tight">
                  Premium kwaliteit.<br /><span className="shimmer-text">65% onder marktprijs.</span>
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Onze rapporten hebben dezelfde diepgang als die van McKinsey, BCG of Euromonitor — maar geen €1.500+ per stuk. Wij geloven dat kwalitatieve kennis toegankelijk moet zijn voor het Nederlandse MKB, niet alleen voor Big 4 klanten.
                </p>
                <p className="text-white/50 text-sm">
                  Elk betaald rapport heeft een gratis preview van 6 pagina's, zodat u vooraf de kwaliteit en inhoud kunt beoordelen voor aanschaf.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { tier: "Gratis", desc: "Light reports & previews", prijs: "€0", scope: "14-26p" },
                  { tier: "Standaard", desc: "Country / topic report", prijs: "€79", scope: "20-30p", marktPrijs: "€220" },
                  { tier: "Diepgaand", desc: "Sector + actiegids", prijs: "€149", scope: "30-45p", marktPrijs: "€420" },
                  { tier: "Premium", desc: "Strategisch + contacten", prijs: "€249", scope: "40-60p", marktPrijs: "€700" },
                ].map((t, i) => (
                  <div key={i} className="glass-strong rounded-2xl p-5 flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-white text-lg">{t.tier}</p>
                      <p className="text-white/50 text-xs">{t.desc} · {t.scope}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-2xl text-gold-300">{t.prijs}</p>
                      {t.marktPrijs && <p className="text-white/30 text-xs line-through">markt: {t.marktPrijs}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LANDENGIDSEN CTA */}
      <section className="py-32 bg-luxe-mesh relative overflow-hidden noise-overlay">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-3 mb-6 glass-gold px-5 py-2.5 rounded-full">
                <span className="text-gold-200 text-xs font-semibold uppercase tracking-[0.25em]">Interactieve gidsen</span>
              </div>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-8 leading-[0.95]">
                Leven & ondernemen in<br />
                <span className="gradient-luxe italic">10 Arabische landen</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-10 text-lg">
                Wij weten als geen ander wat u moet weten: van belastingverdragen en verblijfsvergunningen tot bankrekeningen openen en zakelijke etiquette. Per land, per onderwerp — compleet en actueel.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {["🇲🇦 Marokko", "🇦🇪 VAE", "🇸🇦 Saoedi-Arabië", "🇹🇳 Tunesië", "🇪🇬 Egypte", "🇯🇴 Jordanië", "🇶🇦 Qatar", "🇮🇶 Irak", "🇱🇾 Libië", "🇴🇲 Oman"].map(l => (
                  <span key={l} className="glass-gold rounded-full px-4 py-1.5 text-sm font-medium text-white">{l}</span>
                ))}
              </div>
              <Link to="/landen"
                className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-gold-500/40">
                Bekijk alle landengidsen <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="grid grid-cols-2 gap-4">
              {[
                { icon: "📋", titel: "Belasting & verdragen", tekst: "Wat betaalt u en waar? Wij ontrafelen het." },
                { icon: "🏢", titel: "Bedrijf oprichten", tekst: "100% eigendom of joint venture?" },
                { icon: "🏠", titel: "Vastgoed kopen", tekst: "Regels, kosten en rendementen." },
                { icon: "📑", titel: "Visum & verblijf", tekst: "Van 90 dagen tot Golden Visa." },
                { icon: "🏥", titel: "Zorg & verzekering", tekst: "Uw vangnet in het buitenland." },
                { icon: "🤝", titel: "Zakelijke etiquette", tekst: "Doen en laten per Arabisch land." },
              ].map((k, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  data-spotlight
                  className="card-luxe rounded-2xl p-5">
                  <div className="text-3xl mb-2">{k.icon}</div>
                  <p className="font-display font-bold text-white text-base mb-1">{k.titel}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{k.tekst}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {modalRapport && (
        <LeadCaptureModal
          rapport={modalRapport}
          onClose={() => setModalRapport(null)}
        />
      )}
    </main>
  );
}
