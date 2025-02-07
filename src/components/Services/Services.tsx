import { useTranslation } from 'react-i18next';
import './Services.scss';

const Services: React.FC = () => {
  const { t } = useTranslation();


  const servicesData = [
    {
      title: t('fonoaudiologia', { defaultValue: 'Fonoaudiología a Distancia' }),
      description: t('fonoaudiologia_a_distancia_description', { defaultValue: 'Servicios de adaptación en el hogar para personas mayores y discapacitadas.' }),
    },
    {
      title: t('domicilio_adecuacion', { defaultValue: 'Adecuación de Domicilio' }),
      description: t('adecuacion_domicilio_description', { defaultValue: 'Servicios para mejorar la accesibilidad del hogar, facilitando la movilidad y seguridad.' }),
    },
    {
      title: t('emotional_support', {
        defaultValue: 'Soporte Emocional y Psicológico',
      }),
      description: t('emotional_support_description', {
        defaultValue:
          'Ofrecemos soporte emocional y psicológico tanto a pacientes como a sus familias para enfrentar los desafíos de la hospitalización domiciliaria. Terapias individuales y grupales en el hogar.',
      }),
    },
    {
      title: t('physical_rehabilitation', {
        defaultValue: 'Rehabilitación Física y Ocupacional',
      }),
      description: t('physical_rehabilitation_description', {
        defaultValue:
          'Programas personalizados de rehabilitación física y ocupacional para personas que se recuperan de cirugías o accidentes. Sesiones a domicilio.',
      }),
    },
    {
      title: t('nursing_services', {
        defaultValue: 'Servicios de Enfermería Especializada',
      }),
      description: t('nursing_services_description', {
        defaultValue:
          'Servicios de enfermería especializada que incluyen administración de medicamentos, cuidados de heridas y seguimiento postoperatorio. Atención sin necesidad de desplazamiento.',
      }),
    },
    {
      title: t('caregiver_support', {
        defaultValue: 'Soporte a Cuidadores',
      }),
      description: t('caregiver_support_description', {
        defaultValue:
          'Cuidadores entrenados brindan soporte físico y emocional a personas mayores, asegurando su bienestar. Asistencia en movilidad, higiene personal y compañía.',
      }),
    },
    {
      title: t('personalized_medical_care', {
        defaultValue: 'Atención Médica Personalizada',
      }),
      description: t('personalized_medical_care_description', {
        defaultValue:
          'Médicos especializados ofrecen atención médica integral a domicilio, incluyendo monitoreo de signos vitales, prescripción de medicamentos y seguimiento de tratamientos.',
      }),
    },
  ];

  return (
    <section className="services">
      <div className="services__header">
        <h2>{t('our_services', { defaultValue: 'Nuestros Servicios' })}</h2>
        <h3 className="services__subtitle">
          {t('services_description', { defaultValue: 'Explora nuestros servicios personalizados para cuidar de vos y tus seres queridos.' })}
        </h3>
      </div>

      {/* Servicios destacados */}
{/*       <div className="services__highlighted">
        {servicesData.slice(0, 2).map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-card__icon">{service.icon}</div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
            <button className="service-card__cta">{t('learn_more', { defaultValue: 'Saber más' })}</button>
          </div>
        ))}
      </div> */}

      {/* Todos los servicios */}
      <div className="services__cards">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
            <button className="service-card__cta">{t('learn_more', { defaultValue: 'Saber más' })}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
