import React from 'react'

function StorySection() {
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
              Fondée par une équipe de spécialistes du chauffage avec plus de 20 ans d'expérience combinée, Econergie a d'abord ouvert un petit showroom à Villemandeur. Notre engagement initial était clair : pas de compromis sur la qualité, mais des prix accessibles.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#666', marginBottom: '1.5rem' }}>
              Année après année, grâce à la satisfaction de nos clients et notre engagement envers l'excellence, Econergie s'est développée organiquement. Nous avons ouvert de nouveaux showrooms, agrandi notre équipe et toujours mis l'accent sur le service client.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#666', marginBottom: '2rem' }}>
              <strong>Aujourd'hui, en 2024,</strong> Econergie est devenue le leader régional en solutions de chauffage. Nous avons aidé plus de 5000 familles à transformer leur maison et économiser sur leur facture énergétique.
            </p>

            {/* Key Stats */}
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
                <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>14</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 300 }}>Ans d'expertise</div>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                borderRadius: '15px',
                padding: '1.5rem',
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>5000+</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 300 }}>Familles satisfaites</div>
              </div>
            </div>
          </div>

          {/* Visual Timeline */}
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(to bottom, #e84c1f, #ff6b35)'
            }}></div>

            {/* Timeline Events */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {[
                { year: '2010', title: 'Fondation', desc: 'Ouverture du 1er showroom' },
                { year: '2013', title: 'Croissance', desc: 'Expansion à 3 emplacements' },
                { year: '2016', title: 'Innovation', desc: 'Lancement Pellet Drive 24/7' },
                { year: '2019', title: 'Reconnaissance', desc: 'Certifications environnementales' },
                { year: '2024', title: 'Leadership', desc: 'Leaders du marché régional' }
              ].map((event, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '2rem' }}>
                  <div style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '60px',
                    height: '60px',
                    background: 'white',
                    border: '4px solid #e84c1f',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontWeight: 800,
                    color: '#e84c1f',
                    fontSize: '0.8rem'
                  }}>
                    {event.year.slice(-2)}
                  </div>
                  <div style={{ paddingTop: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.3rem' }}>
                      {event.title}
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: '#666' }}>
                      {event.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySection
