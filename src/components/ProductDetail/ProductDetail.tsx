// src/components/ProductDetail/ProductDetail.tsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.scss';
import { useCart } from '../../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Audífonos Inalámbricos',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1606813906572-cb9c504a6d4c?auto=format&fit=crop&w=600&q=80',
    description:
      'Estos audífonos ofrecen un sonido envolvente, conexión Bluetooth 5.0 y una batería que dura hasta 20 horas. Ideales para entrenamientos o para disfrutar de música sin cables.',
  },
  // …otros productos con sus respectivas descripciones
];

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="product-detail container">
        <h2>Producto no encontrado</h2>
        <Link to="/products" className="btn-primary">
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Para esta maqueta, se simula agregar la cantidad indicada
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`${product.name} (x${quantity}) agregado al carrito`);
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="product-detail container">
      <div className="product-detail__content">
        <div className="product-detail__image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail__info">
          <h2 className="product-detail__title">{product.name}</h2>
          <p className="product-detail__price">${product.price.toFixed(2)}</p>
          <p className="product-detail__description">{product.description}</p>

          <div className="product-detail__quantity">
            <label>Cantidad:</label>
            <div className="quantity-controls">
              <button onClick={decreaseQuantity} className="quantity-btn">
                –
              </button>
              <input type="text" readOnly value={quantity} />
              <button onClick={increaseQuantity} className="quantity-btn">
                +
              </button>
            </div>
          </div>

          <div className="product-detail__actions">
            <button onClick={handleAddToCart} className="btn-primary">
              Agregar al Carrito
            </button>
            <Link to="/products" className="btn-secondary">
              Volver al Catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
