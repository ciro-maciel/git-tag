const merge = require('webpack-merge'),
  common = require('../webpack.common.js'),
  CopyPlugin = require('copy-webpack-plugin'),
  imageminMozjpeg = require('imagemin-mozjpeg'),
  imageminPngquant = require('imagemin-pngquant'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  CompressionPlugin = require('compression-webpack-plugin'),
  ImageminPlugin = require('imagemin-webpack-plugin').default,
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (mode) => {
  return merge(common(mode), {
    plugins: [
      new CleanWebpackPlugin(['../../../www/assets/**/*'], {
        root: __dirname,
        verbose: true,
        allowExternal: true,
      }),
      new CopyPlugin([{ from: 'src/assets/img/', to: '../img/' }]),
      new ImageminPlugin({
        plugins: [
          imageminMozjpeg({ quality: 70 }),
          imageminPngquant({
            speed: 1,
            quality: [0.3, 0.5],
          }),
        ],
      }),
      new CompressionPlugin({
        test: /\.js$/,
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: '../../analyzer.html',
      }),
    ],
  });
};