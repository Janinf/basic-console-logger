/**
 * Ansii escape code to reset all colors and styles.
 * @type {string}
 */
const ansiiResetColors = '\x1b[0m';

/**
 * Ansii escape codes for foreground colors.
 * @type {{red: string, green: string, yellow: string, cyan: string}}
 */
const ansiiColorCodes = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m'
};

/**
 * Checks if a string is a valid ansii color code.
 * @param code {string} Ansii color code.
 * @returns {boolean} True if code is valid.
 */
function isValidAnsiiColorCode(code) {
    return !!Object.values(ansiiColorCodes).find(c => c === code);
}

/**
 *
 * @param text {string}
 * @param color
 * @returns {string}
 */
function colorText(text, color) {
    if (!isValidAnsiiColorCode(color)) throw new Error(`No valid ansii color code, known codes: ${Object.values(ansiiColorCodes).join(', ')}`);

    return `${color}${text}${ansiiResetColors}`;
}

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
 * @type {{info: (function(string): void), warning: (function(string): void), error: (function(string): void), request: (function(string))}}
 */
module.exports = {
    /**
     * Add an info level log entry.
     * @param message {string} Message to log.
     */
    info: message => console.log(colorText(timestampText(message), ansiiColorCodes.green)),
    /**
     * Add a warning level log entry.
     * @param message {string} Message to log.
     */
    warning: message => console.log(colorText(timestampText(message), ansiiColorCodes.yellow)),
    /**
     * Add an error level log entry.
     * @param message {string} Message to log.
     */
    error: message => console.log(colorText(timestampText(message), ansiiColorCodes.red)),
    /**
     * Logs a request.
     * @param req {Request} Express request object.
     */
    request: req => console.log(colorText(timestampText(`${req.method} ${req.url}`), ansiiColorCodes.cyan))
};
