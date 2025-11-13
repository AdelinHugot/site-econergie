import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Cacher le header sur les pages admin
  if (location.pathname === '/admin' || location.pathname === '/admin-login') {
    return null
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navItems = [
    { to: '/', label: 'Accueil' },
    { to: '/poeles', label: 'Poêles' },
    { to: '/cheminees', label: 'Cheminées' },
    { to: '/services', label: 'Services' },
    { to: '/apropos', label: 'À Propos' },
    { to: '/actualites', label: 'Actualités' },
    { to: '/catalogues', label: 'Catalogues' }
  ]

  return (
    <header style={isScrolled ? { boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)' } : {}}>
      <nav>
        <div className="logo-container">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <img src="/ECONERGIE vertical noir.svg" alt="Econergie Logo" style={{ height: '50px', width: 'auto' }} />
          </Link>
        </div>

        {/* Hamburger Button - Hidden by default, shown on mobile */}
        <button
          className="hamburger-toggle"
          onClick={toggleMenu}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            zIndex: 1001,
            color: '#333',
            fontSize: '1.5rem'
          }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation List */}
        <ul
          style={{
            display: 'flex',
            gap: '3rem',
            alignItems: 'center',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            // Mobile styles applied via CSS media query
            position: isMenuOpen ? 'absolute' : 'static',
            top: isMenuOpen ? '60px' : 'auto',
            left: isMenuOpen ? 0 : 'auto',
            right: isMenuOpen ? 0 : 'auto',
            backgroundColor: isMenuOpen ? 'white' : 'transparent',
            width: isMenuOpen ? '100%' : 'auto',
            paddingTop: isMenuOpen ? '1rem' : '0',
            paddingBottom: isMenuOpen ? '1rem' : '0',
            paddingLeft: isMenuOpen ? '2rem' : '0',
            paddingRight: isMenuOpen ? '2rem' : '0',
            flexDirection: isMenuOpen ? 'column' : 'row',
            boxShadow: isMenuOpen ? '0 8px 16px rgba(0,0,0,0.1)' : 'none',
            zIndex: 1000
          }}
        >
          {navItems.map(item => (
            <li key={item.to}>
              <Link to={item.to} onClick={closeMenu} style={{ display: 'block' }}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="cta-nav" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <style>{`
        /* Show hamburger button on mobile (max-width: 768px) */
        @media (max-width: 768px) {
          .hamburger-toggle {
            display: block !important;
          }

          nav ul {
            gap: 1rem !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
