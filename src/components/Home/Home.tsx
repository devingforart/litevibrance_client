// src/components/Home/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroImage from '../../assets/pictures/Gtransp.png';
import './Home.scss';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="home">
      <div className="home__hero container">
        <div className="hero__content">
          <h1>{t('welcome')}</h1>
          <p>
            {t('banner')}
          </p>
          <Link to="/products" className="btn-primary btn-hero">
            {t('products')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
