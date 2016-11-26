/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Webpack default config
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');

// create include paths
const includePaths = [
  `includePaths[]=./src/styles`
];

// for better performance, add only need paths.
// const pathFromNodeModules = [
//   'font-awesome/scss',
// ];
//
// // add path from `node_modules`.
// pathFromNodeModules.forEach((modulePath) => {
//   const includePath = path.resolve(__dirname, `./node_modules/${modulePath}`);
//   includePaths.push(`includePaths[]=${includePath}`);
// });

// create sass loader settings
const sassLoaders = [
  'style',
  'css',
  `sass?${includePaths.join('&')}&outputStyle=expanded`,
].join('!');


module.exports = {

  entry: './src',

  output: {
    path: 'builds',
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'builds/',
  },

  devtool: '#inline-source-map',

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3456,
    historyApiFallback: true,
  },

  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
  },

  module: {
    loaders: [
      {
        test:   /\.js/,
        loader: 'babel',
        include: `${__dirname}/src`,
      },
      {
        test:   /.scss/,
        loader: sassLoaders,
      },
      {
        test: /\.(png|svg|jpg)$/,
        loader: 'url',
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url',
      },
    ],
  },

  plugins: [
    new CleanPlugin('builds'),
  ],

}
