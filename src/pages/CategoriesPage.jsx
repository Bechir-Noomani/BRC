import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Package, Grid3x3, Sparkles } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import { useApp } from '../context/AppContext';

const CategoriesPage = () => {
  const { categories } = useApp();

  // Calculate total products across all categories
  const totalProducts = useMemo(() => {
    return categories.reduce((total, category) => {
      if (category.hasSubcategories) {
        return total + category.subcategories.reduce((sum, sub) => sum + sub.products.length, 0);
      }
      return total + (category.products?.length || 0);
    }, 0);
  }, [categories]);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Clean Header Section */}
      <div className="relative bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-gray-500 text-sm mb-8"
          >
            <Link to="/" className="hover:text-red-600 transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Catégories</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Nos Catégories
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Découvrez notre gamme complète de produits professionnels pour la pâtisserie, la restauration et le café
              </p>
              
              {/* Stats - Horizontal */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center">
                    <Grid3x3 className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{categories.length}</div>
                    <div className="text-sm text-gray-500">Catégories</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Package className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{totalProducts}+</div>
                    <div className="text-sm text-gray-500">Produits</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Decorative Element */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {categories.slice(0, 4).map((cat, idx) => (
                      <div key={cat.id} className="aspect-square rounded-xl overflow-hidden">
                        <img 
                          src={cat.image} 
                          alt={cat.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explorez nos catégories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sélectionnez une catégorie pour découvrir nos produits de qualité professionnelle
          </p>
        </motion.div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <Link to={`/category/${category.id}`}>
                <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-red-600 rounded-full text-xs font-semibold">
                        {category.hasSubcategories 
                          ? `${category.subcategories.length} Sous-catégories`
                          : `${category.products.length} Produits`
                        }
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                      {category.name}
                    </h3>
                    
                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explorer</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-red-500 transition-all duration-300 rounded-2xl" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Besoin d'aide pour choisir ?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour vous conseiller et vous accompagner dans vos choix
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg"
            >
              <span>Contactez-nous</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
