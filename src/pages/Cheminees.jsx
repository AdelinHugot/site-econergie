import React, { useState } from 'react'
import PopupDisplay from '../components/PopupDisplay'

function Cheminees() {
  const [filter, setFilter] = useState('tous')

  const cheminees = [
    {
      id: 1,
      name: 'Cheminée Électrique Design',
      category: 'electrique',
      image: '/img/Accueil/Bannie_re_Accueil_Rika.webp',
      price: '1 200€',
      description: 'Ambiance chaleureuse sans installation',
      features: ['Installation facile', 'Économique', 'Chauffage 2000W']
    },
    {
      id: 2,
      name: 'Cheminée Foyer Ouvert',
      category: 'foyer',
      image: '/img/Accueil/Poe_le_a__bois_Montargis.webp',
      price: '3 500€',
      description: 'Élégance traditionnelle avec vue sur le feu',
      features: ['Foyer panoramique', 'Tirage naturel', 'Finitions premium']
    },
    {
      id: 3,
      name: 'Cheminée Foyer Fermé Bois',
      category: 'foyer',
      image: '/img/Accueil/Poe_le_Domo_Montargis.webp',
      price: '4 500€',
      description: 'Performance énergétique optimale',
      features: ['Rendement 85%', 'Vitre panoramique', 'Double combustion']
    },
    {
      id: 4,
      name: 'Cheminée Foyer Fermé Gaz',
      category: 'gaz',
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis.webp',
      price: '3 200€',
      description: 'Confort et commodité avec le gaz naturel',
      features: ['Allumage automatique', 'Thermostat', 'Sécurisée']
    },
    {
      id: 5,
      name: 'Cheminée Insert Bois',
      category: 'insert',
      image: '/img/Accueil/Poe_les_a__bois_Montargis.webp',
      price: '2 800€',
      description: 'Transformez votre foyer ouvert',
      features: ['Rendement 80%', 'Rénovation facile', 'Chauffage performant']
    },
    {
      id: 6,
      name: 'Cheminée Murale Moderne',
      category: 'electrique',
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis__1_.webp',
      price: '1 800€',
      description: 'Design ultra-modern pour petit espace',
      features: ['Montage mural', 'LED réaliste', 'Télécommande']
    }
  ]

  const filters = [
    { value: 'tous', label: 'Tous les modèles' },
    { value: 'foyer', label: 'Foyer ouvert/fermé' },
    { value: 'gaz', label: 'Gaz' },
    { value: 'insert', label: 'Insert' },
    { value: 'electrique', label: 'Électrique' }
  ]

  const filteredCheminees = filter === 'tous'
    ? cheminees
    : cheminees.filter(c => c.category === filter)

  return (
    <div style={{ minHeight: '100vh', marginTop: '60px' }}>
      <PopupDisplay pageSlug="cheminees" />
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>
          Nos Cheminées
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 300, marginBottom: '1.5rem' }}>
          Econergie installe la cheminée de vos rêves
        </p>
        <p style={{ fontSize: '1rem', fontWeight: 300, opacity: 0.95, maxWidth: '800px', margin: '0 auto' }}>
          Découvrez notre sélection de cheminées haut de gamme avec foyers acier ou fonte des marques Jotul et Atra.
          Nous offrons des solutions adaptées à vos besoins et votre intérieur.
        </p>
        <div style={{ marginTop: '2rem', fontSize: '1.1rem', fontWeight: 500 }}>
          📞 02 38 98 90 75 | 🏪 Showroom à Villemandeur
        </div>
      </section>

      {/* Introduction Section */}
      <section style={{
        maxWidth: '1400px',
        margin: '4rem auto',
        padding: '0 2rem'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(232, 76, 31, 0.08) 0%, rgba(255, 107, 53, 0.08) 100%)',
          borderRadius: '30px',
          padding: '4rem',
          border: '2px solid rgba(232, 76, 31, 0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(232, 76, 31, 0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '2rem', color: '#1a1a1a', position: 'relative', zIndex: 1 }}>
            Pourquoi choisir Econergie ?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            position: 'relative',
            zIndex: 1
          }}>
            <div>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                display: 'flex',
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                borderRadius: '15px',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                🔥
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.8rem', color: '#1a1a1a' }}>
                Une multitude de solutions
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8 }}>
                Pour tous les besoins et tous les styles. Cheminée traditionnelle, insert pour rénover votre foyer existant, ou solution moderne électrique, nous avons ce qu'il vous faut.
              </p>
            </div>

            <div>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                display: 'flex',
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                borderRadius: '15px',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                🎯
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.8rem', color: '#1a1a1a' }}>
                À l'écoute de vos besoins
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8 }}>
                Notre équipe d'experts du Loiret et ses départements limitrophes répond à vos demandes les plus spécifiques. Visitez notre showroom à Villemandeur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section style={{
        maxWidth: '1400px',
        margin: '4rem auto',
        padding: '0 2rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a1a1a' }}>
            Nos Types de Cheminées
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
            margin: '0 auto'
          }}></div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {[
            {
              icon: '🔥',
              title: 'Cheminée Bois',
              description: 'La cheminée a toujours été l\'élément central de la maison. Notre collection comprend une gamme de cheminées à bois traditionnelles avec foyer fermé, apportant chaleur et convivialité. Aujourd\'hui, la cheminée peut s\'intégrer dans un intérieur design.',
              color: '#e84c1f'
            },
            {
              icon: '💨',
              title: 'Cheminée Gaz',
              description: 'Profitez du confort et de la commodité du gaz naturel. Allumage automatique, thermostat intégré et efficacité énergétique garantie. Solution idéale pour ceux qui cherchent une alternative facile d\'utilisation.',
              color: '#ff6b35'
            },
            {
              icon: '🔧',
              title: 'Insert de Cheminée',
              description: 'Transformez votre foyer ouvert existant en une source de chauffage efficace et économique. Notre gamme d\'inserts offre des rendements jusqu\'à 80%. Solution de rénovation facile et rapide.',
              color: '#e84c1f'
            },
            {
              icon: '⚡',
              title: 'Cheminée Électrique',
              description: 'Design moderne et installation ultra-facile. Parfait pour les petits espaces et ceux cherchant une ambiance chaleureuse sans travaux. Économique, sécurisée et disponible en plusieurs styles.',
              color: '#ff6b35'
            }
          ].map((type, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)'
                e.currentTarget.style.boxShadow = '0 30px 70px rgba(232, 76, 31, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)'
              }}
            >
              {/* Gradient top border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${type.color} 0%, ${type.color}80 100%)`
              }}></div>

              {/* Icon */}
              <div style={{
                fontSize: '3.5rem',
                marginBottom: '1.5rem',
                display: 'inline-block'
              }}>
                {type.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '1rem',
                paddingTop: '0.5rem'
              }}>
                {type.title}
              </h3>

              {/* Description */}
              <p style={{
                color: '#666',
                lineHeight: 1.8,
                fontSize: '0.95rem'
              }}>
                {type.description}
              </p>

              {/* Bottom accent */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: -50,
                width: '100px',
                height: '100px',
                background: `${type.color}10`,
                borderRadius: '50%',
                transition: 'all 0.4s ease'
              }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section style={{ maxWidth: '1400px', margin: '3rem auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', color: '#1a1a1a', textAlign: 'center' }}>
          Nos Modèles
        </h2>
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
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem 3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {filteredCheminees.map(cheminee => (
            <div
              key={cheminee.id}
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
                  src={cheminee.image}
                  alt={cheminee.name}
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
                  {cheminee.name}
                </h3>
                <p style={{ color: '#e84c1f', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  {cheminee.price}
                </p>
                <p style={{ color: '#666', marginBottom: '1rem', lineHeight: 1.6 }}>
                  {cheminee.description}
                </p>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                  {cheminee.features.map((feature, idx) => (
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

      {/* Catalogues Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        padding: '5rem 2rem',
        margin: '4rem 0 0'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
              Nos Catalogues
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
              margin: '0 auto 1.5rem'
            }}></div>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
              Consultez nos catalogues détaillés pour découvrir notre sélection complète
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3rem'
          }}>
            {[
              {
                title: 'Cheminées Skantherm',
                description: 'Chaleur. Esthétisme. Force. Atmosphère. Un élément unique avec de nombreuses facettes.',
                icon: '📘'
              },
              {
                title: 'Cheminées Jotul',
                description: 'Qualité scandinave reconnue mondialement pour sa performance et son design intemporel.',
                icon: '📗'
              },
              {
                title: 'Inserts & Solutions Atra',
                description: 'Gamme complète d\'inserts et de solutions de transformation pour vos foyers existants.',
                icon: '📙'
              }
            ].map((catalog, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  textAlign: 'center',
                  border: '1px solid rgba(232, 76, 31, 0.2)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(232, 76, 31, 0.15)'
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.borderColor = 'rgba(232, 76, 31, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(232, 76, 31, 0.2)'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {catalog.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
                  {catalog.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {catalog.description}
                </p>
                <button style={{
                  padding: '0.8rem 1.5rem',
                  background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(232, 76, 31, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(232, 76, 31, 0.4)'
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(232, 76, 31, 0.2)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
                >
                  📥 Télécharger
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
        color: 'white',
        padding: '5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%'
        }}></div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Prêt à trouver votre cheminée ?
          </h2>
          <p style={{ fontSize: '1.15rem', fontWeight: 300, marginBottom: '3rem', opacity: 0.95 }}>
            Nos experts sont à votre disposition pour vous conseiller et vous proposer la solution parfaite pour votre intérieur.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '1.1rem 2.5rem',
              background: 'white',
              color: '#e84c1f',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)'
            }}
            >
              📞 02 38 98 90 75
            </button>
            <button style={{
              padding: '1.1rem 2.5rem',
              background: 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'
              e.currentTarget.style.borderColor = 'white'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              🏪 Visiter le showroom
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cheminees
