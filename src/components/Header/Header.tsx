// src/components/Header/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Productos', path: '/products' },
  { name: 'Carrito', path: '/cart' },
  { name: 'Ofertas', path: '/products?filter=ofertas' }, // Ejemplo
  { name: 'Contacto', path: '/contact' }, // Ejemplo
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquea el scroll del body al abrir el menú en móvil
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="header__brand">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <span className="brand__logo">liteVibrance</span>
        </Link>
      </div>

      <div className="header__toggle" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </div>

      <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav__list">
          {navLinks.map((link) => (
            <li key={link.name} className="nav__item">
              <Link
                to={link.path}
                className="nav__link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Onda decorativa */}
      <div className="header__wave">
        <svg viewBox="0 0 500 80" preserveAspectRatio="none">
          <path d="M0,30 C150,90 350,0 500,30 L500,00 L0,0 Z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
