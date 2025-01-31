// src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MiTienda. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
