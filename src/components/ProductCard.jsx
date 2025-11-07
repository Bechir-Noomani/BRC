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
    >
      <Link to={`/product/${product.id}`}>
        <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full border-2 border-gray-800 hover:border-red-600">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* Floating badge - Only show if brand exists */}
            {product.brand && (
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-red-600 text-white rounded-full text-xs font-bold shadow-lg">
                {product.brand}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
            
            <div className="flex items-center justify-between pt-4 border-t-2 border-gray-200">
              <span className="text-sm font-semibold text-gray-600 flex items-center gap-2">
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
