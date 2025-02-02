// src/services/cart.ts

export interface CartItem {
  product_uuid: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export async function getCart(token: string): Promise<CartItem[]> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error('Error al obtener el carrito');
  }
  return response.json();
}

export async function addToCart(token: string, productUuid: string, quantity: number): Promise<string> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ product_uuid: productUuid, quantity })
  });
  if (!response.ok) {
    throw new Error('Error al agregar el producto al carrito');
  }
  return response.text();
}

export async function removeFromCart(token: string, productUuid: string): Promise<string> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/${productUuid}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error('Error al eliminar el producto del carrito');
  }
  return response.text();
}

export async function checkout(token: string): Promise<string> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/checkout`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error('Error al finalizar la compra');
  }
  return response.text();
}
