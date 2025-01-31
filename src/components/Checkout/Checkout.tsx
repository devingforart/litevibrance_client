// src/components/Checkout/Checkout.tsx
import React from 'react';
import './Checkout.scss';
import { useCart } from '../../context/CartContext';

const Checkout: React.FC = () => {
  const { cartItems, clearCart } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de finalizar compra (aquí iría llamada a tu backend)
    alert('Compra finalizada con éxito!');
    clearCart();
  };

  return (
    <div className="checkout container">
      <h2>Proceso de Pago</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío. Agrega productos antes de pagar.</p>
      ) : (
        <form className="checkout__form" onSubmit={handleSubmit}>
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
