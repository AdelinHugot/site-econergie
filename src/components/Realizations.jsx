import React, { useState } from 'react'

function Realizations() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Villa Moderne - Fontainebleau',
      category: 'Poêle à Granulés',
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis__1_.webp',
      description: 'Installation complète d\'un poêle de 12kW dans une villa contemporaine',
      details: {
        type: 'Poêle à Granulés Premium',
        surface: '180 m²',
        economie: '40% de réduction énergétique',
        client: 'Famille Martin',
        date: 'Mars 2024'
      }
    },
    {
      id: 2,
      title: 'Maison Traditionnelle - Nemours',
      category: 'Poêle à Bois',
      image: '/img/Accueil/Poe_le_a__bois_Montargis.webp',
      description: 'Poêle à bois design dans un cadre historique préservé',
      details: {
        type: 'Poêle à Bois Design',
        surface: '150 m²',
        economie: '35% de réduction énergétique',
        client: 'Monsieur Dupont',
        date: 'Février 2024'
      }
    },
    {
      id: 3,
      title: 'Cheminée Foyer Fermé - Melun',
      category: 'Cheminée',
      image: '/img/Accueil/Poe_le_Domo_Montargis.webp',
      description: 'Transformation d\'une cheminée ouverte en foyer fermé performant',
      details: {
        type: 'Foyer Fermé Bois',
        surface: '200 m²',
        economie: '45% de réduction énergétique',
        client: 'Famille Rousseau',
        date: 'Janvier 2024'
      }
    },
    {
      id: 4,
      title: 'Poêle Granulés Design - Villemandeur',
      category: 'Poêle à Granulés',
      image: '/img/Accueil/Poe_le_a__Granule_s_Montargis__2_.webp',
      description: 'Installation d\'un poêle design dans un intérieur minimaliste',
      details: {
        type: 'Poêle à Granulés Design',
        surface: '160 m²',
        economie: '42% de réduction énergétique',
        client: 'Monsieur Bertrand',
        date: 'Décembre 2023'
      }
    },
    {
      id: 5,
      title: 'Ensemble Cheminée Moderne - Pithiviers',
      category: 'Cheminée',
      image: '/img/Accueil/Poe_les_a__bois_Montargis.webp',
      description: 'Cheminée électrique design pour ambiance et chauffage',
      details: {
        type: 'Cheminée Électrique',
        surface: '120 m²',
        economie: '30% de réduction énergétique',
        client: 'Famille Petit',
        date: 'Novembre 2023'
      }
    },
    {
      id: 6,
      title: 'Installation Premium - Briare',
      category: 'Poêle à Bois',
      image: '/img/Accueil/Bannie_re_Accueil_Rika.webp',
      description: 'Poêle de prestige dans une demeure de caractère',
      details: {
        type: 'Poêle à Bois Premium',
        surface: '220 m²',
        economie: '38% de réduction énergétique',
        client: 'Famille Durand',
        date: 'Octobre 2023'
      }
    }
  ]

  const categories = ['Tous', 'Poêle à Granulés', 'Poêle à Bois', 'Cheminée']
  const [filter, setFilter] = useState('Tous')

  const filtered = filter === 'Tous'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section style={{ padding: '4rem 2rem', background: '#fafafa' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a1a1a' }}>
            Nos Réalisations
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: 300 }}>
            Découvrez les installations que nous avons concrétisées pour nos clients satisfaits
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.7rem 1.5rem',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                background: filter === cat
                  ? 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)'
                  : 'white',
                color: filter === cat ? 'white' : '#333',
                boxShadow: filter === cat ? '0 8px 20px rgba(232, 76, 31, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(232, 76, 31, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)'
              }}
            >
              {/* Image Container */}
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}>
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1rem', lineHeight: 1.5 }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail */}
        {selectedProject && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '2rem'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              style={{
                background: 'white',
                borderRadius: '20px',
                maxWidth: '700px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: '0 25px 80px rgba(0,0,0,0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '1rem' }}>
                  {selectedProject.title}
                </h2>
                <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  {selectedProject.description}
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  {Object.entries(selectedProject.details).map(([key, value]) => (
                    <div key={key} style={{ paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                      <p style={{ color: '#999', fontSize: '0.85rem', marginBottom: '0.3rem', fontWeight: 600 }}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </p>
                      <p style={{ color: '#1a1a1a', fontSize: '1rem', fontWeight: 600 }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Realizations
