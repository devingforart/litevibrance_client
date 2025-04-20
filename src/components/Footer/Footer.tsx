// src/components/Footer/Footer.tsx
import React from 'react';
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Información del footer */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
          {/* Ubicación */}
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-400 text-xl" aria-hidden="true" />
            <p className="text-gray-300">
              {t('dummy_address', { defaultValue: 'Av. Principal 123, Ciudad, País' })}
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="flex gap-6">
            <a
              href="https://facebook.com/CalmInternacionDomiciliaria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://twitter.com/tuempresa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://instagram.com/tuempresa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://wa.me/541130950404"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Calm. {t('footer_rights', { defaultValue: 'Todos los derechos reservados.' })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;