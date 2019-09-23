/**
 * 
 * @param {string} str The string to convert.
 * 
 * @returns {string} Returns the converted string.
 * 
 * @example
 * 
 * upperFirst("foo") : Foo
 * 
 * upperFirst("BAR") : BAR
 *  
 */

const upperFirst = str => {
    if (str === undefined) return "Undefined"
    if (str === null) return "Null"
    const beginning = str.substr(0, 1).toUpperCase()
    return `${beginning}${str.substr(1)}`
}

module.exports = upperFirst