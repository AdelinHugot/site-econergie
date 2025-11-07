import React from 'react'
import PopupDisplay from '../components/PopupDisplay'

function APropos() {
  const values = [
    {
      title: 'Excellence',
      description: 'Qualité premium dans chaque produit et service',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'Technologie de pointe pour votre confort',
      icon: '💡'
    },
    {
      title: 'Durabilité',
      description: 'Engagement envers l\'environnement',
      icon: '🌍'
    },
    {
      title: 'Service',
      description: 'Votre satisfaction est notre priorité',
      icon: '🤝'
    }
  ]

  const timeline = [
    { year: '2010', event: 'Création d\'Econergie' },
    { year: '2012', event: 'Ouverture du showroom principal' },
    { year: '2015', event: 'Lancement du service Pellet Drive' },
    { year: '2018', event: 'Expansion dans 3 nouvelles régions' },
    { year: '2021', event: 'Passage à 50 employés' },
    { year: '2024', event: 'Leaders du marché régional' }
  ]

  return (
    <div style={{ minHeight: '100vh', marginTop: '60px' }}>
      <PopupDisplay pageSlug="apropos" />
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>
          À Propos d'Econergie
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 300 }}>
          Plus de 10 ans d'expérience en solutions de chauffage écologiques
        </p>
      </section>

      {/* Story Section */}
      <section style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#1a1a1a' }}>
              Notre Histoire
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666', marginBottom: '1rem' }}>
              Econergie est née d'une passion simple : offrir aux familles françaises des solutions de chauffage de qualité, économiques et respectueuses de l'environnement.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666', marginBottom: '1rem' }}>
              Depuis 2010, nous accompagnons nos clients dans leur transition énergétique. De modestes débuts dans notre premier showroom à Villemandeur, nous avons grandi en restant fidèles à nos valeurs.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666' }}>
              Aujourd'hui, Econergie est le partenaire de référence pour les poêles et cheminées sur toute la région, avec plus de 5000 clients satisfaits.
            </p>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
            borderRadius: '15px',
            padding: '3rem',
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>
              14 ans
            </div>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              D'expérience et de confiance
            </p>
            <div style={{ borderTop: '2px solid rgba(255,255,255,0.3)', paddingTop: '2rem', marginTop: '2rem' }}>
              <p style={{ fontSize: '1rem', fontWeight: 300 }}>
                5000+ clients satisfaits<br/>
                6 emplacements<br/>
                50+ employés passionnés
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', color: '#1a1a1a' }}>
          Notre Parcours
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {timeline.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '2rem',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                borderLeft: '4px solid #e84c1f',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(232, 76, 31, 0.2)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <h3 style={{ color: '#e84c1f', fontWeight: 800, marginBottom: '0.5rem', fontSize: '1.3rem' }}>
                {item.year}
              </h3>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.6 }}>
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        background: '#f5f5f5',
        padding: '4rem 2rem',
        margin: '4rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', color: '#1a1a1a' }}>
            Nos Valeurs
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {values.map((value, idx) => (
              <div
                key={idx}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(232, 76, 31, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {value.icon}
                </div>
                <h3 style={{ color: '#1a1a1a', fontWeight: 800, marginBottom: '0.5rem' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.5rem', color: '#1a1a1a' }}>
          Notre Équipe
        </h2>
        <p style={{ fontSize: '1.1rem', textAlign: 'center', color: '#666', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Une équipe de professionnels passionnés, dédiés à votre satisfaction et experts en solutions de chauffage.
        </p>
        <div style={{
          background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
          borderRadius: '15px',
          padding: '3rem',
          color: 'white',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            50+ Professionnels à Votre Service
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                50+
              </div>
              <p style={{ fontWeight: 300 }}>Employés experts</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                5000+
              </div>
              <p style={{ fontWeight: 300 }}>Clients satisfaits</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                24/7
              </div>
              <p style={{ fontWeight: 300 }}>Support disponible</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default APropos
