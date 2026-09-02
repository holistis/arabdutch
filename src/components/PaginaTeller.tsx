import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { telPaginaweergave } from "../lib/paginateller";

/**
 * Registreert een anonieme paginaweergave bij elke routewisseling.
 * Rendert zelf niets. Zie src/lib/paginateller.ts voor wat er wel en niet
 * wordt opgeslagen en waarom daar geen toestemming voor nodig is.
 */
export default function PaginaTeller() {
  const { pathname } = useLocation();

  useEffect(() => {
    telPaginaweergave(pathname);
  }, [pathname]);

  return null;
}
