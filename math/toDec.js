import isBin from "./isBin"
import isHex from "./isHex"
import isDec from "./isDec"

/**
 * Convert a number from binary or hexadecimal number to decimal
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

export default toDec
