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
      className="bg-gray-800 p-4 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Tesfay Hagos
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200">
            Home
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200">
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
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