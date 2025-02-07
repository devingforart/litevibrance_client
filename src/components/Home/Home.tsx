import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.scss';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="home">
      {/* Sección HERO – Bienvenida con fondo degradado sutil en light mode */}
      <section className="hero">
        <div className="hero__content container">
          <h1 className="hero__title animate__animated animate__fadeInDown">
            {t('welcome')}
          </h1>
          <p className="hero__subtitle animate__animated animate__fadeInUp">
            {t('banner')}
          </p>
          <Link 
            to="/services" 
            className="btn btn-primary animate__animated animate__zoomIn"
          >
            {t('explore_services')}
          </Link>
        </div>
      </section>

      {/* Sección SOBRE NOSOTROS */}
      <section className="about container">
        <h2 className="about__title">{t('about_us_title')}</h2>
        <p className="about__description">{t('about_us_text')}</p>
        <Link to="/about" className="btn btn-secondary">
          {t('learn_more')}
        </Link>
      </section>

      {/* Sección VALORES – Nuestro compromiso con la atención personalizada */}
      <section className="values container">
        <h2 className="values__title">Nuestro Compromiso</h2>
        <p className="values__description">
          En Internación Domiciliaria, nuestra prioridad es el cuidado integral de la persona. Creemos que cada ser humano merece un trato personalizado, respetuoso y lleno de empatía, que se refleje en cada acción y servicio que brindamos.
        </p>
        <p className="values__description">
          Nuestro equipo de profesionales está comprometido con la excelencia, combinando experiencia médica y humana para asegurar el bienestar de nuestros pacientes. Trabajamos día a día para crear un ambiente seguro, cálido y lleno de valores, donde la dignidad y la calidad de vida son el centro de nuestra atención.
        </p>
      </section>

      {/* Sección SERVICIOS */}
      <section className="services container">
        <h2 className="section-title">{t('featured_services')}</h2>
        <div className="services__grid">
          <div className="service-card">
            <h3 className="service-card__title">{t('service1_title')}</h3>
            <p className="service-card__description">
              {t('service1_description')}
            </p>
            <Link to="/services/service1" className="btn btn-secondary">
              {t('view_details')}
            </Link>
          </div>
          <div className="service-card">
            <h3 className="service-card__title">{t('service2_title')}</h3>
            <p className="service-card__description">
              {t('service2_description')}
            </p>
            <Link to="/services/service2" className="btn btn-secondary">
              {t('view_details')}
            </Link>
          </div>
          <div className="service-card">
            <h3 className="service-card__title">{t('service3_title')}</h3>
            <p className="service-card__description">
              {t('service3_description')}
            </p>
            <Link to="/services/service3" className="btn btn-secondary">
              {t('view_details')}
            </Link>
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="cta container">
        <h2 className="cta__title">{t('cta_title')}</h2>
        <p className="cta__text">{t('cta_text')}</p>
        <Link to="/contact" className="btn btn-primary">
          {t('cta_button')}
        </Link>
      </section>
    </main>
  );
};

export default Home;
