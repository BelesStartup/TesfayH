'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaGitlab, FaEnvelope, FaPhone } from 'react-icons/fa';
import { TbBrandGolang, TbCoin, TbCloud, TbServer, TbDatabase, TbApi } from 'react-icons/tb';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/svg/grid.svg')] bg-repeat opacity-10"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
              >
                Hi, I'm <span className="text-yellow-300">Tesfay Hagos</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 sm:mt-6 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl md:text-2xl font-light opacity-90"
              >
                Senior Backend Developer crafting high-performance, scalable solutions for global enterprises
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <Link
                  href="/contact"
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-indigo-700 font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white flex items-center justify-center text-sm sm:text-base"
                >
                  Get in Touch
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </Link>
                
                <Link
                  href="/projects"
                  className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white flex items-center justify-center text-sm sm:text-base"
                >
                  View Projects
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            
            	<motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mt-12 lg:mt-0 flex justify-center items-center"
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/photo.jpg"
                  alt="Tesfay Hagos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-yellow-400 text-gray-900 px-3 py-1 sm:px-6 sm:py-2 rounded-full font-bold shadow-lg transform hover:translate-y-1 text-sm sm:text-base">
                Software Developer
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
            >
              Technical <span className="text-indigo-600 dark:text-indigo-400">Expertise</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
            >
              My technical skills span backend development, blockchain, and cloud technologies
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Backend Development',
                description: 'Building robust APIs and scalable systems with Golang, Microservices, and RESTful principles.',
                icon: <TbServer className="h-10 w-10 text-white" />,
                color: 'bg-indigo-500',
              },
              {
                title: 'Blockchain Development',
                description: 'Implementing smart contracts, dApps, and integrating blockchain solutions for data indexing and analysis.',
                icon: <TbCoin className="h-10 w-10 text-white" />,
                color: 'bg-purple-500',
              },
              {
                title: 'DevOps & Cloud',
                description: 'Deploying and managing applications with Docker, Kubernetes, AWS, and implementing CI/CD pipelines.',
                icon: <TbCloud className="h-10 w-10 text-white" />,
                color: 'bg-blue-500',
              },
              {
                title: 'Database Management',
                description: 'Expertise in PostgreSQL, MongoDB, and Redis for efficient data storage and retrieval.',
                icon: <TbDatabase className="h-10 w-10 text-white" />,
                color: 'bg-green-500',
              },
              {
                title: 'API Design',
                description: 'Creating clean, well-documented RESTful and GraphQL APIs for seamless integration.',
                icon: <TbApi className="h-10 w-10 text-white" />,
                color: 'bg-red-500',
              },
              {
                title: 'Golang Expertise',
                description: 'Specialized in high-performance backend systems using Go for enterprise applications.',
                icon: <TbBrandGolang className="h-10 w-10 text-white" />,
                color: 'bg-yellow-500',
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`${skill.color} flex items-center justify-center p-4 rounded-full w-16 h-16 shadow-lg mb-6`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                          <TbBrandGolang className="h-6 w-6 text-gray-900" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Golang Expert</h3>
                          <p className="text-sm opacity-90">High Performance</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>API Development</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                          <TbDatabase className="h-6 w-6 text-gray-900" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Database</h3>
                          <p className="text-sm opacity-90">Optimization</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>PostgreSQL</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                          <TbCloud className="h-6 w-6 text-gray-900" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Cloud & DevOps</h3>
                          <p className="text-sm opacity-90">Scalable Solutions</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>AWS & Docker</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-blue-400 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
                          <TbCoin className="h-6 w-6 text-gray-900" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Blockchain</h3>
                          <p className="text-sm opacity-90">Web3 Integration</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Smart Contracts</span>
                          <span>80%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-purple-400 h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-xl">
                  <div className="text-sm">5+ years experience</div>
                  <div className="text-xl">Backend Development</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Hello! I'm Tesfay Hagos, a passionate Senior Backend Developer with expertise in building scalable and efficient applications using Golang. My journey in software development has been focused on creating robust systems that power complex operations.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                I thrive on solving challenging problems and am constantly exploring new technologies to deliver innovative solutions. Beyond coding, I enjoy diving deep into distributed systems, optimizing database performance, and exploring cloud architecture.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/Tesfay-Hagos" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 px-4 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <FaGithub className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/tesfayhagos/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 px-4 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <FaLinkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="mailto:tesfay.hagos1421@gmail.com" 
                  className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 px-4 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <FaEnvelope className="h-5 w-5" />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
            >
              Achievements & <span className="text-indigo-600 dark:text-indigo-400">Certifications</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
            >
              Professional milestones and continuous learning journey
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Senior Backend Developer",
                organization: "Multiple International Companies",
                year: "2019-Present",
                description: "Led backend development for enterprise-scale applications",
                icon: "🏆",
                color: "bg-yellow-500"
              },
              {
                title: "Golang Expertise",
                organization: "Self-Directed Learning",
                year: "2020-Present",
                description: "Mastered Go programming with focus on microservices",
                icon: "🔧",
                color: "bg-blue-500"
              },
              {
                title: "Cloud Architecture",
                organization: "AWS & Azure",
                year: "2021-Present",
                description: "Designed and implemented scalable cloud solutions",
                icon: "☁️",
                color: "bg-green-500"
              },
              {
                title: "Blockchain Development",
                organization: "Web3 Projects",
                year: "2022-Present",
                description: "Built blockchain indexers and smart contract integrations",
                icon: "⛓️",
                color: "bg-purple-500"
              },
              {
                title: "DevOps Implementation",
                organization: "CI/CD Pipeline Expert",
                year: "2020-Present",
                description: "Implemented automated deployment and monitoring systems",
                icon: "🚀",
                color: "bg-red-500"
              },
              {
                title: "International Recognition",
                organization: "Global Client Base",
                year: "2019-Present",
                description: "Successfully delivered projects for clients across 3 continents",
                icon: "🌍",
                color: "bg-indigo-500"
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`${achievement.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">{achievement.year}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{achievement.organization}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
            >
              Client <span className="text-indigo-600 dark:text-indigo-400">Testimonials</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
            >
              What international clients say about working with me
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Brennan Lamey",
                role: "Owner, Kwil.com",
                content: "Tesfay is great! He is very hard working, and is keen to handle any job. He brought himself up to speed on new concepts that were required for the job, and his work followed well documented patterns.",
                country: "🇺🇸 United States"
              },
              {
                name: "Ruta Brhane",
                role: "Client",
                content: "I had the pleasure of working with Tesfay Hagos on a complex project, and I am thoroughly impressed with his performance. He is an exceptional Golang and DevOps developer who quickly grasps tasks and delivers high-quality work. His communication skills are outstanding.",
                country: "🇺🇸 United States"
              },
              {
                name: "Patrick Egb",
                role: "Spec Engineering",
                content: "Tesfaye is a good team player, a valuable cognitive software developer who is detailed, providing bug-free well-documented code. Always available, reliable and demonstrated high capacity in Golang Project with us.",
                country: "🇳🇬 Nigeria"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-6">
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-indigo-600 dark:text-indigo-400">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.country}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
            >
              Companies I've <span className="text-indigo-600 dark:text-indigo-400">Worked With</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              {
                name: 'Sewasew Multimedia',
                url: 'https://sewasewmultimedia.com/',
                location: 'Ethiopia'
              },
              {
                name: 'Kwil',
                url: 'https://www.kwil.com/',
                location: 'USA'
              },
              {
                name: '2F Capital LLC',
                url: 'https://2fcapitalllc.com/',
                location: 'USA'
              },
              {
                name: 'Fintech Investment PLC',
                url: 'https://fintechinvestment.net/',
                location: 'Ethiopia'
              },
              {
                name: 'AASTU',
                url: 'https://www.aastu.edu.et/',
                location: 'Ethiopia'
              },
            ].map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center text-center border border-gray-200 dark:border-gray-700"
              >
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={`/images/${company.name === 'Sewasew Multimedia' ? 'sewasew.png' : 
                           company.name === 'Kwil' ? 'kwil.jpeg' :
                           company.name === '2F Capital LLC' ? '2f.png' :
                           company.name === 'Fintech Investment PLC' ? 'fintech.jpeg' : 'aastu.png'}`}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{company.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{company.location}</p>
                <a 
                  href={company.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
                >
                  Visit Website
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Build Something Amazing?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto mb-10 opacity-90"
          >
            Let's discuss how I can help create high-performance backend solutions for your business
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
            >
              Schedule a Call
            </Link>
            
            <Link
              href="/projects"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              View My Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;