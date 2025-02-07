// src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.scss';
import { useTranslation } from 'react-i18next';
import { 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaWhatsapp 
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__info">
        {/* Ubicación */}
        <div className="footer__location">
          <FaMapMarkerAlt className="footer__icon" />
          <p>
            {t('dummy_address', { defaultValue: 'Av. Principal 123, Ciudad, País' })}
          </p>
        </div>
        {/* Redes Sociales */}
        <div className="footer__social">
          <a
            href="https://facebook.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="footer__icon" />
          </a>
          <a
            href="https://twitter.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="footer__icon" />
          </a>
          <a
            href="https://instagram.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="footer__icon" />
          </a>
          <a
            href="https://wa.me/1234567890"  // Reemplaza con tu número en formato internacional sin espacios ni símbolos.
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="footer__icon" />
            <span></span>
          </a>
        </div>
        {/* WhatsApp */}
  
      </div>
      <p className="footer__copy">
        &copy; {new Date().getFullYear()} Calm. {t('footer_rights', { defaultValue: 'Todos los derechos reservados.' })}
      </p>
    </footer>
  );
};

export default Footer;
