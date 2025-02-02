// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imageUrl = product.photos && product.photos.length > 0
    ? product.photos[0]
    : 'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={imageUrl}
          alt={product.name}
          className="product-card__img"
          loading="lazy"
        />
      </div>
      <div className="product-card__info">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
        {/* Usamos product.uuid en lugar de product.id */}
        <Link
          to={`/products/${product.uuid}/${product.slug}`}
          className="btn-primary product-card__button"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
