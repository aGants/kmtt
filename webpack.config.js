const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ttf|woff|woff2|eot||svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [ 'vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-env' ]
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [ 
            '@babel/preset-env', 
            '@babel/preset-typescript' 
        ]
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          presets: [ 
            '@babel/preset-env',
            '@babel/babel-preset-vue'
          ]
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    hot: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ]
}