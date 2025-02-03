// src/components/Register/Register.tsx
import React from 'react';
import { useAuth } from '../../hooks/useAuth'; // Actualizado
import './Register.scss';
import { useTranslation } from 'react-i18next';

const Register: React.FC = () => {
  const { login } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="register container">
      <h2>{t('create_account')}</h2>
      <button 
        onClick={() => login({ screen_hint: 'signup' })}
        className="btn-primary"
      >
        {t('signup')}
      </button>
    </div>
  );
};

export default Register;
