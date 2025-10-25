import React, { useState } from 'react'

function FeaturedProducts() {
  const [activeSlide, setActiveSlide] = useState(0)

  const products = [
    {
      id: 1,
      name: 'Poêle Premium Bois',
      badge: 'BEST SELLER',
      image: '/img/Accueil/Poe_le_a__bois_Montargis.webp',
      price: '2 490€',
      description: 'Performance énergétique exceptionnelle avec design moderne',
      features: ['Rendement 90%', 'Vitre panoramique', 'Installation simple']
    },
    {
      id: 2,
      name: 'Cheminée Foyer Fermé',
      badge: 'NOUVEAU',
      image: '/img/Accueil/Poe_le_Domo_Montargis.webp',
      price: '4 990€',
      description: 'Élégance et performance pour votre salon',
      features: ['Chauffage optimal', 'Foyer double faces', 'Tirage régulé']
    },
    {
      id: 3,
      name: 'Poêle Granulés Automatique',
      badge: 'TOP VENTE',
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis.webp',
      price: '3 290€',
      description: 'Chauffage automatique et économique',
      features: ['Thermostat programmable', 'Économies jusqu\'à 50%', 'Pellets inclus']
    }
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section style={{
      padding: '5rem 2rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Nos Produits Phares
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
            margin: '0 auto 1.5rem'
          }}></div>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Découvrez notre sélection premium de solutions de chauffage
          </p>
        </div>

        {/* Carousel Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2.5rem',
          position: 'relative'
        }}>
          {products.map((product, idx) => (
            <div
              key={idx}
              style={{
                opacity: Math.abs(idx - activeSlide) <= 1 ? 1 : 0.5,
                transform: `scale(${Math.abs(idx - activeSlide) === 0 ? 1 : 0.95})`,
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                pointerEvents: Math.abs(idx - activeSlide) === 0 ? 'auto' : 'none'
              }}
            >
              <div style={{
                background: 'white',
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: Math.abs(idx - activeSlide) === 0
                  ? '0 30px 80px rgba(232, 76, 31, 0.25)'
                  : '0 10px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.4s ease',
                position: 'relative'
              }}>
                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  zIndex: 10,
                  boxShadow: '0 8px 20px rgba(232, 76, 31, 0.3)'
                }}>
                  {product.badge}
                </div>

                {/* Image */}
                <div style={{
                  height: '320px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '0.5rem'
                  }}>
                    {product.name}
                  </h3>

                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#e84c1f',
                    marginBottom: '1rem'
                  }}>
                    {product.price}
                  </div>

                  <p style={{
                    fontSize: '0.95rem',
                    color: '#666',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6
                  }}>
                    {product.description}
                  </p>

                  <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                    {product.features.map((feature, fidx) => (
                      <li
                        key={fidx}
                        style={{
                          fontSize: '0.85rem',
                          color: '#555',
                          marginBottom: '0.6rem',
                          paddingLeft: '1.5rem',
                          position: 'relative'
                        }}
                      >
                        <span style={{ position: 'absolute', left: 0, color: '#e84c1f' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button style={{
                    width: '100%',
                    padding: '0.9rem',
                    background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(232, 76, 31, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(232, 76, 31, 0.4)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(232, 76, 31, 0.2)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                  >
                    Découvrir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          <button
            onClick={prevSlide}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(232, 76, 31, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            ←
          </button>

          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
          }}>
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                style={{
                  width: idx === activeSlide ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  background: idx === activeSlide
                    ? 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)'
                    : 'rgba(232, 76, 31, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(232, 76, 31, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
