import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ProductPage = () => {
  const { productId } = useParams();
  const { getProductById } = useApp();
  
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
          <Link to="/categories" className="text-red-600 hover:text-red-700">
            Retour aux catégories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link 
              to={product.subcategoryId ? `/category/${product.categoryId}/subcategory/${product.subcategoryId}` : `/category/${product.categoryId}`}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour à {product.subcategoryName || product.categoryName}</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl shadow-xl overflow-hidden"
            style={{ backgroundColor: 'rgb(1 1 1 / 86%)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="aspect-square overflow-hidden rounded-xl bg-gray-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Product Details */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div>
                  <div className="text-sm text-red-600 font-bold uppercase tracking-wide mb-2">
                    {product.brand}
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {product.name}
                  </h1>
                  <div className="text-sm text-gray-300 mb-6">
                    Catégorie: {product.category}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
                  >
                    Demander un Devis
                  </motion.button>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <motion.a
                      href="tel:+216XXXXXXX"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Appeler</span>
                    </motion.a>
                    <motion.a
                      href="mailto:contact@brocaramilou.tn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
