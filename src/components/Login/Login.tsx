import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './Login.scss';
import { useTranslation } from 'react-i18next';

const Login: React.FC = () => {
  const { login } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="nav__item">
      <h2>{t('session_login')}</h2>
      <button onClick={login} className="nav__link">
        {t('access')}
      </button>
    </div>
  );
};

export default Login;
