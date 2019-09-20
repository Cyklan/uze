/**
 *
 * @param {string|number} num Anything you might suspect to be a hexadecimal number
 *
 * @returns {boolean} Wether or not `num` is a hexadecimal number
 */

const isHex = num => {
  if (!num) return false
  const reg = new RegExp(/^([0-9A-Fa-f]){1,}$/g)
  return reg.test(num.toString())
}

module.exports = isHex
