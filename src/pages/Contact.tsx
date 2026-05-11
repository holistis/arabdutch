import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Later koppelen aan emaildienst
    setSent(true);
  };

  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Bereikbaar</span>
          <h1 className="text-5xl font-serif font-bold mt-2">Contact</h1>
          <p className="text-white/70 text-xl mt-4 max-w-xl">
            Welkom bij ArabDutch — uw bruggenbouwer tussen Nederland en de Arabische wereld.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">Neem contact op</h2>
            {sent ? (
              <div className="bg-gold-500/10 border border-gold-500/30 rounded-2xl p-8 text-center">
                <p className="text-2xl font-bold text-navy-900 mb-2">Bedankt!</p>
                <p className="text-gray-600">We nemen zo snel mogelijk contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">Naam</label>
                  <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Uw voor- en achternaam" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">E-mailadres</label>
                  <input type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="uw@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">Bericht</label>
                  <textarea required rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none" placeholder="Hoe kunnen wij u helpen?" />
                </div>
                <button type="submit" className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-colors w-full">
                  Verstuur bericht
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-serif font-bold text-navy-900">Contactgegevens</h2>
            {[
              { icon: <Mail className="w-5 h-5" />, label: "E-mail", value: "info@arabdutch.com", href: "mailto:info@arabdutch.com" },
              { icon: <Phone className="w-5 h-5" />, label: "Telefoon", value: "+31 6 40 84 01 08", href: "tel:+31640840108" },
              { icon: <MapPin className="w-5 h-5" />, label: "Adres", value: "Boschdijk 520, 5621 JG Eindhoven", href: "#" },
              { icon: <Clock className="w-5 h-5" />, label: "Bereikbaar", value: "Maandag t/m vrijdag, 9:00 – 20:00", href: "#" },
            ].map((c, i) => (
              <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 bg-gold-500/10 text-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{c.label}</p>
                  <a href={c.href} className="font-medium text-navy-900 hover:text-gold-500 transition-colors">{c.value}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
