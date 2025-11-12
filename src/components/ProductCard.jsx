import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Package } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full border-2 border-gray-800 hover:border-red-600 flex flex-col">
          {/* Image Container */}
          <div className="relative w-full h-64 overflow-hidden bg-white flex-shrink-0">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />

            {/* Floating badge - Only show if brand exists */}
            {product.brand && (
              <div className="absolute top-2 right-2 w-18 h-10 flex items-center justify-center">
                {product.brand.startsWith('/') || product.brand.startsWith('http') ? (
                  <img
                    src={product.brand}
                    alt="Brand logo"
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span className="text-xs font-bold text-red-600">{product.brand}</span>
                )}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
              {product.name}
            </h3>

            <div className="flex items-center justify-between pt-4 border-t-2 border-gray-200 mt-auto">
              <span className="text-sm font-semibold text-white flex items-center gap-2">
                <Package className="w-4 h-4" />
                Voir détails
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronRight className="w-5 h-5 text-red-600" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
