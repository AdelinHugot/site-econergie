import React, { useEffect, useState } from 'react'

function Univers() {
  const [observedCards, setObservedCards] = useState(new Set())

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll')
          setObservedCards((prev) => new Set([...prev, entry.target]))
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll('.univers-card').forEach((card) => {
      observer.observe(card)
    })

    return () => {
      document.querySelectorAll('.univers-card').forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  const cards = [
    {
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis__1_.webp',
      title: 'Poêles à Granulés',
      description: 'Minimalistes et performants'
    },
    {
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis__2_.webp',
      title: 'Poêles Premium',
      description: 'Confort et efficacité'
    },
    {
      image: '/img/Accueil/Poe_le_a__bois_Montargis.webp',
      title: 'Poêles à Bois',
      description: 'Chaleur traditionnelle'
    },
    {
      image: '/img/Accueil/Poe_les_a__bois_Montargis.webp',
      title: 'Collection Bois',
      description: 'Authenticité garantie'
    },
    {
      image: '/img/Accueil/Poe_le_Domo_Montargis.webp',
      title: 'Poêles Design',
      description: 'Mobiliers intégrés'
    },
    {
      image: '/img/Accueil/Bannie_re_Accueil_Rika.webp',
      title: 'Cheminées Luxe',
      description: 'Prestige et performance'
    }
  ]

  return (
    <section className="univers" id="univers">
      <div className="section-header">
        <h2>Nos Univers</h2>
        <p>Explorez notre sélection de poêles et cheminées premium</p>
      </div>

      <div className="univers-grid">
        {cards.map((card, index) => (
          <div key={index} className="univers-card">
            <img src={card.image} alt={card.title} />
            <div className="univers-overlay">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Univers
