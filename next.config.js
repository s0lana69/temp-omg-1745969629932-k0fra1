/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  // Ensure old URLs are redirected if needed
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
