import React, { useState } from 'react'

function ServicesPage() {
  const [expandedService, setExpandedService] = useState(0)

  const services = [
    {
      title: 'Vente de Granulés de Bois',
      icon: '🛒',
      description: 'Large gamme de granulés de qualité certifiée EN+ A1',
      details: 'Nous proposons des granulés de bois de haute qualité, disponibles en petites ou grandes quantités. Livraison possible en vrac pour les gros volumes. Nos produits sont certifiés et respectent les normes environnementales.',
      benefits: [
        'Stock permanent disponible',
        'Certifiés EN+ A1',
        'Tarifs compétitifs',
        'Livraison en vrac possible',
        'Conseil technique gratuit'
      ]
    },
    {
      title: 'Pellet Drive 24/7',
      icon: '⛽',
      description: 'Service innovant d\'accès aux granulés en libre-service',
      details: 'Accédez à nos granulés de bois en libre service 24h/24, 7 jours sur 7. Paiement par carte bancaire sécurisé. Service unique sur la région !',
      benefits: [
        'Accessible jour et nuit',
        'Paiement par carte',
        'Service sécurisé',
        'Stock approvisionné',
        'Facile d\'accès'
      ]
    },
    {
      title: 'Installation & Mise en Service',
      icon: '🔧',
      description: 'Installation professionnelle par nos experts qualifiés',
      details: 'Nos techniciens installent votre système de chauffage et assurent sa mise en service correcte. Respect des normes de sécurité et vérification complète du système.',
      benefits: [
        'Techniciens qualifiés',
        'Respect des normes',
        'Mise en service complète',
        'Garantie d\'installation',
        'Support post-installation'
      ]
    },
    {
      title: 'Service d\'Entretien & Maintenance',
      icon: '🛠️',
      description: 'Entretien régulier pour garantir performance et durabilité',
      details: 'Contrats d\'entretien flexibles avec ramonage professionnel, nettoyage du système, et vérifications annuelles obligatoires. Dépannage d\'urgence disponible.',
      benefits: [
        'Nettoyage régulier',
        'Ramonage professionnel',
        'Vérifications annuelles',
        'Pièces de rechange',
        'Intervention rapide'
      ]
    },
    {
      title: 'Visualisation 3D',
      icon: '📐',
      description: 'Prévisualisez votre installation avant achat',
      details: 'Venez nous rencontrer avec votre projet ! Nous créons une modélisation 3D précise de votre futur installation dans votre espace réel avec les dimensions exactes.',
      benefits: [
        'Modélisation précise',
        'Adaptation dimensions',
        'Styles personnalisables',
        'Consultation gratuite',
        'Rendu réaliste'
      ]
    },
    {
      title: 'Assistance Complète',
      icon: '📞',
      description: 'Support technique et commercial à votre disposition',
      details: 'Assistance téléphonique dédiée, livraison à domicile, dépannage d\'urgence, et support email. Notre équipe est là pour vous à chaque étape.',
      benefits: [
        'Assistance téléphonique',
        'Livraison à domicile',
        'Dépannage d\'urgence',
        'Support email',
        'Résolution rapide'
      ]
    }
  ]

  return (
    <div style={{ minHeight: '100vh', marginTop: '60px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>
          Nos Services
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 300 }}>
          Une offre complète pour votre satisfaction
        </p>
      </section>

      {/* Services Grid */}
      <section style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => setExpandedService(expandedService === idx ? -1 : idx)}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(232, 76, 31, 0.2)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                color: 'white',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.95rem', fontWeight: 300 }}>
                  {service.description}
                </p>
              </div>

              {expandedService === idx && (
                <div style={{ padding: '2rem', borderTop: '2px solid #e84c1f' }}>
                  <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                    {service.details}
                  </p>
                  <h4 style={{ color: '#1a1a1a', fontWeight: 700, marginBottom: '1rem' }}>
                    Avantages :
                  </h4>
                  <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                    {service.benefits.map((benefit, bidx) => (
                      <li
                        key={bidx}
                        style={{
                          paddingLeft: '1.5rem',
                          position: 'relative',
                          marginBottom: '0.6rem',
                          color: '#555'
                        }}
                      >
                        <span style={{ position: 'absolute', left: 0, color: '#e84c1f', fontWeight: 'bold' }}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    Demander plus d'informations
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center',
        margin: '4rem 0 0'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>
          Besoin d'aide pour choisir un service ?
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', fontWeight: 300 }}>
          Contactez-nous pour une consultation gratuite
        </p>
        <button style={{
          padding: '1rem 2.5rem',
          background: 'white',
          color: '#e84c1f',
          border: 'none',
          borderRadius: '50px',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        }}>
          Nous contacter
        </button>
      </section>
    </div>
  )
}

export default ServicesPage
