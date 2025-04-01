/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Tell Next.js where to find the App Router directory
  appDir: "src/app",
};

module.exports = nextConfig;
