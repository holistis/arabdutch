import { useTranslation } from "react-i18next";
import { setLanguage } from "../i18n/index";

const LANGS = [
  { code: "nl", label: "NL", flag: "🇳🇱" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ar", label: "AR", flag: "🇦🇪" },
];

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { i18n } = useTranslation();
  const current = i18n.language;

  return (
    <div className={`flex items-center gap-1 ${mobile ? "justify-center py-2" : ""}`}>
      {LANGS.map(l => (
        <button
          key={l.code}
          onClick={() => setLanguage(l.code)}
          title={l.flag}
          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
            current === l.code
              ? "bg-gold-500 text-white"
              : "text-white/50 hover:text-white hover:bg-white/10"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
