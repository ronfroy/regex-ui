'use strict';

var webpack = require('webpack');

var baseConfig = require('./webpack.build.js');

var config = Object.create(baseConfig);

config.debug = false;

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    })
);

config.plugins.push(new webpack.optimize.UglifyJsPlugin({ comments: false }));
config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
config.plugins.push(new webpack.optimize.DedupePlugin());

module.exports = config;
