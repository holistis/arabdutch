import { Globe, Handshake, Search, BookOpen, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const diensten = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Interculturele Training",
    desc: "Wij trainen uw team in culturele intelligentie — van communicatiestijlen tot onderhandelingsdynamiek. Onmisbaar wanneer u Arabische markten betreedt of partners uit de regio ontvangt.",
  },
  {
    icon: <Handshake className="w-7 h-7" />,
    title: "Business Matchmaking",
    desc: "U zoekt de juiste partner — wij vinden die voor u. Ons netwerk in Nederland én de Arabische wereld stelt ons in staat gerichte koppelingen te maken die tot echte resultaten leiden.",
  },
  {
    icon: <Search className="w-7 h-7" />,
    title: "Marktonderzoek",
    desc: "Voordat u investeert, wilt u weten wat u te wachten staat. Wij leveren diepgaande analyses van Arabische markten: consumentengedrag, regelgeving, concurrentie en lokale nuances.",
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Taal & Cultuur Consulting",
    desc: "Taal is meer dan woorden. Wij vertalen NL ↔ AR en begeleiden onderhandelingen, contractbesprekingen en introductiegesprekken — zodat elke boodschap overkomt zoals bedoeld.",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Lobbying & Advocacy",
    desc: "Wij openen deuren die anders gesloten blijven. Via ons netwerk en onze reputatie bij besluitvormers in Nederland én de Arabische wereld beïnvloeden wij beleid in uw voordeel.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Netwerkevenementen",
    desc: "Wij organiseren gerichte handelsmissies, tours en bijeenkomsten die duurzame zakelijke relaties opleveren — geen eenmalige handshakes, maar verbindingen die stand houden.",
  },
];

export default function Diensten() {
  useEffect(() => { document.title = "Diensten — ArabDutch | Consultancy Nederland & Arabische wereld"; }, []);
  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Wat wij bieden</span>
          <h1 className="text-5xl font-serif font-bold mt-2 max-w-2xl leading-tight">Onze diensten</h1>
          <p className="text-white/70 text-xl mt-4 max-w-2xl">
            Geen standaardpakketten. Elke opdracht is maatwerk — afgestemd op uw markt, uw sector en uw ambities.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {diensten.map((d, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 p-8 bg-gray-50 rounded-2xl hover:bg-gold-500/5 transition-colors border border-transparent hover:border-gold-500/20">
                <div className="w-14 h-14 bg-gold-500/10 text-gold-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {d.icon}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-xl mb-2">{d.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Interesse in een samenwerking?</h2>
          <p className="text-white/70 text-lg mb-8">Neem contact op voor een vrijblijvend gesprek over uw specifieke situatie.</p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-10 py-4 rounded-full transition-colors">
            Contact opnemen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
