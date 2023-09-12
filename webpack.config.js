const path = require('path');
const UnoCSS = require('@unocss/webpack').default
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  cache: {
    type: 'filesystem',
    cacheDirectory:  path.join(__dirname, '.cache/')
  },
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    UnoCSS(),
    new CleanWebpackPlugin,
    // 添加 VueLoaderPlugin 插件
    new VueLoaderPlugin,
    // 解析为 html 模版
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'), // html模版地址
        filename: 'index.html', // 打包后输出的文件夹名
        title: 'webpack5搭建vue3项目'
    }),
  ],
  optimization: {
    realContentHash: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
  ]
 }
};