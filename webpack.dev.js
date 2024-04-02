const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'kid': './src/index.js',
    'neural-network': './src/libraries/neural-network/index.js',
    'hand-tracker': './src/libraries/hand-tracker/index.js'
  },
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
};
