const isBin = require("./isBin")
const isHex = require("./isHex")
const isDec = require("./isDec")

/**
 * Convert a number require(binary or decimal to hexadecimal
 * @param {string|number} num decimal or binary number
 *
 * @returns {string|null} String with hexadecimal value if successful, null if not successful
 */
const toHex = num => {
  if (isHex(num)) return num
  if (isBin(num)) return parseInt(num, 2).toString(16)
  if (isDec(num)) return parseInt(num).toString(16)
  return null
}

module.exports = toHex
