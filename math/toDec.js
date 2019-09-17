const isBin = require("./isBin")
const isHex = require("./isHex")
const isDec = require("./isDec")

/**
 * Convert a number require(binary or hexadecimal number to decimal
 * @param {string|number} num binary or hexadecimal number
 *
 * @returns {number|null} decimal if successful, null if not
 */
const toDec = num => {
  if (isDec(num)) return num
  if (isBin(num)) return parseInt(num, 2)
  if (isHex(num)) return parseInt(num, 16)
  return null
}

module.exports = toDec
