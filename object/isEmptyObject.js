/**
 * @param {Object} obj Any javascript object
 *
 * @returns {boolean} True if empty object, false if not
 */
const isEmptyObject = obj =>
  Object.entries(obj).length === 0 && obj.constructor === Object

module.exports = isEmptyObject
