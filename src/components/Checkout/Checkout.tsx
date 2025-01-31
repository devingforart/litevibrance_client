// src/components/Checkout/Checkout.tsx
import React from 'react';
import './Checkout.scss';

const Checkout: React.FC = () => {
  return (
    <div className="checkout container">
      <h2>Proceso de Pago</h2>
      <form className="checkout__form">
        <label>
          Dirección de Envío:
          <input type="text" name="address" />
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
    </div>
  );
};

export default Checkout;
