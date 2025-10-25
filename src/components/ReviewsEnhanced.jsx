import React, { useEffect, useState } from 'react'

function ReviewsEnhanced() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const stats = [
    {
      value: '5,000+',
      label: 'Clients heureux',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="18" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 32C12 26 17 20 24 20C31 20 36 26 36 32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M8 44C8 37 15 32 24 32C33 32 40 37 40 44" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      value: '35%',
      label: 'Économies moyennes',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 4V44M16 12H32C34.2 12 36 13.8 36 16V32C36 34.2 34.2 36 32 36H16C13.8 36 12 34.2 12 32V16C12 13.8 13.8 12 16 12Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 24H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      value: '4.9/5',
      label: 'Note moyenne',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 6L30 22H48L34 32L40 48L24 38L8 48L14 32L0 22H18L24 6Z" fill="currentColor" opacity="0.8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  const reviews = [
    {
      stars: 5,
      text: 'Une installation impeccable et une équipe très professionnelle. Mon poêle à bois fonctionne parfaitement.',
      name: 'Jean Dupont',
      city: 'Fontainebleau',
      initials: 'JD',
      savings: '40%'
    },
    {
      stars: 5,
      text: 'Économies vraiment impressionnantes sur ma facture de chauffage. Le design sublime et performant.',
      name: 'Marie Carpentier',
      city: 'Nemours',
      initials: 'MC',
      savings: '38%'
    },
    {
      stars: 5,
      text: 'Service après-vente exemplaire. L\'équipe assure la maintenance et conseille régulièrement.',
      name: 'Philippe Bertrand',
      city: 'Melun',
      initials: 'PB',
      savings: '35%'
    },
    {
      stars: 5,
      text: 'Un investissement qui en valait la peine. Ambiance chaleureuse et agréable en famille.',
      name: 'Sophie Rousseau',
      city: 'Pithiviers',
      initials: 'SR',
      savings: '32%'
    },
    {
      stars: 5,
      text: 'Produits de qualité exceptionnelle. Les conseillers m\'ont aidé à choisir le modèle parfait.',
      name: 'Laurent Petit',
      city: 'Bellegarde',
      initials: 'LP',
      savings: '42%'
    },
    {
      stars: 5,
      text: 'Installation rapide, équipe cordiale et souriante. Le poêle mixte offre une vraie flexibilité.',
      name: 'Nathalie Durand',
      city: 'Briare',
      initials: 'ND',
      savings: '36%'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 + reviews.length) % reviews.length)
  }

  return (
    <section style={{
      padding: '6rem 2rem',
      background: 'white'
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
            Ce que nos clients disent
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
            margin: '0 auto 2rem'
          }}></div>
          <p style={{
            fontSize: '1.15rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Découvrez l'impact réel de nos solutions sur la vie de nos clients
          </p>
        </div>

        {/* Stats Section with Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2.5rem',
          marginBottom: '5rem'
        }}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                borderRadius: '25px',
                padding: '2.5rem',
                textAlign: 'center',
                border: '2px solid rgba(232, 76, 31, 0.15)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'rgba(232, 76, 31, 0.4)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(232, 76, 31, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(232, 76, 31, 0.15)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Decorative blur background */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(232, 76, 31, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
              }}></div>

              <div style={{
                color: '#e84c1f',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '2.8rem',
                fontWeight: 800,
                color: '#e84c1f',
                marginBottom: '0.8rem',
                position: 'relative',
                zIndex: 1
              }}>
                {stat.value}
              </div>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                fontWeight: 500,
                position: 'relative',
                zIndex: 1
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Reviews Carousel */}
        <div style={{
          position: 'relative'
        }}>
          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '2rem'
          }}>
            Témoignages clients
          </h3>

          <div style={{
            display: 'flex',
            gap: '2rem',
            overflowX: 'hidden',
            position: 'relative'
          }}>
            {/* Carousel Container */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              width: '100%',
              transform: `translateX(-${currentIndex * 100 / 3}%)`,
              transition: 'transform 0.4s ease',
              flexWrap: 'nowrap'
            }}>
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: '0 0 calc(33.333% - 1.4rem)',
                    background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                    borderRadius: '20px',
                    padding: '2.5rem',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(232, 76, 31, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    minHeight: '300px'
                  }}
                >
                  {/* Stars */}
                  <div style={{
                    fontSize: '1.3rem',
                    color: '#e84c1f',
                    letterSpacing: '2px'
                  }}>
                    {'★'.repeat(review.stars)}
                  </div>

                  {/* Review Text */}
                  <p style={{
                    fontSize: '1rem',
                    color: '#1a1a1a',
                    lineHeight: 1.7,
                    flex: 1,
                    fontWeight: 400
                  }}>
                    "{review.text}"
                  </p>

                  {/* Savings Badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'linear-gradient(135deg, rgba(232, 76, 31, 0.12) 0%, rgba(255, 107, 53, 0.08) 100%)',
                    color: '#e84c1f',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    width: 'fit-content'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
                      <path d="M10.5 5.5L5.5 10.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                    {review.savings} d'économies
                  </div>

                  {/* Author */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(232, 76, 31, 0.1)',
                    marginTop: 'auto'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1rem'
                    }}>
                      {review.initials}
                    </div>
                    <div>
                      <p style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        margin: 0,
                        marginBottom: '0.2rem'
                      }}>
                        {review.name}
                      </p>
                      <p style={{
                        fontSize: '0.85rem',
                        color: '#999',
                        margin: 0
                      }}>
                        {review.city}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '2.5rem'
          }}>
            <button
              onClick={prevSlide}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2px solid rgba(232, 76, 31, 0.3)',
                background: 'white',
                color: '#e84c1f',
                fontSize: '1.2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(232, 76, 31, 0.1)'
                e.currentTarget.style.borderColor = '#e84c1f'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.borderColor = 'rgba(232, 76, 31, 0.3)'
              }}
            >
              ←
            </button>

            {/* Dot Indicators */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center'
            }}>
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    background: idx === currentIndex ? '#e84c1f' : 'rgba(232, 76, 31, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (idx !== currentIndex) {
                      e.currentTarget.style.background = 'rgba(232, 76, 31, 0.4)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (idx !== currentIndex) {
                      e.currentTarget.style.background = 'rgba(232, 76, 31, 0.2)'
                    }
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
                border: '2px solid rgba(232, 76, 31, 0.3)',
                background: 'white',
                color: '#e84c1f',
                fontSize: '1.2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(232, 76, 31, 0.1)'
                e.currentTarget.style.borderColor = '#e84c1f'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.borderColor = 'rgba(232, 76, 31, 0.3)'
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }

          h2[style*="fontSize: 2.8rem"] {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ReviewsEnhanced
