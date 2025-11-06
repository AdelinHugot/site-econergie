import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header style={isScrolled ? { boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)' } : {}}>
      <nav>
        <div className="logo-container">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <img src="/Econergie_Logo.webp" alt="Econergie Logo" />
          </Link>
        </div>
        <ul style={{ display: isMenuOpen ? 'flex' : 'flex' }}>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/poeles">Poêles</Link></li>
          <li><Link to="/cheminees">Cheminées</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/apropos">À Propos</Link></li>
          <li><Link to="/actualites">Actualités</Link></li>
          <li><Link to="/catalogues">Catalogues</Link></li>
          <li><Link to="/contact" className="cta-nav">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
