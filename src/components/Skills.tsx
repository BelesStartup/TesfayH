'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const skillsData = {
  testing: {
    title: 'Testing & Quality Assurance',
    skills: [
      'Postman',
      'Unit Test Code',
      'Selenium',
      'BDD',
      'Cucumber',
      'TestNG',
      'WebDriver',
      'Maven'
    ]
  },
  backend: {
    title: 'Backend Development & Infrastructure',
    skills: [
      'RESTful API',
      'Golang',
      'Node.js',
      'Express.js',
      'RabbitMQ',
      'Kafka',
      'Object-Oriented Programming'
    ]
  },
  ai: {
    title: 'Artificial Intelligence',
    skills: [
      'Python',
      'PyROOT',
      'RDataFrame',
      'Keras',
      'TensorFlow'
    ]
  },
  database: {
    title: 'Database',
    skills: [
      'MySQL',
      'PostgreSQL',
      'CockroachDB',
      'SQLite',
      'Amazon RDS',
      'MongoDB',
      'Mongoose'
    ]
  },
  versionControl: {
    title: 'Version Control',
    skills: [
      'Azure Boards',
      'Git',
      'GitHub',
      'GitLab'
    ]
  },
  devops: {
    title: 'DevOps',
    skills: [
      'CI/CD',
      'Azure Cloud',
      'Unix Scripting',
      'Kubernetes',
      'Docker',
      'Docker Compose',
      'Docker Swarm'
    ]
  }
};

const Skills = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = Object.keys(skillsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Digital Skills
        </motion.h2>

        <div className="relative h-[500px] overflow-hidden">
          {sections.map((section, index) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: activeSection === index ? 1 : 0,
                x: activeSection === index ? 0 : 100,
              }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                  {skillsData[section as keyof typeof skillsData].title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skillsData[section as keyof typeof skillsData].skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="bg-gray-700 rounded-lg p-4 text-center"
                    >
                      <span className="text-white font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index ? 'bg-blue-500 scale-125' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 