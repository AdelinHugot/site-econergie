import React, { useState } from 'react'
import PopupDisplay from '../components/PopupDisplay'

function Poeles() {
  const [filter, setFilter] = useState('tous')

  const poeles = [
    {
      id: 1,
      name: 'Poêle à Granulés Design',
      category: 'granules',
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis__1_.webp',
      price: '2 500€',
      description: 'Poêle minimaliste avec technologie de chauffage optimisée',
      features: ['Rendement 90%', 'Télécommande', 'Design moderne']
    },
    {
      id: 2,
      name: 'Poêle à Granulés Premium',
      category: 'granules',
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis__2_.webp',
      price: '3 500€',
      description: 'Confort maximal avec fonction de programmation avancée',
      features: ['Rendement 92%', 'WiFi intégré', 'Écran tactile']
    },
    {
      id: 3,
      name: 'Poêle à Bois Classique',
      category: 'bois',
      image: '/img/Accueil/Poe_le_a__bois_Montargis.webp',
      price: '1 800€',
      description: 'Chaleur traditionnelle avec design intemporel',
      features: ['Rendement 85%', 'Vitre panoramique', 'Robuste']
    },
    {
      id: 4,
      name: 'Poêle à Bois Collection',
      category: 'bois',
      image: '/img/Accueil/Poe_les_a__bois_Montargis.webp',
      price: '2 200€',
      description: 'Authentique et performant pour votre intérieur',
      features: ['Rendement 88%', 'Foyer profond', 'Finitions variées']
    },
    {
      id: 5,
      name: 'Poêle Design Domo',
      category: 'design',
      image: '/img/Accueil/Poe_le_Domo_Montargis.webp',
      price: '4 200€',
      description: 'Pièce maîtresse pour votre salon',
      features: ['Rendement 91%', 'Design architectural', 'Acier inoxydable']
    },
    {
      id: 6,
      name: 'Poêle Mixte Bois/Granulés',
      category: 'mixte',
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis.webp',
      price: '3 800€',
      description: 'Flexibilité totale avec deux modes de chauffage',
      features: ['Rendement 90%', 'Double combustion', 'Adaptable']
    }
  ]

  const filters = [
    { value: 'tous', label: 'Tous les poêles' },
    { value: 'granules', label: 'Granulés' },
    { value: 'bois', label: 'Bois' },
    { value: 'design', label: 'Design' },
    { value: 'mixte', label: 'Mixte' }
  ]

  const filteredPoeles = filter === 'tous'
    ? poeles
    : poeles.filter(p => p.category === filter)

  return (
    <div style={{ minHeight: '100vh', marginTop: '60px' }}>
      <PopupDisplay pageSlug="poeles" />
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>
          Nos Poêles
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 300 }}>
          Découvrez notre sélection de poêles de qualité premium
        </p>
      </section>

      {/* Filters */}
      <section style={{ maxWidth: '1400px', margin: '3rem auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              style={{
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                background: filter === f.value
                  ? 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)'
                  : '#f0f0f0',
                color: filter === f.value ? 'white' : '#333',
                boxShadow: filter === f.value ? '0 8px 20px rgba(232, 76, 31, 0.3)' : 'none'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem 4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {filteredPoeles.map(poele => (
            <div
              key={poele.id}
              style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
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
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img
                  src={poele.image}
                  alt={poele.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>
                  {poele.name}
                </h3>
                <p style={{ color: '#e84c1f', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  {poele.price}
                </p>
                <p style={{ color: '#666', marginBottom: '1rem', lineHeight: 1.6 }}>
                  {poele.description}
                </p>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                  {poele.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        paddingLeft: '1.5rem',
                        position: 'relative',
                        marginBottom: '0.5rem',
                        color: '#555'
                      }}
                    >
                      <span style={{ position: 'absolute', left: 0, color: '#e84c1f' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(232, 76, 31, 0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  Demander un devis
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Poeles
