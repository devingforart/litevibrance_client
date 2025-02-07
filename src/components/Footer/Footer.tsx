// src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Calm. {t('footer_rights', { defaultValue: 'Todos los derechos reservados.' })}
      </p>
    </footer>
  );
};

export default Footer;
