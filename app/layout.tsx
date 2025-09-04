import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NSeek - Building AI solutions',
  description: 'High-performance AI tools and solutions.',
  keywords: 'vector search, rust, machine learning, AI, local-first, privacy, nseekfs',
  authors: [{ name: 'NSeek Team' }],
  creator: 'NSeek',
  publisher: 'NSeek',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.nseek.io'),
  openGraph: {
    title: 'NSeek - Building AI solutions',
    description: 'High-performance AI tools and solutions.',
    url: 'https://www.nseek.io',
    siteName: 'NSeek',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NSeek - Building AI solutions',
    description: 'High-performance AI tools and solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}