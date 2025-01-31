// src/components/Cart/Cart.tsx
import React from 'react';
import './Cart.scss';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart container">
      <h2>Tu Carrito</h2>

      {cartItems.length === 0 ? (
        <p>Actualmente no tienes productos en el carrito.</p>
      ) : (
        <>
          <ul className="cart__list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart__item">
                <img src={item.image} alt={item.name} />
                <div className="cart__details">
                  <h3>{item.name}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn-primary"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart__summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={clearCart} className="btn-primary">Vaciar Carrito</button>
            <Link to="/checkout" className="btn-primary">
              Continuar al Pago
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
