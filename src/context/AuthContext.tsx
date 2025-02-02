// src/context/AuthContext.tsx
import React from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN!}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID!}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export const useAuth = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, getAccessTokenSilently } = useAuth0();
  return {
    isAuthenticated,
    // Al iniciar sesión se solicita el audience mediante authorizationParams
    login: () =>
      loginWithRedirect({
        authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE },
      }),
    logout: () => logout({ returnTo: window.location.origin }),
    user,
    // Al solicitar el token se agrega authorizationParams para obtener el access token adecuado
    getAccessTokenSilently: (options?: any) =>
      getAccessTokenSilently({
        authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE },
        ...options,
      }),
  };
};
