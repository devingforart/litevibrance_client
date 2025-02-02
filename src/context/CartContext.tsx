// src/context/CartContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { getCart, addToCart, removeFromCart, checkout, CartItem } from '../services/cart';

interface CartContextProps {
  cartItems: CartItem[];
  loadCart: () => void;
  add: (
    productUuid: string,
    productDetails: { name: string; image: string; price: number },
    quantity: number
  ) => void;
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

  // Cargar el carrito dependiendo del estado de autenticación
  const loadCart = async () => {
    if (user) {
      try {
        const items = await getCart(user.token);
        setCartItems(items);
      } catch (error) {
        console.error('Error al cargar el carrito:', error);
      }
    } else {
      // Cargar carrito del localStorage para usuario invitado
      const storedCart = localStorage.getItem('guestCart');
      setCartItems(storedCart ? JSON.parse(storedCart) : []);
    }
  };

  // Actualizar el localStorage cuando el usuario no esté logueado
  useEffect(() => {
    if (!user) {
      localStorage.setItem('guestCart', JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  // Función para agregar producto al carrito
  const add = async (
    productUuid: string,
    productDetails: { name: string; image: string; price: number },
    quantity: number
  ) => {
    if (user) {
      try {
        await addToCart(user.token, productUuid, quantity);
        await loadCart();
      } catch (error) {
        console.error('Error al agregar al carrito:', error);
      }
    } else {
      setCartItems(prev => {
        const existing = prev.find(item => item.product_uuid === productUuid);
        if (existing) {
          return prev.map(item =>
            item.product_uuid === productUuid
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          const newItem: CartItem = {
            product_uuid: productUuid,
            name: productDetails.name,
            image: productDetails.image,
            price: productDetails.price,
            quantity,
          };
          return [...prev, newItem];
        }
      });
    }
  };

  // Función para eliminar un producto del carrito
  const remove = async (productUuid: string) => {
    if (user) {
      try {
        await removeFromCart(user.token, productUuid);
        await loadCart();
      } catch (error) {
        console.error('Error al eliminar del carrito:', error);
      }
    } else {
      setCartItems(prev => prev.filter(item => item.product_uuid !== productUuid));
    }
  };

  // Función para vaciar el carrito (ej. al hacer checkout)
  const clear = async () => {
    if (user) {
      try {
        await checkout(user.token);
        await loadCart();
      } catch (error) {
        console.error('Error en checkout:', error);
      }
    } else {
      setCartItems([]);
      localStorage.removeItem('guestCart');
    }
  };

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
