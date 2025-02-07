// src/components/ProductList/ProductList.tsx
import React, { useState } from 'react';
import './ProductList.scss';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import ProductListItem from '../ProductListItem/ProductListItem';
import ViewSwitcher, { ViewMode } from '../ViewSwitcher/ViewSwitcher';
import { dummyProducts } from '../../data/products';
import { useTranslation } from 'react-i18next';

const ProductSkeleton = () => (
  <div className="product-card skeleton">
    <div className="product-card__image-wrapper skeleton-img"></div>
    <div className="product-card__info">
      <div className="skeleton-text skeleton-title"></div>
      <div className="skeleton-text skeleton-price"></div>
    </div>
  </div>
);

const ProductList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [viewMode, setViewMode] = useState<ViewMode>('detailed');
  const { t } = useTranslation();

  const normalizeString = (str: string) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  // Filtramos los productos según la búsqueda usando dummyProducts
  const filteredProducts = dummyProducts.filter((product) =>
    normalizeString(product.name).includes(normalizeString(searchQuery))
  );

  return (
    <div className="product-list container">
      <div className="product-list__header">
        <h2>{t('products_catalog')}</h2>
        <ViewSwitcher viewMode={viewMode} setViewMode={setViewMode} isDarkMode={false} />
      </div>
      {searchQuery && filteredProducts.length === 0 ? (
        <p>
          {t('no_products_found')} "{searchQuery}"
        </p>
      ) : (
        <>
          {/* Si en algún momento necesitas mostrar un skeleton de carga, puedes habilitar la variable loading */}
          {false ? (
            <div className="product-list__grid">
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <ProductSkeleton key={index} />
                ))}
            </div>
          ) : (
            <>
              {viewMode === 'grid' && (
                <div className="product-list__grid">
                  {(searchQuery ? filteredProducts : dummyProducts).map((product) => (
                    <ProductCard key={product.uuid} product={product} />
                  ))}
                </div>
              )}
              {viewMode === 'list' && (
                <div className="product-list__list">
                  {(searchQuery ? filteredProducts : dummyProducts).map((product) => (
                    <ProductListItem key={product.uuid} product={product} />
                  ))}
                </div>
              )}
              {viewMode === 'detailed' && (
                <div className="product-list__detailed">
                  {(searchQuery ? filteredProducts : dummyProducts).map((product) => (
                    <div key={product.uuid} className="product-detail">
                      <div className="image-wrapper">
                        <img
                          src={
                            product.photos && product.photos.length > 0
                              ? product.photos[0]
                              : 'https://via.placeholder.com/600x400?text=No+Image'
                          }
                          alt={product.name}
                        />
                      </div>
                      <div className="info">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <Link
                          to={`/products/${product.uuid}/${product.slug}`}
                          className="btn-primary"
                        >
                          {t('view_detail')}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
