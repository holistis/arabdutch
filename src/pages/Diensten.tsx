import { Globe, Handshake, Search, BookOpen, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const diensten = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Interculturele Training",
    desc: "Helpt individuen en organisaties navigeren in culturele verschillen en diversiteit. Onmisbaar voor teams die internationaal samenwerken of Arabische markten betreden.",
  },
  {
    icon: <Handshake className="w-7 h-7" />,
    title: "Business Matchmaking",
    desc: "Verbindt bedrijven en professionals om waardevolle zakelijke relaties op te bouwen. Wij kennen de juiste mensen aan beide kanten van de brug.",
  },
  {
    icon: <Search className="w-7 h-7" />,
    title: "Marktonderzoek",
    desc: "Analyseert consumentenbehoeften en ontwikkelt effectieve marketingstrategieën voor de Arabische markt. Inclusief documentatie, budgetten en lokale regelgeving.",
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Taal & Cultuur Consulting",
    desc: "Overbrugt communicatiekloven over taal en cultuur heen. Professionele vertaling NL ↔ AR en interculturele begeleiding bij onderhandelingen.",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Lobbying & Advocacy",
    desc: "Strategische beïnvloeding van besluitvorming voor organisaties of groepen die belangen hebben in zowel Nederland als de Arabische wereld.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Netwerkevenementen",
    desc: "Faciliteert nieuwe contacten en versterkt bestaande zakelijke relaties via gerichte evenementen en tours in Nederland en de Arabische regio.",
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
            Een realistisch en compleet overzicht van wat ArabDutch voor uw organisatie kan betekenen.
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
