import React from 'react';
import { useTranslation } from 'react-i18next';
import './AppFooter.css';

import logoImage from '../assets/images/vr3dlogocircular2.webp';

const AppFooter = () => {
  const { t } = useTranslation();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="footer">
      <a href="#" onClick={scrollToTop} aria-label={t('nav.inicio')}>
        <img src={logoImage} alt="VR3D Ingeniería" className="footer-logo" />
      </a>
      <p className="copy-right">
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
};

export default AppFooter;