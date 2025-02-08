// src/components/Home/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.scss';
import HomeSections from '../HomeSections/HomeSections';
import heroBackground from '../../../public/bjj.jpg';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="home">
        {/* Sección Hero con imagen de fondo */}
        <section
          className="hero"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          {/* Overlay general para atenuar la imagen */}
          <div className="hero__overlay"></div>
          <div className="hero__content container">
            <div className="hero__content-inner">
              <h1 className="hero__title animate__animated animate__fadeInDown">
                {t('welcome')}
              </h1>
              <p className="hero__subtitle animate__animated animate__fadeInUp">
                {t('banner')}
              </p>
              <Link
                to="/products"
                className="btn btn-primary animate__animated animate__zoomIn"
              >
                {t('products')}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <HomeSections />
    </>
  );
};

export default Home;
