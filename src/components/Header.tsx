import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X, ShoppingCart, Heart, LogOut } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from './AuthModal';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup'>('signin');
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity } = useCart();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    setUserMenuOpen(false);
  };

  const openAuthModal = (mode: 'signin' | 'signup') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm">
          <span className="font-medium">New Year Sale!</span> Use code <span className="font-bold">NEWYEAR26</span> for 25% off
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <ShoppingBag className="w-8 h-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">ShopLux</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Home</Link>
              <a href="#products" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Shop</a>
              <a href="#categories" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Categories</a>
              <a href="#deals" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Deals</a>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Wishlist */}
              <button className="hidden sm:flex p-2 text-gray-600 hover:text-purple-600 transition-colors relative">
                <Heart className="w-6 h-6" />
              </button>

              {/* Cart */}
              <div className="relative">
                <button
                  onClick={() => setCartOpen(!cartOpen)}
                  className="p-2 text-gray-600 hover:text-purple-600 transition-colors relative"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                      {totalItems}
                    </span>
                  )}
                </button>

                {/* Cart Dropdown */}
                {cartOpen && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900">Shopping Cart ({totalItems})</h3>
                    </div>
                    {items.length === 0 ? (
                      <div className="p-8 text-center">
                        <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">Your cart is empty</p>
                      </div>
                    ) : (
                      <>
                        <div className="max-h-80 overflow-y-auto">
                          {items.map((item) => (
                            <div key={item.id} className="p-4 border-b border-gray-50 flex gap-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                                <p className="text-purple-600 font-semibold">${item.price.toFixed(2)}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                  >
                                    -
                                  </button>
                                  <span className="text-sm font-medium">{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className="p-4 bg-gray-50">
                          <div className="flex justify-between mb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                          </div>
                          <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                            Checkout
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                {user ? (
                  <>
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center gap-2 p-2 text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-purple-600" />
                      </div>
                    </button>
                    {userMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                        <div className="p-3 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                        </div>
                        <div className="p-2">
                          <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                            My Orders
                          </button>
                          <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                            Settings
                          </button>
                          <button
                            onClick={handleSignOut}
                            className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                          >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="hidden sm:flex items-center gap-2">
                    <button
                      onClick={() => openAuthModal('signin')}
                      className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => openAuthModal('signup')}
                      className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="px-4 py-4 space-y-2">
              <Link to="/" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Home</Link>
              <a href="#products" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Shop</a>
              <a href="#categories" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Categories</a>
              <a href="#deals" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Deals</a>
              {!user && (
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <button
                    onClick={() => openAuthModal('signin')}
                    className="block w-full py-2 text-center text-purple-600 font-medium border border-purple-600 rounded-lg"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => openAuthModal('signup')}
                    className="block w-full py-2 text-center bg-purple-600 text-white font-medium rounded-lg"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />
    </>
  );
};

export default Header;
