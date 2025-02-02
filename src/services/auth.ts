// src/services/auth.ts

export async function loginAPI(email: string, password: string): Promise<{ token: string }> {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  if (!response.ok) {
    throw new Error('Error al iniciar sesión');
  }
  return response.json();
}

export async function registerAPI(name: string, email: string, password: string): Promise<{ token: string }> {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  });
  if (!response.ok) {
    throw new Error('Error al registrarse');
  }
  return response.json();
}
