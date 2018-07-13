/**
 * Adds a timestamp in front of a string.
 * @param text {string} Any string.
 * @returns {string} String with timestamp, format: [<timestamp>] <text>
 */
function timestampText(text) {
    return `[${new Date().toUTCString()}] ${text}`;
}

/**
 * Logger with different levels.
 * @type {{info: (function(string): void), warning: (function(string): void), error: (function(string): void), request: (function(string): void)}}
 */
module.exports = {
    /**
     * Add an info level log entry.
     * @param message {string} Message to log.
     */
    info: message => console.info(timestampText(`Info: ${message}`)),
    /**
     * Add a warning level log entry.
     * @param message {string} Message to log.
     */
    warning: message => console.warn(timestampText(`Warning: ${message}`)),
    /**
     * Add an error level log entry.
     * @param error {string|Error} Message or error to log.
     */
    error: error => {
        const message = error instanceof Error ? error.stack : `Error: ${error}`;
        console.error(timestampText(message));
    },
    /**
     * Logs a request.
     * @param req {Request} Express request object.
     */
    request: req => console.log(timestampText(`${req.method} ${req.url}`))
};
