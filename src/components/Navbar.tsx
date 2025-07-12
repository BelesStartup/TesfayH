'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MotionDiv, MotionSection } from '@/components/MotionWrapper';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MotionSection 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">TH</span>
          </div>
          <div className="text-gray-900 dark:text-white">
            <div className="text-xl font-bold">Tesfay Hagos</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Backend Developer</div>
          </div>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200">
            Home
          </Link>
          <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200">
            Projects
          </Link>
          <Link href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus:text-indigo-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <MotionDiv 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-2 space-y-1 px-2 pt-2 pb-3"
        >
          <Link href="/" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Home
          </Link>
          <Link href="/projects" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Projects
          </Link>
          <Link href="/contact" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Contact
          </Link>
        </MotionDiv>
      )}
    </MotionSection>
  );
} 