import React from 'react';
import { motion } from 'framer-motion';
import CategoryCard from '../components/CategoryCard';
import { useApp } from '../context/AppContext';

const CategoriesPage = () => {
  const { categories } = useApp();

  return (
    <div className="min-h-screen py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Nos Catégories</h1>
          <p className="text-gray-600 text-lg">Explorez notre gamme complète de produits</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {categories.map((category, idx) => (
            <CategoryCard key={category.id} category={category} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
