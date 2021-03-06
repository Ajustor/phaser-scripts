const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const webpack = require('webpack')
const paths = require('./paths')

// Define plugin
const definePluginOptions = {
  CANVAS_RENDERER: JSON.stringify(true),
  WEBGL_RENDERER: JSON.stringify(true),
}

// Html webpack plugin
const htmlPluginOptions = {
  inject: true,
  template: paths.appHtml,
}

// Copy webpack plugin
const patterns = []
if (fs.existsSync(paths.appStatic)) {
  patterns.push({
    context: paths.appPath,
    from: 'static',
    to: 'static',
  })
}

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  entry: paths.appEntry,
  output: {
    path: paths.appBuild,
    publicPath: '/',
    filename: 'js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        use: 'ts-loader',
        include: paths.appSrc,
      },
      {
        loader: 'file-loader',
        test: [/\.(png|jpg|gif|svg|xml|ogg|mp3|wav)$/],
        options: {
          name: 'assets/[name].[ext]',
        },
      },
      {
        loader: 'raw-loader',
        test: [/\.(vert|frag)$/],
        options: {
          name: 'assets/[name].[ext]',
        },
      },
    ],
  },
  optimization: {
    moduleIds: 'named',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /phaser/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin(definePluginOptions),
    new HtmlWebpackPlugin(htmlPluginOptions),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin({ patterns }),
  ],
  resolve: {
    alias: {
      '@': paths.appSrc,
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  performance: {
    hints: false,
  },
}
