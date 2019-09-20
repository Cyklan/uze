/**
 * 
 * @param {number} num Number to check prime
 * 
 * @returns {boolean} Wether num is prime or not 
 */
const isPrime = num => {
    if (isNaN(num)) return false
    if (num % 1 !== 0) return false
    if (num === 2) return true
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

module.exports = isPrime