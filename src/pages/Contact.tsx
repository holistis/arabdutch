import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

export default function Contact() {
  const { t } = useTranslation();
  useEffect(() => { document.title = "Contact — ArabDutch | Neem contact op"; }, []);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY ?? "");
    formData.append("subject", "Nieuw contactbericht via arabdutch.com");
    formData.append("from_name", "ArabDutch Website");
    formData.append("redirect", "false");

    try {
      const endpoint = "https://api.web3forms.com/submit";
      const res = await fetch(endpoint, { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="pt-20">
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">{t("contact.label")}</span>
          <h1 className="text-5xl font-serif font-bold mt-2">{t("contact.title")}</h1>
          <p className="text-white/70 text-xl mt-4 max-w-xl">
            {t("contact.sub")}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">{t("contact.title")}</h2>

            {status === "sent" ? (
              <div className="bg-gold-500/10 border border-gold-500/30 rounded-2xl p-10 text-center">
                <CheckCircle className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <p className="text-2xl font-bold text-navy-900 mb-2">{t("contact.sent")}</p>
                <p className="text-gray-600 mb-6">{t("contact.sentSub")}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-gold-500 font-semibold hover:underline text-sm"
                >
                  {t("contact.send")}
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
                  <label className="block text-sm font-medium text-navy-900 mb-2">{t("contact.name")}</label>
                  <input name="name" required className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">{t("contact.email")}</label>
                  <input name="email" type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">{t("contact.company")}</label>
                  <input name="onderwerp" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">{t("contact.message")}</label>
                  <textarea name="message" required rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none" />
                </div>
                <button type="submit" disabled={status === "loading"} className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-full transition-colors w-full">
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
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-serif font-bold text-navy-900">{t("footer.contact")}</h2>
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
