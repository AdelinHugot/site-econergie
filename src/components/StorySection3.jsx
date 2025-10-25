import React from 'react'

function StorySection3() {
  const timeline = [
    { year: '2010', title: 'Fondation', desc: 'Ouverture du 1er showroom à Villemandeur', icon: '🏢' },
    { year: '2013', title: 'Croissance', desc: 'Expansion à 3 emplacements régionaux', icon: '📈' },
    { year: '2016', title: 'Innovation', desc: 'Lancement du service Pellet Drive 24/7', icon: '⚡' },
    { year: '2019', title: 'Reconnaissance', desc: 'Certifications environnementales obtenues', icon: '🏆' },
    { year: '2024', title: 'Leadership', desc: 'Leaders du marché régional', icon: '👑' }
  ]

  return (
    <section style={{ padding: '4rem 2rem', background: '#f9f9f9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a1a1a' }}>
            Notre Parcours
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: 300, maxWidth: '600px', margin: '0 auto' }}>
            Une histoire de passion, d'innovation et de croissance continue
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ position: 'relative', paddingTop: '2rem' }}>
          {/* Center Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '3px',
            background: 'linear-gradient(to bottom, #e84c1f, #ff6b35)',
            transform: 'translateX(-50%)'
          }}></div>

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {timeline.map((event, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'center',
                  flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      background: 'white',
                      borderRadius: '15px',
                      padding: '2rem',
                      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      borderTop: '3px solid #e84c1f'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(232, 76, 31, 0.2)'
                      e.currentTarget.style.transform = 'translateY(-5px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                      <span style={{ fontSize: '1.8rem' }}>{event.icon}</span>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1a1a1a', margin: 0 }}>
                        {event.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, margin: 0 }}>
                      {event.desc}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '1.3rem',
                  flexShrink: 0,
                  boxShadow: '0 8px 20px rgba(232, 76, 31, 0.3)',
                  zIndex: 10,
                  position: 'relative'
                }}>
                  {event.year}
                </div>

                {/* Empty space for alternation */}
                <div style={{ flex: 1 }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginTop: '4rem',
          paddingTop: '3rem',
          borderTop: '2px solid #eee'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#e84c1f', marginBottom: '0.5rem' }}>
              14+
            </div>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Années d'expertise</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#e84c1f', marginBottom: '0.5rem' }}>
              5000+
            </div>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Clients satisfaits</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#e84c1f', marginBottom: '0.5rem' }}>
              50+
            </div>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Employés experts</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#e84c1f', marginBottom: '0.5rem' }}>
              6
            </div>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Emplacements</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySection3
