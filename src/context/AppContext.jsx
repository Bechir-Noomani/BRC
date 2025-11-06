import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { categories, getCategoryById, getSubcategoryById, getProductById, getAllProducts, getProductsByCategory, getProductsBySubcategory } from '../data/products';

const AppContext = createContext();

function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

function AppProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Get filtered products based on search query - memoized
  const getFilteredProducts = useCallback(() => {
    if (!searchQuery.trim()) {
      return getAllProducts();
    }
    
    return getAllProducts().filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.subcategoryName && product.subcategoryName.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    // Data
    categories,
    
    // State
    selectedCategory,
    setSelectedCategory,
    selectedSubcategory,
    setSelectedSubcategory,
    selectedProduct,
    setSelectedProduct,
    searchQuery,
    setSearchQuery,
    
    // Helper functions
    getCategoryById,
    getSubcategoryById,
    getProductById,
    getAllProducts,
    getFilteredProducts,
    getProductsByCategory,
    getProductsBySubcategory,
  }), [
    selectedCategory,
    selectedSubcategory,
    selectedProduct,
    searchQuery,
    getFilteredProducts
  ]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export { useApp, AppProvider };
