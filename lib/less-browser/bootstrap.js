/**
 * Kicks off less and compiles any stylesheets
 * used in the browser distributed version of less
 * to kick-start less using the browser api
 */
/*global window */

// shim Promise if required
require('promise/polyfill.js');

var options = window.less || {};
require("./add-default-options")(options);

var less = module.exports = require("./index")(options);

// if (options.onReady) {

//   less.pageLoadFinished = less.registerStylesheets().then(
//     function () {
//       return less.refresh(less.env === 'development');
//     }
//   );
// }