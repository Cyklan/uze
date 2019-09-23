
/**
 * 
 * @param {string} str1 First string to compare
 * @param {string} str2 Second string to compare
 * 
 * @returns {boolean} wether str1 and str2 have the same content
 */
const sameContent = (str1, str2) => {
    str1 = str1 || ""
    str2 = str2 || ""
    return str1.toLowerCase() === str2.toLowerCase()
}

module.exports = sameContent