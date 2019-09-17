const isEmptyObject = require("./isEmptyObject")

/**
 * Swap keys and values of objects around
 * @param {*} obj Object of which to swap keys
 *
 * @returns {Object} Object with swapped keys
 */
const swap = obj => {
  if (isEmptyObject(obj)) return obj
  const swapped = {}
  Object.keys(obj).forEach(key => {
    swapped[obj[key]] = key
  })

  return swapped
}

module.exports = swap
