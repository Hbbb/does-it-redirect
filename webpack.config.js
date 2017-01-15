const path = require('path');
const webpack = require('webpack');

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
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ],
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
  },
  node: {
    __dirname: true,
  }
};
