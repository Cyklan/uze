const isHex = require("./isHex")

/**
 * Convert a number require(binary or decimal to hexadecimal
 * @param {string|number} num decimal or binary number
 * @param {object} options what number system to convert from `{bin: true} | {hex: true} | {dec: true}`
 * 
 * @returns {string|null} String with hexadecimal value if successful, null if not successful
 */
const toHex = (num, options) => {
  if (!num) return null
  let result
  options = options || {dec: true}
  if (options.hex) result = num
  if (options.bin) result = parseInt(num, 2).toString(16)
  if (options.dec) result = parseInt(num).toString(16)
  return isHex(result) ? result : null
}

module.exports = toHex
