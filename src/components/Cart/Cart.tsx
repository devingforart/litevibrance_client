// src/components/Cart/Cart.tsx
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

  if (cartItems.length === 0) {
    return (
      <div className="cart container">
        <h2 className="cart__title">{t('cart', { defaultValue: 'Carrito' })}</h2>
        <div className="cart__empty">
          <p>{t('guest_cart_empty', { defaultValue: 'Tu carrito está vacío.' })}</p>
          <Link to="/products" className="btn-primary">
            {t('go_to_products', { defaultValue: 'Ver Productos' })}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart container">
      <h2 className="cart__title">{t('cart', { defaultValue: 'Carrito' })}</h2>
      <div className="cart__content">
        {/* Lista de productos */}
        <div className="cart__items">
          {cartItems.map((item) => (
            <div key={item.product_uuid} className="cart__item">
              <div className="cart__item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart__item-details">
                <h3 className="item-name">{item.name}</h3>
                <div className="item-quantity">
                  {t('quantity', { defaultValue: 'Cantidad:' })} {item.quantity}
                </div>
                <div className="item-price">
                  {t('subtotal', { defaultValue: 'Subtotal:' })} ${(
                    item.price * item.quantity
                  ).toFixed(2)}
                </div>
                <button
                  onClick={() => remove(item.product_uuid)}
                  className="btn-remove"
                >
                  {t('remove', { defaultValue: 'Eliminar' })}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Resumen de la orden */}
        <div className="cart__summary">
          <div className="summary-card">
            <h3>{t('order_summary', { defaultValue: 'Resumen de la Orden' })}</h3>
            <div className="summary-details">
              <span>{t('total', { defaultValue: 'Total:' })}</span>
              <span className="total-price">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-actions">
              <button onClick={clear} className="btn-secondary">
                {t('empty_cart_button', { defaultValue: 'Vaciar Carrito' })}
              </button>
              <Link to="/checkout" className="btn-primary">
                {t('continue_checkout', { defaultValue: 'Continuar con la Compra' })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
