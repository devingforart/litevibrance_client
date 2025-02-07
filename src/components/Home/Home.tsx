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
        <div className="hero__content container">
          <h1 className="hero__title animate__animated animate__fadeInDown">
            {t('welcome')}
          </h1>
          <p className="hero__subtitle animate__animated animate__fadeInUp">
            {t('banner')}
          </p>
          <Link
            to="/Services"
            className="btn btn-primary animate__animated animate__zoomIn"
          >
            {t('explore_services', { defaultValue: 'Explore Services' })}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
