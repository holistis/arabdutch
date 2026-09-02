import { supabase } from "./supabase";

/**
 * Anonieme paginateller.
 *
 * Bewust GEEN externe analytics-dienst (geen Google Analytics, Plausible of
 * vergelijkbaar) en bewust GEEN cookies. Er wordt uitsluitend het pad en de
 * dag geregistreerd, niets anders. Geen IP-adres, geen sessie-id, geen
 * user-agent, geen verwijzer. Twee bezoeken van dezelfde persoon zijn niet van
 * elkaar te onderscheiden en een individuele bezoeker is hieruit niet te
 * herleiden.
 *
 * Dat is een bewuste afweging: we geven nauwkeurigheid op (we weten niet hoeveel
 * UNIEKE bezoekers er waren) in ruil voor het feit dat er geen persoonsgegevens
 * verwerkt worden en er dus ook geen toestemming nodig is. Voor de vraag die we
 * echt hebben, namelijk "werkt deze pagina of niet", is dat ruim voldoende.
 *
 * We respecteren daarnaast expliciet Do Not Track en Global Privacy Control,
 * ook al zijn we daar met deze opzet niet toe verplicht.
 */

function bezoekerWilNietGeteldWorden(): boolean {
  if (typeof navigator === "undefined") return true;
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean; msDoNotTrack?: string };
  if (nav.globalPrivacyControl === true) return true;
  if (nav.doNotTrack === "1" || nav.msDoNotTrack === "1") return true;
  if (typeof window !== "undefined" && (window as unknown as { doNotTrack?: string }).doNotTrack === "1") return true;
  return false;
}

/** Normaliseer het pad zodat we geen queryparameters of fragmenten bewaren. */
function schoonPad(pad: string): string {
  const zonderQuery = pad.split("?")[0].split("#")[0];
  // Voorkom dat een extreem lang of gek pad de tabel vervuilt.
  return zonderQuery.slice(0, 200) || "/";
}

export function telPaginaweergave(pad: string): void {
  if (bezoekerWilNietGeteldWorden()) return;
  // Fire-and-forget: een mislukte telling mag de bezoeker nooit hinderen.
  void supabase
    .from("paginaweergaven")
    .insert({ pad: schoonPad(pad) })
    .then(undefined, () => { /* stil negeren, dit is nooit belangrijk genoeg om iets te breken */ });
}
