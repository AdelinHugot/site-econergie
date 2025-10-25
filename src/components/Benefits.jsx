import React, { useEffect } from 'react'

function Benefits() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll('.benefit-card').forEach((card) => {
      observer.observe(card)
    })

    return () => {
      document.querySelectorAll('.benefit-card').forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  const benefits = [
    {
      icon: '🏆',
      title: 'Qualité Premium',
      description: 'Produits haut de gamme sélectionnés chez nos meilleurs partenaires'
    },
    {
      icon: '💰',
      title: 'Économies Garanties',
      description: 'Réductions jusqu\'à 40% sur votre facture énergétique'
    },
    {
      icon: '🔧',
      title: 'Installation Complète',
      description: 'Pose, réglage et mise en service par nos experts'
    },
    {
      icon: '🌍',
      title: 'Éco-Responsable',
      description: 'Énergie renouvelable pour un chauffage écologique'
    },
    {
      icon: '📞',
      title: 'Support 24/7',
      description: 'Maintenance et dépannage toujours disponibles'
    },
    {
      icon: '✨',
      title: 'Garantie Complète',
      description: 'Protection totale sur vos installations pendant 10 ans'
    }
  ]

  return (
    <section className="benefits" id="benefits">
      <div className="section-header">
        <h2>Pourquoi Econergie ?</h2>
        <p>Les avantages qui font la différence</p>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
