import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      setMenuOpen(false);
      setMobileSearchOpen(false);
      setSearchFocused(false);
    }
  }, [searchQuery]);

  const navItems = useMemo(() => [
    { name: 'Catégories', href: '/categories' },
    { name: 'Contact', href: '/contact' }
  ], []);

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-md shadow-md" role="banner">
        <div className="border-b border-gray-700/50" />

        <nav className="relative" role="navigation" aria-label="Navigation principale">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a 
                href="/" 
                className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg transition-all"
                aria-label="Brocaramilou - Retour à l'accueil"
              >
                <img 
                  src="/logo/logo.png?v=2" 
                  alt="Logo Brocaramilou" 
                  className="w-14 h-14 object-contain"
                  loading="eager"
                />
                <div className="hidden sm:block">
                  <div className="text-white font-bold text-2xl tracking-tight">Brocaramilou</div>
                  <div className="text-gray-300 text-sm font-medium">Fournitures de pâtisserie et restauration</div>
                </div>
              </a>

              {/* Navigation Items */}
              <div className="hidden lg:flex items-center gap-8" role="menubar">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-200 hover:text-red-500 transition-colors font-semibold text-base focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-2 py-1"
                    role="menuitem"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Desktop Search - Expandable */}
              <div className="hidden lg:flex items-center" ref={searchRef}>
                <motion.form
                  onSubmit={handleSearch}
                  animate={{ width: searchFocused ? 400 : 250 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative"
                  role="search"
                  aria-label="Recherche de produits"
                >
                  <label htmlFor="desktop-search" className="sr-only">
                    Rechercher des produits
                  </label>
                  <input
                    id="desktop-search"
                    type="search"
                    placeholder="Rechercher des produits..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    className="w-full pl-4 pr-10 py-2.5 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none text-sm transition-all"
                    aria-autocomplete="list"
                    aria-controls="search-results"
                    aria-expanded={searchFocused && searchResults.length > 0}
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-300 hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
                    aria-label="Lancer la recherche"
                  >
                    <Search className="w-4 h-4" />
                  </button>

                  {/* Search Results Dropdown */}
                  <AnimatePresence>
                    {searchFocused && searchResults.length > 0 && (
                      <motion.div
                        id="search-results"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 left-0 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50"
                        role="listbox"
                        aria-label="Résultats de recherche"
                      >
                        <div className="max-h-96 overflow-y-auto">
                          {searchResults.map((product) => (
                            <a
                              key={product.id}
                              href={`/product/${product.id}`}
                              className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 focus:outline-none focus:bg-gray-50"
                              onClick={() => {
                                setSearchFocused(false);
                                setSearchQuery('');
                              }}
                              role="option"
                            >
                              <img
                                src={product.image}
                                alt=""
                                className="w-12 h-12 object-cover rounded-md"
                                loading="lazy"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm text-gray-900 truncate">
                                  {product.name}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                  {product.brand} • {product.categoryName}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              </div>

              {/* Mobile Search & Menu Buttons */}
              <div className="lg:hidden flex items-center gap-2">
                <button
                  onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                  className="relative z-50 p-2 text-gray-200 hover:bg-gray-700 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-red-600"
                  aria-label={mobileSearchOpen ? "Fermer la recherche" : "Ouvrir la recherche"}
                  aria-expanded={mobileSearchOpen}
                  aria-controls="mobile-search"
                >
                  <Search className="w-6 h-6" aria-hidden="true" />
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="relative z-50 p-2 text-gray-200 hover:bg-gray-700 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-red-600"
                  aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                >
                  {menuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
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
              aria-hidden="true"
            />
            <motion.div
              id="mobile-search"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-lg lg:hidden overflow-hidden"
              role="search"
              aria-label="Recherche mobile"
            >
            <div className="p-4">
              <form onSubmit={handleSearch} className="relative">
                <label htmlFor="mobile-search-input" className="sr-only">
                  Rechercher des produits
                </label>
                <input
                  id="mobile-search-input"
                  type="search"
                  placeholder="Rechercher des produits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none text-sm"
                  autoFocus
                  aria-autocomplete="list"
                  aria-controls="mobile-search-results"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-700"
                  aria-label="Lancer la recherche"
                >
                  <Search className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>

              {/* Mobile Search Results */}
              {searchResults.length > 0 && (
                <div 
                  id="mobile-search-results"
                  className="mt-3 bg-gray-800 rounded-lg border border-gray-700 max-h-80 overflow-y-auto"
                  role="listbox"
                  aria-label="Résultats de recherche mobile"
                >
                  {searchResults.map((product) => (
                    <a
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="flex items-center gap-3 p-3 hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        setMobileSearchOpen(false);
                        setSearchQuery('');
                      }}
                      role="option"
                    >
                      <img
                        src={product.image}
                        alt=""
                        className="w-12 h-12 object-cover rounded-md"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-white truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {product.brand}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-500" aria-hidden="true" />
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
              aria-hidden="true"
            />

            <motion.aside
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-lg shadow-2xl z-50 lg:hidden overflow-y-auto"
              role="dialog"
              aria-label="Menu de navigation mobile"
              aria-modal="true"
            >
              <div className="pt-20 pb-8 px-6">
                <motion.nav
                  variants={navList}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-2"
                  role="menu"
                  aria-label="Navigation mobile"
                >
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      variants={navItem}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between px-4 py-4 text-gray-200 hover:text-red-500 hover:bg-gray-800 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                      role="menuitem"
                    >
                      <span className="font-medium text-lg">{item.name}</span>
                      <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden="true" />
                    </motion.a>
                  ))}
                </motion.nav>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-gray-700"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                      <img 
                        src="/logo/logo.png?v=2" 
                        alt="Logo Brocaramilou" 
                        className="w-16 h-16 object-contain mix-blend-multiply"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-bold text-white text-lg">Brocaramilou</h3>
                    <p className="text-gray-400 text-sm mt-1">Fournitures professionnelles</p>
                    
                    <address className="mt-6 space-y-2 text-sm text-gray-300 not-italic">
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" aria-hidden="true" />
                        <a href="tel:+216XXXXXXXX" className="hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-1">
                          +216 XX XXX XXX
                        </a>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        <a href="mailto:contact@brocaramilou.tn" className="hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-1">
                          contact@brocaramilou.tn
                        </a>
                      </div>
                    </address>
                  </div>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;