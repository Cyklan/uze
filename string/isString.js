
/**
 * 
 * @param {*} str Variable to check wether its a string
 * 
 * @returns {boolean} Wether str is a string or not
 * 
 * @example
 * 
 * uze.string.isString("foo") : true
 * 
 * uze.string.isString(23) : false
 */
const isString = str => typeof(str) === "string"

module.exports = isString