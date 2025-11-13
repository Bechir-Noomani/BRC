import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, Package, Sparkles, ShoppingBag } from 'lucide-react';
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
          <Link to="/categories" className="text-red-600 hover:text-red-700 transition-colors">
            Retour aux catégories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-30">
      {/* Header with Back Button */}
      <div className="py-10">
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
              <span className="text-lg">Retour </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl overflow-hidden relative"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-600/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-500/5 blur-[120px] rounded-full" />
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12">
              {/* Product Image */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-red-600 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-3xl" />
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-white/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Brand Badge - Only show if brand exists */}
                {product.brand && (
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-3 -right-3 bg-white rounded-full shadow-lg p-2"
                  >
                    <img 
                      src={product.brand} 
                      alt="Brand" 
                      className="w-12 h-12 object-contain"
                    />
                  </motion.div>
                )}
              </motion.div>

              {/* Product Details */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col justify-center space-y-6 lg:space-y-8"
              >
             

                {/* Title */}
                <div className="space-y-3">
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight"
                  >
                    {product.name}
                  </motion.h1>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-500 rounded-full origin-left"
                  />
                </div>

                {/* Description Card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 ring-1 ring-white/10 hover:ring-white/20 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-red-600 rounded-full" />
                    <h3 className="text-xl font-bold text-white">Description</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed text-base lg:text-lg">
                    {product.description}
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-4"
                >
                  {/* Primary CTA */}
                  <button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-6 rounded-2xl shadow-lg hover:shadow-red-600/50 transition-all duration-300 group inline-flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Demander un Devis
                  </button>
                  
                  {/* Secondary CTAs */}
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="tel:+216XXXXXXX"
                      className="bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-red-500/50 text-white font-semibold rounded-xl transition-all backdrop-blur-sm py-4 px-6 inline-flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Appeler</span>
                    </a>
                    <a
                      href="mailto:contact@brocaramilou.tn"
                      className="bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-red-500/50 text-white font-semibold rounded-xl transition-all backdrop-blur-sm py-4 px-6 inline-flex items-center justify-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </a>
                  </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap gap-4 pt-4 border-t border-white/10"
                >
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                    <span>Réponse rapide</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                    <span>Service personnalisé</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                    <span>Livraison disponible</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;