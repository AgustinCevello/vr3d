import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactSection.css';

// Importar las imágenes de los logos
import logoAyr from '../assets/images/logoayr.webp';
import logoLeses from '../assets/images/logoleses.webp';
import logoUtn from '../assets/images/logoutn.webp';
import logoAutomacer from '../assets/images/LogoAutomacer.webp';
import mailIcon from '../assets/images/mailvr3d.webp';

const ContactSection = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="contact-section">
      <div className="section-content">
        <h2>{t('contact.heading')}</h2>
        
        {/* Inicio del bloque de correo agregado */}
        <div className="contact-info">
          <a href="mailto:info.VR3D@gmail.com" className="email-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 193">
              <path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/>
              <path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/>
              <path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/>
              <path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/>
              <path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/>
            </svg>
            <img src={mailIcon} alt="Correo" className="footer-icon-image" />
          </a>
        </div>
        {/* Fin del bloque de correo agregado */}

        {/* Sección de logos */}
        <div className="trusted-section">
          <h2>{t('contact.trustedBy')}</h2>
          <div className="logos-container">
            <div className="logo-item">
              <img src={logoAyr} alt="Logo AYR" className="trust-logo" />
            </div>
            <div className="logo-item">
              <img src={logoLeses} alt="Logo LESES" className="trust-logo" />
            </div>
            <div className="logo-item">
              <img src={logoUtn} alt="Logo UTN" className="trust-logo" />
            </div>
            <div className="logo-item">
              <img src={logoAutomacer} alt="Logo AUTOMACER" className="trust-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;