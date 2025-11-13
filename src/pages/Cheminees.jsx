import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PopupDisplay from '../components/PopupDisplay'

function Cheminees() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [formStep, setFormStep] = useState(0)
  const [formData, setFormData] = useState({
    surface: '',
    people: '',
    heating: '',
    consumption: '',
    automation: '',
    name: '',
    email: '',
    phone: ''
  })

  const chemineeTypes = [
    {
      id: 1,
      title: 'Cheminée Traditionnelle',
      description: 'Élégance intemporelle avec chaleur authentique. Les cheminées traditionnelles en bois offrent une ambiance incomparable avec matériaux nobles.',
      image: '/img/Cheminees/cheminees-traditionelle.webp',
      benefits: ['Chaleur naturelle', 'Ambiance cosy', 'Matériaux nobles'],
      category: 'bois',
      cta: 'En savoir plus'
    },
    {
      id: 2,
      title: 'Cheminée Double-Face',
      description: 'Foyer visible de deux côtés pour créer une ambiance dans plusieurs espaces. Chauffage efficace et design remarquable.',
      image: '/img/Cheminees/cheminees-double-face.webp',
      benefits: ['2 côtés visibles', 'Ambiance partagée', 'Design remarquable'],
      category: 'doubleface',
      cta: 'En savoir plus'
    },
    {
      id: 3,
      title: 'Néocube',
      description: 'Design impressionnant avec styling moderne et installation ultra-rapide. La nouvelle référence en élégance et performance contemporaine.',
      image: '/img/Cheminees/neocube.webp',
      benefits: ['Design moderne', 'Installation rapide', 'Performance optimale'],
      category: 'neocube',
      cta: 'En savoir plus'
    },
    {
      id: 4,
      title: 'Insert de Cheminée',
      description: 'Transformez votre foyer ouvert existant en source de chauffage efficace. Solution de rénovation facile et rapide.',
      image: '/img/Cheminees/insert-double-face.webp',
      benefits: ['Rénovation facile', 'Rendement 80%', 'Économies réelles'],
      category: 'insert',
      cta: 'En savoir plus'
    }
  ]

  return (
    <div style={{ minHeight: '100vh', marginTop: '60px' }}>
      <PopupDisplay pageSlug="cheminees" />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
          alignItems: 'stretch',
          height: '450px'
        }}>
          {/* Left Side - Text with padding */}
          <div style={{
            padding: '5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
            overflow: 'hidden'
          }}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 800,
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}>
              Nos Cheminées
            </h1>
            <p style={{
              fontSize: '1.2rem',
              fontWeight: 300,
              marginBottom: '1.5rem',
              opacity: 0.95
            }}>
              Econergie installe la cheminée de vos rêves
            </p>
            <p style={{
              fontSize: '1rem',
              opacity: 0.9,
              lineHeight: 1.8,
              marginRight: '2rem'
            }}>
              Découvrez notre sélection de cheminées haut de gamme avec foyers acier ou fonte des marques Jotul, Atra et Skantherm. Nous offrons des solutions adaptées à vos besoins et votre intérieur.
            </p>
          </div>

          {/* Right Side - Image without padding */}
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '500px 0 0 500px'
          }}>
            <img
              src="/img/Cheminees/cheminees-traditionelle.webp"
              alt="Cheminée premium Econergie"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            {/* Blur overlay following curved edge */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              background: 'radial-gradient(ellipse 300px 100% at 0% 50%, rgba(0, 0, 0, 0.3) 0%, transparent 50%)',
              pointerEvents: 'none'
            }} />
          </div>
        </div>
      </section>

      {/* Types de Cheminées Section */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#1a1a1a',
              marginBottom: '0.5rem'
            }}>
              Types de Cheminées
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Trouvez la cheminée qui correspond à votre style et vos besoins
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem'
          }}>
            {chemineeTypes.map(type => (
              <div
                key={type.id}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(232, 76, 31, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <img
                    src={type.image}
                    alt={type.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>
                    {type.title}
                  </h3>
                  <p style={{ color: '#666', marginBottom: '1rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    {type.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {type.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.8rem',
                          background: 'linear-gradient(135deg, rgba(232, 76, 31, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
                          color: '#e84c1f',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '20px',
                          fontWeight: 600
                        }}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Carousel Section */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#1a1a1a',
              marginBottom: '0.5rem'
            }}>
              Nos Marques Partenaires
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Econergie travaille avec les plus grandes marques européennes de cheminées
            </p>
          </div>

          <div style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {/* Carousel Container */}
            <div style={{
              overflow: 'hidden',
              borderRadius: '16px',
              background: '#f9f9f9',
              padding: '2rem',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                gap: '1rem',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${carouselIndex * 100}%)`
              }}>
                {[
                  { name: 'jotul', file: 'jotul' },
                  { name: 'atra', file: 'atra' },
                  { name: 'skantherm', file: 'skantherm' },
                  { name: 'rika', file: 'rika' },
                  { name: 'piveteau', file: 'piveteau' }
                ].map((brand) => (
                  <div key={brand.name} style={{
                    flex: '0 0 calc(33.333% - 0.667rem)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '150px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    padding: '1rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                  >
                    <img
                      src={`/logos-marques/${brand.file}-logo.webp`}
                      alt={brand.name}
                      style={{
                        maxWidth: '90%',
                        maxHeight: '100px',
                        objectFit: 'contain',
                        width: 'auto',
                        height: 'auto'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Previous Button */}
            <button
              onClick={() => setCarouselIndex((prev) => (prev === 0 ? 1 : prev - 1))}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(232, 76, 31, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(232, 76, 31, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(232, 76, 31, 0.3)'
              }}
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={() => setCarouselIndex((prev) => (prev === 1 ? 0 : prev + 1))}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(232, 76, 31, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(232, 76, 31, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(232, 76, 31, 0.3)'
              }}
            >
              ›
            </button>

            {/* Dots Indicator */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.8rem',
              marginTop: '2rem'
            }}>
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  style={{
                    width: carouselIndex === idx ? '24px' : '10px',
                    height: '10px',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    background: carouselIndex === idx
                      ? 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)'
                      : '#ddd',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section style={{ padding: '4rem 2rem', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#1a1a1a',
              marginBottom: '0.5rem'
            }}>
              Comparer les Types de Cheminées
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Trouvez la cheminée qui correspond à vos besoins
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 15px rgba(0,0,0,0.08)'
            }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)', color: 'white' }}>
                  <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>Type de Cheminée</th>
                  <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>Rendement</th>
                  <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>Installation</th>
                  <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>Coût</th>
                  <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>Ambiance</th>
                  <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>Maintenance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Cheminée Traditionnelle',
                    rendement: '80-85%',
                    installation: 'Professionnelle',
                    cout: '€€€',
                    ambiance: 'Authentique',
                    maintenance: 'Régulière'
                  },
                  {
                    type: 'Cheminée Double-Face',
                    rendement: '80-90%',
                    installation: 'Professionnelle',
                    cout: '€€€',
                    ambiance: 'Partagée',
                    maintenance: 'Régulière'
                  },
                  {
                    type: 'Néocube',
                    rendement: '85-90%',
                    installation: 'Rapide',
                    cout: '€€',
                    ambiance: 'Moderne',
                    maintenance: 'Minime'
                  },
                  {
                    type: 'Insert de Cheminée',
                    rendement: '80%',
                    installation: 'Rénovation',
                    cout: '€€',
                    ambiance: 'Améliorée',
                    maintenance: 'Faible'
                  }
                ].map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f0f0f0', background: idx % 2 === 0 ? 'white' : '#f9f9f9' }}>
                    <td style={{ padding: '1.5rem', fontWeight: 600, color: '#1a1a1a' }}>{item.type}</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>{item.rendement}</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>{item.installation}</td>
                    <td style={{ padding: '1.5rem', color: '#e84c1f', fontWeight: 700 }}>{item.cout}</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>{item.ambiance}</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>{item.maintenance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#1a1a1a',
              marginBottom: '0.5rem'
            }}>
              Comment Choisir Votre Cheminée ?
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Répondez à quelques questions pour trouver la cheminée idéale
            </p>
          </div>

          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #f9f9f9 0%, #fff 100%)',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 8px 30px rgba(232, 76, 31, 0.1)'
          }}>
            {/* Progress Bar */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                {[0, 1, 2, 3, 4, 5].map((step) => (
                  <div key={step} style={{
                    flex: 1,
                    height: '6px',
                    borderRadius: '3px',
                    background: step <= formStep
                      ? 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)'
                      : '#e9e9e9',
                    transition: 'all 0.3s ease',
                    marginRight: step < 5 ? '0.5rem' : 0
                  }} />
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
                Étape {formStep + 1} sur 6
              </p>
            </div>

            {/* Form Content */}
            <div style={{ minHeight: '250px' }}>
              {formStep === 0 && (
                <div style={{ animation: 'fadeIn 0.5s ease' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '1.5rem'
                  }}>
                    Quelle est la surface à chauffer?
                  </h3>
                  <input
                    type="number"
                    placeholder="Ex: 80"
                    value={formData.surface}
                    onChange={(e) => setFormData({...formData, surface: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      border: '2px solid #e9e9e9',
                      borderRadius: '12px',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#e84c1f'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#e9e9e9'}
                  />
                  <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '1rem' }}>
                    En mètres carrés (m²)
                  </p>
                </div>
              )}

              {formStep === 1 && (
                <div style={{ animation: 'fadeIn 0.5s ease' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '1.5rem'
                  }}>
                    Quel style préférez-vous?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {['Traditionnel', 'Moderne', 'Minimaliste', 'Éclectique'].map((option, idx) => (
                      <label key={idx} style={{
                        padding: '1rem',
                        border: '2px solid #e9e9e9',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: formData.people === option ? 'linear-gradient(135deg, rgba(232, 76, 31, 0.08) 0%, rgba(255, 107, 53, 0.04) 100%)' : 'white',
                        borderColor: formData.people === option ? '#e84c1f' : '#e9e9e9',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}
                      onMouseEnter={(e) => {
                        if (formData.people !== option) {
                          e.currentTarget.style.borderColor = '#ff9a7e'
                          e.currentTarget.style.background = 'rgba(232, 76, 31, 0.02)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (formData.people !== option) {
                          e.currentTarget.style.borderColor = '#e9e9e9'
                          e.currentTarget.style.background = 'white'
                        }
                      }}
                      >
                        <input
                          type="radio"
                          name="style"
                          value={option}
                          checked={formData.people === option}
                          onChange={() => setFormData({...formData, people: option})}
                          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                        />
                        <span style={{ fontWeight: 500, color: '#1a1a1a' }}>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <div style={{ animation: 'fadeIn 0.5s ease' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '1.5rem'
                  }}>
                    Avez-vous un foyer existant?
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                    {['Oui', 'Non'].map((option) => (
                      <button key={option} onClick={() => setFormData({...formData, heating: option})}
                        style={{
                          padding: '1rem',
                          border: '2px solid #e9e9e9',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          background: formData.heating === option ? 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)' : 'white',
                          color: formData.heating === option ? 'white' : '#1a1a1a',
                          fontWeight: 600,
                          borderColor: formData.heating === option ? '#e84c1f' : '#e9e9e9'
                        }}
                        onMouseEnter={(e) => {
                          if (formData.heating !== option) {
                            e.currentTarget.style.borderColor = '#ff9a7e'
                            e.currentTarget.style.background = 'rgba(232, 76, 31, 0.05)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (formData.heating !== option) {
                            e.currentTarget.style.borderColor = '#e9e9e9'
                            e.currentTarget.style.background = 'white'
                          }
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div style={{ animation: 'fadeIn 0.5s ease' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '1.5rem'
                  }}>
                    Budget estimé?
                  </h3>
                  <input
                    type="number"
                    placeholder="Ex: 4000"
                    value={formData.consumption}
                    onChange={(e) => setFormData({...formData, consumption: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      border: '2px solid #e9e9e9',
                      borderRadius: '12px',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#e84c1f'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#e9e9e9'}
                  />
                  <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '1rem' }}>
                    En euros (€)
                  </p>
                </div>
              )}

              {formStep === 4 && (
                <div style={{ animation: 'fadeIn 0.5s ease' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '1.5rem'
                  }}>
                    Priorité principale?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {[
                      { value: 'ambiance', label: 'Ambiance', desc: 'Crée une atmosphère chaleureuse' },
                      { value: 'performance', label: 'Performance', desc: 'Chauffage efficace et économique' }
                    ].map((option) => (
                      <label key={option.value} style={{
                        padding: '1.2rem',
                        border: '2px solid #e9e9e9',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: formData.automation === option.value ? 'linear-gradient(135deg, rgba(232, 76, 31, 0.08) 0%, rgba(255, 107, 53, 0.04) 100%)' : 'white',
                        borderColor: formData.automation === option.value ? '#e84c1f' : '#e9e9e9',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}
                      onMouseEnter={(e) => {
                        if (formData.automation !== option.value) {
                          e.currentTarget.style.borderColor = '#ff9a7e'
                          e.currentTarget.style.background = 'rgba(232, 76, 31, 0.02)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (formData.automation !== option.value) {
                          e.currentTarget.style.borderColor = '#e9e9e9'
                          e.currentTarget.style.background = 'white'
                        }
                      }}
                      >
                        <input
                          type="radio"
                          name="priority"
                          value={option.value}
                          checked={formData.automation === option.value}
                          onChange={() => setFormData({...formData, automation: option.value})}
                          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                        />
                        <div>
                          <p style={{ fontWeight: 600, color: '#1a1a1a', margin: 0 }}>{option.label}</p>
                          <p style={{ fontSize: '0.85rem', color: '#999', margin: '0.3rem 0 0 0' }}>{option.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {formStep === 5 && (
                <div style={{ animation: 'fadeIn 0.5s ease' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '1.5rem'
                  }}>
                    Vos informations de contact
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: '0.5rem'
                      }}>
                        Votre nom
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Jean Dupont"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '1rem',
                          fontSize: '1rem',
                          border: '2px solid #e9e9e9',
                          borderRadius: '12px',
                          boxSizing: 'border-box',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#e84c1f'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e9e9e9'}
                      />
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: '0.5rem'
                      }}>
                        Votre email
                      </label>
                      <input
                        type="email"
                        placeholder="Ex: jean@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '1rem',
                          fontSize: '1rem',
                          border: '2px solid #e9e9e9',
                          borderRadius: '12px',
                          boxSizing: 'border-box',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#e84c1f'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e9e9e9'}
                      />
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: '0.5rem'
                      }}>
                        Votre téléphone
                      </label>
                      <input
                        type="tel"
                        placeholder="Ex: 06 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '1rem',
                          fontSize: '1rem',
                          border: '2px solid #e9e9e9',
                          borderRadius: '12px',
                          boxSizing: 'border-box',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#e84c1f'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e9e9e9'}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2.5rem',
              justifyContent: 'space-between'
            }}>
              <button
                onClick={() => setFormStep(Math.max(0, formStep - 1))}
                style={{
                  padding: '0.9rem 2rem',
                  background: 'white',
                  color: '#e84c1f',
                  border: '2px solid #e84c1f',
                  borderRadius: '10px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: formStep === 0 ? 0.5 : 1,
                  pointerEvents: formStep === 0 ? 'none' : 'auto'
                }}
              >
                ← Précédent
              </button>

              {formStep < 5 ? (
                <button
                  onClick={() => setFormStep(formStep + 1)}
                  style={{
                    padding: '0.9rem 2rem',
                    background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(232, 76, 31, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(232, 76, 31, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(232, 76, 31, 0.3)'
                  }}
                >
                  {formStep === 4 ? 'Obtenir ma Recommandation' : 'Suivant →'}
                </button>
              ) : (
                <button
                  style={{
                    padding: '0.9rem 2rem',
                    background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(232, 76, 31, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(232, 76, 31, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(232, 76, 31, 0.3)'
                  }}
                >
                  Soumettre mon Formulaire
                </button>
              )}
            </div>

            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section style={{ padding: '4rem 2rem', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#1a1a1a',
              marginBottom: '1rem'
            }}>
              Nos Certifications
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: '#666',
              marginBottom: '3rem'
            }}>
              Econergie est certifiée RGE Qualibois
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '2rem'
              }}>
                <img
                  src="/img/logo-rge-qualibat-et-bois-1.webp"
                  alt="RGE Qualibois"
                  style={{
                    maxWidth: '200px',
                    height: 'auto'
                  }}
                />
              </div>

              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                maxWidth: '400px',
                boxShadow: '0 2px 15px rgba(0,0,0,0.08)'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '1rem'
                }}>
                  Qu'est-ce que RGE Qualibois?
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: 1.7,
                  fontSize: '0.95rem'
                }}>
                  La certification RGE Qualibois garantit l'expertise d'Econergie dans l'installation de cheminées et inserts. Elle vous permet d'accéder à des aides financières gouvernementales pour vos travaux de chauffage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }

          section[style*="gridTemplateColumns: 1fr 1fr"] > div {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }

          div[style*="padding: 5rem 2rem"][style*="flexDirection"] {
            padding: 3rem 2rem !important;
          }

          div[style*="borderRadius: 500px 0 0 500px"] {
            border-radius: 300px 300px 0 0 !important;
          }

          h1[style*="fontSize: 3.5rem"] {
            font-size: 2.5rem !important;
          }

          div[style*="height: 450px"] > div:last-child {
            height: 300px !important;
          }
        }

        @media (max-width: 480px) {
          h1[style*="fontSize: 3.5rem"] {
            font-size: 2rem !important;
          }

          div[style*="height: 450px"] > div:last-child {
            height: 250px !important;
          }

          p[style*="fontSize: 1.2rem"] {
            font-size: 1rem !important;
          }

          div[style*="padding: 5rem 2rem"][style*="flexDirection"] {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Cheminees
