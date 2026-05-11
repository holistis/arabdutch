import { useEffect } from "react";

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ArabDutch",
  "alternateName": "AO Services",
  "description": "Premium consultancy voor zakendoen tussen Nederland en de Arabische wereld. Marktentree, business matchmaking, culturele training en strategische rapportages.",
  "url": "https://arabdutch.com",
  "logo": "https://arabdutch.com/logo.png",
  "image": "https://arabdutch.com/logo.png",
  "telephone": "+31-6-40840108",
  "email": "info@arabdutch.com",
  "priceRange": "€€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Boschdijk 520",
    "addressLocality": "Eindhoven",
    "postalCode": "5621 JG",
    "addressCountry": "NL"
  },
  "areaServed": [
    { "@type": "Country", "name": "Netherlands" },
    { "@type": "Country", "name": "Belgium" },
    { "@type": "Country", "name": "Morocco" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Qatar" },
    { "@type": "Country", "name": "Tunisia" },
    { "@type": "Country", "name": "Egypt" },
    { "@type": "Country", "name": "Jordan" },
    { "@type": "Country", "name": "Oman" }
  ],
  "founder": { "@type": "Person", "name": "Abdoellah" },
  "identifier": [
    { "@type": "PropertyValue", "name": "KvK", "value": "86816632" },
    { "@type": "PropertyValue", "name": "BTW", "value": "NL004319767B61" }
  ],
  "sameAs": [
    "https://arabdutch.com"
  ],
  "serviceType": [
    "Intercultural Training",
    "Business Matchmaking",
    "Market Research",
    "Language & Cultural Consulting",
    "Lobbying & Advocacy",
    "Networking Events",
    "Company Formation Morocco",
    "Company Formation UAE",
    "Strategic Consulting"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "27",
    "bestRating": "5"
  }
};

export default function SchemaOrg() {
  useEffect(() => {
    const existing = document.getElementById("arabdutch-schema");
    if (existing) existing.remove();
    const s = document.createElement("script");
    s.id = "arabdutch-schema";
    s.type = "application/ld+json";
    s.text = JSON.stringify(ORG_SCHEMA);
    document.head.appendChild(s);
    return () => { s.remove(); };
  }, []);
  return null;
}
