/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Test - Setup
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

process.env.NODE_ENV = 'development'; // (development|production)

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function() { return null; };
require.extensions['.png'] = function() { return null; };
require.extensions['.jpg'] = function() { return null; };

require('babel-register')();

// when need document object, enable it.
// require('mocha-jsdom')();
