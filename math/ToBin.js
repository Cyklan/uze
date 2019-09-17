import isBin from "./isBin"
import isHex from "./isHex"
import isDec from "./isDec"

/**
 * Convert a number from decimal or hexadecimal to binary
 * @param {string|number} num decimal or hexadecimal number
 *
 * @returns {string|null} String with binary number if successful, null if not successful
 */
const toBin = num => {
  if (isBin(num)) return num
  if (isDec(num)) return parseInt(num).toString(2)
  if (isHex(num)) return parseInt(num, 16).toString(2)
  return null
}

export default toBin
