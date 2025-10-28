import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronRight, Phone, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const { categories } = useApp();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Search products
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const allProducts = [];
      categories.forEach(category => {
        if (category.hasSubcategories) {
          category.subcategories.forEach(sub => {
            sub.products.forEach(product => {
              allProducts.push({
                ...product,
                categoryName: category.name,
                subcategoryName: sub.name
              });
            });
          });
        } else {
          category.products?.forEach(product => {
            allProducts.push({
              ...product,
              categoryName: category.name
            });
          });
        }
      });

      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6);

      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, categories]);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      setMenuOpen(false);
      setMobileSearchOpen(false);
      setSearchFocused(false);
    }
  };

  const navItems = [
    { name: 'Catégories', href: '/categories' },
    { name: 'Contact', href: '/contact' }
  ];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.08
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, delay: 0.2 }
    }
  };

  const menuVariants = {
    hidden: { 
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    visible: { 
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="border-b border-gray-200/50" />

        <nav className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="/" className="flex items-center gap-3 group">
                <img 
                  src="/logo/logo.png?v=2" 
                  alt="BRC Logo" 
                  className="w-14 h-14 object-contain"
                />
                <div className="hidden sm:block">
                  <div className="text-gray-900 font-bold text-2xl tracking-tight">Brocaramilou</div>
                  <div className="text-gray-600 text-sm font-medium">Fournitures de pâtisserie et restauration</div>
                </div>
              </a>

              {/* Navigation Items */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-base"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Desktop Search - Expandable */}
              <div className="hidden lg:flex items-center" ref={searchRef}>
                <motion.div
                  animate={{ width: searchFocused ? 400 : 250 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder="Rechercher des produits..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch(e);
                      }
                    }}
                    className="w-full pl-4 pr-10 py-2.5 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none text-sm transition-all"
                  />
                  <button 
                    onClick={handleSearch}
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <Search className="w-4 h-4" />
                  </button>

                  {/* Search Results Dropdown */}
                  <AnimatePresence>
                    {searchFocused && searchResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 left-0 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50"
                      >
                        <div className="max-h-96 overflow-y-auto">
                          {searchResults.map((product) => (
                            <a
                              key={product.id}
                              href={`/product/${product.id}`}
                              className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                              onClick={() => {
                                setSearchFocused(false);
                                setSearchQuery('');
                              }}
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-12 h-12 object-cover rounded-md"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm text-gray-900 truncate">
                                  {product.name}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                  {product.brand} • {product.categoryName}
                                </p>
                              </div>
                              <span className="text-sm font-bold text-red-600">
                                {product.price}
                              </span>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Mobile Search & Menu Buttons */}
              <div className="lg:hidden flex items-center gap-2">
                <button
                  onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                  className="relative z-50 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <Search className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="relative z-50 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                >
                  {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Search Expandable Bar */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <>
            <div
              onClick={() => setMobileSearchOpen(false)}
              className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            />
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-20 left-0 right-0 z-40 bg-white shadow-lg lg:hidden overflow-hidden"
            >
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher des produits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch(e);
                    }
                  }}
                  className="w-full pl-4 pr-10 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none text-sm"
                  autoFocus
                />
                <button 
                  onClick={handleSearch}
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Search Results */}
              {searchResults.length > 0 && (
                <div className="mt-3 bg-white rounded-lg border border-gray-200 max-h-80 overflow-y-auto">
                  {searchResults.map((product) => (
                    <a
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setMobileSearchOpen(false);
                        setSearchQuery('');
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-gray-900 truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {product.brand}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-red-600">
                        {product.price}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <>
            <div
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white/95 backdrop-blur-lg shadow-2xl z-40 lg:hidden overflow-y-auto"
            >
              <div className="pt-20 pb-8 px-6">
                <motion.nav
                  variants={navList}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-2"
                >
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      variants={navItem}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between px-4 py-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      <span className="font-medium text-lg">{item.name}</span>
                      <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </motion.a>
                  ))}
                </motion.nav>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-gray-200"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                      <img 
                        src="/logo/logo.png?v=2" 
                        alt="BRC Logo" 
                        className="w-16 h-16 object-contain mix-blend-multiply"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Brocaramilou</h3>
                    <p className="text-gray-500 text-sm mt-1">Fournitures professionnelles</p>
                    
                    <div className="mt-6 space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+216 XX XXX XXX</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>contact@brocaramilou.tn</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;