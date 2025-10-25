import React, { useState } from 'react'
import StorySection from './StorySection'
import StorySection2 from './StorySection2'
import StorySection3 from './StorySection3'
import StorySection4 from './StorySection4'

function TimelineDemo() {
  const [selectedLayout, setSelectedLayout] = useState('layout1')

  const layouts = [
    {
      id: 'layout1',
      name: 'Vertical avec Ligne',
      description: 'Frise verticale avec ligne centrale et cercles numérotés. Design épuré et élégant.',
      component: StorySection
    },
    {
      id: 'layout2',
      name: 'Cartes Empilées',
      description: 'Cartes de timeline empilées avec couleurs alternées. Compact et moderne.',
      component: StorySection2
    },
    {
      id: 'layout3',
      name: 'Alternance Zigzag',
      description: 'Frise alternée gauche/droite avec ligne centrale. Très visuelle et dynamique.',
      component: StorySection3
    },
    {
      id: 'layout4',
      name: 'Circulaire Interactif',
      description: 'Timeline circulaire avec selection interactive. Design innovant et engageant.',
      component: StorySection4
    }
  ]

  const selectedLayoutData = layouts.find(l => l.id === selectedLayout)
  const Component = selectedLayoutData.component

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Selector Section */}
      <section style={{
        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
        color: 'white',
        padding: '3rem 2rem'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
            Variations de Frise Chronologique
          </h1>
          <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '3rem', fontWeight: 300, maxWidth: '600px', margin: '0 auto 3rem' }}>
            Découvrez 4 approches différentes pour raconter l'histoire d'Econergie
          </p>

          {/* Layout Selector */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {layouts.map(layout => (
              <button
                key={layout.id}
                onClick={() => setSelectedLayout(layout.id)}
                style={{
                  background: selectedLayout === layout.id
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'rgba(255, 255, 255, 0.1)',
                  border: selectedLayout === layout.id
                    ? '2px solid white'
                    : '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                  e.currentTarget.style.transform = 'translateY(-5px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = selectedLayout === layout.id
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  margin: 0,
                  marginBottom: '0.5rem'
                }}>
                  {layout.name}
                  {selectedLayout === layout.id && ' ✓'}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  margin: 0,
                  opacity: 0.9
                }}>
                  {layout.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Render Selected Layout */}
      <Component />
    </div>
  )
}

export default TimelineDemo
