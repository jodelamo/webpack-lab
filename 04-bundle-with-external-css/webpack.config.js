var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  module: {
    loaders: [
      { test: /\.css/, loader: ExtractTextPlugin.extract('style', 'css') }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};
