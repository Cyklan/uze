/**
 *
 * @param {number} num Number to check wether its even
 *
 * @returns {boolean} Wether num is even
 */
const isEven = num => {
  if (!num) return false
  return num % 2 === 0
}

module.exports = isEven
