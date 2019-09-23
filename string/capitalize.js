const upperFirst = require("./upperFirst")
/**
 * Turns the first character of a string to Uppercase,
 * and the remaining ones to lowercase.
 *
 * @param {string} [str=""] The string to convert.
 *
 * @returns {string} Returns the converted string.
 */
const capitalize = str => {
    if (!str) return ""
    return upperFirst(str.toString().toLowerCase())
}

module.exports = capitalize
