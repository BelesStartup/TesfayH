'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MotionDiv, MotionSection } from '@/components/MotionWrapper';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <MotionSection 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dark opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
              Hi, I'm <span className="text-yellow-300">Tesfay Hagos</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-light opacity-90">
              Senior Backend Developer crafting high-performance and scalable solutions.
            </p>
            <MotionDiv 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10"
            >
              <div className="rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-500 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                >
                  Get in touch
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                <Link
                  href="/projects"
                  className="w-full flex items-center justify-center px-8 py-3 border border-indigo-300 text-base font-medium rounded-full text-indigo-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 dark:text-indigo-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  View Projects
                </Link>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </MotionSection>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl leading-tight">
              Featured Skills
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              My technical expertise spans various areas of backend development, blockchain, and cloud technologies.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Backend Development',
                description: 'Building robust APIs and scalable systems with Golang, Microservices, and RESTful principles.',
                icon: (
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                title: 'Blockchain Development',
                description: 'Implementing smart contracts, dApps, and integrating blockchain solutions for data indexing and analysis.',
                icon: (
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
              },
              {
                title: 'DevOps & Cloud',
                description: 'Deploying and managing applications with Docker, Kubernetes, AWS, and implementing CI/CD pipelines.',
                icon: (
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ),
              },
            ].map((skill, index) => (
              <MotionDiv
                key={skill.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center justify-center p-4 bg-indigo-500 rounded-full w-16 h-16 shadow-lg mb-6 mx-auto">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">{skill.title}</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 text-center">
                  {skill.description}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl leading-tight">
              About Me
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              A brief introduction to who I am and what I do.
            </p>
          </MotionDiv>

          <div className="flex flex-col items-center md:flex-row md:space-x-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <MotionDiv
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0 mb-8 md:mb-0"
            >
              <Image
                className="mx-auto h-56 w-56 rounded-full object-cover shadow-xl border-4 border-indigo-500"
                src="/images/photo.jpg"
                alt="Tesfay Hagos Profile Picture"
                width={224}
                height={224}
              />
            </MotionDiv>
            <MotionDiv
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-grow text-gray-700 dark:text-gray-300 text-center md:text-left"
            >
              <p className="text-lg leading-relaxed mb-4">
                Hello! I'm Tesfay Hagos, a passionate Senior Backend Developer with expertise in building scalable and efficient applications using Golang. My journey in software development has been focused on creating robust systems that power complex operations, from payment processing to blockchain indexing.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                I thrive on solving challenging problems and am constantly exploring new technologies to deliver innovative solutions. Beyond coding, I enjoy diving deep into distributed systems, optimizing database performance, and exploring the fascinating world of cloud architecture with AWS and Kubernetes.
              </p>
              <p className="text-lg leading-relaxed">
                I am always eager to collaborate on challenging projects and contribute to innovative teams. Feel free to connect with me through the links below!
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-6">
                <a href="#" className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.5.092.647-.233.647-.577 0-.285-.01-1.04-.015-2.04-2.78.6-3.37-1.358-3.37-1.358-.454-1.166-1.11-1.474-1.11-1.474-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.084 2.91.828.092-.647.35-1.084.636-1.332-2.22-.253-4.555-1.113-4.555-4.93 0-1.09.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.458 9.458 0 0112 6.13c.85.003 1.7.115 2.5.324 1.902-1.294 2.74-1.025 2.74-1.025.546 1.379.202 2.398.099 2.65.64.7 1.028 1.598 1.028 2.688 0 3.822-2.339 4.67-4.562 4.922.357.307.676.915.676 1.855 0 1.332-.012 2.41-.012 2.72 0 .345.24.678.652.575C19.158 20.25 22 16.58 22 12.017 22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646A4.14 4.14 0 0021.6 4c-.8.47-1.68.79-2.6.98A4.107 4.107 0 0019.1 3c-1.1 0-2 .9-2 2.001 0 .153.018.303.045.45A11.745 11.745 0 013.46 3.16c-.2.35-.33.74-.33 1.15 0 1.01.5 1.91 1.27 2.43A4.098 4.098 0 013 8.39c-.01 0-.02 0-.03 0 .04 1.25.75 2.37 1.8 2.92A4.107 4.107 0 013 11.62c0 .02 0 .04 0 .06.32 1.01.88 1.9 1.62 2.59-1.07.2-2.07.2-2.92.1-.2 1.4.37 2.65 1.34 3.33C4.9 19.34 6.4 20.08 8 20.25c-1.3.1-2.65 0-3.95-.1.2.35.53.68.9 1.07 1.62 1.57 3.9 2.47 6.4 2.47" />
                  </svg>
                </a>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Companies I've Worked With Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
              Companies I've <span className="text-indigo-600 dark:text-indigo-400">Worked With</span>
            </h2>
            <div className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide">
              {[
                {
                  name: 'Sewasew Multimedia',
                  url: 'https://sewasewmultimedia.com/',
                },
                {
                  name: 'Kwil',
                  url: 'https://www.kwil.com/',
                },
                {
                  name: '2F Capital LLC',
                  url: 'https://2fcapitalllc.com/',
                },
                {
                  name: 'AASTU',
                  url: 'https://www.aastu.edu.et/',
                },
              ].map((company, index) => (
                <MotionDiv
                  key={company.name}
                  initial={{ opacity: 0, y: 30, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.15 }}
                  whileHover={{ scale: 1.05, rotate: 3, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  className="flex-shrink-0 w-64 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center text-center"
                >
                  <Link
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 hover:underline transition-colors duration-200"
                  >
                    {company.name}
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
} 