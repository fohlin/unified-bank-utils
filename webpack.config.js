const webpack = require('webpack');
const path = require('path');
const pkg = require('./package');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false
  },
  entry: {
    bundle: './src/unified-bank-utils.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `${pkg.name}, version ${pkg.version}`
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: `${pkg.name}-lib.js`,
  }
};
