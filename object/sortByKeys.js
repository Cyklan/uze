const isEmptyObject = require("./isEmptyObject")

/**
 * @param {Object} unsorted A javascript object with unsorted keys. E.g.: `{k: 1, c: 3, b: 2}`
 *
 * @returns {Object} A javascript object with sorted keys. E.g.: `{b: 2, c: 3, k: 1}`
 */

const sortByKeys = unsorted => {
  if (isEmptyObject(unsorted)) return unsorted
  const sorted = {}
  Object.keys(unsorted)
    .sort()
    .forEach(key => {
      sorted[key] = unsorted[key]
    })
  return sorted
}

export default sortByKeys
