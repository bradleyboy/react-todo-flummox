var path = require('path');

module.exports = {
  entry: './app/index.jsx',
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    preLoaders: [
        {
          test: /(\.jsx)|(\.js)$/,
          exclude: /(__tests__|node_modules)/,
          loader: 'isparta-instrumenter-loader'
        },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
            {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader?blacklist=react'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 2 versions', 'sass-loader?indentedSyntax=sass'],
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
