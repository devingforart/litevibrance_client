// src/components/ProductDetail/ProductDetail.tsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.scss';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

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

  // Convertir product.photos en un array (o, en su defecto, usar product.image)
  const photoArray =
    product.photos && product.photos.length > 0
      ? product.photos
      : [];

  const mainImage =
    photoArray.length > 0
      ? photoArray[selectedPhoto]
      : 'https://via.placeholder.com/600x400?text=No+Image';

  const handleAddToCart = () => {
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
        <div className="product-detail__gallery">
          <div className="product-detail__main-image">
            <img src={mainImage} alt={`${product.name} ${selectedPhoto + 1}`} />
          </div>
          <div className="product-detail__thumbnails">
            {photoArray.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${product.name} ${index + 1}`}
                className={`thumbnail ${selectedPhoto === index ? 'active' : ''}`}
                onClick={() => setSelectedPhoto(index)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail__info">
          <h2 className="product-detail__title">{product.name}</h2>
          <p className="product-detail__price">${product.price.toFixed(2)}</p>
          <p className="product-detail__description">{product.description}</p>

          <div className="product-detail__quantity">
            <label>Cantidad:</label>
            <div className="quantity-controls">
              <button onClick={decreaseQuantity} className="quantity-btn">–</button>
              <input type="text" readOnly value={quantity} />
              <button onClick={increaseQuantity} className="quantity-btn">+</button>
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
