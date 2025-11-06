import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';

function App() {
  // ==========================================
  // GLOBAL BACKGROUND - MODIFY HERE
  // Change this to customize the entire app background
  // Examples:
  // - Solid color: { backgroundColor: '#f5f5f5' }
  // - Gradient: { background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)' }
  // - Image: { backgroundImage: 'url(/bg.jpg)', backgroundSize: 'cover' }
  // ==========================================
  const globalBackground = {
    backgroundColor: 'rgb(255, 247, 240)', // Light cream/beige color
  };

  return (
    <AppProvider>
      <Toaster />
      <Router>
        <ScrollToTop />
        <div className="min-h-screen" style={globalBackground}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/category/:categoryId/subcategory/:subcategoryId" element={<SubcategoryPage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/search" element={<SearchPage />} />
              {/* Catch-all route for 404 pages */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;