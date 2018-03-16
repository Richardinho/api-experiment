var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js', 
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [{
      test: /\.js$/,        
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
        options: {
          sourceMap: true,
        }
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          camelCase: true,
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'template app',
      template: 'index.html',
    }),
    new CopyWebpackPlugin(['root-folder'
    ])
  ]
};
