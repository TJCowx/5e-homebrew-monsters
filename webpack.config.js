const path = require('path');
const WebpackAutoInject = require('webpack-auto-inject-version');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      favicon: './src/assets/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: './src/yourfile.css',
    }),
    new WebpackAutoInject({
      PACKAGE_JSON_PATH: './package.json',
      PACKAGE_JSON_INDENT: 2,
      components: {
        InjectAsComment: true,
        InjectByTag: true,
      },
      componentsOptions: {
        InjectAsComment: {
          tag: 'Version: {version} - {date}',
          dateFormat: 'h:MM:ss TT', // change timezone: `UTC:h:MM:ss` or `GMT:h:MM:ss`
          multiLineCommentType: false, // use `/** */` instead of `//` as comment block
        },
        InjectByTag: {
          fileRegex: /\.+/,
          // regexp to find [AIV] tag inside html, if you tag contains unallowed characters you can adjust the regex
          // but also you can change [AIV] tag to anything you want
          AIVTagRegexp: /(\[AIV])(([a-zA-Z{} ,:;!()_@\-"'\\\/])+)(\[\/AIV])/g,
          dateFormat: 'h:MM:ss TT',
        },
      },
    }),
  ],
};
