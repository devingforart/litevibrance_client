// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => {},
  logout: () => {},
  register: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (email: string, password: string) => {
    // Simulación de llamada a API (reemplaza con tu lógica real)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const demoUser = { name: 'Usuario Demo', email };
    setUser(demoUser);
    localStorage.setItem('user', JSON.stringify(demoUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (name: string, email: string, password: string) => {
    // Simulación de registro en el backend
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newUser = { name, email };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
