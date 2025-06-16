'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MotionDiv } from '@/components/MotionWrapper';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedbackMessage(null);

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error('All fields are required');
      }

      // Create a timeout promise
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), 10000);
      });

      // Race between the actual submission and the timeout
      await Promise.race([
        addDoc(collection(db, 'contactMessages'), {
          ...formData,
          timestamp: serverTimestamp(), // Use serverTimestamp instead of client timestamp
          createdAt: new Date().toISOString(), // Add a client-side timestamp as backup
        }),
        timeoutPromise
      ]);

      setStatus('success');
      setFeedbackMessage('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      console.error('Error submitting form:', error);
      
      // More specific error messages
      if (error instanceof Error) {
        if (error.message === 'Request timeout') {
          setFeedbackMessage('Request timed out. Please check your internet connection and try again.');
        } else if (error.message === 'All fields are required') {
          setFeedbackMessage('Please fill in all fields.');
        } else if (error.message.includes('permission-denied')) {
          setFeedbackMessage('Permission denied. Please try again later.');
        } else if (error.message.includes('not-found')) {
          setFeedbackMessage('Service not found. Please try again later.');
        } else {
          setFeedbackMessage('Failed to send message. Please try again later.');
        }
      } else {
        setFeedbackMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 text-gray-900 dark:text-white">
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
            Get in <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-gray-600 dark:text-gray-400 mx-auto">
            Have a question, a project idea, or just want to chat? Feel free to reach out!
          </p>
        </MotionDiv>

        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg grid grid-cols-1 gap-10 md:grid-cols-2"
        >
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <p><strong>Email:</strong> tesfay.hagos1421@gmail.com</p>
                <p><strong>Phone:</strong> +251 915 297 421</p>
                <p><strong>Location:</strong> Addis Ababa, Ethiopia</p>
                <p>I'm always open to new opportunities and collaborations.</p>
            </div>
            <div className="mt-6 flex space-x-6">
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
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white p-3 transition-colors duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white p-3 transition-colors duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white p-3 transition-colors duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white p-3 transition-colors duration-200"
                  required
                />
              </div>
              {status === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-sm font-medium">{feedbackMessage}</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-sm font-medium">{feedbackMessage}</p>
              )}
              <MotionDiv
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </MotionDiv>
            </form>
          </MotionDiv>
        </MotionDiv>
      </div>
    </div>
  );
} 