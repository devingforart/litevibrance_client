// src/components/Login/Login.tsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/'); // Redirige a la home u otra ruta protegida
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <div className="login container">
      <h2>Iniciar Sesión</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label>
          Correo electrónico
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit" className="btn-primary">Acceder</button>
      </form>
    </div>
  );
};

export default Login;
