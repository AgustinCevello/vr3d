// src/sections/ServicesSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicesSection.css'; // Estilos específicos para esta sección

const ServicesSection = ({ id }) => {
  const { t } = useTranslation();

  const servicesList = [
    t('services.items.proyectos'),
    t('services.items.planos'),
    t('services.items.calculos'),
    t('services.items.direccion'),
    t('services.items.ingenieria'),
    t('services.items.solar')
  ];

  return (
    <section id={id} className="services-section">
      <div className="section-content">
        <h2>{t('services.heading')}</h2>
        <ul className="services-list"> {/* Usamos una clase para estilizar la lista */}
          {servicesList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;