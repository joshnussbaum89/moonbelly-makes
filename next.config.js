/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**cdn.sanity.io',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
