/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://google.com/", "firebasestorage.googleapis.com"]
  }
}

module.exports = nextConfig
