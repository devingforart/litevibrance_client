// src/components/Cart/Cart.tsx
import React from 'react';
import './Cart.scss';

const Cart: React.FC = () => {
  // Lógica para mostrar los productos en el carrito
  return (
    <div className="cart container">
      <h2>Tu Carrito</h2>
      <p>Actualmente no tienes productos en el carrito.</p>
      {/* Aquí iría la lista de productos, subtotal, etc. */}
    </div>
  );
};

export default Cart;
