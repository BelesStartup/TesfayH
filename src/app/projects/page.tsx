'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv, MotionSection } from '@/components/MotionWrapper';

export default function Projects() {
  const projects = [
    {
      title: 'Payment System',
      description: 'A high-performance payment processing system built with Golang and microservices architecture. Features real-time transaction processing, fraud detection, and multi-currency support.',
      technologies: ['Golang', 'Microservices', 'PostgreSQL', 'Docker', 'Redis', 'Kafka'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      link: '/projects/payment-system',
      slug: 'payment-system',
      metrics: { performance: '99.9% uptime', scale: '10K+ TPS', security: 'PCI DSS Compliant' },
      status: 'Production',
    },
    {
      title: 'Blockchain Indexer',
      description: 'A scalable blockchain indexer for real-time data retrieval and analysis. Processes millions of transactions with sub-second query response times.',
      technologies: ['Golang', 'Blockchain', 'GraphQL', 'Redis', 'Elasticsearch', 'Docker'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center',
      link: '/projects/blockchain-indexer',
      slug: 'blockchain-indexer',
      metrics: { performance: '<100ms queries', scale: '1M+ blocks/day', reliability: '99.99% accuracy' },
      status: 'Production',
    },
    {
      title: 'ERP System',
      description: 'An enterprise resource planning system with integrated finance, HR, and inventory modules. Streamlines business operations for mid-to-large enterprises.',
      technologies: ['Golang', 'RESTful APIs', 'MongoDB', 'Kubernetes', 'React', 'Docker'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
      link: '/projects/erp-system',
      slug: 'erp-system',
      metrics: { users: '500+ active users', modules: '12 integrated modules', efficiency: '40% time savings' },
      status: 'Production',
    },
    {
      title: 'E-commerce Platform',
      description: 'A robust e-commerce platform with real-time inventory management and payment processing. Built to handle high-traffic sales events and seasonal spikes.',
      technologies: ['Golang', 'Microservices', 'PostgreSQL', 'AWS', 'Redis', 'Elasticsearch'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      link: '/projects/ecommerce-platform',
      slug: 'ecommerce-platform',
      metrics: { performance: '2s avg load time', scale: '50K+ concurrent users', conversion: '25% increase' },
      status: 'Production',
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'A comprehensive analytics platform providing real-time insights for business intelligence. Features customizable dashboards and automated reporting.',
      technologies: ['Golang', 'WebSocket', 'InfluxDB', 'Grafana', 'Docker', 'Kubernetes'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
      link: '/projects/analytics-dashboard',
      slug: 'analytics-dashboard',
      metrics: { latency: '<50ms updates', data: '1TB+ processed daily', insights: '95% accuracy' },
      status: 'Production',
    },
    {
      title: 'API Gateway & Microservices',
      description: 'A sophisticated API gateway managing 50+ microservices with advanced routing, rate limiting, and authentication. Built for enterprise-scale applications.',
      technologies: ['Golang', 'Istio', 'Kong', 'JWT', 'OAuth2', 'Prometheus'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center',
      link: '/projects/api-gateway',
      slug: 'api-gateway',
      metrics: { throughput: '100K+ requests/sec', latency: '<5ms response', availability: '99.99% uptime' },
      status: 'Production',
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
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm opacity-90">Enterprise-grade solution</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 text-base mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400">{value}</div>
                        <div className="text-xs sm:text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto text-center"
                    >
                      View Details
                    </Link>
                    <div className="flex space-x-2 justify-center sm:justify-start">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 