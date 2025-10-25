import React from 'react'

function StorySection2() {
  const timeline = [
    { year: '2010', title: 'Fondation', desc: 'Ouverture du 1er showroom à Villemandeur', color: '#e84c1f' },
    { year: '2013', title: 'Croissance', desc: 'Expansion à 3 emplacements régionaux', color: '#ff6b35' },
    { year: '2016', title: 'Innovation', desc: 'Lancement du service Pellet Drive 24/7', color: '#e84c1f' },
    { year: '2019', title: 'Reconnaissance', desc: 'Certifications environnementales obtenues', color: '#ff6b35' },
    { year: '2024', title: 'Leadership', desc: 'Leaders du marché régional', color: '#e84c1f' }
  ]

  return (
    <section style={{ padding: '4rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          {/* Text Content */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a1a1a' }}>
                L'Histoire d'Econergie
              </h2>
              <div style={{
                width: '60px',
                height: '4px',
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                marginBottom: '2rem'
              }}></div>
            </div>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#666', marginBottom: '1.5rem' }}>
              <strong>Tout a commencé en 2010</strong> avec une vision simple : offrir aux familles françaises des solutions de chauffage de qualité, économiques et écologiques.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#666', marginBottom: '1.5rem' }}>
              Fondée par une équipe de spécialistes du chauffage avec plus de 20 ans d'expérience combinée, Econergie a d'abord ouvert un petit showroom à Villemandeur. Notre engagement initial était clair : pas de compromis sur la qualité.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#666', marginBottom: '2rem' }}>
              <strong>Aujourd'hui, en 2024,</strong> nous avons aidé plus de 5000 familles à transformer leur maison et économiser sur leur facture énergétique.
            </p>

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
                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>14</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 300 }}>Ans d'expertise</div>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                borderRadius: '15px',
                padding: '1.5rem',
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>5000+</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 300 }}>Familles satisfaites</div>
              </div>
            </div>
          </div>

          {/* Horizontal Timeline Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            padding: '2rem',
            background: '#f9f9f9',
            borderRadius: '20px'
          }}>
            {timeline.map((event, idx) => (
              <div
                key={idx}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1.2rem',
                  borderLeft: `4px solid ${event.color}`,
                  display: 'flex',
                  gap: '1rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(232, 76, 31, 0.15)'
                  e.currentTarget.style.transform = 'translateX(8px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div style={{
                  minWidth: '50px',
                  background: event.color,
                  color: 'white',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.85rem'
                }}>
                  {event.year.slice(-2)}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.2rem' }}>
                    {event.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#666' }}>
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySection2
