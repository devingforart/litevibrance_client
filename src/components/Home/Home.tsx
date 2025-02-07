// src/components/Home/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.scss';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="home">
      {/* Sección Hero con video de fondo */}
      <section className="hero">
        <div className="hero__video-wrapper">
          <video className="hero__video" autoPlay muted loop>
            <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
            {t('video_not_supported')}
          </video>
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__content container">
          <h1 className="hero__title animate__animated animate__fadeInDown">
            {t('welcome')}
          </h1>
          <p className="hero__subtitle animate__animated animate__fadeInUp">
            {t('banner')}
          </p>
          <Link to="/products" className="btn btn-primary animate__animated animate__zoomIn">
            {t('products')}
          </Link>
        </div>
      </section>

      {/* Sección de Colecciones Destacadas */}
      <section className="collection-showcase container animate__animated animate__fadeInUp">
        <h2 className="section-title">{t('featured_collection')}</h2>
        <div className="collection-gallery">
          <div className="gallery-item">
            <img src="/assets/images/collection1.jpg" alt={t('collection1_alt')} />
            <div className="gallery-overlay">
              <h3>{t('collection1_title')}</h3>
              <Link to="/products" className="btn btn-secondary">
                {t('view_collection')}
              </Link>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/assets/images/collection2.jpg" alt={t('collection2_alt')} />
            <div className="gallery-overlay">
              <h3>{t('collection2_title')}</h3>
              <Link to="/products" className="btn btn-secondary">
                {t('view_collection')}
              </Link>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/assets/images/collection3.jpg" alt={t('collection3_alt')} />
            <div className="gallery-overlay">
              <h3>{t('collection3_title')}</h3>
              <Link to="/products" className="btn btn-secondary">
                {t('view_collection')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="about-us container animate__animated animate__fadeInUp">
        <div className="about-content">
          <h2>{t('about_us_title')}</h2>
          <p>{t('about_us_text')}</p>
          <Link to="/about" className="btn btn-outline">
            {t('learn_more')}
          </Link>
        </div>
        <div className="about-image">
          <img src="/assets/images/about-us.jpg" alt={t('about_us_alt')} />
        </div>
      </section>

      {/* Sección de Llamado a la Acción (CTA) */}
      <section className="cta container animate__animated animate__fadeInUp">
        <h2 className="cta__title">{t('cta_title')}</h2>
        <p className="cta__text">{t('cta_text')}</p>
        <Link to="/contact" className="btn btn-secondary">
          {t('cta_button')}
        </Link>
      </section>
    </main>
  );
};

export default Home;
