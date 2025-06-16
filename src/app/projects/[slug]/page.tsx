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
    description: 'A high-performance payment processing system built with Golang and microservices architecture. It handles secure transactions, multiple payment gateways, and real-time fraud detection.',
    longDescription: 'This project involved designing and implementing a robust payment system capable of processing millions of transactions daily. Key features include a scalable microservices architecture, secure data handling, integration with various banking APIs, and a comprehensive dashboard for monitoring transactions and analytics.',
    technologies: ['Golang', 'Microservices', 'PostgreSQL', 'Docker', 'Kubernetes', 'Kafka', 'Redis'],
    image: 'https://placehold.co/1200x600/2563eb/ffffff?text=Payment+System',
    screenshots: [
      'https://placehold.co/800x450/4f46e5/ffffff?text=Payment+System+Screenshot+1',
      'https://placehold.co/800x450/4f46e5/ffffff?text=Payment+System+Screenshot+2',
    ],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Blockchain Indexer',
    slug: 'blockchain-indexer',
    description: 'A scalable blockchain indexer for real-time data retrieval and analysis. It efficiently parses blockchain data and stores it for quick queries.',
    longDescription: 'Developed a high-throughput blockchain indexer to process and store vast amounts of on-chain data. This enabled real-time analytics and quick access to transaction histories, smart contract events, and wallet balances. The system is designed for fault tolerance and scalability.',
    technologies: ['Golang', 'Blockchain', 'GraphQL', 'Redis', 'MongoDB', 'WebSockets'],
    image: 'https://placehold.co/1200x600/2563eb/ffffff?text=Blockchain+Indexer',
    screenshots: [
      'https://placehold.co/800x450/4f46e5/ffffff?text=Blockchain+Indexer+Screenshot+1',
      'https://placehold.co/800x450/4f46e5/ffffff?text=Blockchain+Indexer+Screenshot+2',
    ],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'ERP System',
    slug: 'erp-system',
    description: 'An enterprise resource planning system with integrated finance, HR, and inventory modules. Designed for small to medium businesses.',
    longDescription: 'Built a comprehensive ERP system to streamline business operations. Modules include financial accounting, human resources, inventory management, and customer relationship management. The system features a modular design, customizable workflows, and a user-friendly interface.',
    technologies: ['Golang', 'RESTful APIs', 'MongoDB', 'Kubernetes', 'React', 'Tailwind CSS'],
    image: 'https://placehold.co/1200x600/2563eb/ffffff?text=ERP+System',
    screenshots: [
      'https://placehold.co/800x450/4f46e5/ffffff?text=ERP+System+Screenshot+1',
      'https://placehold.co/800x450/4f46e5/ffffff?text=ERP+System+Screenshot+2',
    ],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    description: 'A robust e-commerce platform with real-time inventory management and secure payment processing. Supports multiple vendors.',
    longDescription: 'Developed a full-fledged e-commerce platform with features like product catalog management, shopping cart, secure checkout, order fulfillment, and user authentication. It includes real-time inventory updates and integration with popular payment gateways. The platform is designed to be highly extensible and customizable.',
    technologies: ['Golang', 'Microservices', 'PostgreSQL', 'AWS', 'Next.js', 'Stripe'],
    image: 'https://placehold.co/1200x600/2563eb/ffffff?text=E-commerce+Platform',
    screenshots: [
      'https://placehold.co/800x450/4f46e5/ffffff?text=E-commerce+Platform+Screenshot+1',
      'https://placehold.co/800x450/4f46e5/ffffff?text=E-commerce+Platform+Screenshot+2',
    ],
    liveLink: '#',
    githubLink: '#',
  },
];

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            {project.description}
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="rounded-lg shadow-xl object-cover w-full h-auto"
          />
        </MotionDiv>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 text-base font-medium px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              {project.liveLink !== '#' && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  View Live
                </Link>
              )}
              {project.githubLink !== '#' && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:text-indigo-100 dark:hover:bg-indigo-600"
                >
                  GitHub Repo
                </Link>
              )}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Screenshots</h2>
            <div className="space-y-6">
              {project.screenshots.map((screenshot, index) => (
                <Image
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
} 