import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-sm"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <motion.img
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="text-xs text-red-600 font-bold mb-2 uppercase tracking-wide">{product.brand}</div>
        <h4 className="text-gray-900 font-bold mb-1 line-clamp-2 text-base">
          {product.name}
        </h4>
        {product.subcategoryName && (
          <p className="text-xs text-gray-400 mb-1">{product.subcategoryName}</p>
        )}
        <p className="text-sm text-gray-500 mb-4">{product.categoryName}</p>
        <Link to={`/product/${product.id}`}>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            Voir Détails
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
