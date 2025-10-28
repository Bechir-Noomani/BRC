import React from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import HorizontalScroll from '../components/HorizontalScroll.jsx';
import CategoryCard from '../components/CategoryCard';
import FoldingCategoryCards from '../components/FoldingCategoryCards';
import StatsShowcase from '../components/StatsShowcase';
import { useApp } from '../context/AppContext';

const HomePage = () => {
  const { categories } = useApp();

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Categories - Folding Cards Effect */}
      <FoldingCategoryCards categories={categories} />

      {/* Stats Showcase with Animated Counters */}
      <StatsShowcase />

      {/* Horizontal Scrolling Brands - Bottom */}
      <HorizontalScroll />
    </div>
  );
};

export default HomePage;