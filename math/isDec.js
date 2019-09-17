/**
 *
 * @param {string|number} num Anything you might suspect to be a decimal number
 *
 * @returns {boolean} Wether or not `num` is a decimal number
 */

const isDec = num => {
  const reg = new RegExp(/[0-9]/g)
  return reg.test(num.toString())
}

export default isDec
