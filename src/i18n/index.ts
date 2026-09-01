import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import nl from "./nl";
import en from "./en";
import ar from "./ar";

/**
 * Taaldetectie gebeurt bewust volledig op het apparaat zelf.
 *
 * Hier stond eerder een aanroep naar ipapi.co om het land af te leiden uit het
 * IP-adres. Dat gebeurde bij het opstarten van de app, dus vóór de cookiebanner
 * en zonder toestemming, waarmee het IP-adres van elke bezoeker naar een derde
 * partij ging. Dat is onder de AVG niet houdbaar en het stond ook niet in de
 * privacyverklaring. De browsertaal is voor dit doel een even goed signaal,
 * verlaat het apparaat niet, en scheelt bovendien tot 2 seconden wachttijd
 * voordat de pagina rendert.
 */
function detectLanguage(): string {
  const stored = localStorage.getItem("arabdutch_lang");
  if (stored) return stored;

  const voorkeuren = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const voorkeur of voorkeuren) {
    const code = voorkeur.slice(0, 2).toLowerCase();
    if (code === "ar") return "ar";
    if (code === "nl") return "nl";
    if (code === "en") return "en";
  }
  return "en";
}

export async function initI18n() {
  const lng = detectLanguage();
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
