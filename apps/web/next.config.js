const nextConfig = {
  entry: "./src/js/main.js",
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  module: {
      loaders: [
          {
              test: /\.jsx?$/,
              exclude:/(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'react']
              }
          }
      ]
  },

};



module.exports = nextConfig
