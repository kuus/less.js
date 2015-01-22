module.exports = function(options) {

    if (options.isFileProtocol === undefined) {
        options.isFileProtocol = false;
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
    options.poll = options.poll || 1000;

    options.env = options.env || 'production';

    options.dumpLineNumbers = false;

    if (options.useFileCache === undefined) {
        options.useFileCache = true;
    }

	if (options.onReady === undefined) {
		options.onReady = true;
	}

};
