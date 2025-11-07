-- Table des articles
CREATE TABLE IF NOT EXISTS articles (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  category TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  published BOOLEAN DEFAULT TRUE
);

-- Table des pages
CREATE TABLE IF NOT EXISTS pages (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content JSONB NOT NULL,
  meta_description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table des pop-ups
CREATE TABLE IF NOT EXISTS popups (
  id BIGSERIAL PRIMARY KEY,
  page_slug TEXT NOT NULL,
  title TEXT,
  image_url TEXT,
  link_url TEXT,
  link_text TEXT,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE popups ENABLE ROW LEVEL SECURITY;

-- Policies pour les articles (lecture publique, écriture admin)
CREATE POLICY "Articles are viewable by everyone"
  ON articles FOR SELECT
  USING (true);

CREATE POLICY "Articles are insertable by authenticated users"
  ON articles FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Articles are updatable by authenticated users"
  ON articles FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Articles are deletable by authenticated users"
  ON articles FOR DELETE
  USING (auth.role() = 'authenticated');

-- Policies pour les pages
CREATE POLICY "Pages are viewable by everyone"
  ON pages FOR SELECT
  USING (true);

CREATE POLICY "Pages are insertable by authenticated users"
  ON pages FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Pages are updatable by authenticated users"
  ON pages FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Pages are deletable by authenticated users"
  ON pages FOR DELETE
  USING (auth.role() = 'authenticated');

-- Policies pour les pop-ups
CREATE POLICY "Popups are viewable by everyone"
  ON popups FOR SELECT
  USING (true);

CREATE POLICY "Popups are insertable by authenticated users"
  ON popups FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Popups are updatable by authenticated users"
  ON popups FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Popups are deletable by authenticated users"
  ON popups FOR DELETE
  USING (auth.role() = 'authenticated');
