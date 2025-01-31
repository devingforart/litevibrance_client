// src/components/Register/Register.tsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Register.scss';

const Register: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate('/'); // O a una página de bienvenida
    } catch (error) {
      alert('Error en el registro');
    }
  };

  return (
    <div className="register container">
      <h2>Crear Cuenta</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <label>
          Nombre
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Correo electrónico
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit" className="btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
