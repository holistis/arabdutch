import { Users, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const teamGroepen = [
  {
    rol: "Directeur & Founder",
    omschrijving: "Stuurt het bedrijf aan en zorgt voor strategische richting en klantrelaties.",
    leden: ["Abdoellah"],
  },
  {
    rol: "Consultants",
    omschrijving: "Bieden op maat gemaakte adviezen en begeleiding bij projecten in beide markten.",
    leden: ["Ahmed", "Samir", "Yasmine", "Mariam"],
  },
  {
    rol: "Project Managers",
    omschrijving: "Coördineren de uitvoering van opdrachten en zorgen dat projecten soepel verlopen.",
    leden: ["Ismael", "Joyce", "Abdelsamad"],
  },
  {
    rol: "Marketing & Communicatie",
    omschrijving: "Versterkt onze zichtbaarheid, branding, website en interculturele communicatie.",
    leden: ["Harry"],
  },
  {
    rol: "Vertalers",
    omschrijving: "Faciliteren professionele vertalingen NL ↔ AR zodat communicatie altijd vloeiend verloopt.",
    leden: ["Mohammed", "Fatima"],
  },
  {
    rol: "Financiën & Administratie",
    omschrijving: "Beheert boekhouding, facturatie en financiële planning.",
    leden: ["Anton"],
  },
];

export default function OverOns() {
  useEffect(() => { document.title = "Over Ons — ArabDutch | Team & Missie"; }, []);
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
          <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-4">Ons team</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">
            Samen vormen wij een toegewijd team dat streeft naar professionaliteit, efficiëntie en duurzame samenwerking tussen Nederland en de Arabische wereld.
          </p>

          <div className="flex flex-col gap-12">
            {teamGroepen.map((groep, gi) => (
              <motion.div key={gi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.05 }}>
                <div className="flex items-center gap-4 mb-5">
                  <h3 className="font-bold text-navy-900 text-lg">{groep.rol}</h3>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <p className="text-gray-500 text-sm mb-5">{groep.omschrijving}</p>
                <div className="flex flex-wrap gap-4">
                  {groep.leden.map((naam, li) => (
                    <div key={li} className="bg-white rounded-2xl px-6 py-4 shadow-sm flex items-center gap-3">
                      <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-gold-400 font-bold text-sm">{naam[0]}</span>
                      </div>
                      <span className="font-semibold text-navy-900">{naam}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-navy-900 text-white rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              Daarnaast werken wij nauw samen met sterke partners en stakeholders in zowel Nederland als de Arabische wereld. Deze samenwerking stelt ons in staat om extra waarde te leveren, toegang te bieden tot een breed netwerk en succesvolle verbindingen te creëren voor al onze klanten.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
