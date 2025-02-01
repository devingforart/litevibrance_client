import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Icono de lupa
import './Header.scss';

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Productos', path: '/products' },
  { name: 'Carrito', path: '/cart' },
  { name: 'Ofertas', path: '/products?filter=ofertas' },
  { name: 'Contacto', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const normalizeString = (str: string) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedTerm = normalizeString(searchTerm.trim());
    navigate(`/products?search=${encodeURIComponent(normalizedTerm)}`);
    setSearchTerm('');
  };

  return (
    <header className="header">
      <div className="header__brand">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <span className="brand__logo">liteVibrance</span>
        </Link>
      </div>

      {/* Buscador centrado */}
      <div className="header__center">
        <form className="header__search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
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
