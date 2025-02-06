// src/components/Checkout/Checkout.tsx
import React, { useState } from 'react';
import './Checkout.scss';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';
import { useTranslation } from 'react-i18next';

const Checkout: React.FC = () => {
  const { cartItems, clear } = useCart();
  const { addNotification } = useNotification();
  const { t } = useTranslation();

  // Estados para el formulario
  const [shippingAddress, setShippingAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [promoCode, setPromoCode] = useState('');

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías validar el formulario, aplicar el código promocional, etc.
    addNotification(
      t('checkout_success', { defaultValue: '¡Tu compra ha sido realizada con éxito!' }),
      'success'
    );
    clear();
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout container">
        <h2>{t('checkout', { defaultValue: 'Checkout' })}</h2>
        <p>{t('empty_cart', { defaultValue: 'Tu carrito está vacío.' })}</p>
      </div>
    );
  }

  return (
    <div className="checkout container">
      <h2>{t('checkout', { defaultValue: 'Checkout' })}</h2>
      <div className="checkout__content">
        {/* Resumen de la Orden */}
        <div className="checkout__summary">
          <h3>{t('order_summary', { defaultValue: 'Resumen de la Orden' })}</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.product_uuid}>
                <span className="item-name">{item.name}</span>
                <span className="item-quantity">x{item.quantity}</span>
                <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="checkout__total">
            <span>{t('total', { defaultValue: 'Total:' })}</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Formulario de Checkout */}
        <form className="checkout__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="shippingAddress">
              {t('shipping_address', { defaultValue: 'Dirección de Envío' })}
            </label>
            <input
              type="text"
              id="shippingAddress"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              placeholder={t('enter_shipping_address', { defaultValue: 'Ingresa tu dirección' })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">
              {t('phone_number', { defaultValue: 'Número de Teléfono' })}
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder={t('enter_phone_number', { defaultValue: 'Ingresa tu teléfono' })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">
              {t('payment_method', { defaultValue: 'Método de Pago' })}
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="creditCard">
                {t('credit_card', { defaultValue: 'Tarjeta de Crédito' })}
              </option>
              <option value="paypal">
                {t('paypal', { defaultValue: 'PayPal' })}
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="promoCode">
              {t('promo_code', { defaultValue: 'Código Promocional' })}
            </label>
            <input
              type="text"
              id="promoCode"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder={t('enter_promo_code', { defaultValue: 'Ingresa tu código' })}
            />
          </div>
          <button type="submit" className="btn-primary">
            {t('complete_purchase', { defaultValue: 'Completar Compra' })}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
