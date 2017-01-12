const path = require('path');

const SRC = path.join(__dirname, 'src');
const NODE_MODULES = path.join(__dirname, 'node_modules/');


module.exports = {
  entry: './src/index.js',
  output: {
    path: './client',
    filename: 'bundle.js'
  },
  resolve: {
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
