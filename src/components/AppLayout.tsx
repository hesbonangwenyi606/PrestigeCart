import React, { useState } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { CartProvider } from '@/contexts/CartContext';
import Header from './Header';
import HeroSection from './HeroSection';
import CategorySection from './CategorySection';
import ProductGrid from './ProductGrid';
import DealsSection from './DealsSection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // Scroll to products section
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <main>
            <HeroSection />
            <CategorySection onCategorySelect={handleCategorySelect} />
            <ProductGrid
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <DealsSection />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default AppLayout;
