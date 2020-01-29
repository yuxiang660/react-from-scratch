const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  context: path.resolve(__dirname, 'src'),
  // npm i -D webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, 'public/assets'),
    stats: 'errors-only',
    open: true,
    port: 1234,
    compress: true
  },
  module: {
    rules: [
      {
        // npm i -D file-loader
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/',
            }
          }]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    // npm i -D html-webpack-plugin
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // npm i -D clean-webpack-plugin
    new CleanWebpackPlugin(),
    // npm i -D extract-text-webpack-plugin
    new MiniCssExtractPlugin()
  ],
}
