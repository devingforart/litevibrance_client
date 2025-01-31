// src/components/Home/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <section className="home container">
      {/* Sección de Intro/Hero */}
      <div className="home__intro">
        <h1>Bienvenido a MiTienda</h1>
        <p className="home__subtitle">
          Traemos para ti los mejores productos, cuidadosamente seleccionados por nuestros expertos.
        </p>
        <p>
          Disfruta de una experiencia de compra única con ofertas exclusivas y la máxima calidad
          en todas nuestras categorías.
        </p>
        <Link to="/products" className="btn-primary">
          Explora nuestro catálogo
        </Link>
      </div>

      {/* Sección de destacados u oportunidades */}
      <div className="home__highlights">
        <div className="highlight__item">
          <h2>Novedades</h2>
          <p>Descubre los lanzamientos más recientes en tecnología, moda y más.</p>
          <Link to="/products" className="btn-secondary">Ver novedades</Link>
        </div>
        <div className="highlight__item">
          <h2>Ofertas Imperdibles</h2>
          <p>Aprovecha descuentos especiales y promociones limitadas.</p>
          <Link to="/products" className="btn-secondary">Ver ofertas</Link>
        </div>
        <div className="highlight__item">
          <h2>Más Vendidos</h2>
          <p>Echa un vistazo a los productos favoritos de nuestros clientes.</p>
          <Link to="/products" className="btn-secondary">Ver más vendidos</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
