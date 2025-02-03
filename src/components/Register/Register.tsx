import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './Register.scss';
import { useTranslation } from 'react-i18next';

const Register: React.FC = () => {
  const { loginWithRedirect } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="register container">
      <h2>{t('create_account')}</h2>
      <button 
        onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
        className="btn-primary"
      >
        {t('signup')}
      </button>
    </div>
  );
};

export default Register;
