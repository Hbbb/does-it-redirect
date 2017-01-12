const path = require('path');

const SRC = path.resolve('./src');
const NODE_MODULES = path.resolve('./node_modules/');


module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './client',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [SRC, NODE_MODULES]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['inferno']
        }
      }
    ]
  }
};
