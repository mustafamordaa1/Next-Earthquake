/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mapquestapi.com',
        port: '',
        pathname: '/staticmap/v5/**',
      },
    ],
  },
  }
