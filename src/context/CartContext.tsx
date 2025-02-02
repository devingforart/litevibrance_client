// src/context/CartContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { getCart, addToCart, removeFromCart, checkout, CartItem } from '../services/cart';

interface CartContextProps {
  cartItems: CartItem[];
  loadCart: () => void;
  add: (productUuid: string, quantity: number) => void;
  remove: (productUuid: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  loadCart: () => {},
  add: () => {},
  remove: () => {},
  clear: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { user } = useAuth();

  const loadCart = async () => {
    if (!user) {
      setCartItems([]);
      return;
    }
    try {
      const items = await getCart(user.token);
      setCartItems(items);
    } catch (error) {
      console.error('Error al cargar el carrito:', error);
    }
  };

  const add = async (productUuid: string, quantity: number) => {
    if (!user) return;
    try {
      await addToCart(user.token, productUuid, quantity);
      await loadCart();
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    }
  };

  const remove = async (productUuid: string) => {
    if (!user) return;
    try {
      await removeFromCart(user.token, productUuid);
      await loadCart();
    } catch (error) {
      console.error('Error al eliminar del carrito:', error);
    }
  };

  const clear = async () => {
    if (!user) return;
    try {
      await checkout(user.token);
      await loadCart();
    } catch (error) {
      console.error('Error en checkout:', error);
    }
  };

  // Cargar el carrito al iniciar o cuando cambie el usuario
  useEffect(() => {
    loadCart();
  }, [user]);

  return (
    <CartContext.Provider value={{ cartItems, loadCart, add, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
