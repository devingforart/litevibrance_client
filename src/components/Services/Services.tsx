import React, { useState, useEffect } from 'react';
import './Services.scss'; // Importa este archivo con los estilos para mobile

interface Service {
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Atención Médica",
    description:
      "Nuestros médicos especializados proporcionan atención médica integral en el hogar, incluyendo el monitoreo de signos vitales, prescripción de medicamentos y seguimiento personalizado de tratamientos, garantizando un control clínico riguroso.",
    link: "#atencion",
  },
  {
    title: "Cuidadores a Domicilio",
    description:
      "Nuestros cuidadores capacitados ofrecen apoyo físico y emocional a personas mayores, asegurando asistencia en movilidad, higiene personal y compañía, con un compromiso de cuidado integral y respetuoso.",
    link: "#cuidadores",
  },
  {
    title: "Adecuación de Domicilio",
    description:
      "CALM ofrece asesoramiento médico especializado para adaptar los hogares a las necesidades de personas mayores y con movilidad reducida, mediante evaluaciones personalizadas y reformas orientadas a mejorar la seguridad y confort.",
    link: "#adecuacion",
  },
  {
    title: "Enfermería Especializada",
    description:
      "Brindamos servicios de enfermería especializada, que incluyen administración de medicamentos, cuidado de heridas y seguimiento postoperatorio, garantizando una atención de calidad sin necesidad de desplazamiento.",
    link: "#enfermeria",
  },
  {
    title: "Apoyo Emocional y Psicológico",
    description:
      "Proveemos apoyo emocional y psicológico tanto a pacientes como a sus familias para enfrentar los desafíos inherentes a la hospitalización domiciliaria, con terapias individuales y grupales fundamentadas en criterios clínicos.",
    link: "#apoyo",
  },
  {
    title: "Rehabilitación Física y Ocupacional",
    description:
      "Nuestros programas de rehabilitación física y ocupacional están diseñados para facilitar la recuperación tras cirugías o accidentes, ofreciendo sesiones personalizadas en el entorno del hogar con un enfoque médico riguroso.",
    link: "#rehabilitacion",
  },
  {
    title: "Fonoaudiología a Distancia",
    description:
      "Brindamos servicios de fonoaudiología a distancia para mejorar la comunicación y habilidades del paciente, facilitando el acceso a evaluaciones y tratamientos profesionales desde la comodidad del hogar.",
    link: "#fonoaudiologia",
  },
];

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
              {/* El href usa el link definido (ej. "#atencion"). 
                  Aseguramos que la sección de detalle tenga el id "atencion" */}
              <a href={service.link} className="pse-button">
                Saber más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Secciones de detalle de cada servicio (con micro-mensajes)
  const renderDetailedServices = () => (
    <>
      {services.map((service, index) => (
        <React.Fragment key={index}>
          {/* Agregamos el id a la sección (quitando el '#' del link) */}
          <section id={service.link.substring(1)} className="pse-section pse-service-section">
            <div className="pse-bg" />
            <div className="pse-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <a href={service.link} className="pse-button">
                Saber más
              </a>
            </div>
          </section>
          {/* Si existe un micromensaje para este servicio, se renderiza */}
          {microMessages[index] && (
            <section className="pse-section pse-interstitial-section">
              <div className="pse-interstitial-content">
                <h3>{microMessages[index]}</h3>
              </div>
            </section>
          )}
        </React.Fragment>
      ))}
    </>
  );

  // Versión desktop: resumen primero, luego detalles y un botón flotante para volver al resumen
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

  // Versión mobile: se muestra el resumen al inicio y luego se listan las tarjetas de servicios
  const renderMobile = () => (
    <div className="parallax-services-extended mobile">
      {renderSummary()}
      <div className="pse-mobile-services-container">
        {services.map((service, index) => (
          <div key={index} className="pse-mobile-service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <a href={service.link} className="pse-button">
              Saber más
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return isMobile ? renderMobile() : renderDesktop();
};

export default ParallaxServicesExtended;
