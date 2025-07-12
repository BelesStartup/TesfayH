'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MotionDiv, MotionSection } from '@/components/MotionWrapper';

interface ProjectDetailProps {
  params: { slug: string };
}

const projectsData = [
  {
    title: 'Payment System',
    slug: 'payment-system',
    description: 'A high-performance payment processing system built with Golang and microservices architecture.',
    longDescription: 'This comprehensive payment system handles millions of transactions daily with enterprise-grade security. Built using microservices architecture, it features real-time fraud detection, multi-currency support, and seamless integration with major payment gateways. The system includes advanced analytics, automated reconciliation, and PCI DSS compliance.',
    technologies: ['Golang', 'Microservices', 'PostgreSQL', 'Docker', 'Kubernetes', 'Kafka', 'Redis', 'JWT'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center',
    metrics: {
      performance: '99.9% uptime',
      scale: '10K+ TPS',
      security: 'PCI DSS Compliant',
      latency: '<100ms response'
    },
    features: [
      'Real-time fraud detection',
      'Multi-currency support',
      'Automated reconciliation',
      'Advanced analytics dashboard',
      'PCI DSS compliance',
      'API rate limiting'
    ],
    architecture: 'Microservices with event-driven design',
    status: 'Production',
    duration: '8 months',
    team: '6 developers',
    role: 'Lead Backend Developer'
  },
  {
    title: 'Blockchain Indexer',
    slug: 'blockchain-indexer',
    description: 'A scalable blockchain indexer for real-time data retrieval and analysis.',
    longDescription: 'High-performance blockchain indexer capable of processing millions of transactions per day. Features real-time data synchronization, advanced querying capabilities, and support for multiple blockchain networks. The system provides instant access to transaction histories, smart contract events, and wallet analytics.',
    technologies: ['Golang', 'Blockchain', 'GraphQL', 'Redis', 'MongoDB', 'WebSockets', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop&crop=center',
    metrics: {
      performance: '<100ms queries',
      scale: '1M+ blocks/day',
      reliability: '99.99% accuracy',
      networks: '5+ blockchains'
    },
    features: [
      'Real-time data synchronization',
      'Multi-blockchain support',
      'GraphQL API',
      'Advanced analytics',
      'Webhook notifications',
      'Historical data access'
    ],
    architecture: 'Event-driven with horizontal scaling',
    status: 'Production',
    duration: '6 months',
    team: '4 developers',
    role: 'Senior Backend Developer'
  },
  {
    title: 'ERP System',
    slug: 'erp-system',
    description: 'Enterprise resource planning system with integrated finance, HR, and inventory modules.',
    longDescription: 'Comprehensive ERP solution designed for mid-to-large enterprises. Integrates finance, human resources, inventory management, and CRM into a unified platform. Features customizable workflows, real-time reporting, and role-based access control.',
    technologies: ['Golang', 'RESTful APIs', 'MongoDB', 'Kubernetes', 'React', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center',
    metrics: {
      users: '500+ active users',
      modules: '12 integrated modules',
      efficiency: '40% time savings',
      uptime: '99.95%'
    },
    features: [
      'Financial accounting',
      'HR management',
      'Inventory tracking',
      'CRM integration',
      'Custom workflows',
      'Real-time reporting'
    ],
    architecture: 'Modular monolith with microservices',
    status: 'Production',
    duration: '12 months',
    team: '8 developers',
    role: 'Technical Lead'
  },
  {
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    description: 'Robust e-commerce platform with real-time inventory management and payment processing.',
    longDescription: 'Full-featured e-commerce platform supporting multiple vendors, real-time inventory management, and secure payment processing. Includes advanced search, recommendation engine, and comprehensive admin dashboard.',
    technologies: ['Golang', 'Microservices', 'PostgreSQL', 'AWS', 'Next.js', 'Stripe', 'Elasticsearch'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center',
    metrics: {
      performance: '2s avg load time',
      scale: '50K+ concurrent users',
      conversion: '25% increase',
      revenue: '$2M+ processed'
    },
    features: [
      'Multi-vendor support',
      'Real-time inventory',
      'Advanced search',
      'Recommendation engine',
      'Payment processing',
      'Order management'
    ],
    architecture: 'Microservices with CQRS pattern',
    status: 'Production',
    duration: '10 months',
    team: '7 developers',
    role: 'Senior Backend Developer'
  },
  {
    title: 'Real-time Analytics Dashboard',
    slug: 'analytics-dashboard',
    description: 'A comprehensive analytics platform providing real-time insights for business intelligence.',
    longDescription: 'Advanced analytics dashboard built for enterprise-scale data processing. Features real-time data visualization, customizable widgets, automated reporting, and machine learning-powered insights. Supports multiple data sources and provides interactive charts and graphs for comprehensive business intelligence.',
    technologies: ['Golang', 'WebSocket', 'InfluxDB', 'Grafana', 'Docker', 'Kubernetes', 'React', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center',
    metrics: {
      latency: '<50ms updates',
      data: '1TB+ processed daily',
      insights: '95% accuracy',
      users: '1K+ concurrent'
    },
    features: [
      'Real-time data visualization',
      'Customizable dashboards',
      'Automated reporting',
      'Machine learning insights',
      'Multiple data sources',
      'Interactive charts'
    ],
    architecture: 'Event-driven with real-time streaming',
    status: 'Production',
    duration: '7 months',
    team: '5 developers',
    role: 'Senior Backend Developer'
  },
  {
    title: 'API Gateway & Microservices',
    slug: 'api-gateway',
    description: 'A sophisticated API gateway managing 50+ microservices with advanced routing and authentication.',
    longDescription: 'Enterprise-grade API gateway built to handle massive scale microservices architecture. Features advanced routing, rate limiting, authentication, service discovery, and comprehensive monitoring. Includes circuit breakers, load balancing, and security policies for robust API management.',
    technologies: ['Golang', 'Istio', 'Kong', 'JWT', 'OAuth2', 'Prometheus', 'Kubernetes', 'gRPC'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&crop=center',
    metrics: {
      throughput: '100K+ requests/sec',
      latency: '<5ms response',
      availability: '99.99% uptime',
      services: '50+ microservices'
    },
    features: [
      'Advanced routing',
      'Rate limiting',
      'Service discovery',
      'Circuit breakers',
      'Load balancing',
      'Security policies'
    ],
    architecture: 'Microservices with service mesh',
    status: 'Production',
    duration: '9 months',
    team: '6 developers',
    role: 'Technical Lead'
  },
];

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link href="/projects" className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors duration-200">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
            
            <div className="flex items-center justify-center mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                project.status === 'Production' ? 'bg-green-500' : 'bg-yellow-500'
              } text-white shadow-lg`}>
                {project.status}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </MotionDiv>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Image */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="object-cover w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </MotionDiv>

        {/* Key Metrics */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  {value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 capitalize font-medium">
                  {key}
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {project.longDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Architecture</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.architecture}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">My Role</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.role}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Duration</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Team Size</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.team}</p>
                </div>
              </div>
            </MotionDiv>

            {/* Key Features */}
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </MotionDiv>

            {/* Technologies */}
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </MotionDiv>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Project Info Card */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg border border-indigo-200 dark:border-gray-600"
            >
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Project Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Status</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Production' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Duration</span>
                  <span className="text-gray-900 dark:text-white font-medium">{project.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Team</span>
                  <span className="text-gray-900 dark:text-white font-medium">{project.team}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Role</span>
                  <span className="text-gray-900 dark:text-white font-medium">{project.role}</span>
                </div>
              </div>
            </MotionDiv>

            {/* Contact Card */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Interested in Similar Work?</h3>
              <p className="text-purple-100 mb-6">Let's discuss how I can help build your next project.</p>
              <Link
                href="/contact"
                className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center block"
              >
                Get in Touch
              </Link>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
} 