'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white py-4 px-6 sticky top-0 z-50 shadow-xl backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
        >
          Tesfay Hagos
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link 
            href="/" 
            className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-white/20 hover:border-white"
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-white/20 hover:border-white"
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-110 hover:shadow-xl shadow-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
