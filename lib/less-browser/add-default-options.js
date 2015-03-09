// var addDataAttr = require("./utils").addDataAttr,
//     browser = require("./browser");

module.exports = function(options) {

    // use options from the current script tag data attribues
    // addDataAttr(options, browser.currentScript(window));

    if (options.isFileProtocol === undefined) {
        options.isFileProtocol = false;///^(file|(chrome|safari)(-extension)?|resource|qrc|app):/.test(window.location.protocol);
    }

    // Load styles asynchronously (default: false)
    //
    // This is set to `false` by default, so that the body
    // doesn't start loading before the stylesheets are parsed.
    // Setting this to `true` can result in flickering.
    //
    options.async = options.async || false;
    options.fileAsync = options.fileAsync || false;

    // Interval between watch polls
    options.poll = options.poll || (options.isFileProtocol ? 1000 : 1500);

    options.env = options.env || 'production';

    var dumpLineNumbers = false; // /!dumpLineNumbers:(comments|mediaquery|all)/.exec(window.location.hash);
    if (dumpLineNumbers) {
        options.dumpLineNumbers = dumpLineNumbers[1];
    }

    if (options.useFileCache === undefined) {
        options.useFileCache = true;
    }

    if (options.onReady === undefined) {
        options.onReady = false; // worker-custom
    }

};