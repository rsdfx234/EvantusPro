/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for Netlify deployment
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverExternalPackages: ['prisma']
}

module.exports = nextConfig