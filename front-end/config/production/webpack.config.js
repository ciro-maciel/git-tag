const merge = require('webpack-merge'),
  common = require('../webpack.common.js'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  CompressionPlugin = require('compression-webpack-plugin'),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (mode) => {
  return merge(common(mode), {
    plugins: [
      new CleanWebpackPlugin(['../../www/assets/js/*.*'], {
        root: __dirname,
        verbose: true,
        allowExternal: true,
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
