import React, { useState } from 'react'

function StorySection4() {
  const [selectedYear, setSelectedYear] = useState(null)

  const timeline = [
    { year: '2010', title: 'Fondation', desc: 'Ouverture du 1er showroom à Villemandeur', angle: 0 },
    { year: '2013', title: 'Croissance', desc: 'Expansion à 3 emplacements régionaux', angle: 72 },
    { year: '2016', title: 'Innovation', desc: 'Lancement du service Pellet Drive 24/7', angle: 144 },
    { year: '2019', title: 'Reconnaissance', desc: 'Certifications environnementales obtenues', angle: 216 },
    { year: '2024', title: 'Leadership', desc: 'Leaders du marché régional', angle: 288 }
  ]

  const radius = 200

  const getPosition = (angle, radius) => {
    const radian = (angle * Math.PI) / 180
    return {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian)
    }
  }

  return (
    <section style={{ padding: '4rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a1a1a' }}>
            Notre Évolution
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: 300 }}>
            14 années de croissance et d'innovation
          </p>
        </div>

        {/* Timeline Circular Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Circular Timeline */}
          <div style={{ position: 'relative', aspect: '1/1', minHeight: '500px' }}>
            {/* Center Circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '150px',
              height: '150px',
              background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              zIndex: 10,
              boxShadow: '0 15px 40px rgba(232, 76, 31, 0.3)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 800 }}>2010</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 300, marginTop: '0.5rem' }}>→ 2024</div>
            </div>

            {/* Timeline Items */}
            {timeline.map((event, idx) => {
              const pos = getPosition(event.angle, radius)
              const isSelected = selectedYear === event.year

              return (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                    width: '80px',
                    height: '80px'
                  }}
                >
                  {/* Connector Line */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: radius + 'px',
                    height: '2px',
                    background: 'rgba(232, 76, 31, 0.1)',
                    transformOrigin: 'left center',
                    transform: `translate(-50%, -50%) rotate(${event.angle}deg)`,
                    zIndex: 0
                  }}></div>

                  {/* Node */}
                  <button
                    onClick={() => setSelectedYear(event.year)}
                    style={{
                      position: 'relative',
                      zIndex: 5,
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      border: 'none',
                      background: isSelected
                        ? 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)'
                        : 'white',
                      color: isSelected ? 'white' : '#e84c1f',
                      fontWeight: 800,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      boxShadow: isSelected
                        ? '0 12px 30px rgba(232, 76, 31, 0.3)'
                        : '0 5px 15px rgba(232, 76, 31, 0.15)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(232, 76, 31, 0.25)'
                        e.currentTarget.style.transform = 'scale(1.1)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(232, 76, 31, 0.15)'
                        e.currentTarget.style.transform = 'scale(1)'
                      }
                    }}
                  >
                    {event.year.slice(-2)}
                  </button>
                </div>
              )
            })}
          </div>

          {/* Info Panel */}
          <div>
            {selectedYear ? (
              <div
                style={{
                  background: 'linear-gradient(135deg, #f5f5f7 0%, #fafafa 100%)',
                  borderRadius: '20px',
                  padding: '3rem',
                  border: '1px solid rgba(232, 76, 31, 0.1)',
                  animation: 'fadeInUp 0.3s ease'
                }}
              >
                {(() => {
                  const selected = timeline.find(e => e.year === selectedYear)
                  return (
                    <>
                      <div style={{
                        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                        color: 'white',
                        padding: '1.5rem',
                        borderRadius: '15px',
                        marginBottom: '2rem',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                          {selected.year}
                        </div>
                        <p style={{ margin: 0, fontWeight: 300 }}>Une année clé</p>
                      </div>
                      <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: 800,
                        color: '#1a1a1a',
                        marginBottom: '1rem'
                      }}>
                        {selected.title}
                      </h3>
                      <p style={{
                        fontSize: '1.05rem',
                        color: '#666',
                        lineHeight: 1.8,
                        marginBottom: '2rem'
                      }}>
                        {selected.desc}
                      </p>
                      <button style={{
                        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                        color: 'white',
                        border: 'none',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                        fontWeight: 600
                      }}>
                        En savoir plus
                      </button>
                    </>
                  )
                })()}
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                color: '#999',
                padding: '3rem',
                fontSize: '1.1rem'
              }}>
                👆 Cliquez sur un événement pour en savoir plus
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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

export default StorySection4
