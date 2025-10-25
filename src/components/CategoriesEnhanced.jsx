import React from 'react'

function CategoriesEnhanced() {
  const categories = [
    {
      title: 'Poêles à Bois',
      description: 'Chauffage naturel et authentique',
      rendement: '85%',
      priceRange: 'Dès €1,800',
      count: '12 modèles',
      gradient: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M25 8C25 8 18 18 18 25C18 31 21 35 25 35C29 35 32 31 32 25C32 18 25 8 25 8Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 36C12 36 8 42 8 46C8 47.1 8.9 48 10 48H40C41.1 48 42 47.1 42 46C42 42 38 36 38 36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Cheminées',
      description: 'Élégance et ambiance chaleureuse',
      rendement: '80%',
      priceRange: 'Dès €1,200',
      count: '15 modèles',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #ffa366 100%)',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M10 14C10 12 12 10 14 10H36C38 10 40 12 40 14V38C40 40 38 42 36 42H14C12 42 10 40 10 38V14Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 18C14 18 18 14 25 14C32 14 36 18 36 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M18 28H32M18 34H28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Inserts',
      description: 'Rénover votre foyer existant',
      rendement: '75%',
      priceRange: 'Dès €900',
      count: '8 modèles',
      gradient: 'linear-gradient(135deg, #e84c1f 0%, #d43512 100%)',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M10 16C10 13.8 12 12 14 12H36C38.2 12 40 13.8 40 16V36C40 38.2 38.2 40 36 40H14C12 40 10 38.2 10 36V16Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 20H36M14 26H36M14 32H26" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Poêles Granulés',
      description: 'Chauffage automatique et écologique',
      rendement: '92%',
      priceRange: 'Dès €2,200',
      count: '10 modèles',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #ff8555 100%)',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M25 8C25 8 20 15 20 21C20 27 22.5 31 25 31C27.5 31 30 27 30 21C30 15 25 8 25 8Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="36" r="1.5" fill="currentColor" opacity="0.7"/>
          <circle cx="25" cy="38" r="1.5" fill="currentColor" opacity="0.7"/>
          <circle cx="32" cy="36" r="1.5" fill="currentColor" opacity="0.7"/>
          <path d="M12 42C12 42 10 44 10 46C10 47.1 10.9 48 12 48H38C39.1 48 40 47.1 40 46C40 44 38 42 38 42" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  const EfficiencyBar = ({ value }) => {
    const numValue = parseInt(value)
    return (
      <div style={{
        width: '100%',
        height: '6px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '3px',
        overflow: 'hidden',
        marginTop: '0.5rem'
      }}>
        <div style={{
          width: `${numValue}%`,
          height: '100%',
          background: 'white',
          borderRadius: '3px',
          transition: 'width 0.3s ease'
        }}></div>
      </div>
    )
  }

  return (
    <section style={{
      padding: '5rem 2rem',
      background: 'white'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Notre Univers de Chauffage
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
            Trouvez la solution de chauffage adaptée à vos besoins
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2.5rem'
        }}>
          {categories.map((category, idx) => (
            <div
              key={idx}
              style={{
                background: category.gradient,
                borderRadius: '25px',
                padding: '3rem',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)'
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(232, 76, 31, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Decorative circle */}
              <div style={{
                position: 'absolute',
                top: '-80px',
                right: '-80px',
                width: '200px',
                height: '200px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%'
              }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: '3.5rem',
                  marginBottom: '1rem'
                }}>
                  {category.icon}
                </div>

                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  marginBottom: '0.8rem'
                }}>
                  {category.title}
                </h3>

                <p style={{
                  fontSize: '1.05rem',
                  fontWeight: 300,
                  opacity: 0.95,
                  marginBottom: '1.5rem'
                }}>
                  {category.description}
                </p>

                {/* Stats Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  {/* Rendement */}
                  <div>
                    <p style={{
                      fontSize: '0.8rem',
                      opacity: 0.8,
                      marginBottom: '0.3rem',
                      fontWeight: 500
                    }}>
                      Rendement
                    </p>
                    <p style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      marginBottom: '0.5rem'
                    }}>
                      {category.rendement}
                    </p>
                    <EfficiencyBar value={category.rendement} />
                  </div>

                  {/* Price Range */}
                  <div>
                    <p style={{
                      fontSize: '0.8rem',
                      opacity: 0.8,
                      marginBottom: '0.3rem',
                      fontWeight: 500
                    }}>
                      Prix
                    </p>
                    <p style={{
                      fontSize: '1.3rem',
                      fontWeight: 700
                    }}>
                      {category.priceRange}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom info */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  opacity: 0.9
                }}>
                  {category.count}
                </span>
                <span style={{
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease'
                }}>
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }

          h2[style*="fontSize: 2.5rem"] {
            font-size: 1.8rem !important;
          }

          div[style*="padding: 3rem"] {
            padding: 1.5rem !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  )
}

export default CategoriesEnhanced
