// 引入path模块用于设置路径
const path = require('path');

// 引入插件用于提取css为单独文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 入口（从哪里进入开始解析）
  entry: './src/js/index.js',

  // 出口（最终加工完的代码输出到哪里）
  output: {
    path: path.join(__dirname, 'dist'), // 输出文件路径配置
    filename: 'index.js' // 输出文件名
  },

  module: {
    rules: [
      // 使用less-loader解析less为css
      /* {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // 创建一个style标签，将js中的css放入其中
          },
          {
            loader: 'css-loader' // 将css以CommonJs语法打包到js中
          },
          {
            loader: 'less-loader' // 将less转换成css
          }
        ]
      }, */

      /* 
      // 使用file-loader处理图片（不优秀，不推荐使用）
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader', // 如果不做图片转base64，可以用file-loader
            options: {
              outputPath: 'img', //图片最终输出的位置
              publicPath: '../dist/img', //css资源图片路径,由于将src当作根路径，所以需要翻出去。
              // 一个有意思的现象，在根目录下的index.html引入无所谓publicPath的路径，但是src下的index.html不一样
              name: '[hash:5].[ext]' //修改图片名称
            }
          }
        ]
      } */

      // 使用url-loader处理图片转base64（推荐）
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader', // 如果不做图片转base64，可以用file-loader
            options: {
              limit: 8192, // 当图片小于8kb的时候，转base64
              outputPath: 'img', // 图片最终输出的位置
              publicPath: '../img', // css资源图片路径
              name: '[hash:5].[ext]' // 修改图片名称
            }
          }
        ]
      },
      // 提取css为单独文件
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  // 所有插件在如下数组中声明且实例化
  plugins: [new ExtractTextPlugin('./css/styles.css')] // 注意：插件中的路径是以output输出文件为准
};
