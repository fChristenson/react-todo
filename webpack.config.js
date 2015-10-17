var autoprefixer = require('autoprefixer');
var stylelint = require('stylelint');
var precss = require('precss');
var webpack = require('webpack');

module.exports = {

  context: __dirname + '/app',
  entry: './app.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test:   /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer];
  }
};
