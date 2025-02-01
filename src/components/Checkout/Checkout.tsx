// src/components/Checkout/Checkout.tsx (fragmento modificado)
import React from 'react';
import './Checkout.scss';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';

const Checkout: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const { addNotification } = useNotification();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotification('Compra finalizada con éxito!', 'success');
    clearCart();
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);


  return (
    <div className="checkout container">
      <h2>Proceso de Pago</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío. Agrega productos antes de pagar.</p>
      ) : (
        <form className="checkout__form" onSubmit={handleSubmit}>
          <div className="checkout__summary">
            <h3>Resumen de tu orden</h3>
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  {item.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>
          <label>
            Dirección de Envío:
            <input type="text" name="address" required />
          </label>
          <label>
            Método de Pago:
            <select name="paymentMethod">
              <option value="creditCard">Tarjeta de Crédito</option>
              <option value="paypal">PayPal</option>
            </select>
          </label>
          <button type="submit" className="btn-primary">Finalizar Compra</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
