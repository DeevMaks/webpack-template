const path = require('path')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }]
  },
  devServer: {
    hot: true,
    inline: true,
    host: "localhost",
    port: 8082,
    watchOptions: {
      poll: true
    },
    overlay: true
  }
}
