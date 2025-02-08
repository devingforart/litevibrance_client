import './ServiceDetail.scss'
// ServiceDetail.tsx
import React from 'react';

interface Service {
  title: string;
  description: string;
  link: string;
}

interface ServiceDetailProps {
  service: Service;
  microMessage: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, microMessage }) => {
  return (
    <section id={service.link.substring(1)} className="pse-service-detail">
      {/* Columna de la descripción */}
      <div className="pse-service-description">
        <div className="pse-bg" />
        <div className="pse-content">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <a href={service.link} className="pse-button">
            Saber más
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
