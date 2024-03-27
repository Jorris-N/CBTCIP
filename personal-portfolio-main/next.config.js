/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.ctfassets.net',
      'images.unsplash.com',
      'source.unsplash.com',
    ],
  }
}

module.exports = nextConfig
