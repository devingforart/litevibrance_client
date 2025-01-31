// src/components/Login/Login.tsx
import React from 'react';
import './Login.scss';

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticación real
    alert('Inicio de sesión exitoso');
  };

  return (
    <div className="login container">
      <h2>Iniciar Sesión</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label>
          Correo electrónico
          <input type="email" required />
        </label>
        <label>
          Contraseña
          <input type="password" required />
        </label>
        <button type="submit" className="btn-primary">Acceder</button>
      </form>
    </div>
  );
};

export default Login;
