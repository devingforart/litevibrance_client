// src/components/Home/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/pictures/Gtransp.png';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="home__hero container">
        {/* Imagen arriba */}
{/*         <div className="hero__image">
          <img src={heroImage} alt="Hero principal" />
        </div>
 */}
        {/* Texto (Hero Content) abajo */}
        <div className="hero__content">
          <h1>Descubre lo mejor en tecnología</h1>
          <p>
            Ofertas exclusivas, lanzamientos recientes 
            y una experiencia de compra inigualable.
          </p>
          <Link to="/products" className="btn-primary btn-hero">
            Compra ahora
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
