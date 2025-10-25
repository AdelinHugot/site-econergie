import React, { useState } from 'react'

function Actualites() {
  const [filteredNews, setFilteredNews] = useState('tous')

  const news = [
    {
      id: 1,
      category: 'produit',
      date: '15 Octobre 2024',
      title: 'Nouvelle Collection Automne 2024 Disponible',
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis__1_.webp',
      excerpt: 'Découvrez nos nouveaux modèles avec design épuré et performance optimisée.',
      content: 'Nous sommes fiers de présenter notre nouvelle collection automne avec des poêles redessinés et des technologies améliorées.'
    },
    {
      id: 2,
      category: 'promotion',
      date: '10 Octobre 2024',
      title: 'Promotion Spéciale : -15% sur les Poêles à Granulés',
      image: '/img/Accueil/Poe_le_a__bois_Montargis.webp',
      excerpt: 'Profitez de notre offre exceptionnelle avant la fin de l\'automne.',
      content: 'Réduction de 15% sur tous nos poêles à granulés jusqu\'à fin octobre. Une belle opportunité pour améliorer votre confort thermique !'
    },
    {
      id: 3,
      category: 'conseil',
      date: '5 Octobre 2024',
      title: 'Guide Complet : Bien Choisir son Poêle',
      image: '/img/Accueil/Poe_le_Domo_Montargis.webp',
      excerpt: 'Tous les critères à considérer pour faire le bon choix.',
      content: 'Notre expert vous guide à travers tous les paramètres importants : puissance, consommation, design, entretien...'
    },
    {
      id: 4,
      category: 'environnement',
      date: '1er Octobre 2024',
      title: 'Econergie Certifiée Label Vert 2024',
      image: '/img/Accueil/Poe_les_a__bois_Montargis.webp',
      excerpt: 'Reconnaissance de notre engagement environnemental.',
      content: 'Nous avons obtenu la certification Label Vert pour notre engagement dans le développement durable et les énergies renouvelables.'
    },
    {
      id: 5,
      category: 'client',
      date: '25 Septembre 2024',
      title: 'Témoignage Client : La Transformation de la Maison Martin',
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis__2_.webp',
      excerpt: 'Découvrez comment un poêle a changé leur quotidien.',
      content: 'La famille Martin nous raconte son expérience avec son nouveau poêle design et les économies d\'énergie réalisées.'
    },
    {
      id: 6,
      category: 'event',
      date: '20 Septembre 2024',
      title: 'Salon de l\'Habitat 2024 : Venez nous Rencontrer',
      image: '/img/Accueil/Bannie_re_Accueil_Rika.webp',
      excerpt: 'Retrouvez-nous du 22 au 24 septembre au salon.',
      content: 'Visitez notre stand au Salon de l\'Habitat où nos experts répondront à toutes vos questions et vous feront découvrir nos dernières innovations.'
    }
  ]

  const categories = [
    { value: 'tous', label: 'Tous les articles' },
    { value: 'produit', label: 'Nouveaux Produits' },
    { value: 'promotion', label: 'Promotions' },
    { value: 'conseil', label: 'Conseils & Guides' },
    { value: 'environnement', label: 'Environnement' },
    { value: 'client', label: 'Témoignages' },
    { value: 'event', label: 'Événements' }
  ]

  const categoryIcons = {
    produit: '📦',
    promotion: '🎉',
    conseil: '📚',
    environnement: '🌱',
    client: '⭐',
    event: '📅'
  }

  const filtered = filteredNews === 'tous'
    ? news
    : news.filter(n => n.category === filteredNews)

  return (
    <div style={{ minHeight: '100vh', marginTop: '60px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>
          Actualités & Nouvelles
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 300 }}>
          Restez informé de nos derniers développements et actualités
        </p>
      </section>

      {/* Filter Categories */}
      <section style={{ maxWidth: '1200px', margin: '3rem auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setFilteredNews(cat.value)}
              style={{
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                background: filteredNews === cat.value
                  ? 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)'
                  : '#f0f0f0',
                color: filteredNews === cat.value ? 'white' : '#333',
                boxShadow: filteredNews === cat.value ? '0 8px 20px rgba(232, 76, 31, 0.3)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* News Feed */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {filtered.map(article => (
            <article
              key={article.id}
              style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(232, 76, 31, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)'
              }}
            >
              {/* Image */}
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span>{categoryIcons[article.category]}</span>
                  {categories.find(c => c.value === article.category)?.label}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <p style={{ color: '#999', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  {article.date}
                </p>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.8rem', color: '#1a1a1a', lineHeight: 1.4 }}>
                  {article.title}
                </h3>
                <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>
                  {article.excerpt}
                </p>
                <button style={{
                  alignSelf: 'flex-start',
                  background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(232, 76, 31, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  Lire la suite
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: '#999', fontSize: '1.1rem' }}>
              Aucun article trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>
          Restez Informé
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', fontWeight: 300, maxWidth: '600px', margin: '0 auto 2rem' }}>
          Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et offres exclusives
        </p>
        <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '1rem' }}>
          <input
            type="email"
            placeholder="Votre adresse email"
            style={{
              flex: 1,
              padding: '0.8rem 1.5rem',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button style={{
            padding: '0.8rem 2.5rem',
            background: 'white',
            color: '#e84c1f',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            S'abonner
          </button>
        </div>
      </section>
    </div>
  )
}

export default Actualites
