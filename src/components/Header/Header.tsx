// src/components/Header/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const navLinks = [
  { name: 'home', path: '/' },
  { name: 'vision', path: '/MissionVision' },
  { name: 'services', path: '/Services' },
  { name: 'products', path: '/products' },
  // { name: 'cart', path: '/cart' },
  { name: 'contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  const { isAuthenticated, login, logout, user } = useAuth();
  const { t } = useTranslation();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    // Evitamos scroll en el body cuando el menú móvil está abierto
    document.body.classList.toggle('overflow-hidden', isOpen);
    return () => document.body.classList.remove('overflow-hidden'); // Limpieza
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Brand/Logo */}
        <div className="flex items-center z-10">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight hover:text-gray-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t('liteVibrance')}
          </Link>
        </div>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden text-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md z-10"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Navegación */}
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-gray-900 md:static md:flex md:items-center md:bg-transparent md:w-auto md:h-auto transition-transform duration-300 ease-in-out z-40 pointer-events-auto ${
            isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center pt-20 md:pt-0 space-y-6 md:space-y-0 md:space-x-6 px-4 md:px-0 h-full md:h-auto">
            <li className="pointer-events-auto">
              <LanguageSwitcher />
            </li>
            {navLinks.map((link) => (
              <li key={link.name} className="pointer-events-auto">
                <Link
                  to={link.path}
                  className="text-lg font-medium hover:text-blue-400 transition-colors relative flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.name)}
                  {link.name === 'cart' && totalItems > 0 && (
                    <span className="absolute -top-2 -right-4 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            ))}
            {!isAuthenticated ? (
              <li className="pointer-events-auto">
                <Link
                  to="#"
                  className="text-lg font-medium hover:text-blue-400 transition-colors"
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
                <li className="pointer-events-auto">
                  <span className="text-lg font-medium">
                    {t('hello')} {user?.name || user?.email}
                  </span>
                </li>
                <li className="pointer-events-auto">
                  <Link
                    to="#"
                    className="text-lg font-medium hover:text-blue-400 transition-colors"
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
      </div>

      {/* Ola decorativa */}
      <div className="absolute bottom-0 w-full h-20 -z-10">
        <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-full fill-gray-800">
          <path d="M0,30 C150,90 350,0 500,30 L500,0 L0,0 Z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;