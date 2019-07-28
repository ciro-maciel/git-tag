const path = require('path'),
  slsw = require('serverless-webpack'),
  nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  target: 'node',
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, '../../www/server'),
    filename: '[name].js',
  },
  optimization: {
    minimize: true,
  },
  performance: {
    hints: false,
  },
  devtool: 'nosources-source-map',
  externals: [nodeExternals()],
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
};
