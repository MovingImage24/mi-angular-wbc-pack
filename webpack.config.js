'use strict';

var webpack = require('webpack');
var path = require('path');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
var srcPath = path.resolve(__dirname, 'src', 'index.js');
var dstPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: srcPath,
  output: {
    path: dstPath,
    filename: 'mi-angular-wbc-pack.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },
  plugins: [
    new NgAnnotatePlugin({add: true}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};
