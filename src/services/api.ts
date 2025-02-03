// src/services/api.ts
//const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
const API_URL = import.meta.env.VITE_API_URL || 'https://api.litevibrance.com';


// ↑ Podrías usar process.env en vez de import.meta.env, según tu bundler.

interface RequestOptions {
  method?: string;
  token?: string;
  body?: unknown;        // si deseas enviar JSON
  [key: string]: any;    // para opciones adicionales
}

/**
 * request: helper para llamadas fetch a nuestra API.
 * @param endpoint: ruta (ej. "/api/login")
 * @param options: { method, body, token, ... }
 */
export async function request(endpoint: string, options: RequestOptions = {}) {
  const { method = 'GET', token, body, ...rest } = options;

  // Preparar cabeceras
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Hacer fetch
  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  });

  // Manejo de errores (básico). Podrías mejorarlo
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Error ${response.status}: ${errorText || 'Error en la petición'}`
    );
  }

  // Intentar parsear JSON (o devolver vacío si no hay contenido)
  try {
    return await response.json();
  } catch {
    return null;
  }
}
