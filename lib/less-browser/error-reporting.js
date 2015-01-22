module.exports = function(less, options) {

    function error(e, rootHref) {
        if (!options.errorReporting || options.errorReporting === "console") {
            errorConsole(e, rootHref);
        } else if (typeof options.errorReporting === 'function') {
            options.errorReporting("add", e, rootHref);
        }
    }

    function removeErrorConsole(path) {
        //no action
    }

    function removeError(path) {
        if (!options.errorReporting || options.errorReporting === "console") {
            removeErrorConsole(path);
        } else if (typeof options.errorReporting === 'function') {
            options.errorReporting("remove", path);
        }
    }

    function errorConsole(e, rootHref) {
        var template = '{line} {content}';
        var filename = e.filename || rootHref;
        var errors = [];
        var content = (e.type || "Syntax") + "Error: " + (e.message || 'There is an error in your .less file') +
            " in " + filename + " ";

        var errorline = function (e, i, classname) {
            if (e.extract[i] !== undefined) {
                errors.push(template.replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (i - 1))
                    .replace(/\{class\}/, classname)
                    .replace(/\{content\}/, e.extract[i]));
            }
        };

        if (e.extract) {
            errorline(e, 0, '');
            errorline(e, 1, 'line');
            errorline(e, 2, '');
            content += 'on line ' + e.line + ', column ' + (e.column + 1) + ':\n' +
                errors.join('\n');
        }
        if (e.stack && (e.extract || options.logLevel >= 4)) {
            content += '\nStack Trace\n' + e.stack;
        }
        less.logger.error(content);
    }

    return {
        add: error,
        remove: removeError
    };
};
