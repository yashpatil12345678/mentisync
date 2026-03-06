/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}

export default nextConfig
