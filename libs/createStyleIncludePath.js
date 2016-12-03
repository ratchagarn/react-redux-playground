/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Lib - create style include paths
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

const path = require('path');

// create include paths
const includePaths = [
  'includePaths[]=./src/styles'
];

// for better performance, add only need paths.
const pathFromNodeModules = [
  './node_modules/normalize-scss/sass',
  require('bourbon').includePaths[0]
];

// add path from `node_modules`.
pathFromNodeModules.forEach((modulePath) => {
  const newPath = path.resolve(__dirname, '..', modulePath);
  includePaths.push(`includePaths[]=${newPath}`);
});


module.exports = includePaths;
