# Openstaande vragen — arabdutch

Vragen voor de product-owner. Niet voor Claude om te beslissen.

**Conventie:** open bovenaan, beantwoorde vragen onderaan met datum.

---

## 🔓 OPEN

### Q001 — Live domein bevestigen
- **Context:** Project-config noemt geen primair domein. Vermoedelijk arabdutch.nl of vergelijkbaar.
- **Beslissing nodig:** Hoofd-domein + eventueel meta/alias-domeinen vastleggen in `project_arabdutch.md`.

### Q002 — Andere landen dan Marokko: aanbod ja/nee
- **Context:** Pakketten zijn Marokko-only. Maatwerk voor andere landen toegestaan.
- **Beslissing nodig:** Tweede land (Turkije? Egypte? UAE?) toevoegen met eigen pakketten, of bewust uniek met Marokko blijven?
- **Beslissing nodig voor:** focus / positionering / SEO-strategie.

### Q003 — Pricing reset wanneer
- **Context:** Pakketten zijn 70% onder markt (positioneer-fase).
- **Beslissing nodig:** Bij hoeveel klant-cases prijzen omhoog? +25% of opnieuw evalueren? Quartaal review afspreken?
- **Beslissing nodig voor:** marge + concurrent-positie.

### Q004 — i18n: welke talen prioriteit
- **Context:** Stack bevat react-i18next en arabische taal-detector. Niet duidelijk welke talen actief ondersteund worden.
- **Beslissing nodig:** NL + AR? Ook FR (Marokko francofoon)? EN voor MENA?
- **Beslissing nodig voor:** vertaal-investering + SEO-strategie.

### Q005 — Lead-capture: doel en follow-up
- **Context:** Component `LeadCaptureModal.tsx` aanwezig, Supabase als backend.
- **Beslissing nodig:** Wat gebeurt met een lead? Automatische e-mail? Handmatige follow-up door sales? CRM-koppeling?
- **Beslissing nodig voor:** lead-conversie.

### Q006 — Testimonials echt of verwijderen
- **Context:** `Testimonials.tsx` component bestaat — werkt met echte cases of nog placeholders?
- **Beslissing nodig:** Welke 3-5 cases als eerste? Toestemming klanten?
- **Beslissing nodig voor:** geloofwaardigheid + conversie.

### Q007 — Newsletter-signup: doel en frequentie
- **Context:** `NewsletterSignup.tsx` component aanwezig.
- **Beslissing nodig:** Welke frequentie? Welk platform (Mailchimp/Resend/eigen Supabase-flow)? Welke content?
- **Beslissing nodig voor:** content-kalender + retention.
