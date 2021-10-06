const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [ 'vue-style-loader', 'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
                @import "@/styles/_variables.scss";
              `
            }
          }
        ],
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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/], 
          appendTsxSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'ts-loader'
          },
          esModule: true
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