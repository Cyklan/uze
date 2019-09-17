/**
 *
 * @param {string} str
 * @param {number} maxLength
 *
 * @returns {string} A string trimmed to a specified length
 */

const trimText = (str, maxLength) => trimText(str, maxLength, false)

/**
 *
 * @param {string} str String to trim
 * @param {number} maxLength Max Length of string
 * @param {boolean} mindWords Wether to mind spaces when trimming the string
 *
 * @returns {string} A string trimmed to a specified length
 */

const trimText = (str, maxLength, mindWords) => {
  const trimmedString = str.substr(0, maxLength)
  return mindWords
    ? trimmedString.substr(
        0,
        Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
      )
    : trimmedString
}

trimText("abc", 10)

export default trimText
