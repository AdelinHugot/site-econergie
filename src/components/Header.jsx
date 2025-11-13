import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.css'

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

  // Fermer le menu quand la route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navItems = [
    { to: '/', label: 'Accueil' },
    { to: '/poeles', label: 'Poêles' },
    { to: '/cheminees', label: 'Cheminées' },
    { to: '/services', label: 'Services' },
    { to: '/apropos', label: 'À Propos' },
    { to: '/actualites', label: 'Actualités' },
    { to: '/catalogues', label: 'Catalogues' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <>
      <header className={isScrolled ? 'scrolled' : ''}>
        {/* Desktop Navigation */}
        <nav className="navbar-desktop">
          <div className="logo-container">
            <Link to="/">
              <img src="/ECONERGIE vertical noir.svg" alt="Econergie Logo" />
            </Link>
          </div>

          <ul className="nav-list-desktop">
            {navItems.map(item => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav className="navbar-mobile">
          <Link to="/" className="logo-mobile">
            <img src="/ECONERGIE vertical noir.svg" alt="Econergie Logo" />
          </Link>

          <button
            className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <ul className="mobile-menu-list">
            {navItems.map(item => (
              <li key={item.to}>
                <Link to={item.to} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Header