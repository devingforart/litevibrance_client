// src/context/AuthContext.tsx
import React, { createContext, useState, useContext } from 'react';
import { loginAPI, registerAPI } from '../services/auth';

interface User {
  token: string;
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
    const stored = localStorage.getItem('authUser');
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (email: string, password: string) => {
    const data = await loginAPI(email, password);
    // data es { token: '...' }
    const newUser = { token: data.token, email };
    setUser(newUser);
    localStorage.setItem('authUser', JSON.stringify(newUser));
  };

  const register = async (name: string, email: string, password: string) => {
    const data = await registerAPI(name, email, password);
    // data es { token: '...' }
    const newUser = { token: data.token, email };
    setUser(newUser);
    localStorage.setItem('authUser', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
    // Si tuvieras un logout en tu backend, podrías llamarlo aquí
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
