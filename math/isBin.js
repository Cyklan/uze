/**
 *
 * @param {string|number} num Anything you might suspect to be a binary number
 *
 * @returns {boolean} Wether or not `num` is a binary number
 */

const isBin = num => {
  if (!num) return false
  const reg = new RegExp(/^([0-1]){1,}$/g)
  return reg.test(num.toString())
}

module.exports = isBin