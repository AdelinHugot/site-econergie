import React from 'react'

function TeamSection() {
  return (
    <section style={{ padding: '4rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Text Content */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a1a1a' }}>
                Notre Équipe
              </h2>
              <div style={{
                width: '60px',
                height: '4px',
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                marginBottom: '2rem'
              }}></div>
            </div>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#666', marginBottom: '1.5rem' }}>
              <strong>Notre force réside dans notre équipe passionnée.</strong> Plus de 50 professionnels experts travaillent ensemble pour offrir le meilleur service à nos clients.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#666', marginBottom: '1.5rem' }}>
              Depuis 2010, nous avons grandi en gardant les mêmes valeurs : excellence, écoute client et innovation. Chaque membre de notre équipe partage cette vision.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#666', marginBottom: '2rem' }}>
              Techniciens certifiés, conseillers en chauffage, installateurs qualifiés, responsables logistique... Ensemble, nous formons une équipe capable de répondre à tous vos besoins.
            </p>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                borderRadius: '15px',
                padding: '1.5rem',
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>50+</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 300 }}>Employés experts</div>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                borderRadius: '15px',
                padding: '1.5rem',
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>14+</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 300 }}>Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Team Photo Placeholder */}
          <div
            style={{
              background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
              borderRadius: '20px',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 500,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(232, 76, 31, 0.3)'
            }}
          >
            {/* This will be replaced with actual team photo */}
            <div style={{ textAlign: 'center', zIndex: 1 }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</div>
              <p>Photo de l'équipe Econergie</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '1rem' }}>
                Placez votre photo d'équipe ici
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
