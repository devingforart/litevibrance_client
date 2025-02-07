import { useTranslation } from 'react-i18next';
import './Services.scss';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      title: t('emotional_support', {
        defaultValue: 'Emotional and Psychological Support',
      }),
      description: t('emotional_support_description', {
        defaultValue:
          'We offer emotional and psychological support to both patients and their families to face the challenges of home hospitalization. Individual and group therapies are provided at home.',
      }),
    },
    {
      title: t('physical_rehabilitation', {
        defaultValue: 'Physical and Occupational Rehabilitation',
      }),
      description: t('physical_rehabilitation_description', {
        defaultValue:
          'We offer physical and occupational rehabilitation programs for individuals recovering from surgery or accidents. Our therapists provide personalized sessions at home.',
      }),
    },
    {
      title: t('nursing_services', {
        defaultValue: 'Specialized Nursing Services',
      }),
      description: t('nursing_services_description', {
        defaultValue:
          'Our specialized nursing services include medication administration, wound care, and post-operative follow-up, ensuring the patient receives quality care without needing to travel.',
      }),
    },
    {
      title: t('caregiver_support', {
        defaultValue: 'Caregiver Support',
      }),
      description: t('caregiver_support_description', {
        defaultValue:
          'Our trained caregivers provide both physical and emotional support for elderly individuals, ensuring their well-being at all times. This includes assistance with mobility, personal hygiene, and companionship.',
      }),
    },
    {
      title: t('personalized_medical_care', {
        defaultValue: 'Personalized Medical Care',
      }),
      description: t('personalized_medical_care_description', {
        defaultValue:
          'Our specialized doctors offer comprehensive medical care in the comfort of the home. This includes monitoring vital signs, prescribing medications, and following up on treatments.',
      }),
    },
  ];

  // Lógica para mostrar todos los servicios o solo algunos

  const servicesToDisplay =  servicesData

  return (
    <section className="services">
      <div className="services__header">
        <h2 className="services__title">
          {t('our_services', { defaultValue: '' })}
        </h2>

      </div>
      <div className="services__grid">
        {servicesToDisplay.map((service, index) => (
          <div key={index} className="services__card">
            <h3 className="services__card-title">{service.title}</h3>
            <p className="services__card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
