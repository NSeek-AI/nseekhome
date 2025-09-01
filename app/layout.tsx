import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NSeek - Fast Vector Search',
  description: 'High-performance vector search infrastructure built in Rust. Privacy-first, local processing with production-ready APIs.',
  keywords: 'vector search, rust, machine learning, AI, local-first, privacy, nseekfs',
  authors: [{ name: 'NSeek Team' }],
  creator: 'NSeek',
  publisher: 'NSeek',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nseek.io'), // 🔧 Domínio correto
  openGraph: {
    title: 'NSeek - Fast Vector Search',
    description: 'High-performance vector search infrastructure built in Rust',
    url: 'https://nseek.io',
    siteName: 'NSeek',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NSeek - Fast Vector Search',
    description: 'High-performance vector search infrastructure built in Rust',
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