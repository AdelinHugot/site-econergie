# Structure de la Page d'Accueil

## Layout Global

```
┌─────────────────────────────────────────────────────────┐
│                      HEADER (Fixed)                      │
│  Logo  |  Poêles  Cheminées  Services  À Propos  Contact │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                   1. HERO IMPROVED                       │
│  • 90vh hero image avec overlay gradient                 │
│  • Badge "Solutions Premium" avec SVG                    │
│  • Titre : "La Chaleur de l'Authentique"                 │
│  • Quick benefits : 3 icônes SVG inline                  │
│  • Particules de chaleur animées (rise animation)        │
│  • 2 CTA buttons : Devis + Explorer                      │
│  • Scroll indicator                                       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│           2. AMBIANCE LIFESTYLE (NOUVEAU)                │
│  ┌──────────────────┬──────────────────┐                 │
│  │                  │  Titre accrocheur │                 │
│  │  Grande image    │  Authenticité    │                 │
│  │  (500px height)  │  Design Moderne  │                 │
│  │                  │  Écologique      │                 │
│  │                  │  CTA button      │                 │
│  └──────────────────┴──────────────────┘                 │
│  Padding: 5rem 2rem                                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│      3. UNIVERS CHAUFFAGE (CATEGORIES ENRICHIS)          │
│  Titre : "Notre Univers de Chauffage"                    │
│  ┌──────────────┬──────────────┐                         │
│  │ Poêles Bois  │ Cheminées    │                         │
│  │ • Rendement  │ • Rendement  │                         │
│  │ • Prix       │ • Prix       │                         │
│  │ • Modèles    │ • Modèles    │                         │
│  └──────────────┴──────────────┘                         │
│  ┌──────────────┬──────────────┐                         │
│  │ Inserts      │ Granulés     │                         │
│  │ • Rendement  │ • Rendement  │                         │
│  │ • Prix       │ • Prix       │                         │
│  │ • Modèles    │ • Modèles    │                         │
│  └──────────────┴──────────────┘                         │
│  Grid: 2 colonnes (repeat(2, 1fr))                       │
│  Gap: 2.5rem                                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│            4. RÉALISATIONS (EXISTANT)                    │
│  Titre : "Nos Réalisations"                              │
│  Filters : [Tous, Poêles Granulés, Poêles Bois, etc]   │
│  ┌────┐  ┌────┐  ┌────┐                                  │
│  │    │  │    │  │    │ (auto-fit 340px cards)          │
│  │    │  │    │  │    │                                  │
│  └────┘  └────┘  └────┘                                  │
│  Galerie 3 colonnes avec modal detail                    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│      5. AVIS CLIENTS + STATISTIQUES (FUSIONNÉS)          │
│  Titre : "Ce que nos clients disent"                     │
│  ┌──────────┬──────────┬──────────┐                      │
│  │ 5,000+   │  35%     │  4.9/5   │ (Stats section)     │
│  │ clients  │ économies│ rating   │                      │
│  └──────────┴──────────┴──────────┘                      │
│  ┌──────┐ ┌──────┐ ┌──────┐                              │
│  │ Avis │ │ Avis │ │ Avis │ (3 colonnes)                │
│  │ +5★  │ │ +5★  │ │ +5★  │                             │
│  └──────┘ └──────┘ └──────┘                              │
│  ┌──────┐ ┌──────┐ ┌──────┐                              │
│  │ Avis │ │ Avis │ │ Avis │ (3 colonnes)                │
│  │ +5★  │ │ +5★  │ │ +5★  │                             │
│  └──────┘ └──────┘ └──────┘                              │
│  Chaque avis affiche : économies badge                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│      6. POURQUOI ECONERGIE (NOUVEAU)                     │
│  Titre : "Pourquoi choisir Econergie"                    │
│  ┌────────────────┬────────────────┬────────────────┐   │
│  │ Expertise      │ Service        │ Qualité        │   │
│  │ Locale         │ Complet        │ Premium        │   │
│  │ • 3 showrooms  │ • Vente        │ • Certifiés    │   │
│  │ • 14 ans       │ • Install      │ • Garanties    │   │
│  │ • 50+ experts  │ • Entretien    │ • Design       │   │
│  └────────────────┴────────────────┴────────────────┘   │
│  Grid: 3 colonnes avec hover effect                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│            7. FAQ (EXISTANT)                             │
│  Titre : "Questions Fréquemment Posées"                  │
│  • Accordion list avec expand/collapse                   │
│  • Smooth animations                                     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│          8. NEWSLETTER CTA (EXISTANT)                    │
│  Titre : "Restez informé"                                │
│  Input email + Subscribe button                          │
│  Gradient background avec particules flottantes          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                     FOOTER                               │
│  Dark background avec 4 colonnes de liens                │
│  Copyright et social links                               │
└─────────────────────────────────────────────────────────┘
```

## Palette de Couleurs

```
Primary Gradient:
  Linear: 135deg, #e84c1f 0% → #ff6b35 100%

Text Colors:
  Heading: #1a1a1a (dark)
  Body: #666 (gray)
  Muted: #999 (lighter gray)

Background:
  White: #fff
  Light gray: #fafafa
  Dark: #1a1a1a (footer)

Accent:
  Orange: #e84c1f
  Orange light: #ff6b35
```

## Typography

```
System Font Stack:
  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif

Weights:
  Regular: 300 (light)
  Medium: 500
  Bold: 600-700
  Extra Bold: 800-900

Sizes (clamp() for fluid):
  H1: clamp(2.5rem, 8vw, 4rem)
  H2: 2.5rem
  H3: 1.3rem
  Body: 1rem
  Small: 0.95rem / 0.9rem
```

## Spacing

```
Horizontal (Padding):
  Large screens: 2rem
  Medium screens: 1.5rem
  Mobile: 1rem

Vertical (Sections):
  Large screens: 5-6rem
  Medium screens: 3-4rem
  Mobile: 2rem

Gaps entre éléments:
  Cards: 2.5rem (large), 1.5rem (mobile)
  Between elements: 1rem-2rem
```

## Breakpoints

```
Desktop:     >= 1401px (full features)
Laptop:      1024px - 1400px
Tablet:      768px - 1023px
Mobile:      <= 767px (single column layouts)
Small mobile: <= 480px (minimal padding)
```

## Animations

```
Duration: 0.3s - 0.8s
Timing: cubic-bezier(0.34, 1.56, 0.64, 1) [bounce]
        ease, ease-in-out

Types:
  • fadeInUp: opacity + translateY
  • slideUp: opacity + translateY (smaller)
  • slideDown: opacity + translateY (top to bottom)
  • bounce: translateY repeat
  • float: smooth up/down (6-8s)
  • rise: opacity + translateY (particles)
  • scaleOnHover: 1 → 1.1
  • translateOnHover: 0 → -8px

GPU Accelerated:
  • transform (translateY, scale, rotate)
  • opacity
  • backdrop-filter
```

## Responsive Behaviors

### Desktop (1024px+)
- 2-3 colonnes grid layouts
- Images grandes (500px+)
- Full spacious padding
- All features visible

### Tablet (768px - 1023px)
- 2 colonnes pour grids
- Images moyennes
- Padding réduit
- Tous les éléments visibles

### Mobile (<768px)
- 1 colonne (stack vertical)
- Images responsives
- Padding réduit
- Sections condensées mais complètes

### Très petit (<480px)
- Minimal padding
- Minimal gaps
- Très compacts
- Focus sur readability
