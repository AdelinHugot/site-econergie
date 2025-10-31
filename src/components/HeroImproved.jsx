import React from 'react'

function HeroImproved() {
  return (
    <section style={{
      position: 'relative',
      height: '90vh',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      marginTop: '60px'
    }}>
      {/* Background image */}
      <img
        src="/img/Accueil/Poe_le_a__Granule_s_Montargis.webp"
        alt="Poêles Econergie"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      />

      {/* Overlay gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.5) 0%, rgba(232, 76, 31, 0.3) 100%)',
        zIndex: 1
      }}></div>

      {/* Decorative shapes */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(232, 76, 31, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 1,
        animation: 'float 6s ease-in-out infinite'
      }}></div>

      {/* Heat particles animation */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${3 + Math.random() * 3}px`,
              height: `${3 + Math.random() * 3}px`,
              background: `rgba(232, 76, 31, ${0.4 + Math.random() * 0.4})`,
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 30}%`,
              animation: `rise ${2 + Math.random() * 2}s ease-out infinite`,
              animationDelay: `${i * 0.15}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '900px',
        textAlign: 'center',
        padding: '2rem',
        animation: 'fadeInUp 0.8s ease 0.2s both'
      }}>

        {/* Main heading */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 4rem)',
          fontWeight: 900,
          color: 'white',
          marginBottom: '1.5rem',
          lineHeight: 1.2,
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          animation: 'slideUp 0.8s ease 0.3s both',
          whiteSpace: 'nowrap'
        }}>
          La Chaleur de l'Authentique
          <span style={{
            display: 'inline-block',
            marginLeft: '0.3em',
            width: '8px',
            height: '1em',
            background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
            borderRadius: '2px',
            animation: 'blink 1s ease-in-out infinite',
            verticalAlign: 'middle'
          }}></span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.3rem)',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '2.5rem',
          maxWidth: '700px',
          margin: '0 auto 2.5rem',
          fontWeight: 300,
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          animation: 'slideUp 0.8s ease 0.4s both'
        }}>
          Découvrez nos cheminées et poêles haut de gamme pour transformer votre intérieur en havre de chaleur
        </p>

        {/* Quick benefits */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          animation: 'slideUp 0.8s ease 0.45s both'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <path d="M9 1C4.6 1 1 4.6 1 9S4.6 17 9 17s8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm3.5-9H8v5.5l4.7 2.8.8-1.3-3-1.8z"/>
            </svg>
            Conseil Expert
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <path d="M9 1C4.6 1 1 4.6 1 9s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm1.5-9h-1V5h-1v3H6v1h1.5V11h1v-2H12v-1h-1.5V6z"/>
            </svg>
            Design Premium
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <path d="M9 1C4.6 1 1 4.6 1 9s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm.5-11H8v5l4.2 2.5.8-1.3L9.5 8.5z"/>
            </svg>
            Service 24/7
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'slideUp 0.8s ease 0.5s both'
        }}>
          <button style={{
            padding: '1.2rem 2.5rem',
            background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.05rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: '0 15px 40px rgba(232, 76, 31, 0.4)',
            position: 'relative',
            zIndex: 1
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
            Demander un Devis
          </button>

          <button style={{
            padding: '1.2rem 2.5rem',
            background: 'rgba(255, 255, 255, 0.15)',
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '50px',
            fontSize: '1.05rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 1
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'
            e.currentTarget.style.borderColor = 'white'
            e.currentTarget.style.transform = 'translateY(-5px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
          >
            Explorer Nos Produits
          </button>
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom of section */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2.5s ease-in-out infinite',
        opacity: 1,
        zIndex: 100
      }}>
        <div style={{
          fontSize: '2.5rem',
          color: 'white',
          animation: 'bounce 2.5s ease-in-out infinite',
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
          fontWeight: 'bold'
        }}>
          ↓
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(15px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes rise {
          to {
            opacity: 0;
            transform: translateY(-80px) translateX(20px);
          }
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroImproved
