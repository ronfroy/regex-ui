'use strict';

var webpack = require('webpack');
var path = require('path');
var htmlPlugin = require('html-webpack-plugin');
var baseConfig = require('./webpack.build.js');

var config = Object.create(baseConfig);

config.debug = true;
config.devtool = 'eval-cheap-module-source-map';

config.devServer = {
    contentBase: path.join(__dirname, '..', 'build'),
    historyApiFallback: true
};

config.plugins.push(
    new htmlPlugin({
        inject: true,
        template: path.join(__dirname, 'src', 'index.html')
    })
);

config.plugins.push(new webpack.NoErrorsPlugin());

module.exports = config;
