/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // TODO: This could break things, but good temporary fix for scroll restoration
  experimental: { scrollRestoration: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**cdn.sanity.io',
      },
    ],
  },
}

module.exports = nextConfig
