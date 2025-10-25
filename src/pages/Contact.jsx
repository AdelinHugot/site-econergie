import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    alert('Merci ! Nous vous recontacterons très bientôt.')
  }

  const locations = [
    {
      city: 'Villemandeur (Siège)',
      address: '123 Rue du Chauffage, 77570 Villemandeur',
      phone: '+33 1 23 45 67 89',
      email: 'contact@econergie.fr',
      hours: 'Lun-Ven: 9h-18h | Sam: 10h-16h',
      icon: '🏢'
    },
    {
      city: 'Showroom Fontainebleau',
      address: '456 Avenue de la Paix, 77300 Fontainebleau',
      phone: '+33 1 64 22 33 44',
      email: 'fontainebleau@econergie.fr',
      hours: 'Lun-Ven: 9h-18h | Sam: 10h-16h',
      icon: '🏪'
    },
    {
      city: 'Showroom Nemours',
      address: '789 Boulevard Central, 77140 Nemours',
      phone: '+33 1 64 28 55 66',
      email: 'nemours@econergie.fr',
      hours: 'Lun-Ven: 9h-18h | Sam: 10h-16h',
      icon: '🏪'
    }
  ]

  return (
    <div style={{ minHeight: '100vh', marginTop: '60px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>
          Nous Contacter
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 300 }}>
          Une question ? Nous sommes là pour vous aider
        </p>
      </section>

      {/* Contact Section */}
      <section style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', color: '#1a1a1a' }}>
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#1a1a1a' }}>
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.border = '2px solid #e84c1f'}
                  onBlur={(e) => e.target.style.border = '1px solid #ddd'}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#1a1a1a' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.border = '2px solid #e84c1f'}
                  onBlur={(e) => e.target.style.border = '1px solid #ddd'}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#1a1a1a' }}>
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.border = '2px solid #e84c1f'}
                  onBlur={(e) => e.target.style.border = '1px solid #ddd'}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#1a1a1a' }}>
                  Sujet *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.border = '2px solid #e84c1f'}
                  onBlur={(e) => e.target.style.border = '1px solid #ddd'}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#1a1a1a' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'border 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.border = '2px solid #e84c1f'}
                  onBlur={(e) => e.target.style.border = '1px solid #ddd'}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 15px rgba(232, 76, 31, 0.2)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(232, 76, 31, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 5px 15px rgba(232, 76, 31, 0.2)'}
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', color: '#1a1a1a' }}>
              Nos Coordonnées
            </h2>

            {/* Quick Contact */}
            <div style={{
              background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
              borderRadius: '15px',
              padding: '2rem',
              color: 'white',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Contactez-nous rapidement
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '0.5rem' }}>Téléphone</p>
                <p style={{ fontSize: '1.3rem', fontWeight: 700 }}>+33 1 23 45 67 89</p>
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '0.5rem' }}>Email</p>
                <p style={{ fontSize: '1.3rem', fontWeight: 700 }}>contact@econergie.fr</p>
              </div>
            </div>

            {/* Hours */}
            <div style={{
              background: '#f5f5f5',
              borderRadius: '15px',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>
                ⏰ Horaires d'ouverture
              </h3>
              <p style={{ color: '#666', lineHeight: 1.8 }}>
                <strong>Lundi à Vendredi :</strong> 9h00 - 18h00<br/>
                <strong>Samedi :</strong> 10h00 - 16h00<br/>
                <strong>Dimanche :</strong> Fermé
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section style={{
        background: '#f5f5f5',
        padding: '4rem 2rem',
        margin: '4rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', color: '#1a1a1a' }}>
            Nos Emplacements
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {locations.map((location, idx) => (
              <div
                key={idx}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '2rem',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
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
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {location.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>
                  {location.city}
                </h3>
                <p style={{ color: '#666', marginBottom: '0.8rem', lineHeight: 1.6 }}>
                  📍 {location.address}
                </p>
                <p style={{ color: '#666', marginBottom: '0.8rem' }}>
                  📞 {location.phone}
                </p>
                <p style={{ color: '#666', marginBottom: '0.8rem' }}>
                  📧 {location.email}
                </p>
                <p style={{ color: '#999', fontSize: '0.9rem' }}>
                  ⏰ {location.hours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{
        padding: '4rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem', color: '#1a1a1a' }}>
            Localisation
          </h2>
          <div style={{
            background: '#e0e0e0',
            borderRadius: '15px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: '1.1rem'
          }}>
            Carte intéractive (à intégrer avec Google Maps)
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
