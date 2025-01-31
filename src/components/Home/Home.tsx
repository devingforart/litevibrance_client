// src/components/Home/Home.tsx
import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <section className="home container">
      <div className="home__hero">
        <h1>Bienvenido a MiTienda</h1>
        <p>Encuentra los mejores productos al mejor precio.</p>
        <button className="btn-primary">Ver productos destacados</button>
      </div>
    </section>
  );
};

export default Home;
