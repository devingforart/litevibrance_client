// src/components/Login/Login.tsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './Login.scss';

const Login: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="nav__item">
      <h2>Iniciar Sesión</h2>
      <button onClick={login} className="nav__link">
        Acceder
      </button>
    </div>
  );
};

export default Login;
