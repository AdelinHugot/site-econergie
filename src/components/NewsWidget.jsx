import React from 'react'
import { Link } from 'react-router-dom'

function NewsWidget() {
  const latestNews = [
    {
      id: 1,
      date: '15 Octobre 2024',
      title: 'Nouvelle Collection Automne 2024 Disponible',
      excerpt: 'Découvrez nos nouveaux modèles avec design épuré et performance optimisée.',
      category: 'produit',
      icon: '📦'
    },
    {
      id: 2,
      date: '10 Octobre 2024',
      title: 'Promotion Spéciale : -15% sur les Poêles à Granulés',
      excerpt: 'Profitez de notre offre exceptionnelle avant la fin de l\'automne.',
      category: 'promotion',
      icon: '🎉'
    },
    {
      id: 3,
      date: '5 Octobre 2024',
      title: 'Guide Complet : Bien Choisir son Poêle',
      excerpt: 'Tous les critères à considérer pour faire le bon choix.',
      category: 'conseil',
      icon: '📚'
    }
  ]

  return (
    <section style={{ padding: '4rem 2rem', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a1a1a' }}>
            Actualités
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: 300 }}>
            Restez informé de nos dernières actualités et nouveautés
          </p>
        </div>

        {/* News Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {latestNews.map((news) => (
            <div
              key={news.id}
              style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(232, 76, 31, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)'
              }}
            >
              {/* Top Bar with Category */}
              <div style={{
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                color: 'white',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>{news.icon}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                  {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: '#999', fontSize: '0.8rem', marginBottom: '0.8rem', fontWeight: 600 }}>
                  📅 {news.date}
                </p>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '0.8rem',
                  lineHeight: 1.4
                }}>
                  {news.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6,
                  flex: 1
                }}>
                  {news.excerpt}
                </p>
                <button style={{
                  background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '0.7rem 1.5rem',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  alignSelf: 'flex-start'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(232, 76, 31, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  Lire la suite
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/actualites" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(232, 76, 31, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 15px 40px rgba(232, 76, 31, 0.4)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(232, 76, 31, 0.3)'}
            >
              Voir toutes les actualités
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsWidget
