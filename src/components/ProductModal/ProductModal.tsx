// src/components/ProductListItem/ProductListItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import './ProductListItem.scss';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const imageUrl = product.photos && product.photos.length > 0
    ? product.photos[0]
    : 'https://via.placeholder.com/100?text=No+Image';

  return (
    <div className="product-list-item">
      <img src={imageUrl} alt={product.name} />
      <div className="product-list-item__details">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        {/* Agregamos también el slug para cumplir con la ruta */}
        <Link
          to={`/products/${product.uuid}/${product.slug}`}
          className="btn-primary"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default ProductListItem;
