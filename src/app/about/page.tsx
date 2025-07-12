'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-indigo-600">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about my journey, experience, and passion for backend development
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/photo.jpg"
                alt="Tesfay Hagos"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm Tesfay Hagos, a passionate Senior Backend Developer with over 5 years of experience 
              building scalable, high-performance applications. My journey in software development began with 
              a fascination for how complex systems work behind the scenes.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Specializing in Golang, I've had the privilege of working with international companies across 
              three continents, delivering enterprise-grade solutions that handle millions of transactions 
              and serve thousands of users daily.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              What drives me is the challenge of solving complex problems and the satisfaction of building 
              systems that just work. Whether it's designing microservices architectures, optimizing database 
              performance, or implementing blockchain solutions, I approach every project with dedication and precision.
            </p>
          </motion.div>
        </div>

        {/* Skills & Expertise */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend Development</h3>
              <p className="text-gray-600">Golang, microservices, RESTful APIs, and high-performance systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⛓️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Technology</h3>
              <p className="text-gray-600">Smart contracts, dApps, blockchain indexers, and Web3 integration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600">AWS, Docker, Kubernetes, CI/CD pipelines, and infrastructure automation</p>
            </div>
          </div>
        </motion.div>

        {/* Career Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Career Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-indigo-100">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-indigo-100">Projects Completed</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-indigo-100">Continents Served</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10M+</div>
              <div className="text-indigo-100">Transactions Processed</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to bring your next project to life? I'm always excited to take on new challenges 
            and help businesses scale with robust backend solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
