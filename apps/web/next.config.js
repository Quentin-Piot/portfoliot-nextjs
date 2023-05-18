module.exports = {
  entry: "./src/js/main.js",
  output: {
      path:__dirname+ '/dist/',
      filename: "bundle.js",
      publicPath: '/'
  },
  devServer: {
      inline: false,
      contentBase: "./dist",
  },
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
  }

};
