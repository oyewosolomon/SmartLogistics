import React, { useState } from 'react';
import { Menu, X, Package } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed max-w-7xl mx-auto inset-x-0 top-3 w-full bg-white/50 backdrop-blur-md z-50 rounded-t-3xl">
      {/* Inner Container */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href='/' className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">SmartLogistics</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link
             to="solutions"
             smooth={true}
             duration={500}
             href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">
              Solutions
            </Link>
            <Link 
             to="pricing"
             smooth={true}
             duration={500}
               href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link 
             to="contact"
             smooth={true}
             duration={500}
              className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Get Started Button (Desktop) */}
          <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">
                Solutions
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;