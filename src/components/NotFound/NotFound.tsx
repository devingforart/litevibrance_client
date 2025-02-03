import React from 'react';
import './NotFound.scss';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="notfound container">
      <h2>{t('not_found_title')}</h2>
      <p>{t('not_found_message')}</p>
    </div>
  );
};

export default NotFound;
