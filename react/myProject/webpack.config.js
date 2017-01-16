var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');//css合并抽离

module.exports = {
  // 入口
  entry: [
    'webpack-dev-server/client?http://localhost', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    __dirname + '/src/most.js'
  ],

  // 出口
  output: {
    path: __dirname + '/myProject/js&css/',

    filename: 'most.js'
  },

  // sourcemap
  devtool: 'source-map',

  // 配置模块
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ET.extract('style','css')
      },
      {
        test: /\.scss$/,
        loader: ET.extract('style', 'css!sass')
      },
      {
        test: /\.less$/,
        loader: ET.extract('style', 'css!less')
      },
      {
          test: /\.(jpg|png)$/,
          exclude: /node_modules/,
          loader: 'url?limit=4000'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },


  //plugins定义
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),//js压缩
    new ET('most.css', { //样式单独合并
      allChunks: true
    }),

    new webpack.HotModuleReplacementPlugin(),//代码热替换

    new webpack.NoErrorsPlugin()//允许错误不打断程序

  ]

};
