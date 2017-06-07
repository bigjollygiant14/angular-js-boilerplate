var path = require('path');

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
    }]
  }
};
