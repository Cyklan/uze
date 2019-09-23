const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
/**
 * 
 * @param {number} length Length of random string, defaults to 8
 * 
 * @returns {string} Random string 
 */
const random = length => {
  length = length || 8
  let text = ""
  for (let i = 0; i < length; i++)
    text += chars.charAt(Math.floor(Math.random() * chars.length))
  return text
}

module.exports = random