import React from 'react'

function LifestyleSection() {
  const benefits = [
    {
      title: 'Moments Authentiques',
      description: 'Créez des souvenirs autour de véritables flammes qui réchauffent',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 6C28 6 20 16 20 24C20 32 23.6 37 28 37C32.4 37 36 32 36 24C36 16 28 6 28 6Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M15 40C15 40 10 48 10 52C10 53.6 11.3 55 13 55H43C44.7 55 46 53.6 46 52C46 48 41 40 41 40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Confort Douillet',
      description: 'Une chaleur douce et enveloppante qui transforme votre intérieur',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M8 12C8 8 12 4 20 4H36C44 4 48 8 48 12V44C48 48 44 52 36 52H20C12 52 8 48 8 44V12Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 24C16 18 20 14 28 14C36 14 40 18 40 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="28" cy="36" r="4" fill="currentColor" opacity="0.6"/>
        </svg>
      )
    },
    {
      title: 'Économies Réelles',
      description: '35% d\'économies en moyenne sur votre facture de chauffage',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M28 16V40M22 22H34C35.1 22 36 22.9 36 24V32C36 33.1 35.1 34 34 34H22C20.9 34 20 33.1 20 32V24C20 22.9 20.9 22 22 22Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 28L32 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    }
  ]

  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(1.5rem, 4vw, 2rem)',
      background: 'white'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'center'
        }}>
          {/* Left side - Image */}
          <div style={{
            position: 'relative',
            borderRadius: '30px',
            overflow: 'hidden',
            height: '550px'
          }}>
            <img
              src="/img/Accueil/Poe_le_a__Granule_s_Montargis.webp"
              alt="Ambiance chaleur"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(232, 76, 31, 0.05) 0%, rgba(26, 26, 26, 0.1) 100%)',
              pointerEvents: 'none'
            }}></div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              fontWeight: 800,
              color: '#1a1a1a',
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              lineHeight: 1.15
            }}>
              Créer plus qu'un chauffage,
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                créer une ambiance
              </span>
            </h2>

            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
              color: '#666',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.8,
              fontWeight: 300
            }}>
              Votre foyer mérite plus qu'une simple source de chaleur. Transformez votre intérieur en un havre de bien-être où chaque moment compte.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.2rem, 2vw, 1.8rem)' }}>
              {benefits.map((benefit, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  gap: 'clamp(1rem, 2vw, 1.5rem)',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    color: '#e84c1f',
                    minWidth: 'clamp(50px, 10vw, 70px)',
                    minHeight: 'clamp(50px, 10vw, 70px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(232, 76, 31, 0.08) 0%, rgba(255, 107, 53, 0.04) 100%)',
                    borderRadius: '20px',
                    flexShrink: 0
                  }}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      marginBottom: '0.5rem'
                    }}>
                      {benefit.title}
                    </h3>
                    <p style={{
                      fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.6
                    }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button style={{
              marginTop: 'clamp(1.5rem, 3vw, 2.5rem)',
              padding: 'clamp(0.7rem, 2vw, 1.2rem) clamp(1.2rem, 4vw, 2.5rem)',
              background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: '0 15px 40px rgba(232, 76, 31, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(232, 76, 31, 0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(232, 76, 31, 0.4)'
            }}
            >
              Découvrir nos styles
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          h2[style*="fontSize: 2.8rem"] {
            font-size: 2rem !important;
          }

          div[style*="height: 550px"] {
            height: 400px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default LifestyleSection
