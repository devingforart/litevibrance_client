// src/components/HomeSections.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './HomeSections.scss'; // Archivo de estilos SCSS para esta sección
import im1 from '../../../public/adcc/adcc_SS_front.webp';
import im2 from '../../../public/aracnida/ARACHNIDSSFRONT.webp';
import im3 from '../../../public/gordo brian/GORDONUSAGEAR2024SSfront.webp';
import im4 from '../../../public/mrbot/Artboard1Blackfront.webp';



const HomeSections: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="home-sections">
      {/* ===============================
          COLECCIONES DESTACADAS – Muestra de productos
      ================================ */}
      <section className="collection-showcase container animate__animated animate__fadeInUp">
        <h2 className="section-title">
          {t('featured_collection', 'Colecciones Destacadas')}
        </h2>
        <div className="collection-gallery">
          <div className="gallery-item">
            <img
              src={im2}
              alt={t('collection1_alt', 'Ropa técnica para grappling')}
            />
            <div className="gallery-overlay">
              <h3>{t('collection1_title', 'Ropa Técnica')}</h3>
              <Link to="/products" className="btn btn-secondary">
                {t('view_collection', 'Ver Colección')}
              </Link>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src={im3}
              alt={t('collection2_alt', 'Accesorios para grappling')}
            />
            <div className="gallery-overlay">
              <h3>{t('collection2_title', 'Accesorios')}</h3>
              <Link to="/products" className="btn btn-secondary">
                {t('view_collection', 'Ver Colección')}
              </Link>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src={im4}
              alt={t('collection3_alt', 'Ropa de entrenamiento para grappling')}
            />
            <div className="gallery-overlay">
              <h3>{t('collection3_title', 'Entrenamiento')}</h3>
              <Link to="/products" className="btn btn-secondary">
                {t('view_collection', 'Ver Colección')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
          SOBRE NOSOTROS – Historia y valores
      ================================ */}
      <section className="about-us container animate__animated animate__fadeInUp">
        <div className="about-content">
          <h2>{t('about_us_title', 'Sobre Nosotros')}</h2>
          <p>
            {t(
              'about_us_text',
              'Somos una marca apasionada por el grappling, comprometida en ofrecer productos innovadores y de alta calidad para deportistas y entusiastas. Nuestra misión es inspirarte a dominar cada combate con estilo y determinación.'
            )}
          </p>
          <Link to="/about" className="btn btn-outline">
            {t('learn_more', 'Conoce Más')}
          </Link>
        </div>
        <div className="about-image">
          <img
            src={im1}
            alt={t('about_us_alt', 'Equipo de grappling en acción')}
          />
        </div>
      </section>

      {/* ===============================
          LLAMADO A LA ACCIÓN (CTA) – Invitación final
      ================================ */}
      <section className="cta container animate__animated animate__fadeInUp">
        <h2 className="cta__title">
          {t('cta_title', 'Únete a la Revolución del Grappling')}
        </h2>
        <p className="cta__text">
          {t(
            'cta_text',
            'Suscríbete a nuestro boletín para recibir ofertas exclusivas, novedades de productos y consejos para llevar tu rendimiento al siguiente nivel.'
          )}
        </p>
        <Link to="/contact" className="btn btn-secondary">
          {t('cta_button', 'Contáctanos')}
        </Link>
      </section>
    </main>
  );
};

export default HomeSections;
