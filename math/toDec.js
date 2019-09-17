const isBin = require("./isBin")
const isHex = require("./isHex")
const isDec = require("./isDec")

/**
 * Convert a number require(binary or hexadecimal number to decimal
 * @param {string|number} num binary or hexadecimal number
 * @param {object} [options] what number system to convert from `{bin: true} | {hex: true} | {dec: true}`
 *
 * @returns {number|null} decimal if successful, null if not
 * 
 * @example toDec("1F", {hex: true})
 */
const toDec = (num, options) => {
  options = options || {dec: true}
  if (options.dec) return num
  if (options.bin) return parseInt(num, 2)
  if (options.hex) return parseInt(num, 16)
  return null
}

module.exports = toDec
