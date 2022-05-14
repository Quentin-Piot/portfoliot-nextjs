const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
}

module.exports = withPWA(nextConfig)
