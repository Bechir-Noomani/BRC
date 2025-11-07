import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, Package, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ProductPage = () => {
  const { productId } = useParams();
  const { getProductById } = useApp();
  
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 flex items-center justify-center">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-30">
      <div className="bg-white py-10 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <Link 
              to={product.subcategoryId ? `/category/${product.categoryId}/subcategory/${product.subcategoryId}` : `/category/${product.categoryId}`}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors font-semibold"
            >
              <ArrowLeft className="w-6 h-6" />
              <span className="text-lg">Retour à {product.subcategoryName || product.categoryName}</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl overflow-hidden border-4 border-red-600"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10">
              {/* Product Image */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="aspect-square overflow-hidden rounded-3xl bg-white shadow-2xl border-4 border-white/20"
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
                className="flex flex-col justify-center space-y-8"
              >
                <div>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-2 text-sm text-white/80 font-medium mb-8">
                    <Package className="w-5 h-5" />
                    Catégorie: {product.category}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-8 bg-red-600 rounded-full"></span>
                    Description
                  </h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-5">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-red-600 text-white py-5 px-8 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-2xl hover:shadow-red-600/50"
                  >
                    Demander un Devis
                  </motion.button>
                  
                  <div className="grid grid-cols-2 gap-5">
                    <motion.a
                      href="tel:+216XXXXXXX"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white py-4 px-6 rounded-2xl hover:bg-white/20 transition-all border-2 border-white/20 font-semibold"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Appeler</span>
                    </motion.a>
                    <motion.a
                      href="mailto:contact@brocaramilou.tn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white py-4 px-6 rounded-2xl hover:bg-white/20 transition-all border-2 border-white/20 font-semibold"
                    >
                      <Mail className="w-5 h-5" />
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
