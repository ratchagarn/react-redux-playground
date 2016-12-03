/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Lib - styles loader
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

const combineLoaders = require('webpack-combine-loaders');

module.exports = combineLoaders([
  {
    loader: 'css-loader'
  },
  {
    loader: 'sass-loader',
    query: {
      modules: true,
      localIdentName: '[name]__[local]___[hash:base64:5]',
      includePaths: [
        './src/styles',
        './node_modules/normalize-scss/sass',
        require('bourbon').includePaths[0]
      ]
    }
  }
]);
