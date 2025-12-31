import React from 'react';
import { Headphones, Watch, ShoppingBag, Footprints, ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  onCategorySelect: (category: string) => void;
}

const categories = [
  {
    name: 'Electronics',
    icon: Headphones,
    description: 'Latest gadgets & tech',
    count: 6,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Fashion',
    icon: ShoppingBag,
    description: 'Trendy bags & accessories',
    count: 3,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
  },
  {
    name: 'Footwear',
    icon: Footprints,
    description: 'Stylish shoes & sneakers',
    count: 3,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
  },
];

const CategorySection: React.FC<CategorySectionProps> = ({ onCategorySelect }) => {
  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Browse by</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Shop by Category</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our diverse range of categories and find exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => onCategorySelect(category.name)}
                className="group relative overflow-hidden rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-xl bg-white border border-gray-100"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors`}>
                    <Icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 group-hover:text-white/80 transition-colors mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 group-hover:text-white/70 transition-colors">
                      {category.count} Products
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors transform group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Banner */}
        <div className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                New Year Special Offer
              </h3>
              <p className="text-white/80 text-lg">
                Get up to 50% off on selected items. Limited time only!
              </p>
            </div>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Shop the Sale
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
