import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import './ProductListItem.scss';
import { useTranslation } from 'react-i18next';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const imageUrl =
    product.photos && product.photos.length > 0
      ? product.photos[0]
      : 'https://via.placeholder.com/100?text=No+Image';
  const { t } = useTranslation();

  return (
    <div className="product-list-item">
      <img src={imageUrl} alt={product.name} />
      <div className="product-list-item__details">
        <h3>{product.name}</h3>
        <Link to={`/products/${product.uuid}/${product.slug}`} className="btn-primary">
          {t('view_detail')}
        </Link>
      </div>
    </div>
  );
};

export default ProductListItem;
