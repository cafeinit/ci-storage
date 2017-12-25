/**
 * @fileoverview webapck
 * @author burning <www.cafeinit.com>
 * @version 2017.12.25
 */

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    'main': path.resolve(__dirname, './main.js'),
  },

  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bindle.js',
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

  resolve: {
    alias: {
      'ci-storage': path.resolve(__dirname, '../dist/ci-storage.js'),
    }
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
