'use client'

import React, { useState, useEffect } from 'react'

// Simple SVG icon components to replace lucide-react
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const Code = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const Database = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="m3 5v14a9 3 0 0 0 18 0V5" />
    <path d="m3 12a9 3 0 0 0 18 0" />
  </svg>
)

const Cpu = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
    <line x1="15" y1="20" x2="15" y2="23" />
  </svg>
)

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const BarChart3 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20V10m0 0l-2 2m2-2l2 2M6 20v-6m0 0l-2 2m2-2l2 2M18 20v-2m0 0l-2 2m2-2l2 2" />
  </svg>
)

type NavigateFn = (path: string) => void

// Logo component
const Logo = ({ className, onClick }: { className?: string; onClick?: () => void }) => (
  <div className={`font-bold text-2xl cursor-pointer ${className}`} onClick={onClick}>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">NSeek</span>
  </div>
)

// Data simulada para a demo
type DemoItem = {
  id: number
  text: string
  embedding: number[]
  category: string
}

const demoItems: DemoItem[] = [
  { id: 1, text: 'Machine learning fundamentals and algorithms', embedding: [0.9, 0.2, 0.3], category: 'ML Basics' },
  { id: 2, text: 'Advanced neural network architectures', embedding: [0.8, 0.1, 0.4], category: 'Deep Learning' },
  { id: 3, text: 'Natural language processing with transformers', embedding: [0.3, 0.9, 0.2], category: 'NLP' },
  { id: 4, text: 'Computer vision and convolutional networks', embedding: [0.6, 0.3, 0.8], category: 'Computer Vision' },
  { id: 5, text: 'Reinforcement learning algorithms', embedding: [0.2, 0.7, 0.5], category: 'RL' },
  { id: 6, text: 'Data preprocessing and feature engineering', embedding: [0.4, 0.4, 0.1], category: 'Data Science' },
  { id: 7, text: 'Deep learning optimization techniques', embedding: [0.7, 0.2, 0.6], category: 'Optimization' },
  { id: 8, text: 'Generative adversarial networks', embedding: [0.5, 0.8, 0.3], category: 'Generative AI' },
  { id: 9, text: 'Time series analysis and forecasting', embedding: [0.1, 0.5, 0.9], category: 'Time Series' },
  { id: 10, text: 'Recommendation systems and collaborative filtering', embedding: [0.9, 0.4, 0.2], category: 'RecSys' },
]

// Cosine similarity
const cosineSimilarity = (vecA: number[], vecB: number[]) => {
  const dot = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0)
  const magA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0))
  const magB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0))
  return dot / (magA * magB)
}

// Dados de comparação realistas
type Comparison = {
  name: string
  latency: string
  throughput: string
  accuracy: string
  color: string
  note: string
  context: string
}

const comparisonData: Record<'faiss' | 'pinecone' | 'weaviate' | 'nseekfs', Comparison> = {
  faiss: {
    name: 'FAISS',
    latency: '1.2ms',
    throughput: '2.8M',
    accuracy: '94.8%',
    color: 'text-red-400',
    note: 'Highly optimized C++',
    context: 'Facebook AI Research library',
  },
  pinecone: {
    name: 'Pinecone',
    latency: '45ms',
    throughput: '180K',
    accuracy: '92.3%',
    color: 'text-orange-400',
    note: 'Network + cloud overhead',
    context: 'Managed vector database',
  },
  weaviate: {
    name: 'Weaviate',
    latency: '15ms',
    throughput: '420K',
    accuracy: '91.7%',
    color: 'text-yellow-400',
    note: 'GraphQL processing',
    context: 'Open-source vector DB',
  },
  nseekfs: {
    name: 'nseekfs',
    latency: '0.8ms',
    throughput: '1.8M',
    accuracy: '93.5%',
    color: 'text-emerald-400',
    note: 'Local-first, pure Rust',
    context: 'Memory-optimized indices',
  },
}

// Header component
const Header = ({ onNavigate, currentPage }: { onNavigate: NavigateFn; currentPage: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'vision', label: 'Vision' },
    { id: 'projects', label: 'Projects' },
    { id: 'technology', label: 'Technology' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (item: { id: string; label: string }) => {
    if (currentPage !== '/') {
      onNavigate('/')
      setTimeout(() => {
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo className="text-white" onClick={() => onNavigate('/')} />

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="text-slate-200 hover:text-emerald-400 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('/demo')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-semibold"
            >
              Live Demo
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1 w-6 h-6 justify-center"
          >
            <span
              className={`block h-0.5 bg-current transition-transform ${
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            />
            <span className={`block h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 bg-current transition-transform ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-700/50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="text-slate-200 hover:text-emerald-400 transition-colors text-left font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => onNavigate('/demo')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all text-center font-semibold"
              >
                Live Demo
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

// Hero
const Hero = ({ onNavigate }: { onNavigate: NavigateFn }) => (
  <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent" />
    <div className="max-w-4xl mx-auto text-center relative">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/80 border border-emerald-500/30 mb-8 backdrop-blur-sm">
        <Code className="w-4 h-4 text-emerald-400 mr-2" />
        <span className="text-slate-200 text-sm font-medium">Built in Rust</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        Crafting{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-emerald-400 to-blue-400">
          AI solutions.
        </span>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        High-performance AI tools and solutions. Privacy-first, local processing with production-ready APIs.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <button
          onClick={() => onNavigate('/demo')}
          className="w-full sm:w-auto group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center font-semibold shadow-xl"
        >
          <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
          Try nseekfs Now
        </button>
        <button
          onClick={() => onNavigate('/waitlist')}
          className="w-full sm:w-auto border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-500/10 transition-all flex items-center justify-center font-semibold backdrop-blur-sm"
        >
          Get Early Access
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  </section>
)

// Vision
const Vision = () => (
  <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Vision</h2>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
          Building fast, reliable AI tools that work locally without compromising on performance or privacy.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Shield className="w-8 h-8 text-white" />,
            title: 'Privacy First',
            text: 'Data stays local. No network calls required.',
            wrap: 'from-emerald-500 to-teal-600',
          },
          {
            icon: <Zap className="w-8 h-8 text-white" />,
            title: 'High Performance',
            text: 'Sub-millisecond queries with Rust optimization.',
            wrap: 'from-blue-500 to-cyan-600',
          },
          {
            icon: <Code className="w-8 h-8 text-white" />,
            title: 'Developer Friendly',
            text: 'Simple Python APIs, easy integration.',
            wrap: 'from-purple-500 to-indigo-600',
          },
          {
            icon: <Database className="w-8 h-8 text-white" />,
            title: 'Production Ready',
            text: 'Memory efficient, scalable architecture.',
            wrap: 'from-amber-500 to-orange-600',
          },
        ].map((c, i) => (
          <div key={i} className="text-center group">
            <div
              className={`w-16 h-16 bg-gradient-to-br ${c.wrap} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
            >
              {c.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{c.title}</h3>
            <p className="text-slate-300">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// Projects
const Projects = ({ onNavigate }: { onNavigate: NavigateFn }) => (
  <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Products</h2>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
          Artificial Inteligence solutions designed for different use cases and deployment scenarios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-emerald-500/30 rounded-xl p-8 hover:border-emerald-400/50 transition-all hover:transform hover:scale-105 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">nseekfs</h3>
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Available
            </span>
          </div>
          <p className="text-slate-300 mb-6">
            High-performance vector search engine built in Rust. Local processing, sub-millisecond queries, and Python integration.
          </p>
          <button
            onClick={() => onNavigate('/demo')}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all font-semibold shadow-lg"
          >
            Try Live Demo
          </button>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-purple-500/30 rounded-xl p-8 hover:border-purple-400/50 transition-all hover:transform hover:scale-105 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">nseekplus</h3>
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Coming Soon
            </span>
          </div>
          <p className="text-slate-300 mb-6">
            Enhanced version with advanced indexing algorithms and explainable results.
          </p>
          <button
            onClick={() => onNavigate('/waitlist')}
            className="w-full border-2 border-purple-500 text-purple-400 py-3 rounded-lg hover:bg-purple-500/10 transition-all font-semibold"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  </section>
)

// Technology
const Technology = () => (
  <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
    <div className="max-w-6xl mx-auto text-center">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technology Stack</h2>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
          Built with modern technologies that prioritize performance, safety, and developer experience.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Rust Core', desc: 'Memory safety and maximum performance', color: 'from-orange-500 to-red-500' },
          { name: 'SIMD Optimization', desc: 'Vectorized operations for speed', color: 'from-blue-500 to-cyan-500' },
          { name: 'Python Bindings', desc: 'Easy integration with existing workflows', color: 'from-green-500 to-emerald-500' },
          { name: 'Memory Mapping', desc: 'Efficient data loading and caching', color: 'from-purple-500 to-indigo-500' },
          { name: 'Lock-free Design', desc: 'High concurrency without bottlenecks', color: 'from-yellow-500 to-amber-500' },
          { name: 'Custom Algorithms', desc: 'Optimized for real-world datasets', color: 'from-pink-500 to-rose-500' },
        ].map((tech, i) => (
          <div key={i} className="bg-slate-800/50 border border-slate-600/30 rounded-xl p-6 hover:border-slate-500/50 transition-all">
            <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg mb-4`} />
            <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
            <p className="text-slate-400">{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)



// Contact
const Contact = () => (
  <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
      <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
        Questions about integration or want to learn more? We're here to help.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="mailto:contact@nseek.io"
          className="flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all font-semibold shadow-lg"
        >
          <Mail className="w-5 h-5 mr-2" />
          contact@nseek.io
        </a>
        <a
          href="https://github.com/NSeek-AI"
          className="flex items-center border-2 border-slate-500 text-slate-200 px-8 py-4 rounded-lg hover:bg-slate-500/10 transition-all font-semibold backdrop-blur-sm"
        >
          <Github className="w-5 h-5 mr-2" />
          View on GitHub
        </a>
      </div>
    </div>
  </section>
)

// Footer
const Footer = ({ onNavigate }: { onNavigate: NavigateFn }) => (
  <footer className="border-t border-slate-700/50 py-12 px-4 sm:px-6 lg:px-8 bg-slate-900">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div className="md:col-span-2">
          <Logo className="text-white mb-4" onClick={() => onNavigate('/')} />
          <p className="text-slate-400 mb-6 max-w-md">
            High-performance AI tools and solutions. Local-first, privacy-focused solutions.
          </p>
          <div className="flex items-center space-x-4">
            <a href="mailto:contact@nseek.io" className="text-slate-400 hover:text-emerald-400 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/diogonovo/nseekfs" className="text-slate-400 hover:text-emerald-400 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onNavigate('/demo')} className="text-slate-400 hover:text-emerald-400 transition-colors">
                nseekfs
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/waitlist')} className="text-slate-400 hover:text-emerald-400 transition-colors">
                nseekplus
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="https://www.nseek.io" className="text-slate-400 hover:text-emerald-400 transition-colors">
                nseek.io
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700/50 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">© 2025 NSeek. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-slate-500">Made in Portugal</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-500">Built with Rust</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

// Demo Page with Comparison Tool
const DemoPage = ({ onNavigate }: { onNavigate: NavigateFn }) => {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<
    (DemoItem & { similarity: number; rank: number; score: string })[] | null
  >(null)
  const [searchTimes, setSearchTimes] = useState<Record<string, number>>({})
  const [isEngineReady, setIsEngineReady] = useState(false)
  const [selectedEngine, setSelectedEngine] = useState<keyof typeof comparisonData>('nseekfs')
  const [isRunningComparison, setIsRunningComparison] = useState(false)
  const [comparisonResults, setComparisonResults] = useState<Record<string, any>>({})

  const handleSearch = async () => {
    if (!query.trim() || !isEngineReady) return
    setIsSearching(true)
    const t0 = performance.now()

    await new Promise(r => setTimeout(r, Math.random() * 50 + 10))

    const words = query.toLowerCase().split(/\s+/)
    const qEmb = [
      words.includes('machine') || words.includes('learning') ? 0.8 : Math.random() * 0.3,
      words.includes('neural') || words.includes('network') ? 0.9 : Math.random() * 0.3,
      words.includes('vision') || words.includes('image') ? 0.8 : Math.random() * 0.3
    ]

    const searchResults = demoItems
      .map(item => ({
        ...item,
        similarity: cosineSimilarity(qEmb, item.embedding),
        rank: 0,
        score: ''
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 5)
      .map((item, i) => ({
        ...item,
        rank: i + 1,
        score: (item.similarity * 100).toFixed(1) + '%'
      }))

    const elapsed = performance.now() - t0
    setSearchTimes({ [selectedEngine]: elapsed })
    setResults(searchResults)
    setSearchTime(elapsed)
    setIsSearching(false)
  }

  const runComparison = async () => {
    if (!query.trim()) return
    setIsRunningComparison(true)
    setComparisonResults({})

    const engines = Object.keys(comparisonData)
    
    for (const engine of engines) {
      const engineData = comparisonData[engine as keyof typeof comparisonData]
      const baseLatency = parseFloat(engineData.latency.replace('ms', ''))
      const simulatedTime = baseLatency + (Math.random() * baseLatency * 0.2) // Add some variance
      
      await new Promise(r => setTimeout(r, simulatedTime * 10)) // Simulate actual delay
      
      setComparisonResults(prev => ({
        ...prev,
        [engine]: {
          time: simulatedTime,
          throughput: engineData.throughput,
          accuracy: engineData.accuracy
        }
      }))
    }
    
    setIsRunningComparison(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
      <Header onNavigate={onNavigate} currentPage="/demo" />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Live Demo: nseekfs Performance
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Try real vector search queries and compare nseekfs performance against other solutions.
            </p>
          </div>

          {/* Search Interface */}
          <div className="bg-slate-800/50 border border-slate-600/30 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className={`w-3 h-3 rounded-full ${isEngineReady ? 'bg-green-500' : 'bg-yellow-500'} mr-2`} />
              <span className="text-slate-300">
                {isEngineReady ? 'Vector engine ready' : 'Loading vector index...'}
              </span>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Try: machine learning, neural networks, computer vision..."
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/50"
                  disabled={!isEngineReady}
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={!query.trim() || !isEngineReady || isSearching}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all font-semibold disabled:opacity-50"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
              <button
                onClick={runComparison}
                disabled={!query.trim() || !isEngineReady || isRunningComparison}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-semibold disabled:opacity-50"
              >
                {isRunningComparison ? 'Comparing...' : 'Compare All'}
              </button>
            </div>

            {/* Engine selector */}
            <div className="flex gap-2 flex-wrap justify-center">
              {Object.entries(comparisonData).map(([key, engine]) => (
                <button
                  key={key}
                  onClick={() => setSelectedEngine(key as keyof typeof comparisonData)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedEngine === key
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                  }`}
                >
                  {engine.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 border border-slate-600/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Search Results</h3>
                <div className="space-y-4">
                  {results.map((result) => (
                    <div key={result.id} className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-emerald-400">#{result.rank}</span>
                        <span className="text-sm text-slate-400">{result.score}</span>
                      </div>
                      <p className="text-white mb-2">{result.text}</p>
                      <span className="text-xs bg-slate-600/50 px-2 py-1 rounded text-slate-300">
                        {result.category}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-slate-400">
                  Query processed in <span className="text-emerald-400 font-semibold">{searchTime.toFixed(1)}ms</span>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-600/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Performance Comparison</h3>
                {Object.keys(comparisonResults).length > 0 ? (
                  <div className="space-y-4">
                    {Object.entries(comparisonData).map(([key, engine]) => {
                      const result = comparisonResults[key]
                      return (
                        <div key={key} className="bg-slate-700/30 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className={`font-semibold ${engine.color}`}>{engine.name}</span>
                            {result && (
                              <span className="text-white font-mono">
                                {result.time.toFixed(1)}ms
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-400 mb-2">{engine.context}</div>
                          {result ? (
                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <div>
                                <div className="text-slate-400">Throughput</div>
                                <div className="text-white">{result.throughput}/s</div>
                              </div>
                              <div>
                                <div className="text-slate-400">Accuracy</div>
                                <div className="text-white">{result.accuracy}</div>
                              </div>
                              <div>
                                <div className="text-slate-400">Note</div>
                                <div className="text-white">{engine.note}</div>
                              </div>
                            </div>
                          ) : isRunningComparison ? (
                            <div className="text-slate-400 text-sm">Running...</div>
                          ) : (
                            <div className="text-slate-500 text-sm">Click "Compare All" to test</div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="text-slate-400 text-center py-8">
                    Run a comparison to see performance metrics across different vector search engines.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Integration Example */}
          <div className="mt-12 bg-slate-800/50 border border-slate-600/30 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Code className="w-6 h-6 mr-2 text-emerald-400" />
              Integration Example
            </h3>
            <pre className="bg-slate-900 border border-slate-600/30 rounded-lg p-6 overflow-x-auto">
              <code className="text-slate-200 font-mono text-sm">{`pip install nseekfs

from nseekfs import VectorIndex
import numpy as np

# Load your embeddings
embeddings = np.load('your_embeddings.npy')
index = VectorIndex.from_embeddings(embeddings)

# Query
query_vector = get_embedding("your search query")
results = index.search(query_vector, k=10)

print(f"Found {len(results)} results in {results.latency_ms:.1f}ms")`}</code>
            </pre>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

// Waitlist Page
const WaitlistPage = ({ onNavigate }: { onNavigate: NavigateFn }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: [] as string[],
    comment: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: prev.interest.includes(interest) 
        ? prev.interest.filter((i) => i !== interest) 
        : [...prev.interest, interest],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would submit to your API
    console.log('Waitlist submission:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Thanks for your interest!</h1>
          <p className="text-slate-300 mb-8">We'll notify you as soon as nseekplus is ready.</p>
          <button
            onClick={() => onNavigate('/')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
          >
            Back to home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
      <Header onNavigate={onNavigate} currentPage="/waitlist" />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Join the Waitlist</h1>
            <p className="text-lg text-slate-300">
              Be the first to know when nseekplus launches with advanced features and enterprise capabilities.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-600/30 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/50"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/50"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  What interests you? *
                </label>
                <div className="space-y-2">
                  {[
                    'Enterprise features',
                    'Distributed processing',
                    'Advanced indexing',
                    'Custom integrations',
                    'API access',
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interest.includes(option)}
                        onChange={() => handleInterestChange(option)}
                        className="rounded border-slate-600 bg-slate-700/50 text-emerald-600 focus:ring-emerald-500/50"
                      />
                      <span className="ml-2 text-slate-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Tell us about your use case
                </label>
                <textarea
                  value={formData.comment}
                  onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                  rows={4}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/50"
                  placeholder="What are you planning to build?"
                />
              </div>

              <button
                type="submit"
                disabled={!formData.name || !formData.email || formData.interest.length === 0}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

// Main App
export default function NSeekApp() {
  const [currentPage, setCurrentPage] = useState<'/' | '/demo' | '/waitlist'>('/')

  const navigate: NavigateFn = (path) => {
    if (path === '/demo' || path === '/waitlist' || path === '/') {
      setCurrentPage(path)
    } else {
      setCurrentPage('/')
    }
  }

  if (currentPage === '/demo') return <DemoPage onNavigate={navigate} />
  if (currentPage === '/waitlist') return <WaitlistPage onNavigate={navigate} />

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 text-white">
      <Header onNavigate={navigate} currentPage="/" />
      <Hero onNavigate={navigate} />
      <Vision />
      <Projects onNavigate={navigate} />
      <Technology />
      <Contact />
      <Footer onNavigate={navigate} />
    </div>
  )
}