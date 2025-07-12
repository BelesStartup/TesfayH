import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Tesfay Hagos - Senior Backend Developer | Golang Expert',
  description: 'Professional portfolio of Tesfay Hagos, a Senior Backend Developer specializing in Golang, microservices, blockchain, and cloud technologies. 5+ years of experience delivering enterprise-grade solutions.',
  keywords: 'Tesfay Hagos, Backend Developer, Golang, Microservices, Blockchain, Cloud Architecture, DevOps, Software Engineer, API Development, Database Optimization',
  authors: [{ name: 'Tesfay Hagos' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Tesfay Hagos - Senior Backend Developer | Golang Expert',
    description: 'Professional portfolio showcasing expertise in Golang, microservices, blockchain, and cloud technologies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Tesfay Hagos Portfolio',
    images: [
      {
        url: '/images/photo.jpg',
        width: 400,
        height: 400,
        alt: 'Tesfay Hagos - Senior Backend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tesfay Hagos - Senior Backend Developer | Golang Expert',
    description: 'Professional portfolio showcasing expertise in Golang, microservices, blockchain, and cloud technologies.',
    images: ['/images/photo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://tesfayhagos.vercel.app',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
