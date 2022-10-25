/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
}

module.exports = {
  images: {
    domains: ['ciersten.sirv.com']
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
