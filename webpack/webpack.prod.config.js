const path = require('path');
// const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');
const PATHS = {
  src: path.resolve(__dirname, '..', 'src'),
  dist: path.resolve(__dirname, '..', 'dist'),
};

let htmlMinifyOptions = {
  collapseWhitespace: true,
  html5: true,
  minifyCSS: true,
  removeComments: true,
  removeEmptyAttributes: true,
};

module.exports = () => ({
  entry: `${PATHS.src}/index.jsx`,
  output: {
    path: PATHS.dist,
    filename: 'js/bundle.[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
      },
      // { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     config: {
          //       path: 'postcss.config.js',
          //     },
          //   },
          // },
          {
            loader: 'sass-loader',
            // options: {
            //   data: '@import "shared/style/variables.scss";',
            // },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/',
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: '/img',
              publicPath: '/img',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'bundle.[contenthash].css',
      publicPath: './',
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/assets/index.html`,
      minify: htmlMinifyOptions,
    }),
    // new FaviconsWebpackPlugin('assets/favicon.png'),
    // new WebpackPwaManifest({
    //   name: 'nzombobet',
    //   short_name: 'nzombobet',
    //   author: 'Betronic',
    //   description: 'The best bookmaker',
    //   display: 'standalone',
    //   theme_color: '#000000',
    //   background_color: '#000000',
    //   crossorigin: 'use-credentials',
    //   start_url: '.',
    //   icons: [
    //     {
    //       src: path.resolve(__dirname, '..', 'src', 'assets', 'favicon.png'),
    //       sizes: [96, 128, 192, 256, 320, 512, 768],
    //     },
    //   ],
    // }),
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   modifyURLPrefix: {
    //     '//': '/',
    //   },
    // }),
  ],
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '..', 'src')],
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.css'],
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -20,
          chunks: 'all',
        },
      },
    },
    namedChunks: true,
  },
});