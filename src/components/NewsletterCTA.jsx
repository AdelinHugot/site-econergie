import React, { useState } from 'react'

function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section style={{
      background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
      padding: '5rem 2rem',
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

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: '2.8rem',
          fontWeight: 800,
          color: 'white',
          marginBottom: '1.5rem',
          lineHeight: 1.2
        }}>
          Prêt à transformer votre intérieur ?
        </h2>

        <p style={{
          fontSize: '1.2rem',
          color: 'rgba(255, 255, 255, 0.95)',
          marginBottom: '2.5rem',
          maxWidth: '700px',
          margin: '0 auto 2.5rem'
        }}>
          Recevez nos conseils d'experts et nos meilleures offres directement dans votre boîte mail
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            gap: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
            marginBottom: '2rem'
          }}>
            <input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                padding: '1rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)'}
              onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
            />
            <button
              type="submit"
              style={{
                padding: '1rem 2rem',
                background: 'white',
                color: '#e84c1f',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)'
              }}
            >
              S'inscrire
            </button>
          </form>
        ) : (
          <div style={{
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '15px',
            color: 'white',
            marginBottom: '2rem',
            animation: 'slideDown 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            ✓ Merci ! Vérifiez votre email pour confirmer votre inscription
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginTop: '3rem',
          paddingTop: '3rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📧</div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.9rem'
            }}>
              Conseils d'experts
            </p>
          </div>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎁</div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.9rem'
            }}>
              Offres exclusives
            </p>
          </div>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛡️</div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.9rem'
            }}>
              Pas de spam
            </p>
          </div>
        </div>
      </div>

      <style>{\`
        @media (max-width: 600px) {
          form {
            flex-direction: column !important;
          }
          input, button {
            width: 100% !important;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default NewsletterCTA
