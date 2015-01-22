//
// index.js
// Should expose the additional browser functions on to the less object
//

module.exports = function(options) {
var less = require('../less')();
module.exports = less;
less.options = options;
var environment = less.environment,
    FileManager = require("./file-manager")(options, less.logger),
    fileManager = new FileManager();
environment.addFileManager(fileManager);
less.FileManager = FileManager;

require("./log-listener")(less, options);
var errors = require("./error-reporting")(less, options);
var cache = less.cache = options.cache || require("./cache")(options, less.logger);

//Setup user functions
if (options.functions) {
    less.functions.functionRegistry.addMultiple(options.functions);
}
