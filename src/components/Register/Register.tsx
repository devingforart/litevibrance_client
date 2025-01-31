// src/components/Register/Register.tsx
import React from 'react';
import './Register.scss';

const Register: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de registro
  };

  return (
    <div className="register container">
      <h2>Crear Cuenta</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <label>
          Nombre
          <input type="text" required />
        </label>
        <label>
          Correo electrónico
          <input type="email" required />
        </label>
        <label>
          Contraseña
          <input type="password" required />
        </label>
        <button type="submit" className="btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
