'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv, MotionSection } from '@/components/MotionWrapper';

export default function Projects() {
  const projects = [
    {
      title: 'Payment System',
      description: 'A high-performance payment processing system built with Golang and microservices architecture.',
      technologies: ['Golang', 'Microservices', 'PostgreSQL', 'Docker'],
      image: 'https://placehold.co/600x400/2563eb/ffffff?text=Payment+System',
      link: '/projects/payment-system',
      slug: 'payment-system',
    },
    {
      title: 'Blockchain Indexer',
      description: 'A scalable blockchain indexer for real-time data retrieval and analysis.',
      technologies: ['Golang', 'Blockchain', 'GraphQL', 'Redis'],
      image: 'https://placehold.co/600x400/2563eb/ffffff?text=Blockchain',
      link: '/projects/blockchain-indexer',
      slug: 'blockchain-indexer',
    },
    {
      title: 'ERP System',
      description: 'An enterprise resource planning system with integrated finance, HR, and inventory modules.',
      technologies: ['Golang', 'RESTful APIs', 'MongoDB', 'Kubernetes'],
      image: 'https://placehold.co/600x400/2563eb/ffffff?text=ERP',
      link: '/projects/erp-system',
      slug: 'erp-system',
    },
    {
      title: 'E-commerce Platform',
      description: 'A robust e-commerce platform with real-time inventory management and payment processing.',
      technologies: ['Golang', 'Microservices', 'PostgreSQL', 'AWS'],
      image: 'https://placehold.co/600x400/2563eb/ffffff?text=E-commerce',
      link: '/projects/ecommerce-platform',
      slug: 'ecommerce-platform',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors duration-200">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl leading-tight">
            My <span className="text-indigo-600 dark:text-indigo-400">Featured Projects</span>
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-gray-600 dark:text-gray-400 mx-auto">
            A showcase of my recent work and achievements, highlighting key technologies and solutions.
          </p>
        </MotionDiv>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <MotionDiv
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-base line-clamp-3">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="mt-6 inline-block text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold transition-colors duration-200"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 