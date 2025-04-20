// src/components/Home/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="relative min-h-screen">
      <section className="relative flex items-center justify-center w-full h-screen">
        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {t('video_not_supported', 'Tu navegador no soporta videos HTML5.')}
        </video>

        {/* Overlay para oscurecer */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* Contenido del hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            {t('welcome', 'Bienvenido a Nuestra Página')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            {t('banner', 'Descubre nuestros servicios innovadores')}
          </p>
          <Link
            to="/services"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg 
                      hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                      focus:ring-offset-black transition-colors duration-200"
          >
            {t('explore_services', 'Explorar Servicios')}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;