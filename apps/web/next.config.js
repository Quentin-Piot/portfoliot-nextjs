const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
