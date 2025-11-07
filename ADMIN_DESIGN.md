# 🎨 Back-Office Redesign - Documentation Complète

## 📋 Vue d'ensemble

Le back-office a été entièrement redesigné selon les standards modernes des SaaS (Linear, Notion, Framer, Supabase). L'interface est maintenant :
- **Sobre et minimaliste** : design aéré, sans éléments superflus
- **Cohérente** : palette de couleurs unifiée, typographie harmonieuse
- **Responsive** : adaptée mobile et desktop
- **Accessible** : interfaces claires et intuitives

## 🎯 Identité Visuelle

### Couleurs
- **Primaire** : `#FF6B00` (Orange Econergie)
- **Primaire (hover)** : `#E55A00` (Orange foncé)
- **Secondaire** : `#1E1E1E` (Gris anthracite)
- **Fond principal** : `#F8F9FC` (Gris clair)
- **Texte** : `#1F2937` (Gris foncé)
- **Succès** : `#16A34A` (Vert)
- **Danger** : `#DC2626` (Rouge)

### Typographie
- **Police** : Inter, Poppins
- **Titres** : font-weight 700-800
- **Corps** : font-weight 400-500
- **Petits textes** : font-weight 300-400

## 🏗️ Architecture des Composants

### 1. **AdminLayout** (`src/components/AdminLayout.jsx`)
- Conteneur principal du back-office
- Gestion des onglets (Articles, Pop-ups, Pages)
- Structure flexbox avec sidebar fixe

```jsx
<div className="flex h-screen bg-[#F8F9FC]">
  <AdminSidebar />
  <div className="flex-1 overflow-hidden">
    {/* Contenu dynamique */}
  </div>
</div>
```

### 2. **AdminSidebar** (`src/components/AdminSidebar.jsx`)
- Sidebar fixe à gauche (260px / 80px en collapsed)
- Navigation principale avec icônes Lucide
- Section utilisateur
- Bouton déconnexion

**Features** :
- Collapse/expand smooth avec transition
- Active state avec highlight orange
- Indicateur visuel (ligne blanche à gauche)
- Icons de Lucide React
- Avatar utilisateur

### 3. **AdminPageHeader** (`src/components/AdminPageHeader.jsx`)
- En-tête de chaque page
- Titre + description
- Bouton d'action (optionnel, orange)
- Fond blanc avec border-bottom

```jsx
<AdminPageHeader
  title="Articles"
  description="Gérez vos articles et actualités"
  action={handleCreate}
  actionIcon={Plus}
  actionLabel="Nouvel article"
/>
```

### 4. **ArticlesManager** (`src/components/ArticlesManager.jsx`)
Gestion complète des articles avec :

#### ✏️ Formulaire Modal
- Form dans une modale centrée
- Header sticky
- Champs : Titre*, Résumé, Contenu*, Catégorie, URL Image, Publié (checkbox)
- Focus ring orange (`focus:ring-[#FF6B00]`)
- Validation basique (required fields)

#### 📋 Table Responsive
**Desktop** : Tableau classique
- Colonnes : Titre, Catégorie, Statut, Date, Actions
- Badges : Catégorie (bleu), Statut (vert/gris)
- Actions : Icônes Edit/Trash avec hover states
- Hover row : fond gris clair

**Mobile** : Cartes verticales
- Titre + Badges + Date
- 2 boutons Éditer/Supprimer
- Layout adapté

#### 🔔 Notifications
- **Toast** : notifications bottom-right (succès/erreur)
- **Modale de confirmation** : avant suppression
- **Alert** : messages d'erreur en banner rouge

### 5. **PopupsManager** (`src/components/PopupsManager.jsx`)
- Même structure que ArticlesManager
- Champs spécifiques : Page, Titre, Image (upload), Lien, Délai, Actif
- Upload d'image avec préview
- Badges : Page (purple), Statut (green/gray)

### 6. **PagesManager** (`src/components/PagesManager.jsx`)
- Gestion des pages du site
- Champs : Slug* (disabled edit), Titre*, Meta Description, Contenu JSON*
- Même UI que ArticlesManager
- Code badges pour les slugs

### 7. **Toast** (`src/components/Toast.jsx`)
Notifications toast animées :
- Success (vert) / Error (rouge) / Info (bleu)
- Position : bottom-right fixe
- Auto-dismiss après 3s
- Icônes Lucide (Check, AlertCircle, X)

### 8. **ConfirmModal** (`src/components/ConfirmModal.jsx`)
Modale de confirmation :
- Header avec icône danger (optionnel)
- Message descriptif
- 2 boutons : Annuler / Confirmer
- Mode danger (bouton rouge)
- Loading state

## 🎨 Design Patterns

### Buttons
```jsx
// Primary (Orange)
className="px-4 py-2 rounded-lg bg-[#FF6B00] text-white hover:bg-[#E55A00] transition"

// Secondary (Border)
className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"

// Icon Button
className="p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
```

### Input Focus
```jsx
className="focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
```

### Badges
```jsx
// Success
className="inline-block px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium"

// Category
className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium"
```

### Modales
```jsx
// Overlay
className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"

// Content
className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
```

## 📱 Responsive Design

### Breakpoints Tailwind
- `sm`: 640px
- `md`: 768px (seuil principal)
- `lg`: 1024px
- `xl`: 1280px

### Adaptations
- **Sidebar** : width responsive, en mobile peut être caché (optionnel)
- **Tableau** : `hidden md:block` (table desktop), `md:hidden` (cards mobile)
- **Modales** : `max-w-2xl` sur desktop, full-width mobile avec padding
- **Padding** : `p-8` desktop → `p-4` mobile

## 🔧 Dépendances Installées

```json
{
  "lucide-react": "^latest",     // Icônes
  "tailwindcss": "^latest",      // CSS utilitaire
  "postcss": "^latest",          // PostCSS
  "autoprefixer": "^latest"      // Vendor prefixes
}
```

### Configuration Tailwind
- **tailwind.config.js** : Config custom (couleurs, fonts)
- **postcss.config.js** : Intégration PostCSS
- **src/index.css** : Directives Tailwind + styles custom

## 🚀 Usage

### Importer les composants
```jsx
import AdminLayout from './components/AdminLayout';
import Toast from './components/Toast';
import ConfirmModal from './components/ConfirmModal';
import AdminPageHeader from './components/AdminPageHeader';
```

### Exemple: Ajouter une notification
```jsx
const [toast, setToast] = useState(null);

// Afficher
setToast({
  message: 'Article créé avec succès',
  type: 'success'  // ou 'error', 'info'
});

// Rendre
{toast && (
  <Toast
    message={toast.message}
    type={toast.type}
    onClose={() => setToast(null)}
  />
)}
```

### Exemple: Confirmation avant action
```jsx
const [deleteConfirm, setDeleteConfirm] = useState({ show: false, id: null });

{deleteConfirm.show && (
  <ConfirmModal
    title="Supprimer?"
    message="Cette action est irréversible."
    isDangerous={true}
    onConfirm={handleConfirmDelete}
    onCancel={() => setDeleteConfirm({ show: false, id: null })}
  />
)}
```

## 🎯 Checklist du Design

- ✅ Sidebar moderne avec collapse
- ✅ En-têtes de page cohérents
- ✅ Tables responsive
- ✅ Formulaires modaux élégants
- ✅ Toasts de notification
- ✅ Modales de confirmation
- ✅ Badges et statuts colorés
- ✅ Icons Lucide partout
- ✅ Responsive mobile-first
- ✅ Transitions smooth
- ✅ États hover et focus clairs
- ✅ Palette de couleurs Econergie

## 📝 Notes Importantes

1. **TailwindCSS** : Tous les styles sont en classes Tailwind, pas de CSS personnalisé
2. **Icônes** : Utiliser Lucide React pour toutes les icônes (cohérence + performance)
3. **Z-index** : Géré via `z-40` (sidebar), `z-50` (modales)
4. **Animations** : Transitions smooth via `transition duration-200/300`
5. **Accessibilité** : Labels liés aux inputs, focus states visibles
6. **Performance** : Composants légers, pas d'animations lourdes

## 🔄 Évolutions Futures

- Ajouter recherche/filtrage dans les tables
- Pagination pour les grandes listes
- Drag-and-drop pour réordonner
- Dark mode (optionnel)
- Permissions utilisateur par rôle
- Historique des modifications
- Export CSV/PDF

---

**Dernière mise à jour** : 2025-11-07
**Designer** : Claude Code
**Inspirations** : Linear, Notion, Framer, Supabase
