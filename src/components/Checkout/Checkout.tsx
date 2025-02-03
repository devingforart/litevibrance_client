import React from 'react';
import './Checkout.scss';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';
import { useTranslation } from 'react-i18next';

const Checkout: React.FC = () => {
  const { cartItems, clear } = useCart();
  const { addNotification } = useNotification();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotification(t('purchase_success'), 'success');
    clear();
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="checkout container">
      <h2>{t('payment_process')}</h2>
      {cartItems.length === 0 ? (
        <p>{t('empty_cart')}</p>
      ) : (
        <form className="checkout__form" onSubmit={handleSubmit}>
          <div className="checkout__summary">
            <h3>{t('order_summary')}</h3>
            <ul>
              {cartItems.map(item => (
                <li key={item.product_uuid}>
                  {item.name} x {item.quantity} - ${ (item.price * item.quantity).toFixed(2) }
                </li>
              ))}
            </ul>
            <p>{t('total')} {`$${totalPrice.toFixed(2)}`}</p>
          </div>
          <label>
            {t('shipping_address')}
            <input type="text" name="address" required />
          </label>
          <label>
            {t('payment_method')}
            <select name="paymentMethod">
              <option value="creditCard">{t('credit_card')}</option>
              <option value="paypal">{t('paypal')}</option>
            </select>
          </label>
          <button type="submit" className="btn-primary">{t('finish_purchase')}</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
