'use client';

import Link from 'next/link';
import { MotionDiv } from '@/components/MotionWrapper';

export default function Footer() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-gray-800 text-gray-300 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} Tesfay Hagos. All rights reserved.</p>
        <div className="mt-6 flex justify-center space-x-6">
          <Link href="#" className="hover:text-white transition-colors duration-200">
            <span className="sr-only">GitHub</span>
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.5.092.647-.233.647-.577 0-.285-.01-1.04-.015-2.04-2.78.6-3.37-1.358-3.37-1.358-.454-1.166-1.11-1.474-1.11-1.474-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.084 2.91.828.092-.647.35-1.084.636-1.332-2.22-.253-4.555-1.113-4.555-4.93 0-1.09.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.458 9.458 0 0112 6.13c.85.003 1.7.115 2.5.324 1.902-1.294 2.74-1.025 2.74-1.025.546 1.379.202 2.398.099 2.65.64.7 1.028 1.598 1.028 2.688 0 3.822-2.339 4.67-4.562 4.922.357.307.676.915.676 1.855 0 1.332-.012 2.41-.012 2.72 0 .345.24.678.652.575C19.158 20.25 22 16.58 22 12.017 22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link href="#" className="hover:text-white transition-colors duration-200">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link href="#" className="hover:text-white transition-colors duration-200">
            <span className="sr-only">Twitter</span>
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646A4.14 4.14 0 0021.6 4c-.8.47-1.68.79-2.6.98A4.107 4.107 0 0019.1 3c-1.1 0-2 .9-2 2.001 0 .153.018.303.045.45A11.745 11.745 0 013.46 3.16c-.2.35-.33.74-.33 1.15 0 1.01.5 1.91 1.27 2.43A4.098 4.098 0 013 8.39c-.01 0-.02 0-.03 0 .04 1.25.75 2.37 1.8 2.92A4.107 4.107 0 013 11.62c0 .02 0 .04 0 .06.32 1.01.88 1.9 1.62 2.59-1.07.2-2.07.2-2.92.1-.2 1.4.37 2.65 1.34 3.33C4.9 19.34 6.4 20.08 8 20.25c-1.3.1-2.65 0-3.95-.1.2.35.53.68.9 1.07 1.62 1.57 3.9 2.47 6.4 2.47" />
            </svg>
          </Link>
        </div>
      </div>
    </MotionDiv>
  );
} 