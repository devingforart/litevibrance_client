import React, { useState, useEffect } from 'react';
import './Services.scss'; // Importa este archivo con los estilos para mobile
import ServiceDetail from './ServiceDetail'; // Asegúrate de importar el componente
import {services} from '../../data/services'

const microMessages: string[] = [
  "La atención médica en el hogar es sinónimo de seguridad y confianza; nuestros especialistas monitorean sus signos vitales y adaptan tratamientos personalizados para garantizar un control clínico riguroso.",
  "El acompañamiento continuo en el cuidado domiciliario refuerza la calidad de vida; nuestros cuidadores trabajan con compromiso y respeto.",
  "Un entorno seguro y adaptado es esencial en el cuidado; nuestros especialistas aseguran que su hogar cumpla con los más altos estándares clínicos.",
  "La atención especializada de enfermería garantiza un seguimiento meticuloso; nuestro equipo actúa con profesionalismo y empatía.",
  "El equilibrio emocional es vital en el proceso de atención; nuestro apoyo psicológico se fundamenta en metodologías clínicas y humanizadas.",
  "La rehabilitación personalizada es clave para recuperar la autonomía; nuestros programas son diseñados bajo rigurosos criterios médicos.",
  "Una comunicación efectiva es la base del bienestar integral; confíe en nuestras evaluaciones a distancia para mantener su calidad de vida.",
];

const ParallaxServicesExtended: React.FC = () => {
  // Detecta si estamos en mobile (<768px)
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    // Ejecuta en el montaje y cuando cambia el tamaño de la ventana
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sección resumen, que se mostrará al inicio
  const renderSummary = () => (
    <section id="pse-summary" className="pse-section pse-reward-section">
      <div className="pse-reward-content">
        <h2>Resumen de Servicios</h2>
        <p>
          Acompáñenos en este recorrido clínico y conozca en detalle cada uno de nuestros servicios, diseñados para ofrecer la mejor atención domiciliaria.
        </p>
        <div className="pse-grid">
          {services.map((service, idx) => (
            <div key={idx} className="pse-grid-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="pse-button">
                Saber más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Renderizamos cada servicio con su micromensaje
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
    <div className="parallax-services-extended">
      {renderSummary()}
      {renderDetailedServices()}
      <button
        className="floating-summary-button"
        onClick={() => {
          const summarySection = document.getElementById("pse-summary");
          if (summarySection) {
            summarySection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Ver Resumen
      </button>
    </div>
  );

  const renderMobile = () => (
    <div className="parallax-services-extended mobile">
      {renderSummary()}
      <div className="pse-mobile-services-container">
     
      </div>
    </div>
  );

  return isMobile ? renderMobile() : renderDesktop();
};

export default ParallaxServicesExtended;
