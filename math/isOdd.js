const isEven = require("./isEven")

/**
 *
 * @param {number} num Number to check wether its odd
 *
 * @returns {boolean} Wether num is odd
 */
const isOdd = num => {
  if (!num) return false
  return !isEven(num)
}

module.exports = isOdd
