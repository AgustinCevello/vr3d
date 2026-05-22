// src/sections/AboutSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutSection.css';
import heroImage from '../assets/images/imginicio.webp';

const AboutSection = ({ id }) => {
  const { t } = useTranslation();
  return (
    <section id={id} className="about-section">
      <div className="hero-section">
        <div className="hero-background">
          <img src={heroImage} alt="VR3D Ingeniería - Energía Solar" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {t('about.title')}<br />
              <span className="hero-subtitle">{t('about.subtitle')}</span>
            </h1>
          </div>
        </div>
      </div>
      
      {/* Sección de información debajo de la imagen */}
      <div className="about-info">
        <div className="container">
          <h2>{t('about.heading')}</h2>
          <p className="about-text">
            {t('about.p1')}
            <br className="small-gap" />
            {t('about.p2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;