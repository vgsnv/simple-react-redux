const path = require('path');
const webpack = require('webpack');
const buildPath = path.resolve(__dirname, 'dist');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'src/index.html'), to: buildPath },
    ])
  ],
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)/,
        loader: "awesome-typescript-loader",
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ]
      }
    ]
  }
}
