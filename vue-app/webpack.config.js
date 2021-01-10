const path = require('path');
const glob = require('glob');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function collectSafelist() {
  return {
    standard: [],
    deep: [],
    greedy: [
      /^w-/,
      /^text-/,
      /^font-/,
      /^hover:/,
      /^focus:/,
      /^align-items/,
      /^justify/,
      /^data/
    ]
  };
}

const PATHS = {
  src: path.join(__dirname, 'src')
};

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://nomilkcustomeroverview.com/'
  },
  devServer: {
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: 8080,
    allowedHosts: [
      'nomilkcustomeroverview.com',
      'nomilk-customer-overview.local',
      'bachelor.local'
    ],
    publicPath: 'http://nomilkcustomeroverview.com/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new PurgecssPlugin({
      safelist: collectSafelist,
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};
