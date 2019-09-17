const isBin = require("./isBin")
const isHex = require("./isHex")
const isDec = require("./isDec")

/**
 * Convert a number require(binary or decimal to hexadecimal
 * @param {string|number} num decimal or binary number
 * @param {object} options what number system to convert from `{bin: true} | {hex: true} | {dec: true}`
 * 
 * @returns {string|null} String with hexadecimal value if successful, null if not successful
 */
const toHex = (num, options) => {
  if (options.hex) return num
  if (options.bin) return parseInt(num, 2).toString(16)
  if (options.dec) return parseInt(num).toString(16)
  return null
}

module.exports = toHex
