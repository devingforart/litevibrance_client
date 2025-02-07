// src/components/ProductModal/ProductModal.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import './ProductModal.scss';
import { useTranslation } from 'react-i18next';

interface ProductModalProps {
  product: Product;
}

const ProductModal: React.FC<ProductModalProps> = ({ product }) => {
  const { t } = useTranslation();
  const imageUrl =
    product.photos && product.photos.length > 0
      ? product.photos[0]
      : 'https://via.placeholder.com/100?text=No+Image';

  return (
    <div className="product-modal">
      <img src={imageUrl} alt={product.name} />
      <div className="product-modal__details">
        <h3>{product.name}</h3>
        <Link to={`/products/${product.uuid}/${product.slug}`} className="btn-primary">
          {t('view_detail', { defaultValue: 'Ver detalle' })}
        </Link>
      </div>
    </div>
  );
};

export default ProductModal;
