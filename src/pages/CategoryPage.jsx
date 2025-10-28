import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Grid3x3, List, ChevronRight, ChevronDown, Package, Filter, SortAsc } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { useApp } from '../context/AppContext';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const { getCategoryById, getProductsByCategory } = useApp();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('default');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  
  const category = getCategoryById(categoryId);

  // Calculate stats
  const stats = useMemo(() => {
    if (!category) return { total: 0, subcategories: 0 };
    
    if (category.hasSubcategories) {
      const total = category.subcategories.reduce((sum, sub) => sum + sub.products.length, 0);
      return { total, subcategories: category.subcategories.length };
    }
    return { total: category.products.length, subcategories: 0 };
  }, [category]);

  // Filter and sort products
  const displayItems = useMemo(() => {
    if (!category) return [];
    
    let items = category.hasSubcategories ? category.subcategories : category.products;
    
    // Filter by subcategory if selected
    if (category.hasSubcategories && selectedSubcategory !== 'all') {
      items = items.filter(sub => sub.id === selectedSubcategory);
    }
    
    return items;
  }, [category, selectedSubcategory]);

  if (!category) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Catégorie non trouvée</h1>
          <Link to="/categories" className="text-red-600 hover:text-red-700">
            Retour aux catégories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-20">
      {/* Hero Section with Category Image */}
      <div className="relative h-72 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2 text-white/90 text-sm mb-6"
          >
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/categories" className="hover:text-white transition-colors">Catégories</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{category.name}</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Découvrez notre sélection complète de produits de qualité professionnelle
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-white border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
                  <div className="text-sm text-gray-500">Produits disponibles</div>
                </div>
              </div>
              
              {category.hasSubcategories && (
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Grid3x3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stats.subcategories}</div>
                    <div className="text-sm text-gray-500">Sous-catégories</div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/categories"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Retour</span>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Mobile Sticky Filter Dropdown - Only show for categories with subcategories */}
      {category.hasSubcategories && (
        <div className="lg:hidden sticky top-20 z-30 bg-white border-b border-gray-200 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-red-600" />
                <span className="font-semibold text-gray-900">
                  {selectedSubcategory === 'all' 
                    ? 'Toutes les sous-catégories' 
                    : category.subcategories.find(s => s.id === selectedSubcategory)?.name}
                </span>
              </div>
              <motion.div
                animate={{ rotate: mobileFilterOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </motion.div>
            </button>

            <AnimatePresence>
              {mobileFilterOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 space-y-2 max-h-80 overflow-y-auto">
                    <button
                      onClick={() => {
                        setSelectedSubcategory('all');
                        setMobileFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                        selectedSubcategory === 'all'
                          ? 'bg-red-600 text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Toutes</span>
                        <span className={`text-sm ${
                          selectedSubcategory === 'all' ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {stats.total}
                        </span>
                      </div>
                    </button>
                    
                    {category.subcategories.map((subcategory) => (
                      <button
                        key={subcategory.id}
                        onClick={() => {
                          setSelectedSubcategory(subcategory.id);
                          setMobileFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                          selectedSubcategory === subcategory.id
                            ? 'bg-red-600 text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{subcategory.name}</span>
                          <span className={`text-sm ${
                            selectedSubcategory === subcategory.id ? 'text-white/80' : 'text-gray-500'
                          }`}>
                            {subcategory.products.length}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar - Only show for categories with subcategories */}
          {category.hasSubcategories && (
            <motion.aside
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden lg:block lg:w-72 flex-shrink-0"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-red-600" />
                  <h3 className="text-lg font-bold text-gray-900">Sous-catégories</h3>
                </div>
                
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedSubcategory('all')}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      selectedSubcategory === 'all'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Toutes</span>
                      <span className={`text-sm ${
                        selectedSubcategory === 'all' ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {stats.total}
                      </span>
                    </div>
                  </button>
                  
                  {category.subcategories.map((subcategory) => (
                    <button
                      key={subcategory.id}
                      onClick={() => setSelectedSubcategory(subcategory.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                        selectedSubcategory === subcategory.id
                          ? 'bg-red-600 text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{subcategory.name}</span>
                        <span className={`text-sm ${
                          selectedSubcategory === subcategory.id ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {subcategory.products.length}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.aside>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={categoryId + selectedSubcategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {category.hasSubcategories ? (
                  // Show subcategories as enhanced cards
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayItems.map((subcategory, idx) => (
                      <motion.div
                        key={subcategory.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="group"
                      >
                        <Link to={`/category/${categoryId}/subcategory/${subcategory.id}`}>
                          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full">
                            {/* Image Section */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  transition={{ duration: 0.3 }}
                                  className="text-center"
                                >
                                  <div className="text-6xl mb-3 filter drop-shadow-lg">📦</div>
                                  <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                                    <span className="text-sm font-bold text-red-600">
                                      {subcategory.products.length} Produits
                                    </span>
                                  </div>
                                </motion.div>
                              </div>
                              
                              {/* Decorative Elements */}
                              <div className="absolute top-4 right-4 w-20 h-20 bg-red-200/30 rounded-full blur-2xl" />
                              <div className="absolute bottom-4 left-4 w-24 h-24 bg-orange-200/30 rounded-full blur-2xl" />
                            </div>
                            
                            {/* Content Section */}
                            <div className="p-6">
                              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                                {subcategory.name}
                              </h3>
                              <p className="text-gray-500 text-sm mb-4">
                                Explorez {subcategory.products.length} produits de qualité
                              </p>
                              
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-400">Voir la collection</span>
                                <ChevronRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  // Show products directly for flat categories
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((product, idx) => (
                      <ProductCard key={product.id} product={product} index={idx} />
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
