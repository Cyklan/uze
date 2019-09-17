/**
 * Convert a number = require(decimal or hexadecimal to binary
 * @param {string|number} num decimal or hexadecimal number
 * @param {object} [options] what number system to convert from `{bin: true} | {hex: true} | {dec: true}`
 * 
 * @returns {string|null} String with binary number if successful, null if not successful
 * 
 * @example toBin(20, {dec: true})
 */
const toBin = (num, options) => {
  options = options || {dec: true}
  if (options.bin) return num
  if (options.dec) return parseInt(num).toString(2)
  if (options.hex) return parseInt(num, 16).toString(2)
  return null
}

module.exports = toBin
