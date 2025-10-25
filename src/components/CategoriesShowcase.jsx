import React from 'react'

function CategoriesShowcase() {
  const categories = [
    {
      title: 'Poêles à Bois',
      icon: '🔥',
      description: 'Chauffage naturel et authentique',
      gradient: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
      count: '12 modèles'
    },
    {
      title: 'Cheminées',
      icon: '🏠',
      description: 'Élégance et ambiance chaleureuse',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #ffa366 100%)',
      count: '15 modèles'
    },
    {
      title: 'Inserts',
      icon: '🔧',
      description: 'Rénover votre foyer existant',
      gradient: 'linear-gradient(135deg, #e84c1f 0%, #d43512 100%)',
      count: '8 modèles'
    },
    {
      title: 'Poêles Granulés',
      icon: '⚡',
      description: 'Chauffage automatique et écologique',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #ff8555 100%)',
      count: '10 modèles'
    }
  ]

  return (
    <section style={{
      padding: '5rem 2rem',
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
            Explorez Nos Catégories
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
                minHeight: '250px',
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
              </div>

              {/* Bottom info */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
                paddingTop: '1rem',
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
    </section>
  )
}

export default CategoriesShowcase
