/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: "YOUR URL HERE",
    API_KEY: "YOUR API KEY HERE"
  },
  eslint: {
    // You can disable this to re-establish ESLinting during builds
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
