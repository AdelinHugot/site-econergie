import React, { useState } from 'react'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Quel chauffage choisir pour ma maison ?',
      answer: 'Le choix dépend de vos besoins, de votre isolation et de votre budget. Nos experts vous conseilleront lors d\'une consultation gratuite pour trouver la solution idéale pour votre intérieur.'
    },
    {
      question: 'Quelle est la garantie proposée ?',
      answer: 'Tous nos produits bénéficient d\'une garantie complète de 10 ans sur les défauts de fabrication. Une assistance technique est disponible 24/7 pour vous aider.'
    },
    {
      question: 'Combien coûte une installation ?',
      answer: 'Le coût d\'installation varie selon le type de produit et la configuration de votre maison. Nous proposons des devis gratuits et sans engagement.'
    },
    {
      question: 'Quelle est la durée de vie d\'une cheminée ?',
      answer: 'Une cheminée bien entretenue peut durer plus de 20 ans. L\'entretien régulier et l\'utilisation de bois sec garantissent une performance optimale.'
    },
    {
      question: 'Offrez-vous des services de maintenance ?',
      answer: 'Oui, nous proposons des contrats de maintenance annuels qui incluent le nettoyage, l\'inspection et les réparations éventuelles.'
    },
    {
      question: 'Pouvez-vous rénover mon foyer existant ?',
      answer: 'Absolument ! Nos inserts premium permettent de transformer votre foyer existant en une source de chauffage performante et économique.'
    }
  ]

  return (
    <section style={{
      padding: '5rem 2rem',
      background: 'linear-gradient(135deg, #f5f5f7 0%, #fafafa 100%)'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Questions Fréquentes
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
            margin: '0 auto 1.5rem'
          }}></div>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Trouvez les réponses aux questions les plus posées
          </p>
        </div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                border: '1px solid rgba(232, 76, 31, 0.1)',
                transition: 'all 0.3s ease',
                boxShadow: openIndex === idx
                  ? '0 15px 40px rgba(232, 76, 31, 0.15)'
                  : '0 5px 15px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                style={{
                  width: '100%',
                  padding: '1.5rem 2rem',
                  background: openIndex === idx
                    ? 'linear-gradient(135deg, rgba(232, 76, 31, 0.1) 0%, rgba(255, 107, 53, 0.08) 100%)'
                    : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  if (openIndex !== idx) {
                    e.currentTarget.style.background = 'rgba(232, 76, 31, 0.05)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (openIndex !== idx) {
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  margin: 0
                }}>
                  {faq.question}
                </h3>

                <span style={{
                  fontSize: '1.5rem',
                  color: '#e84c1f',
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  marginLeft: '1rem',
                  flexShrink: 0
                }}>
                  ▼
                </span>
              </button>

              {/* Answer */}
              {openIndex === idx && (
                <div style={{
                  padding: '0 2rem 1.5rem',
                  borderTop: '1px solid rgba(232, 76, 31, 0.1)',
                  animation: 'slideDown 0.3s ease'
                }}>
                  <p style={{
                    color: '#666',
                    lineHeight: 1.8,
                    fontSize: '0.95rem',
                    margin: 0
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <p style={{
            fontSize: '1rem',
            color: '#666',
            marginBottom: '1.5rem'
          }}>
            Vous avez d'autres questions ?
          </p>
          <button style={{
            padding: '1rem 2.5rem',
            background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 20px rgba(232, 76, 31, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(232, 76, 31, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(232, 76, 31, 0.2)'
          }}
          >
            Contactez-nous
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
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

export default FAQSection
