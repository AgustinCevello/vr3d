import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';
import esImage from '../assets/images/Castellano.webp';
import enImage from '../assets/images/English.webp';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  // Determinamos el idioma actual y cuál sería el próximo al alternar
  const isEs = i18n.language.startsWith('es');
  const currentLang = isEs ? 'ES' : 'EN';
  const nextLang = isEs ? 'en' : 'es';
  const currentImage = isEs ? esImage : enImage;

  const toggleLanguage = () => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <button 
      className="language-switcher-btn" 
      onClick={toggleLanguage}
      aria-label={`Cambiar a ${isEs ? 'Inglés' : 'Español'}`}
    >
      <img src={currentImage} alt={currentLang} className="lang-flag" />
      <span className="lang-text">{currentLang}</span>
    </button>
  );
};

export default LanguageSwitcher;
