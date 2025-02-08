// src/components/Home/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.scss';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="home">
      <section className="hero">
        {/* Video de fondo */}
        <video className="hero__video" autoPlay muted loop>
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {t('video_not_supported', 'Tu navegador no soporta videos HTML5.')}
        </video>
        {/* Overlay para oscurecer el video y mejorar la legibilidad */}
        <div className="hero__overlay"></div>
        <div className="hero__content container">
          <h1 className="hero__title">
            {t('welcome', 'Bienvenido a Nuestra Página')}
          </h1>
          <p className="hero__subtitle">
            {t('banner', 'Descubre nuestros servicios innovadores')}
          </p>
          <Link to="/services" className="btn btn-primary">
            {t('explore_services', 'Explorar Servicios')}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
