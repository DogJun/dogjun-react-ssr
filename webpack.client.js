const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base')
const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          'less-loader'
        ]
      }
    ]
  }
}

module.exports = merge(baseConfig, clientConfig)
