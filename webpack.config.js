/**
 * @fileoverview webapck
 * @author burning <www.cafeinit.com>
 * @version 2017.12.25
 */

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    'ci-storage': './src/CIStorage.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: 'CIStorage',
    // libraryTarget: 'var'  // Export by setting a variable: var Library = xxx (default)
    // libraryTarget: 'amd'  // Export to AMD (optionally named - set the name via the library option)
    libraryTarget: 'umd'  // Export to AMD, CommonJS2 or as property in root
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true
      }
      // sourceMap: false,
      // compress: {
      //   warnings: true
      // }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
