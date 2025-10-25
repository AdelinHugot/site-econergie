import React from 'react'

function WhyEconergie() {
  const reasons = [
    {
      title: 'Expertise Locale',
      items: [
        '3 showrooms accessibles',
        '14 ans d\'expérience',
        '50+ conseillers experts'
      ],
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 8C18 8 10 16 10 26C10 34 16 42 28 46C40 42 46 34 46 26C46 16 38 8 28 8Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 20C32.4 20 36 23.6 36 28C36 32.4 32.4 36 28 36C23.6 36 20 32.4 20 28C20 23.6 23.6 20 28 20Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="28" cy="28" r="2" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: 'Service Complet',
      items: [
        'Vente, installation, maintenance',
        'Financement flexible',
        'Support 24/7 disponible'
      ],
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M8 16C8 11.6 11.6 8 16 8H40C44.4 8 48 11.6 48 16V40C48 44.4 44.4 48 40 48H16C11.6 48 8 44.4 8 40V16Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 16H40M16 28H40M16 40H32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Qualité Premium',
      items: [
        'Produits certifiés EN+',
        'Garanties étendues',
        'Design exclusif'
      ],
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 6L34 22H52L38 32L44 48L28 38L12 48L18 32L4 22H22L28 6Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  return (
    <section style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)'
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
            Pourquoi Econergie
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
            margin: '0 auto 1.5rem'
          }}></div>
          <p style={{
            fontSize: '1.15rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Nous ne sommes pas juste fournisseurs, nous sommes vos partenaires de confiance
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3rem'
        }}>
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                borderRadius: '25px',
                padding: '3rem 2rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                border: '1px solid rgba(232, 76, 31, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)'
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(232, 76, 31, 0.2)'
                e.currentTarget.style.borderColor = 'rgba(232, 76, 31, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'
                e.currentTarget.style.borderColor = 'rgba(232, 76, 31, 0.1)'
              }}
            >
              {/* Decorative background */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-30%',
                width: '280px',
                height: '280px',
                background: 'radial-gradient(circle, rgba(232, 76, 31, 0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
              }}></div>

              {/* Icon Container */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgba(232, 76, 31, 0.12) 0%, rgba(255, 107, 53, 0.08) 100%)',
                borderRadius: '20px',
                marginBottom: '1.5rem',
                color: '#e84c1f',
                position: 'relative',
                zIndex: 1
              }}>
                {reason.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                {reason.title}
              </h3>

              {/* Items List */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                zIndex: 1
              }}>
                {reason.items.map((item, i) => (
                  <li key={i} style={{
                    fontSize: '0.95rem',
                    color: '#666',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.8rem',
                    lineHeight: 1.6
                  }}>
                    <span style={{
                      color: '#e84c1f',
                      fontWeight: 700,
                      marginTop: '2px',
                      minWidth: '6px'
                    }}>
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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

export default WhyEconergie
