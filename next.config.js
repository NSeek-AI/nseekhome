/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '', // Para GitHub Pages ou similar, se necessário
  assetPrefix: '', // Para CDN, se necessário
}

module.exports = nextConfig