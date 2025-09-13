import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaCode, FaServer, FaMobile, FaCloud } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-container">
          <div className="logo">
            <FaCode className="logo-icon" />
            <span>Nexa IT</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>

          <div className="nav-actions">
            <button className="btn btn-primary">Get Quote</button>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #2563eb;
        }

        .logo-icon {
          font-size: 2rem;
        }

        .nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav a {
          text-decoration: none;
          color: #374151;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav a:hover {
          color: #2563eb;
        }

        .nav a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #2563eb;
          transition: width 0.3s ease;
        }

        .nav a:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #374151;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu-btn {
            display: block;
          }

          .nav-actions .btn {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
