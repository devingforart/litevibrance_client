// src/components/ProductDetail/ProductDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.scss';
import { useTranslation } from 'react-i18next';
import { Product, dummyProducts } from '../../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    // Buscamos el producto en el array hardcodeado
    const foundProduct = dummyProducts.find((p) => p.uuid === id);
    setProduct(foundProduct || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="product-detail container">{t('loading')}</div>;
  }

  if (!product) {
    return (
      <div className="product-detail container">
        <h2>{t('product_not_found')}</h2>
        <Link to="/products" className="btn-secondary">
          {t('back_to_catalog')}
        </Link>
      </div>
    );
  }

  const photoArray =
    product.photos && product.photos.length > 0 ? product.photos : [];
  const mainImage =
    photoArray.length > 0
      ? photoArray[selectedPhoto]
      : 'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <div className="product-detail container">
      <div className="product-detail__content">
        <div className="product-detail__image-section">
          <div className="product-detail__main-image">
            <img src={mainImage} alt={`${product.name} ${selectedPhoto + 1}`} />
          </div>
          {photoArray.length > 1 && (
            <div className="product-detail__thumbnails">
              {photoArray.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`${product.name} ${index + 1}`}
                  className={selectedPhoto === index ? 'active' : ''}
                  onClick={() => setSelectedPhoto(index)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="product-detail__info">
          <h2 className="product-detail__title">{product.name}</h2>
     {/*      <p className="product-detail__price">
            ${product.price.toFixed(2)}
          </p> */}
          <p className="product-detail__description">{product.description}</p>
          <div className="product-detail__actions">
            <Link to="/products" className="btn-secondary">
              {t('back_to_catalog')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
