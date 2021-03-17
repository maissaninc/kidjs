const path = require('path');

module.exports = {
  entry: './src/index.js',
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'kid.js',
  },
};
