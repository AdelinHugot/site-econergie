import React, { useState, useEffect } from 'react'

function StatsSection() {
  const [counts, setCounts] = useState({ years: 0, clients: 0, projects: 0 })

  useEffect(() => {
    const targets = { years: 14, clients: 10000, projects: 5000 }
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        projects: Math.floor(targets.projects * progress)
      })

      if (currentStep >= steps) {
        setCounts(targets)
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      icon: '📅',
      value: `${counts.years}+`,
      label: 'Années d\'Expérience',
      color: '#e84c1f'
    },
    {
      icon: '👥',
      value: `${counts.clients.toLocaleString()}+`,
      label: 'Clients Satisfaits',
      color: '#ff6b35'
    },
    {
      icon: '🏠',
      value: `${counts.projects.toLocaleString()}+`,
      label: 'Installations Réalisées',
      color: '#e84c1f'
    }
  ]

  return (
    <section style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      padding: '4rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(232, 76, 31, 0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }}></div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3rem'
        }}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                textAlign: 'center',
                padding: '2.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                border: '1px solid rgba(232, 76, 31, 0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(232, 76, 31, 0.15)'
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'rgba(232, 76, 31, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(232, 76, 31, 0.2)'
              }}
            >
              <div style={{
                fontSize: '3.5rem',
                marginBottom: '1rem',
                display: 'inline-block',
                animation: 'bounce 2s ease-in-out infinite'
              }}>
                {stat.icon}
              </div>

              <div style={{
                fontSize: '2.8rem',
                fontWeight: 800,
                color: stat.color,
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>

              <div style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 500
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}

export default StatsSection
