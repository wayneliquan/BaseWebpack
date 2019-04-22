const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output : {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module : {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
          test: /\.jsx$/,
          loader: 'babel-loader'                  //处理jsx文件
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,            //stylus-loader和postcss-loader自己都会生成sourceMap,如果前面stylus-loader已生成了sourceMap
            }                               //那么postcss-loader可以直接引用前面的sourceMap
          },'stylus-loader']
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"': '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new HTMLPlugin()
  ]
}

if (isDev) {
  config.mode= 'development'
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port:8001,
    host:'0.0.0.0',
    overlay: {
      errors: true
    }
    // open: true
    // historyFallback: {}
    ,hot: true
  }
  config.plugins.push (
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.mode= 'production'
}

module.exports = config
