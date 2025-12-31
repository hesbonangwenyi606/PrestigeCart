import React, { useState } from 'react';
import { ShoppingBag, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube, Send, CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get the latest updates on new products and upcoming sales</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-r-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                {subscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span className="hidden sm:inline">Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="hidden sm:inline">Subscribe</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold">ShopLux</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your premium destination for quality products. We bring you the best in electronics, fashion, and lifestyle.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-400 hover:text-purple-400 transition-colors">All Products</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-purple-400 transition-colors">Electronics</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-purple-400 transition-colors">Fashion</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-purple-400 transition-colors">Footwear</a></li>
              <li><a href="#deals" className="text-gray-400 hover:text-purple-400 transition-colors">Sale Items</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Affiliates</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Nairobi, Westlands, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <a href="tel:+254743573380" className="text-gray-400 hover:text-purple-400 transition-colors">+254 743 573 380</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <a href="mailto:prestige@cart.com" className="text-gray-400 hover:text-purple-400 transition-colors">prestige@cart.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 ShopLux. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Cookie Policy</a>
            </div>
            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-blue-400">VISA</span>
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-red-400">MC</span>
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-blue-300">AMEX</span>
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-yellow-400">PP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
