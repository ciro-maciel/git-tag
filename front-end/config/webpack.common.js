const path = require('path'),
  Dotenv = require('dotenv-webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = (mode) => {
  return {
    devtool: 'source-map',
    mode: mode,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, '../www', 'assets/js/'),
      filename: '[hash:12].js',
      chunkFilename: '[chunkhash:12].js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                'es2015',
                {
                  modules: false,
                },
              ],
              'stage-2',
              'react',
            ],
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: mode === 'development' ? 'index.html' : '../../index.html',
        showErrors: true,
        chunksSortMode: 'dependency',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new Dotenv({
        path: path.join(__dirname, '/' + mode + '/.env'),
        safe: false,
        systemvars: false,
        silent: false,
      }),
      new ProgressBarPlugin({
        format: 'Build [:bar] :percent (:elapsed seconds)',
        clear: false,
      }),
    ],
  };
};
