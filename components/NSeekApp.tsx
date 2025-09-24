'use client'

import React, { useState, useEffect } from 'react'

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

const Database = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="m3 5v14a9 3 0 0 0 18 0V5" />
    <path d="m3 12a9 3 0 0 0 18 0" />
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

type NavigateFn = (path: string) => void
type GoToSectionFn = (id: string) => void

const Logo = ({ className, onClick }: { className?: string; onClick?: () => void }) => (
  <div className={`font-bold text-2xl cursor-pointer ${className}`} onClick={onClick}>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">NSeek</span>
  </div>
)

const Header = ({
  onNavigate,
  currentPage,
  goToSection,
}: {
  onNavigate: NavigateFn
  currentPage: string
  goToSection: GoToSectionFn
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'vision', label: 'Vision' },
    { id: 'projects', label: 'Projects' },
    { id: 'technology', label: 'Technology' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (item: { id: string; label: string }) => {
    goToSection(item.id)
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
              Try nseekfs
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1 w-6 h-6 justify-center"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`block h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
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
                Try nseekfs
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

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
          Try nseekfs
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

const Projects = ({ onNavigate }: { onNavigate: NavigateFn }) => (
  <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Tools</h2>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
          Artificial Inteligence solutions designed for different use cases and deployment scenarios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col bg-gradient-to-br from-slate-800 to-slate-700 border border-emerald-500/30 rounded-xl p-8 hover:border-emerald-400/50 transition-all hover:transform hover:scale-105 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">nseekfs</h3>
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Available
            </span>
          </div>
          <p className="text-slate-300 mb-6 flex-grow">
            High-performance vector search engine built in Rust. Local processing, sub-millisecond queries, and Python integration.
          </p>
          <div className="mt-auto grid grid-cols-2 gap-4">
            <button
              onClick={() => window.open('https://github.com/NSeek-AI/nseekfs', '_blank')}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all font-semibold shadow-lg"
            >
              GitHub
            </button>
            <button
              onClick={() => window.open('https://pypi.org/project/nseekfs/', '_blank')}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all font-semibold shadow-lg"
            >
              PyPI
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-gradient-to-br from-slate-800 to-slate-700 border border-purple-500/30 rounded-xl p-8 hover:border-purple-400/50 transition-all hover:transform hover:scale-105 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">nseekplus</h3>
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Coming Soon
            </span>
          </div>
          <p className="text-slate-300 mb-6 flex-grow">
            Enhanced version with advanced indexing algorithms and explainable results.
          </p>
          <div className="mt-auto">
            <button
              onClick={() => onNavigate('/waitlist')}
              className="w-full border-2 border-purple-500 text-purple-400 py-3 rounded-lg hover:bg-purple-500/10 transition-all font-semibold"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

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

const Footer = ({ onNavigate, goToSection }: { onNavigate: NavigateFn; goToSection: GoToSectionFn }) => (
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
            <a href="https://github.com/NSeek-AI" className="text-slate-400 hover:text-emerald-400 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onNavigate('/demo')}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                nseekfs
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('/waitlist')}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                nseekplus
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => goToSection('contact')}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Contact
              </button>
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

const DemoPage = ({ onNavigate, goToSection }: { onNavigate: NavigateFn; goToSection: GoToSectionFn }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
      <Header onNavigate={onNavigate} currentPage="/demo" goToSection={goToSection} />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">nseekfs</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-6">
              Try the real vector search and compare nseekfs performance against other solutions.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => window.open('https://github.com/NSeek-AI/nseekfs', '_blank')}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:from-emerald-700 hover:to-teal-700 transition-all"
              >
                GitHub
              </button>
              <button
                onClick={() => window.open('https://pypi.org/project/nseekfs/', '_blank')}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:from-cyan-700 hover:to-blue-700 transition-all"
              >
                PyPI
              </button>
            </div>
          </div>

          <div className="mt-12 bg-slate-800/50 border border-slate-600/30 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Code className="w-6 h-6 mr-2 text-emerald-400" />
              Integration Example
            </h3>
            <pre className="bg-slate-900 border border-slate-600/30 rounded-lg p-6 overflow-x-auto">
              <code className="text-slate-200 font-mono text-sm">{`import numpy as np
import nseekfs

# Create random test vectors
embeddings = np.random.randn(5000, 384).astype(np.float32)
query = np.random.randn(384).astype(np.float32)

# Choose metric: "cosine", "dot", or "euclidean"
metric = "cosine"

# Normalize only if using cosine
if metric == "cosine":
    embeddings = embeddings / np.linalg.norm(embeddings, axis=1, keepdims=True)
    query = query / np.linalg.norm(query)

# Build index
index = nseekfs.from_embeddings(
    embeddings,       # numpy array of float32 vectors
    metric=metric,
    normalized=True,  # True if using cosine and vectors are pre-normalized
)
print(f"Index built: {index.rows} vectors x {index.dims} dims")

# Run a simple query
results = index.query(query, top_k=5)
print("Top-3 results:", results[:3])

# Run batch queries
queries = np.random.randn(10, 384).astype(np.float32)
queries = queries / np.linalg.norm(queries, axis=1, keepdims=True)
batch_results = index.query_batch(queries, top_k=3)
print(f"Batch queries processed: {len(batch_results)}")

# Detailed query with timing
detailed = index.query_detailed(query, top_k=5)
print(f"Detailed query took {detailed.query_time_ms:.2f} ms")

# Save and reload index
path = index.index_path
reloaded = nseekfs.from_bin(path)
print(f"Reloaded index: {reloaded.rows} vectors")
`}</code>
            </pre>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} goToSection={goToSection} />
    </div>
  )
}

const WaitlistPage = ({ onNavigate, goToSection }: { onNavigate: NavigateFn; goToSection: GoToSectionFn }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: [] as string[],
    comment: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: prev.interest.includes(interest) ? prev.interest.filter((i) => i !== interest) : [...prev.interest, interest],
    }))
  }

  const encode = (data: Record<string, any>) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const payload = {
        'form-name': 'waitlist',
        name: formData.name,
        email: formData.email,
        interest: formData.interest.join(', '),
        comment: formData.comment || '',
      }
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      })
      setSubmitted(true)
    } catch (err) {
      console.error('Netlify Forms submit error:', err)
      alert('Não foi possível submeter. Tenta novamente em breve.')
    } finally {
      setSubmitting(false)
    }
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
      <Header onNavigate={onNavigate} currentPage="/waitlist" goToSection={goToSection} />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Join the Waitlist</h1>
            <p className="text-lg text-slate-300">
              Be the first to know when nseekplus launches with advanced features and enterprise capabilities.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-600/30 rounded-xl p-8">
            <form
              onSubmit={handleSubmit}
              name="waitlist"
              data-netlify="true"
              netlify-honeypot="bot-field"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="waitlist" />
              <p hidden>
                <label>
                  Não preencher: <input name="bot-field" onChange={() => {}} />
                </label>
              </p>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/50"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/50"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">What interests you? *</label>
                <div className="space-y-2">
                  {['Enterprise features', 'Explainable results', 'Advanced indexing', 'Custom integrations', 'API access'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="interest"
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
                <label className="block text-sm font-medium text-slate-300 mb-2">Tell us about your use case</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData((prev) => ({ ...prev, comment: e.target.value }))}
                  rows={4}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/50"
                  placeholder="What are you planning to build?"
                />
              </div>

              <button
                type="submit"
                disabled={submitting || !formData.name || !formData.email || formData.interest.length === 0}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {submitting ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} goToSection={goToSection} />
    </div>
  )
}

export default function NSeekApp() {
  const [currentPage, setCurrentPage] = useState<'/' | '/demo' | '/waitlist'>('/')
  const [pendingHash, setPendingHash] = useState<string | null>(null)

  useEffect(() => {
    const id = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, 0)
    return () => clearTimeout(id)
  }, [currentPage])

  useEffect(() => {
    if (currentPage === '/' && pendingHash) {
      const id = pendingHash
      setPendingHash(null)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
  }, [currentPage, pendingHash])

  const navigate: NavigateFn = (path) => {
    if (path === '/demo' || path === '/waitlist' || path === '/') {
      setCurrentPage(path)
    } else {
      setCurrentPage('/')
    }
  }

  const goToSection: GoToSectionFn = (id) => {
    if (currentPage !== '/') {
      setPendingHash(id)
      setCurrentPage('/')
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const NetlifyFormDetector = () => (
    <form name="waitlist" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="interest" />
      <textarea name="comment" />
    </form>
  )

  if (currentPage === '/demo') {
    return (
      <>
        <NetlifyFormDetector />
        <DemoPage onNavigate={navigate} goToSection={goToSection} />
      </>
    )
  }

  if (currentPage === '/waitlist') {
    return (
      <>
        <NetlifyFormDetector />
        <WaitlistPage onNavigate={navigate} goToSection={goToSection} />
      </>
    )
  }

  return (
    <>
      <NetlifyFormDetector />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 text-white">
        <Header onNavigate={navigate} currentPage="/" goToSection={goToSection} />
        <Hero onNavigate={navigate} />
        <Vision />
        <Projects onNavigate={navigate} />
        <Technology />
        <Contact />
        <Footer onNavigate={navigate} goToSection={goToSection} />
      </div>
    </>
  )
}
