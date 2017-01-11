'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  "target": 'web',
  "cache": true,
  "entry": {
    module: path.join(__dirname, 'src', 'index.js'),
  },

  "resolve": {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '',
    filename: 'regex-ui.js',
    pathInfo: true
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react']
        }
      },
    ]
  },

  plugins: []
};


