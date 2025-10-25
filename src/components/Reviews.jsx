import React, { useEffect } from 'react'

function Reviews() {
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

    document.querySelectorAll('.review-card').forEach((card) => {
      observer.observe(card)
    })

    return () => {
      document.querySelectorAll('.review-card').forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  const reviews = [
    {
      stars: 5,
      text: '"Une installation impeccable et une équipe très professionnelle. Mon poêle à bois fonctionne parfaitement. Je recommande vivement !"',
      name: 'Jean Dupont',
      city: 'Fontainebleau',
      initials: 'JD'
    },
    {
      stars: 5,
      text: '"Économies vraiment impressionnantes sur ma facture de chauffage. Le design du poêle à granulés est sublime. Merci Econergie !"',
      name: 'Marie Carpentier',
      city: 'Nemours',
      initials: 'MC'
    },
    {
      stars: 5,
      text: '"Service après-vente exemplaire. L\'équipe a assuré la maintenance et nous conseille régulièrement. Une vraie relation de confiance."',
      name: 'Philippe Bertrand',
      city: 'Melun',
      initials: 'PB'
    },
    {
      stars: 5,
      text: '"Un investissement qui en valait la peine. Ambiance chaleureuse et conviviale. Nos soirées en famille sont devenues encore plus agréables !"',
      name: 'Sophie Rousseau',
      city: 'Pithiviers',
      initials: 'SR'
    },
    {
      stars: 5,
      text: '"Produits de qualité exceptionnelle. Les conseillers m\'ont aidé à choisir le modèle parfait pour ma maison. Très satisfait !"',
      name: 'Laurent Petit',
      city: 'Bellegarde',
      initials: 'LP'
    },
    {
      stars: 5,
      text: '"Installation rapide, équipe cordiale et souriante. Le poêle mixte offre une vraie flexibilité. Brava à Econergie !"',
      name: 'Nathalie Durand',
      city: 'Briare',
      initials: 'ND'
    }
  ]

  return (
    <section className="reviews" id="avis">
      <div className="reviews-container">
        <div className="section-header">
          <h2>Ce que nos clients disent</h2>
          <p>Des témoignages authentiques de nos clients satisfaits</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="stars">{'★'.repeat(review.stars)}</div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <div className="review-avatar">{review.initials}</div>
                <div className="review-info">
                  <h4>{review.name}</h4>
                  <p>{review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
