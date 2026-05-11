import { Users, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

const team = [
  { role: "Oprichter & Directeur", name: "Abdoellah", desc: "Opgericht vanuit een persoonlijke missie om culturen te verbinden en expertise te delen tussen twee werelden." },
  { role: "Consultants", name: "4 specialisten", desc: "Ervaren professionals met diepgaande kennis van zowel de Nederlandse als Arabische zakelijke cultuur." },
  { role: "Projectmanagers", name: "3 managers", desc: "Zorgen voor soepele uitvoering van projecten in beide regio's." },
  { role: "Vertalers", name: "2 vertalers", desc: "Professionele vertaling en interculturele communicatie NL ↔ AR." },
];

export default function OverOns() {
  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Over ons</span>
          <h1 className="text-5xl font-serif font-bold mt-2 max-w-2xl leading-tight">
            Wie zijn wij?
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Onze achtergrond</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ArabDutch functioneert als brug tussen Nederland en de Arabische wereld en biedt consultancy en culturele bemiddelingsdiensten. Wij geloven dat succesvolle samenwerking begint met echt begrip.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              De oprichter vestigde ArabDutch vanuit een persoonlijke missie om culturen te verbinden en expertise te delen tussen beide regio's, gebruikmakend van zijn achtergrond als in Nederland geboren professional met sterke Arabische culturele banden.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Wij bieden gespecialiseerde begeleiding op maat voor vrouwen, afgestemd op Arabische culturele voorkeuren, naast onze bredere zakelijke dienstverlening.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: <Target className="w-5 h-5" />, title: "Onze missie", text: "Bruggen bouwen tussen Nederland en de Arabische wereld, met aandacht voor cultuur en duurzaamheid." },
              { icon: <Heart className="w-5 h-5" />, title: "Onze waarden", text: "Vertrouwen, cultureel respect, transparantie en duurzame samenwerking staan centraal in alles wat wij doen." },
              { icon: <Users className="w-5 h-5" />, title: "Ons netwerk", text: "Een breed netwerk van betrouwbare partners in Nederland, Marokko, Saudi-Arabië, Libië en verder." },
            ].map((v, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 bg-gold-500/10 text-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <p className="font-bold text-navy-900 mb-1">{v.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">Ons team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold-400 font-bold text-xl">{t.name[0]}</span>
                </div>
                <p className="font-bold text-navy-900">{t.name}</p>
                <p className="text-gold-500 text-xs font-semibold uppercase tracking-wide mb-3">{t.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
