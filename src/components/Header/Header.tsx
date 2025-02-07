// src/components/Header/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import './Header.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const navLinks = [
  { name: 'home', path: '/' },
  { name: 'products', path: '/products' },
  // { name: 'cart', path: '/cart' },
  { name: 'contact', path: '/contact' }
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  const { isAuthenticated, login, logout, user } = useAuth();
  const { t } = useTranslation();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    // Evitamos que se haga scroll en el body cuando el menú móvil está abierto
    document.body.classList.toggle('no-scroll', isOpen);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__brand">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <span className="brand__logo">{t('liteVibrance')}</span>
        </Link>
      </div>
      <div className="header__toggle" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </div>
      <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <LanguageSwitcher />
          </li>
          {navLinks.map(link => (
            <li key={link.name} className="nav__item">
              <Link
                to={link.path}
                className="nav__link"
                onClick={() => setIsOpen(false)}
              >
                {t(link.name)}
                {link.name === 'cart' && totalItems > 0 && (
                  <span className="cart-badge">{totalItems}</span>
                )}
              </Link>
            </li>
          ))}
          {!isAuthenticated ? (
            <li className="nav__item">
              <Link
                to="#"
                className="nav__link"
                onClick={(e) => {
                  e.preventDefault();
                  login();
                  setIsOpen(false);
                }}
              >
                {t('iniciar_sesion')}
              </Link>
            </li>
          ) : (
            <>
              <li className="nav__item">
                <span className="nav__link">
                  {t('hello')} {user?.name || user?.email}
                </span>
              </li>
              <li className="nav__item">
                <Link
                  to="#"
                  className="nav__link"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                    setIsOpen(false);
                  }}
                >
                  {t('logout')}
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="header__wave">
        <svg viewBox="0 0 500 80" preserveAspectRatio="none">
          <path d="M0,30 C150,90 350,0 500,30 L500,0 L0,0 Z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
