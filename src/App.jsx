import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logoImage from './assets/images/vr3dlogocircular2.webp';

// Importa los hooks
import useScrollToSection from './hooks/useScrollToSection.js';

// Importa los componentes de página (secciones)
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import ServicesSection from './sections/ServicesSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import AppFooter from './sections/AppFooter.jsx';

// Importa i18n y LanguageSwitcher
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';

// --- Nuevo Componente Button (INTEGRADO EN App.jsx) ---
const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variant} ${className}`}
    >
      {children}
    </button>
  );
};

// --- Componente AppHeader (Agrupado Header/Nav) ---
const AppHeader = () => {
  const { t } = useTranslation();
  const scrollToSection = useScrollToSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuContainer = document.querySelector('.main-nav');
      const hamburgerToggle = document.querySelector('.hamburger-menu-toggle');
      
      if (menuOpen && menuContainer && hamburgerToggle && 
          !menuContainer.contains(event.target) && 
          !hamburgerToggle.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const updateScrollPadding = () => {
      if (headerRef.current) {
        document.documentElement.style.scrollPaddingTop = `${headerRef.current.offsetHeight + 20}px`;
      }
    };
    updateScrollPadding();
    window.addEventListener('resize', updateScrollPadding);
    return () => window.removeEventListener('resize', updateScrollPadding);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-content">
        <div className="logo-container">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} aria-label={t('nav.inicio')}>
            <img src={logoImage} alt="VR3D Landing Logo" className="logo" />
          </a>
        </div>

        <nav className={`main-nav ${menuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>{t('nav.inicio')}</a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={() => { scrollToSection('about'); setMenuOpen(false); }}>{t('nav.quienesSomos')}</a>
            </li>
            <li className="nav-item">
              <a href="#services" onClick={() => { scrollToSection('services'); setMenuOpen(false); }}>{t('nav.servicios')}</a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={() => { scrollToSection('contact'); setMenuOpen(false); }}>{t('nav.contacto')}</a>
            </li>
          </ul>
        </nav>

        <div className="header-right-controls">
          <LanguageSwitcher />
          <button className={`hamburger-menu-toggle ${menuOpen ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); toggleMenu(); }} aria-label={menuOpen ? t('nav.cerrarMenu') : t('nav.abrirMenu')}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

// --- Componente Principal App ---
const AppContent = () => {
  return (
    <Router>
      <div className="landing-page-container">
        <AppHeader />
        <main>
          <HeroSection id="hero" />
          <AboutSection id="about" />
          <ServicesSection id="services" />
          <ProjectsSection id="projects" />
          <ContactSection id="contact" />
        </main>
        <AppFooter />
      </div>
    </Router>
  );
};

function App() {
  return <AppContent />;
}

export default App;