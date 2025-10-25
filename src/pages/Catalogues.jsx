import React, { useState } from 'react'

function Catalogues() {
  const [selectedCatalog, setSelectedCatalog] = useState(null)

  const catalogs = [
    {
      id: 1,
      title: 'Catalogue Poêles à Granulés',
      category: 'poeles',
      icon: '📦',
      description: 'Découvrez notre sélection complète de poêles à granulés avec spécifications et tarifs',
      year: '2024',
      pages: 32,
      size: '4.5 MB'
    },
    {
      id: 2,
      title: 'Catalogue Poêles à Bois',
      category: 'poeles',
      icon: '📦',
      description: 'Collection de poêles à bois traditionnels et modernes',
      year: '2024',
      pages: 24,
      size: '3.8 MB'
    },
    {
      id: 3,
      title: 'Catalogue Cheminées',
      category: 'cheminees',
      icon: '🔥',
      description: 'Foyers ouverts, fermés et inserts - Tous nos modèles',
      year: '2024',
      pages: 28,
      size: '4.2 MB'
    },
    {
      id: 4,
      title: 'Guide d\'Installation',
      category: 'guides',
      icon: '📚',
      description: 'Guide technique complet pour l\'installation et la maintenance',
      year: '2024',
      pages: 40,
      size: '5.1 MB'
    },
    {
      id: 5,
      title: 'Tarifs & Promotions',
      category: 'tarifs',
      icon: '💰',
      description: 'Liste complète des prix et offres en cours',
      year: '2024',
      pages: 12,
      size: '2.3 MB'
    },
    {
      id: 6,
      title: 'Brochure Services',
      category: 'services',
      icon: '🤝',
      description: 'Présentation détaillée de nos services et contrats',
      year: '2024',
      pages: 16,
      size: '3.1 MB'
    },
    {
      id: 7,
      title: 'Guide Environnemental',
      category: 'guides',
      icon: '♻️',
      description: 'Conseils pour un chauffage écologique et durable',
      year: '2024',
      pages: 20,
      size: '2.9 MB'
    },
    {
      id: 8,
      title: 'Catalogue Accessoires',
      category: 'accessoires',
      icon: '🔧',
      description: 'Tous les accessoires de chauffage et pièces détachées',
      year: '2024',
      pages: 18,
      size: '3.5 MB'
    }
  ]

  const categories = [
    { value: 'tous', label: 'Tous les catalogues' },
    { value: 'poeles', label: 'Poêles' },
    { value: 'cheminees', label: 'Cheminées' },
    { value: 'guides', label: 'Guides' },
    { value: 'tarifs', label: 'Tarifs' },
    { value: 'services', label: 'Services' },
    { value: 'accessoires', label: 'Accessoires' }
  ]

  const [filter, setFilter] = useState('tous')

  const filtered = filter === 'tous'
    ? catalogs
    : catalogs.filter(c => c.category === filter)

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
          Nos Catalogues & Documentation
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 300 }}>
          Téléchargez gratuitement nos catalogues complets en PDF
        </p>
      </section>

      {/* Filter Section */}
      <section style={{ maxWidth: '1200px', margin: '3rem auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              style={{
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                background: filter === cat.value
                  ? 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)'
                  : '#f0f0f0',
                color: filter === cat.value ? 'white' : '#333',
                boxShadow: filter === cat.value ? '0 8px 20px rgba(232, 76, 31, 0.3)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Catalogs Grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem'
        }}>
          {filtered.map(catalog => (
            <div
              key={catalog.id}
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
              onClick={() => setSelectedCatalog(catalog)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(232, 76, 31, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)'
              }}
            >
              {/* Cover */}
              <div style={{
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                padding: '3rem 2rem',
                textAlign: 'center',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{ fontSize: '3rem' }}>
                  {catalog.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                  {catalog.title}
                </h3>
              </div>

              {/* Info */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>
                  {catalog.description}
                </p>

                {/* Details */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #eee'
                }}>
                  <div>
                    <p style={{ color: '#999', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Pages</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a' }}>
                      {catalog.pages}
                    </p>
                  </div>
                  <div>
                    <p style={{ color: '#999', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Fichier</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1a1a1a' }}>
                      {catalog.size}
                    </p>
                  </div>
                </div>

                {/* Download Button */}
                <button style={{
                  width: '100%',
                  padding: '0.8rem',
                  background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(232, 76, 31, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  📥 Télécharger PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: '#999', fontSize: '1.1rem' }}>
              Aucun catalogue trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </section>

      {/* Info Section */}
      <section style={{
        background: '#f5f5f5',
        padding: '4rem 2rem',
        margin: '4rem 0 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem', color: '#1a1a1a' }}>
            Besoin d'aide ?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📞</div>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>
                Besoin de conseil ?
              </h3>
              <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Nos experts sont disponibles pour répondre à vos questions
              </p>
              <button style={{
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                color: 'white',
                border: 'none',
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: 600
              }}>
                Nous appeler
              </button>
            </div>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📧</div>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>
                Envoyer une demande
              </h3>
              <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Écrivez-nous et nous vous répondrons rapidement
              </p>
              <button style={{
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                color: 'white',
                border: 'none',
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: 600
              }}>
                Nous écrire
              </button>
            </div>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📍</div>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>
                Visite en showroom
              </h3>
              <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Venez découvrir nos produits en personne
              </p>
              <button style={{
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                color: 'white',
                border: 'none',
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: 600
              }}>
                Localiser
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Catalogues
