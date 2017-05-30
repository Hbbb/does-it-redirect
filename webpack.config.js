const path = require('path');
const webpack = require('webpack');

const SRC = path.resolve('./client/src');
const NODE_MODULES = path.resolve('./node_modules/');


module.exports = {
  entry: './client/src/app.js',
  output: {
    path: './client/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js'],
    root: [SRC, NODE_MODULES]
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false }),
  //  new webpack.optimize.UglifyJsPlugin({
  //    compress: {
  //      screw_ie8: true,
  //      warnings: false
  //    },
  //    mangle: {
  //      screw_ie8: true
  //    },
  //    output: {
  //      comments: false,
  //      screw_ie8: true
  //    }
  //  }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
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
