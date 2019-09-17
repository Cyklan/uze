/**
 *
 * @param {string|number} num Anything you might suspect to be a hexadecimal number
 *
 * @returns {boolean} Wether or not `num` is a hexadecimal number
 */

const isHex = num => {
  const reg = new RegExp(/[0-9A-Fa-f]/g)
  return reg.test(num.toString())
}

export default isHex
