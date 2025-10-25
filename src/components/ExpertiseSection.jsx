import React from 'react'

function ExpertiseSection() {
  const expertise = [
    {
      icon: '🔬',
      title: 'Expertise Technique',
      description: 'Plus de 20 ans d\'expérience combinée en solutions de chauffage',
      features: ['Certifications professionnelles', 'Formation continue', 'Études approfondies']
    },
    {
      icon: '🎯',
      title: 'Service Personnalisé',
      description: 'Chaque projet est unique et mérite une attention particulière',
      features: ['Consultation gratuite', 'Devis transparent', 'Suivi personnalisé']
    },
    {
      icon: '⚙️',
      title: 'Installation Professionnelle',
      description: 'Pose et mise en service réalisées par des experts qualifiés',
      features: ['Respect des normes', 'Garantie 2 ans', 'Respect des délais']
    },
    {
      icon: '🌱',
      title: 'Écologie & Économies',
      description: 'Solutions durables qui réduisent votre facture énergétique',
      features: ['Économies jusqu\'à 45%', 'Énergie renouvelable', 'Normes environnementales']
    },
    {
      icon: '🤝',
      title: 'Relation de Confiance',
      description: 'Transparence et honnêteté dans chaque interaction',
      features: ['Pas de frais cachés', 'Communication claire', 'Disponibilité 24/7']
    },
    {
      icon: '📞',
      title: 'Support Après-Vente',
      description: 'Nous restons disponibles longtemps après l\'installation',
      features: ['Maintenance incluse', 'Dépannage d\'urgence', 'Pièces de rechange']
    }
  ]

  return (
    <section style={{ padding: '4rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a1a1a' }}>
            Nos Points Forts
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto', fontWeight: 300 }}>
            Ce qui nous rend différents et pourquoi nos clients nous choisissent
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2.5rem'
        }}>
          {expertise.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                border: '1px solid rgba(232, 76, 31, 0.1)',
                borderRadius: '15px',
                padding: '2rem',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(232, 76, 31, 0.3)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(232, 76, 31, 0.15)'
                e.currentTarget.style.transform = 'translateY(-8px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(232, 76, 31, 0.1)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Icon */}
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                borderRadius: '15px',
                padding: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '0.8rem'
              }}>
                {item.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                marginBottom: '1.5rem',
                lineHeight: 1.6
              }}>
                {item.description}
              </p>

              {/* Features */}
              <ul style={{ listStyle: 'none' }}>
                {item.features.map((feature, fidx) => (
                  <li
                    key={fidx}
                    style={{
                      fontSize: '0.85rem',
                      color: '#666',
                      paddingLeft: '1.5rem',
                      position: 'relative',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#e84c1f',
                      fontWeight: 'bold'
                    }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection
