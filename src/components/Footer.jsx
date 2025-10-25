import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Econergie</h4>
          <p>Votre spécialiste en solutions de chauffage écologiques et économiques depuis plus de 10 ans.</p>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Poêles à Bois</a></li>
            <li><a href="#">Poêles à Granulés</a></li>
            <li><a href="#">Cheminées</a></li>
            <li><a href="#">Installation</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Entreprise</h4>
          <ul>
            <li><a href="#">À Propos</a></li>
            <li><a href="#">Nos Réalisations</a></li>
            <li><a href="#">Avis Clients</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            Villemandeur (77)<br />
            Rayon: 60 km<br /><br />
            <a href="tel:+33123456789" style={{ color: '#e84c1f', fontWeight: '600' }}>+33 1 23 45 67 89</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Econergie. Tous droits réservés. | Chauffage Écologique & Économique</p>
      </div>
    </footer>
  )
}

export default Footer
