// src/hooks/useAuth.ts
import { useAuth0, GetTokenSilentlyOptions } from '@auth0/auth0-react';

export const useAuth = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, getAccessTokenSilently } = useAuth0();
  return {
    isAuthenticated,
    // Función login que permite pasar opciones adicionales
    login: (options?: any) =>
      loginWithRedirect({
        authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE },
        ...options,
      }),
    // Función logout utilizando logoutParams
    logout: () => logout({ logoutParams: { returnTo: window.location.origin } }),
    user,
    // Convertir a unknown y luego a Promise<string> para asegurar que se retorne solo el token
    getAccessTokenSilently: (options?: GetTokenSilentlyOptions) =>
      getAccessTokenSilently({
        detailedResponse: false,
        authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE },
        ...options,
      }) as unknown as Promise<string>,
  };
};
