import { useEffect } from "react";

export default function useSpotlight(selector = "[data-spotlight]") {
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(selector) as HTMLElement | null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  }, [selector]);
}
