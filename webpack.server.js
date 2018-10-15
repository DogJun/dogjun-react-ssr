const merge = require('webpack-merge')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base')
const serverConfig = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'isomorphic-style-loader',
          // {
          //   loader: 'isomorphic-style-loader',
          //   options: {
          //     singleton: true
          //   }
          // },
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

module.exports = merge(baseConfig, serverConfig)
