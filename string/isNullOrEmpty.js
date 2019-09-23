/**
 * Checks wether a string variable is null, undefined or empty.
 * 
 * @param {string} str String to check
 * 
 * @returns {boolean} wether str is null or undefined or empty
 */
const isNullOrEmpty = (str) => {
    if (!str) return true
    if (str === "") return true
    return false
}

module.exports = isNullOrEmpty