import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Tesfay Hagos - Senior Backend Developer | Golang Expert',
  description: 'Professional portfolio of Tesfay Hagos, a Senior Backend Developer specializing in Golang, microservices, blockchain, and cloud technologies. 5+ years of experience delivering enterprise-grade solutions.',
  keywords: 'Tesfay Hagos, Backend Developer, Golang, Microservices, Blockchain, Cloud Architecture, DevOps, Software Engineer, API Development, Database Optimization',
  authors: [{ name: 'Tesfay Hagos' }],
  openGraph: {
    title: 'Tesfay Hagos - Senior Backend Developer | Golang Expert',
    description: 'Professional portfolio showcasing expertise in Golang, microservices, blockchain, and cloud technologies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Tesfay Hagos Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tesfay Hagos - Senior Backend Developer | Golang Expert',
    description: 'Professional portfolio showcasing expertise in Golang, microservices, blockchain, and cloud technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://tesfayhagos.vercel.app',
  },
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
