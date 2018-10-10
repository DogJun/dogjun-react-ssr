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
  }
}

module.exports = merge(baseConfig, serverConfig)
