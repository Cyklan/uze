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
  let result
  options = options || {dec: true}
  if (options.dec) result = num
  if (options.bin) result = parseInt(num, 2)
  if (options.hex) result = parseInt(num, 16)
  return !isNaN(result) ? result : null
}

module.exports = toDec
