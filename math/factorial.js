/**
 * 
 * @param {number} num Number to factor to
 * 
 * @returns {number} Factored number 
 */
const factorial = num => {
    if (!num) return 0
    let x = 1
    for (let i = 1; i <= num; i++) {
        x *= i
    }
    return x
}

module.exports = factorial