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
      padding: '6rem 2rem',
      background: 'white'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start'
        }}>
          {/* Left side - Image */}
          <div style={{
            position: 'relative',
            height: '600px',
            borderRadius: '30px',
            overflow: 'hidden'
          }}>
            <img
              src="/img/Accueil/Poe_le_a__Granule_s_Montargis.webp"
              alt="Questions FAQ"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* Orange overlay accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(232, 76, 31, 0.1) 0%, rgba(26, 26, 26, 0.15) 100%)',
              pointerEvents: 'none'
            }}></div>

            {/* Badge with orange */}
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
              color: 'white',
              padding: '1.5rem 2rem',
              borderRadius: '20px',
              maxWidth: '300px',
              boxShadow: '0 15px 40px rgba(232, 76, 31, 0.4)'
            }}>
              <p style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                margin: 0,
                marginBottom: '0.5rem',
                opacity: 0.95
              }}>
                Des questions ?
              </p>
              <p style={{
                fontSize: '1.3rem',
                fontWeight: 800,
                margin: 0
              }}>
                On a les réponses
              </p>
            </div>
          </div>

          {/* Right side - FAQ */}
          <div>
            {/* Header */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#1a1a1a',
                marginBottom: '1rem',
                lineHeight: 1.2,
                whiteSpace: 'nowrap'
              }}>
                Questions <span style={{
                  background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Fréquentes</span>
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                marginTop: '1rem',
                lineHeight: 1.6
              }}>
                Trouvez les réponses aux questions les plus posées. Nos experts sont là pour vous aider.
              </p>
            </div>

            {/* FAQ Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    border: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                  }}
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '1.5rem',
                      background: openIndex === idx
                        ? 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)'
                        : '#fafafa',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      textAlign: 'left',
                      borderRadius: openIndex === idx ? '15px 15px 0 0' : '15px'
                    }}
                    onMouseEnter={(e) => {
                      if (openIndex !== idx) {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)'
                        e.currentTarget.style.color = 'white'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (openIndex !== idx) {
                        e.currentTarget.style.background = '#fafafa'
                        e.currentTarget.style.color = 'inherit'
                      }
                    }}
                  >
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: openIndex === idx ? 'white' : '#1a1a1a',
                      margin: 0,
                      transition: 'color 0.3s ease'
                    }}>
                      {faq.question}
                    </h3>

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{
                        color: openIndex === idx ? 'white' : '#e84c1f',
                        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                        marginLeft: '1rem',
                        flexShrink: 0,
                        stroke: 'currentColor',
                        strokeWidth: 2
                      }}
                    >
                      <path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Answer */}
                  {openIndex === idx && (
                    <div style={{
                      padding: '0 1.5rem 1.25rem',
                      borderTop: '2px solid rgba(232, 76, 31, 0.2)',
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
              marginTop: '2.5rem',
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(232, 76, 31, 0.08) 0%, rgba(255, 107, 53, 0.04) 100%)',
              borderRadius: '15px',
              border: '1px solid rgba(232, 76, 31, 0.15)',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                marginBottom: '1rem',
                margin: '0 0 1rem 0'
              }}>
                Vous avez d'autres questions ?
              </p>
              <button style={{
                padding: '0.9rem 2rem',
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 20px rgba(232, 76, 31, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(232, 76, 31, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(232, 76, 31, 0.3)'
              }}
              >
                Contactez-nous
              </button>
            </div>
          </div>
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

        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          div[style*="height: 600px"] {
            height: 300px !important;
          }

          h2[style*="fontSize: 2.5rem"] {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default FAQSection
