let path = require('path');
let autoprefixer = require('autoprefixer');
let webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  devServer: {
    contentBase: __dirname + '/docs',
    port: 3000
  },
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }, {
      test: /\.html$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'html-loader'
      }
    }, {
      test: /(\.css|\.scss|\.sass)$/,
      exclude: /(node_modules)/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  }
};
