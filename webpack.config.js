const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html-loader!templates/index.html'
    })
  ],
  devtool: 'source-map', // Modification de la propriété devtool
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader' // Modification de la propriété "loader" à "use"
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ] // Modification de la propriété "loaders" à "use"
      },
      {
        test: /\.html$/,
        use: 'html-loader' // Modification de la propriété "loader" à "use"
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
};
