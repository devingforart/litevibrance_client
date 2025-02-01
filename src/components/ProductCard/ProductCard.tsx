// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Usamos la primera imagen del array 'photos'
  const imageUrl =
    product.photos && product.photos.length > 0
      ? product.photos[0]
      : 'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={imageUrl}
          alt={product.name}
          className="product-card__img"
          loading="lazy"  // Añadido para lazy loading
        />
      </div>
      <div className="product-card__info">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
        <Link to={`/products/${product.id}/${product.slug}`}className="btn-primary product-card__button">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
