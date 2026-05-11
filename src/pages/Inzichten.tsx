import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, FileText, Globe, TrendingUp, Building, Home as HomeIcon, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import LeadCaptureModal from "../components/LeadCaptureModal";

const categorieIcons: Record<string, React.ReactElement> = {
  bedrijfsoprichting: <Building className="w-5 h-5" />,
  belasting: <TrendingUp className="w-5 h-5" />,
  vastgoed: <HomeIcon className="w-5 h-5" />,
  leven: <Users className="w-5 h-5" />,
  cultuur: <BookOpen className="w-5 h-5" />,
  algemeen: <Globe className="w-5 h-5" />,
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
  marokko: "from-red-900 to-green-900",
  vae: "from-red-800 to-green-800",
  "saoedi-arabie": "from-green-900 to-green-700",
  tunesie: "from-red-800 to-slate-800",
  egypte: "from-red-800 to-yellow-900",
  jordanie: "from-green-800 to-red-800",
  qatar: "from-burgundy-900 to-gray-800",
  libie: "from-green-900 to-gray-900",
  irak: "from-red-900 to-gray-900",
  algemeen: "from-navy-900 to-slate-800",
};

const rapporten = [
  {
    slug: "zakendoen-marokko-2026",
    titel: "Zakendoen in Marokko 2026",
    beschrijving: "Volledig gids: bedrijfsoprichting, belasting, CFC-statuut, culturele etiquette en zakelijk netwerken in Marokko.",
    land: "marokko",
    landNaam: "Marokko",
    vlag: "🇲🇦",
    categorie: "bedrijfsoprichting",
    isGratis: true,
    paginas: 24,
    datum: "Mei 2026",
  },
  {
    slug: "vastgoed-marokko-temara",
    titel: "Vastgoedinvestering Temara & Rabat",
    beschrijving: "Marktanalyse van de snelst groeiende vastgoedmarkt in Marokko — rendement, risico, procedure en ArabDutch-selectie.",
    land: "marokko",
    landNaam: "Marokko",
    vlag: "🇲🇦",
    categorie: "vastgoed",
    isGratis: true,
    paginas: 18,
    datum: "April 2026",
  },
  {
    slug: "expat-vae-belasting",
    titel: "Expat in de VAE — Fiscale gids voor Nederlanders",
    beschrijving: "Geen inkomstenbelasting, maar wél verplichtingen in Nederland. Alles over uw fiscale positie als Dutch expat in Dubai of Abu Dhabi.",
    land: "vae",
    landNaam: "VAE",
    vlag: "🇦🇪",
    categorie: "belasting",
    isGratis: true,
    paginas: 20,
    datum: "Maart 2026",
  },
  {
    slug: "leven-marokko-nederlander",
    titel: "Als Nederlander leven in Marokko",
    beschrijving: "Van uitschrijven in Nederland tot zorgverzekering, bankrekening, AOW en dagelijks leven in Casablanca, Rabat of Marrakech.",
    land: "marokko",
    landNaam: "Marokko",
    vlag: "🇲🇦",
    categorie: "leven",
    isGratis: true,
    paginas: 16,
    datum: "Mei 2026",
  },
  {
    slug: "saudi-vision-2030-kansen",
    titel: "Saudi Vision 2030 — Kansen voor Nederlandse bedrijven",
    beschrijving: "Van NEOM tot agritech: concrete sectorkansen voor Nederlandse ondernemers in het transformerende Saoedi-Arabië.",
    land: "saoedi-arabie",
    landNaam: "Saoedi-Arabië",
    vlag: "🇸🇦",
    categorie: "bedrijfsoprichting",
    isGratis: false,
    paginas: 32,
    datum: "Februari 2026",
    prijs: "€49",
  },
  {
    slug: "offshore-tunesie-nederlanders",
    titel: "Offshore ondernemen in Tunesië",
    beschrijving: "Het best bewaarde geheim van de Maghreb: 0% belasting via offshore-statuut, IT-talent voor €800/maand, 3 uur vliegen van Amsterdam.",
    land: "tunesie",
    landNaam: "Tunesië",
    vlag: "🇹🇳",
    categorie: "bedrijfsoprichting",
    isGratis: true,
    paginas: 14,
    datum: "April 2026",
  },
];

const filters = ["Alle", "Marokko", "VAE", "Saoedi-Arabië", "Tunesië", "Bedrijfsoprichting", "Belasting", "Vastgoed", "Leven"];

export default function Inzichten() {
  useEffect(() => { document.title = "Data & Inzichten — ArabDutch | Rapporten & Landengidsen"; }, []);
  const [actievFilter, setActievFilter] = useState("Alle");
  const [modalRapport, setModalRapport] = useState<typeof rapporten[0] | null>(null);

  const gefilterd = rapporten.filter(r => {
    if (actievFilter === "Alle") return true;
    const f = actievFilter.toLowerCase();
    return r.landNaam.toLowerCase() === f || r.categorie === f || categorieLabels[r.categorie]?.toLowerCase() === f;
  });

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="bg-navy-900 text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] opacity-10 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #C4952A 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em]">Data & Inzichten</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.05] mb-6 max-w-4xl">
            De meest complete kennisbank over<br />
            <span className="text-gold-400">zakendoen tussen Nederland</span><br />
            en de Arabische wereld
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-12">
            Diepgaande rapporten, landengidsen en marktanalyses — opgesteld door ArabDutch op basis van jarenlange ervaring in Marokko, de Golf en de Levant. Voor investeerders, ondernemers en expats.
          </p>
          <div className="flex flex-wrap gap-12 border-t border-white/10 pt-8">
            {[
              { n: "10+", label: "Landen geanalyseerd" },
              { n: "6", label: "Publicaties beschikbaar" },
              { n: "4", label: "Categorieën" },
              { n: "Gratis", label: "Meeste rapporten" },
            ].map(s => (
              <div key={s.label}>
                <p className="text-3xl font-serif font-bold text-white">{s.n}</p>
                <p className="text-white/40 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED — eerste rapport */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-0 bg-navy-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 flex flex-col justify-between">
              <div>
                <span className="bg-gold-500/20 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full">Aanbevolen publicatie</span>
                <div className="flex items-center gap-2 mt-6 mb-3">
                  <span className="text-2xl">{rapporten[0].vlag}</span>
                  <span className="text-white/50 text-sm">{rapporten[0].landNaam} · {rapporten[0].datum}</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-white leading-tight mb-4">{rapporten[0].titel}</h2>
                <p className="text-white/60 leading-relaxed mb-8">{rapporten[0].beschrijving}</p>
                <div className="flex items-center gap-4 text-white/40 text-sm mb-8">
                  <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {rapporten[0].paginas} pagina's</span>
                  <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> PDF-rapport</span>
                </div>
              </div>
              <button
                onClick={() => setModalRapport(rapporten[0])}
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-semibold px-8 py-4 rounded-full transition-colors w-fit"
              >
                <Download className="w-4 h-4" /> Gratis downloaden
              </button>
            </div>
            <div className="bg-gradient-to-br from-gold-500/20 to-navy-800 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-6">{rapporten[0].vlag}</div>
                <p className="text-white/60 text-sm uppercase tracking-widest">ArabDutch Research</p>
                <p className="text-gold-400 font-serif text-2xl font-bold mt-2">{rapporten[0].titel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-3xl font-serif font-bold text-navy-900">Alle publicaties</h2>
            <div className="flex flex-wrap gap-2">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActievFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    actievFilter === f
                      ? "bg-navy-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gefilterd.map((r, i) => (
              <motion.div key={r.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-500/30 transition-all hover:shadow-lg group"
              >
                <div className={`bg-gradient-to-br ${landKleuren[r.land] ?? "from-navy-900 to-slate-800"} h-32 flex items-center justify-center`}>
                  <div className="text-center">
                    <span className="text-5xl">{r.vlag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gold-500/10 text-gold-600 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      {categorieIcons[r.categorie]} {categorieLabels[r.categorie]}
                    </span>
                    {r.isGratis
                      ? <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">Gratis</span>
                      : <span className="bg-navy-100 text-navy-700 text-xs font-semibold px-2.5 py-1 rounded-full">{r.prijs}</span>
                    }
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg mb-2 leading-tight group-hover:text-gold-600 transition-colors">{r.titel}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{r.beschrijving}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{r.paginas} pag. · {r.datum}</span>
                    <button
                      onClick={() => setModalRapport(r)}
                      className="flex items-center gap-1.5 text-gold-500 hover:text-gold-600 font-semibold text-sm transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {r.isGratis ? "Download" : "Koop"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LANDENGIDSEN CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold-500" />
                <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em]">Interactieve gidsen</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6 leading-tight">
                Als Nederlander of Vlaming leven<br />en ondernemen in Arabische landen
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Wij weten als geen ander wat u moet weten: van belastingverdragen en verblijfsvergunningen tot bankrekeningen openen en zakelijke etiquette. Per land, per onderwerp — compleet en actueel.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["🇲🇦 Marokko", "🇦🇪 VAE", "🇸🇦 Saoedi-Arabië", "🇹🇳 Tunesië", "🇪🇬 Egypte", "🇯🇴 Jordanië", "🇶🇦 Qatar", "🇮🇶 Irak"].map(l => (
                  <span key={l} className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-navy-900">{l}</span>
                ))}
              </div>
              <Link to="/landen"
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-full transition-colors">
                Bekijk alle landengidsen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "📋", titel: "Belasting & verdragen", tekst: "Wat betaalt u en waar? Wij ontrafelen het." },
                { icon: "🏢", titel: "Bedrijf oprichten", tekst: "100% eigendom of joint venture? Stap-voor-stap." },
                { icon: "🏠", titel: "Vastgoed kopen", tekst: "Regels, kosten, procedures en rendementen." },
                { icon: "📑", titel: "Visum & verblijf", tekst: "Van 90 dagen tot Golden Visa — uw opties." },
                { icon: "🏥", titel: "Zorg & verzekering", tekst: "ZVW, CNSS, AOW — uw vangnet in het buitenland." },
                { icon: "🤝", titel: "Zakelijke etiquette", tekst: "Doen en laten in elk Arabisch land." },
              ].map((k, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="text-2xl mb-2">{k.icon}</div>
                  <p className="font-bold text-navy-900 text-sm mb-1">{k.titel}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{k.tekst}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NIEUWSBRIEF */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Blijf voorop met ArabDutch Inzichten</h2>
          <p className="text-white/60 mb-8">Nieuwe rapporten, marktanalyses en landenupdates direct in uw inbox. Maandelijks. Geen spam.</p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-semibold px-10 py-4 rounded-full transition-colors text-lg">
            Inschrijven voor nieuwsbrief <ArrowRight className="w-4 h-4" />
          </Link>
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
