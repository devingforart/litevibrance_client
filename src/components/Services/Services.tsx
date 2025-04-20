// src/components/ParallaxServicesExtended/ParallaxServicesExtended.tsx
import React, { useState, useEffect } from 'react';
import ServiceDetail from './ServiceDetail'; // Asegúrate de que este componente esté definido
import { services } from '../../data/services'; // Asegúrate de que este archivo exista

const microMessages: string[] = [
  'La atención médica en el hogar es sinónimo de seguridad y confianza; nuestros especialistas monitorean sus signos vitales y adaptan tratamientos personalizados para garantizar un control clínico riguroso.',
  'El acompañamiento continuo en el cuidado domiciliario refuerza la calidad de vida; nuestros cuidadores trabajan con compromiso y respeto.',
  'Un entorno seguro y adaptado es esencial en el cuidado; nuestros especialistas aseguran que su hogar cumpla con los más altos estándares clínicos.',
  'La atención especializada de enfermería garantiza un seguimiento meticuloso; nuestro equipo actúa con profesionalismo y empatía.',
  'El equilibrio emocional es vital en el proceso de atención; nuestro apoyo psicológico se fundamenta en metodologías clínicas y humanizadas.',
  'La rehabilitación personalizada es clave para recuperar la autonomía; nuestros programas son diseñados bajo rigurosos criterios médicos.',
  'Una comunicación efectiva es la base del bienestar integral; confíe en nuestras evaluaciones a distancia para mantener su calidad de vida.',
];

const ParallaxServicesExtended: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderSummary = () => (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col justify-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 animate-fade-in">
          Resumen de Servicios
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Acompáñenos en este recorrido clínico y conozca en detalle cada uno de nuestros servicios, diseñados para ofrecer la mejor atención domiciliaria.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href={service.link}
                className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Saber más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderDetailedServices = () => (
    <>
      {services.map((service, index) => (
        <ServiceDetail
          key={index}
          service={service}
          microMessage={microMessages[index]}
        />
      ))}
    </>
  );

  const renderDesktop = () => (
    <div className="flex flex-col">
      {renderSummary()}
      {renderDetailedServices()}
      {/* Botón flotante comentado, descomenta si lo necesitas */}
      {/* <button
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors z-50"
        onClick={() => {
          const summarySection = document.getElementById('pse-summary');
          if (summarySection) {
            summarySection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Ver Resumen
      </button> */}
    </div>
  );

  const renderMobile = () => (
    <div className="flex flex-col">
      {renderSummary()}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gray-700 italic mb-6">{microMessages[index]}</p>
              <a
                href={service.link}
                className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Saber más
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return isMobile ? renderMobile() : renderDesktop();
};

export default ParallaxServicesExtended;