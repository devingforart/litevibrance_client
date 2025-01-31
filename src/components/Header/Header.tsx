// src/components/Header/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">MiTienda</Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/cart">Carrito</Link></li>
          <li><Link to="/login">Iniciar Sesión</Link></li>
          <li><Link to="/register">Registrarse</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
