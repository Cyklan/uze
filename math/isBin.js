/**
 *
 * @param {string|number} num Anything you might suspect to be a binary number
 *
 * @returns {boolean} Wether or not `num` is a binary number
 */

const isBin = num => {
  const reg = new RegExp(/[01]/g)
  return reg.test(num.toString())
}

export default isBin
