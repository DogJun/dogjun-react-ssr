const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base')
const devConfig = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/client/index.js'],
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
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    publicPath: '/',
    clientLogLevel: 'none',
    port: 3000,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: 'go-store-client',
    }),
    new webpack.HotModuleReplacementPlugin(), // HMR全局启用
  ]
}

module.exports = merge(baseConfig, devConfig)