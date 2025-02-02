// src/context/AuthContext.tsx
import React from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN!}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID!}
      redirectUri={window.location.origin}
      audience={import.meta.env.VITE_AUTH0_AUDIENCE} // Opcional
    >
      {children}
    </Auth0Provider>
  );
};

export const useAuth = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, getAccessTokenSilently } = useAuth0();
  // Opcional: verifica en consola que loginWithRedirect existe
  // console.log('loginWithRedirect:', loginWithRedirect);
  return {
    isAuthenticated,
    login: () => loginWithRedirect(),
    logout: () => logout({ returnTo: window.location.origin }),
    user,
    getAccessTokenSilently,
  };
};
