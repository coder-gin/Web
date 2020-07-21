const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归xxx所有'),
    new htmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
};
