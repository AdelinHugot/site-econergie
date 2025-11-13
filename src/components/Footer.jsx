import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Create custom orange marker
const orangeIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 40"><path fill="%23e84c1f" d="M12 0C5.4 0 0 5.4 0 12c0 9 12 28 12 28s12-19 12-28c0-6.6-5.4-12-12-12z"/></svg>',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
})

function Footer() {
  const magasinCoords = [47.9667, 2.6333] // Villemandeur coordinates

  return (
    <footer style={{ background: '#1a1a1a', color: '#fff', margin: 0, padding: 0 }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }} className="footer-grid">
        {/* Left Side - Contact Info */}
        <div style={{
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignContent: 'start'
        }} className="footer-left">
          {/* Left Column */}
          <div>
            {/* Magasin Section */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#e84c1f',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                letterSpacing: '0.5px'
              }}>
                Magasin
              </h3>
              <p style={{
                lineHeight: 2,
                color: '#ccc',
                margin: 0,
                fontSize: '0.95rem'
              }}>
                11 rue Pierre Nobel
              </p>
              <p style={{
                lineHeight: 2,
                color: '#ccc',
                margin: 0,
                fontSize: '0.95rem'
              }}>
                45700 Villemandeur
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#e84c1f',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                letterSpacing: '0.5px'
              }}>
                Contact
              </h3>
              <p style={{
                margin: '0 0 0.8rem 0',
                lineHeight: 1.6
              }}>
                <a href="tel:+33238989075" style={{
                  color: '#e84c1f',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}>
                  +33 (0)2 38 98 90 75
                </a>
              </p>
              <p style={{
                margin: 0,
                lineHeight: 1.6
              }}>
                <a href="mailto:contact@econergie.fr" style={{
                  color: '#e84c1f',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  Formulaire de contact
                </a>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Horaires Section */}
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#e84c1f',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                letterSpacing: '0.5px'
              }}>
                Horaires Magasin
              </h3>
              <p style={{
                color: '#ccc',
                lineHeight: 1.8,
                margin: '0 0 1rem 0',
                fontSize: '0.95rem'
              }}>
                <strong>du Mardi au Vendredi:</strong><br />
                9h30 à 12h et 14h à 19h
              </p>
              <p style={{
                color: '#ccc',
                lineHeight: 1.8,
                margin: '0 0 1rem 0',
                fontSize: '0.95rem'
              }}>
                <strong>Samedi:</strong><br />
                fermeture à 18h
              </p>
              <p style={{
                color: '#ccc',
                margin: 0,
                fontSize: '0.85rem',
                lineHeight: 1.6
              }}>
                • Horaires enlèvement Granulés
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Map */}
        <div style={{
          overflow: 'hidden',
          margin: 0,
          padding: 0,
          height: '100%',
          position: 'relative'
        }} className="footer-right">
          {/* Floating Logo */}
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            zIndex: 1000,
            background: 'rgba(26, 26, 26, 0.9)',
            padding: '0.8rem',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
          }}>
            <img
              src="/ECONERGIE vertical noir.svg"
              alt="Econergie"
              style={{
                width: '40px',
                height: 'auto'
              }}
            />
          </div>

          <MapContainer
            center={magasinCoords}
            zoom={13}
            style={{ height: '100%', width: '100%', margin: 0, padding: 0 }}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            <Marker position={magasinCoords} icon={orangeIcon}>
              <Popup>
                <div style={{ textAlign: 'center' }}>
                  <strong>Econergie</strong><br />
                  11 rue Pierre Nobel<br />
                  45700 Villemandeur
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <div style={{
        background: '#1a1a1a',
        borderTop: '1px solid #333',
        padding: '2rem',
        textAlign: 'center',
        color: '#999'
      }}>
        <p>&copy; 2024 Econergie. Tous droits réservés. | Chauffage Écologique & Économique</p>
      </div>

      <style>{`
        .footer-right .leaflet-container {
          margin: 0 !important;
          padding: 0 !important;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }

          .footer-left {
            grid-template-columns: 1fr 1fr !important;
            padding: 3rem 2rem !important;
            order: 1;
          }

          .footer-right {
            min-height: 500px !important;
            order: 2;
          }
        }

        @media (max-width: 768px) {
          .footer-left {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding: 2rem !important;
          }

          .footer-right {
            min-height: 400px !important;
          }
        }

        @media (max-width: 480px) {
          .footer-left {
            padding: 1.5rem !important;
            gap: 1.5rem !important;
          }

          .footer-right {
            min-height: 300px !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
