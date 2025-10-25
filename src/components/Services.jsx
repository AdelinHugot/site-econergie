import React, { useState } from 'react'

function Services() {
  const [activeTab, setActiveTab] = useState('vente')

  const services = {
    vente: {
      title: 'Vente de Granulés',
      description: 'Econergie vous propose une large gamme de granulés de bois de qualité supérieure, en vente au détail ou en gros volume.',
      items: [
        'Stock permanent disponible',
        'Granulés certifiés EN+ A1',
        'Tarifs compétitifs et volume discount',
        'Livraison possible en vrac',
        'Conseil technique gratuit'
      ],
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis.webp'
    },
    pellet: {
      title: 'Pellet Drive 24/7',
      description: 'Service unique et innovant ! Accédez à nos granulés de bois en libre service 24h/24, 7 jours sur 7.',
      items: [
        'Accessible jour et nuit',
        'Paiement par carte bancaire',
        'Qualité garantie',
        'Service sécurisé et surveillé',
        'Stock toujours approvisionné'
      ],
      image: '/img/Accueil/Poe_le_a__bois_Montargis.webp'
    },
    entretien: {
      title: 'Service d\'Entretien',
      description: 'Laissez-nous nous occuper de votre installation. Nous gérons tout pour votre tranquillité d\'esprit.',
      items: [
        'Nettoyage régulier du système',
        'Ramonage professionnel',
        'Vérification annuelle obligatoire',
        'Pièces de rechange disponibles',
        'Intervention rapide garantie'
      ],
      image: '/img/Accueil/Poe_le_Domo_Montargis.webp'
    },
    plan3d: {
      title: 'Visualisation 3D',
      description: 'Venez avec votre projet et nous vous offrons une visualisation en 3D de votre future installation.',
      items: [
        'Modélisation précise de votre espace',
        'Adaptation aux dimensions réelles',
        'Différents styles et finitions',
        'Consultation gratuite d\'experts',
        'Rendu réaliste et convaincant'
      ],
      image: '/img/Accueil/Poe_les_a__bois_Montargis.webp'
    },
    assistance: {
      title: 'Assistance Complète',
      description: 'Support technique, livraison, maintenance et service après-vente : nous sommes là pour vous.',
      items: [
        'Assistance téléphonique dédiée',
        'Livraison à domicile',
        'Dépannage d\'urgence disponible',
        'Support par email et téléphone',
        'Résolution garantie rapide'
      ],
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis__1_.webp'
    },
    financement: {
      title: 'Solutions de Financement',
      description: 'Parce que vous n\'avez pas tous les mêmes ressources, nous proposons des solutions flexibles.',
      items: [
        'Paiement en plusieurs fois',
        'Crédits sans intérêt disponibles',
        'Aides gouvernementales orientées',
        'Devis transparent et gratuit',
        'Délais d\'acceptation rapides'
      ],
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis__2_.webp'
    }
  }

  const tabs = [
    { key: 'vente', label: '🛒 Vente Granulés' },
    { key: 'pellet', label: '⛽ Pellet Drive' },
    { key: 'entretien', label: '🔧 Entretien' },
    { key: 'plan3d', label: '📐 Plan 3D' },
    { key: 'assistance', label: '📞 Assistance' },
    { key: 'financement', label: '💳 Financement' }
  ]

  const currentService = services[activeTab]

  return (
    <section className="services" id="services">
      <div className="section-header">
        <h2>Nos Services</h2>
        <p>Une offre complète pour répondre à tous vos besoins</p>
      </div>

      <div className="services-tabs">
        <div className="tabs-header">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tabs-content">
          <div className="service-description">
            <h3>{currentService.title}</h3>
            <p>{currentService.description}</p>
            <ul>
              {currentService.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="btn btn-primary">Demander un devis</button>
          </div>
          <div className="service-image">
            <img src={currentService.image} alt={currentService.title} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
