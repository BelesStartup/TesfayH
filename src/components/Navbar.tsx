'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white sticky top-0 z-50 shadow-xl backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 flex-shrink-0"
          >
            Tesfay Hagos
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="flex items-center space-x-4 max-sm:hidden">
            <Link 
              href="/" 
              className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-white/20 hover:border-white"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-white/20 hover:border-white"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-sm">
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-300 hover:bg-white/10 rounded-md transition-all duration-300"
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-300 hover:bg-white/10 rounded-md transition-all duration-300"
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-base font-bold text-yellow-400 hover:text-yellow-300 hover:bg-white/10 rounded-md transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
