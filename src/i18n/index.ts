import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import nl from "./nl";
import en from "./en";
import ar from "./ar";

const ARAB_COUNTRIES = ["AE","SA","QA","KW","BH","OM","YE","MA","TN","LY","EG","JO","IQ","SY","LB","DZ","SD","MR","SO","DJ","KM","PS"];
const DUTCH_COUNTRIES = ["NL","BE"];

async function detectLanguage(): Promise<string> {
  const stored = localStorage.getItem("arabdutch_lang");
  if (stored) return stored;

  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(2000) });
    const data = await res.json() as { country_code?: string };
    const cc = data.country_code ?? "";
    if (ARAB_COUNTRIES.includes(cc)) return "ar";
    if (DUTCH_COUNTRIES.includes(cc)) return "nl";
    return "en";
  } catch {
    const lang = navigator.language.slice(0, 2).toLowerCase();
    if (lang === "ar") return "ar";
    if (lang === "nl") return "nl";
    return "en";
  }
}

export async function initI18n() {
  const lng = await detectLanguage();
  await i18n.use(initReactI18next).init({
    resources: {
      nl: { translation: nl },
      en: { translation: en },
      ar: { translation: ar },
    },
    lng,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
  applyDir(lng);
  return i18n;
}

export function setLanguage(lang: string) {
  localStorage.setItem("arabdutch_lang", lang);
  void i18n.changeLanguage(lang);
  applyDir(lang);
}

function applyDir(lang: string) {
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}

export default i18n;
