// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imageUrl =
    product.photos && product.photos.length > 0
      ? product.photos[0]
      : 'https://via.placeholder.com/600x400?text=No+Image';
  const { t } = useTranslation();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up">
      <div className="relative">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-48 sm:h-64 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          {product.name}
        </h3>
        <Link
          to={`/products/${product.uuid}/${product.slug}`}
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          {t('view_detail', 'Ver detalle')}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;