-- ArabDutch Data & Insights — Supabase schema
-- Run this in your Supabase SQL editor

-- Reports / whitepapers
CREATE TABLE IF NOT EXISTS rapporten (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  titel TEXT NOT NULL,
  beschrijving TEXT,
  land TEXT,          -- 'marokko', 'vae', 'algemeen', etc.
  categorie TEXT,     -- 'belasting', 'vastgoed', 'bedrijfsoprichting', 'leven'
  prijs DECIMAL(10,2) DEFAULT 0,
  is_gratis BOOLEAN DEFAULT true,
  cover_kleur TEXT DEFAULT '#0A1628',
  inhoud TEXT,
  bestand_url TEXT,
  gepubliceerd_op TIMESTAMPTZ DEFAULT NOW(),
  is_gepubliceerd BOOLEAN DEFAULT true,
  downloads INTEGER DEFAULT 0
);

-- Lead captures (email before download)
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  naam TEXT,
  bedrijf TEXT,
  land_interesse TEXT,
  rapport_id UUID REFERENCES rapporten(id),
  bron TEXT DEFAULT 'rapport',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter subscribers
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  naam TEXT,
  plan TEXT DEFAULT 'gratis',    -- 'gratis', 'pro', 'enterprise'
  actief BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Country guide contact requests
CREATE TABLE IF NOT EXISTS land_aanvragen (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  naam TEXT,
  land TEXT,
  vraag TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row-level security: public can INSERT leads and subscribers, not read
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE rapporten ENABLE ROW LEVEL SECURITY;
ALTER TABLE land_aanvragen ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Iedereen kan rapporten lezen" ON rapporten FOR SELECT USING (is_gepubliceerd = true);
CREATE POLICY "Iedereen kan lead insturen" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Iedereen kan inschrijven" ON subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Iedereen kan aanvraag insturen" ON land_aanvragen FOR INSERT WITH CHECK (true);

-- Sample reports
INSERT INTO rapporten (slug, titel, beschrijving, land, categorie, is_gratis) VALUES
  ('zakendoen-marokko-2026', 'Zakendoen in Marokko 2026', 'Volledig gids: bedrijfsoprichting, belasting, culturele etiquette en netwerken in Marokko.', 'marokko', 'bedrijfsoprichting', true),
  ('vastgoed-marokko-temara', 'Vastgoedinvestering Temara & Rabat', 'Marktanalyse van de snelst groeiende vastgoedmarkt in Marokko — rendement, risico en procedure.', 'marokko', 'vastgoed', true),
  ('expat-vae-belasting', 'Expat in de VAE — fiscale gids voor Nederlanders', 'Geen inkomstenbelasting, maar wél verplichtingen in Nederland. Alles over uw fiscale positie.', 'vae', 'belasting', true),
  ('saudi-vision-2030-kansen', 'Saudi Vision 2030 — kansen voor Nederlandse bedrijven', 'Van NEOM tot agritech: concrete sectorkansen voor Nederlandse ondernemers in Saoedi-Arabië.', 'saoedi-arabie', 'bedrijfsoprichting', false),
  ('leven-marokko-nederlander', 'Als Nederlander leven in Marokko', 'Van uitschrijven in Nederland tot zorgverzekering, bankrekening en sociale zekerheid in Marokko.', 'marokko', 'leven', true);

-- ─── Anonieme paginateller ───────────────────────────────────────────────────
-- Bewust GEEN externe analytics-dienst en bewust GEEN cookies.
--
-- Wat hier wordt opgeslagen: alleen het pad en de dag. Geen IP-adres, geen
-- sessie-id, geen user-agent, geen verwijzer, geen enkele identifier. Twee
-- bezoeken van dezelfde persoon zijn niet van elkaar te onderscheiden, en een
-- individuele bezoeker is uit deze tabel niet te herleiden. Daarmee is dit
-- geen verwerking van persoonsgegevens en is er geen toestemming vereist.
--
-- Wat je er wel mee kunt: zien welke pagina's bezocht worden en of een
-- wijziging effect heeft. Dat is precies genoeg om te sturen.
CREATE TABLE IF NOT EXISTS paginaweergaven (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pad TEXT NOT NULL,
  dag DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS paginaweergaven_dag_pad_idx ON paginaweergaven (dag, pad);

ALTER TABLE paginaweergaven ENABLE ROW LEVEL SECURITY;

-- Alleen INSERT voor anon, geen SELECT-policy: bezoekers kunnen een weergave
-- registreren maar de cijfers niet uitlezen. Zelfde patroon als leads.
CREATE POLICY "Iedereen kan weergave registreren" ON paginaweergaven FOR INSERT WITH CHECK (true);
