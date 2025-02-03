import React from 'react';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} liteVibrance. {t('footer_rights', { defaultValue: "All rights reserved." })}</p>
    </footer>
  );
};

export default Footer;
