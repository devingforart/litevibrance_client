// src/components/Home/Home.tsx
import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="home container">
      <div className="home__hero">
        <h1>Bienvenido a MiTienda</h1>
        <p>Encuentra los mejores productos al mejor precio. ¡Explora nuestras ofertas!</p>
        <Link to="/products" className="btn-primary">Ver productos destacados</Link>
      </div>
    </section>
  );
};

export default Home;
