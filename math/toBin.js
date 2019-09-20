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
  if (!num) return null
  let result
  options = options || {dec: true}
  if (options.bin) result = num
  if (options.dec) result = parseInt(num).toString(2)
  if (options.hex) result = parseInt(num, 16).toString(2)
  return !isNaN(result) ? result : null
}

module.exports = toBin
