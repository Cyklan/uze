/**
 *
 * @param {string|number} num Anything you might suspect to be a decimal number
 *
 * @returns {boolean} Wether or not `num` is a decimal number
 */

const isDec = num => !isNaN(num)

module.exports = isDec
