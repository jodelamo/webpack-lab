var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: '[name].js',
    path: 'build',
    publicPath: '/build/'
  }
};
