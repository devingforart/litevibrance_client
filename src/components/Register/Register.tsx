// src/components/Register/Register.tsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './Register.scss';

const Register: React.FC = () => {
  const { loginWithRedirect } = useAuth();
  return (
    <div className="register container">
      <h2>Crear Cuenta</h2>
      {/* Al pasar la opción screen_hint: 'signup', se abre el flujo de registro */}
      <button 
        onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
        className="btn-primary"
      >
        Registrarse
      </button>
    </div>
  );
};

export default Register;
