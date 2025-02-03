import React from 'react';
import './Cart.scss';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cart: React.FC = () => {
  const { cartItems, remove, clear } = useCart();
  const { t } = useTranslation();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart container">
      <h2 className="cart__title">{t('cart')}</h2>
      {cartItems.length === 0 ? (
        <div className="cart__empty">
          <p>{t('guest_cart_empty')}</p>
          <Link to="/products" className="btn-primary">{t('go_to_products')}</Link>
        </div>
      ) : (
        <div className="cart__content">
          <div className="cart__items">
            {cartItems.map((item) => (
              <div key={item.product_uuid} className="cart__item">
                <div className="cart__item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart__item-details">
                  <h3>{item.name}</h3>
                  <p className="cart__item-quantity">{t('quantity')} {item.quantity}</p>
                  <p className="cart__item-subtotal">
                    {t('subtotal')} ${ (item.price * item.quantity).toFixed(2) }
                  </p>
                  <button
                    onClick={() => remove(item.product_uuid)}
                    className="btn-primary cart__item-remove"
                  >
                    {t('remove')}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__summary">
            <h3>{t('total')} ${ totalPrice.toFixed(2) }</h3>
            <div className="cart__summary-actions">
              <button onClick={clear} className="btn-secondary">
                {t('empty_cart_button')}
              </button>
              <Link to="/checkout" className="btn-primary">
                {t('continue_checkout')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
