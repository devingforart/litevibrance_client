// src/components/ParallaxServicesExtended/ServiceDetail.tsx
import React from 'react';
import { Service } from '../../data/services'; // Ajusta la ruta según tu estructura
import { FaArrowUp } from 'react-icons/fa';

interface ServiceDetailProps {
  service: Service;
  microMessage: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, microMessage }) => {
  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id={service.link.substring(1)}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex items-center py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Columna de la descripción */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl animate-slide-up">
          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-blue-600/10 rounded-3xl -z-10" />
          {/* Contenido */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {service.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {service.detail}
          </p>
          <a
            href="#"
            onClick={scrollToTop}
            className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            aria-label="Volver arriba"
          >
            <FaArrowUp className="mr-2" size={20} />
            Volver arriba
          </a>
        </div>

        {/* Columna del micromensaje */}
        <div className="flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 italic text-center leading-relaxed">
            {microMessage}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;