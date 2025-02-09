import './ServiceDetail.scss'
import React from 'react';
import { Service } from '../../data/services'; // Ajusta la ruta según tu estructura
import { FaArrowUp } from 'react-icons/fa'; // Importamos el ícono de flecha de FontAwesome

interface ServiceDetailProps {
  service: Service;
  microMessage: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, microMessage }) => {
  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza suavemente hasta la parte superior
  };

  return (
    <section id={service.link.substring(1)} className="pse-service-detail">
      {/* Columna de la descripción */}
      <div className="pse-service-description">
        <div className="pse-bg" />
        <div className="pse-content">
          <h2>{service.title}</h2>
          <p>{service.detail}</p>
          <a href="#" onClick={scrollToTop} className="pse-button">
            <FaArrowUp size={24} color="#fff" />
          </a>
        </div>
      </div>
      {/* Columna del micromensaje */}
      <div className="pse-micro-message">
        <h3>{microMessage}</h3>
      </div>
    </section>
  );
};

export default ServiceDetail;
