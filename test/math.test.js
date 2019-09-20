const assert = require("chai").assert
const uze = require("../index")

const binaryNumber = "11001010"
const decimalNumber = 3141593
const hexadecimalNumber = "Da4"

describe("isBin", () => {
  it("should always return a boolean", () => {
    assert.isBoolean(uze.math.isBin(binaryNumber))
    assert.isBoolean(uze.math.isBin(decimalNumber))
    assert.isBoolean(uze.math.isBin(hexadecimalNumber))
    assert.isBoolean(uze.math.isBin("foobar"))
    assert.isBoolean(uze.math.isBin())
  })
  it("should return true when passed a binary number", () => {
    const result = uze.math.isBin(binaryNumber)
    assert.isTrue(result)
  })
  it("should return false when passed a non-binary number", () => {
    const decResult = uze.math.isBin(decimalNumber)
    const hexResult = uze.math.isBin(hexadecimalNumber)

    assert.isFalse(decResult)
    assert.isFalse(hexResult)
    assert.isFalse(uze.math.isBin())
  })
})

describe("isDec", () => {
  it("should always return a boolean", () => {
    assert.isBoolean(uze.math.isDec(binaryNumber))
    assert.isBoolean(uze.math.isDec(decimalNumber))
    assert.isBoolean(uze.math.isDec(hexadecimalNumber))
    assert.isBoolean(uze.math.isDec("foobar"))
    assert.isBoolean(uze.math.isDec())
  })

  it("should return true when passed a decimal number", () => {
    const result = uze.math.isDec(decimalNumber)
    assert.isTrue(result)
  })

  it("should return false when passed a non-decimal number", () => {
    assert.isFalse(uze.math.isDec(hexadecimalNumber))
    assert.isFalse(uze.math.isDec("foobar"))
    assert.isFalse(uze.math.isDec())
  })
})

describe("isHex", () => {
  it("should always return a boolean", () => {
    assert.isBoolean(uze.math.isHex(binaryNumber))
    assert.isBoolean(uze.math.isHex(decimalNumber))
    assert.isBoolean(uze.math.isHex(hexadecimalNumber))
    assert.isBoolean(uze.math.isHex("foobar"))
    assert.isBoolean(uze.math.isHex())
  })

  it("should return true when passed a hexadecimal number", () => {
    const result = uze.math.isHex(hexadecimalNumber)
    assert.isTrue(result)
  })

  it("should return false when passed a non-hexadecimal number", () => {
    assert.isFalse(uze.math.isHex("1FbX"))
    assert.isFalse(uze.math.isHex("foobar"))
    assert.isFalse(uze.math.isHex())
  })
})

describe("toBin", () => {
  it("should convert a non-binary number to a binary number", () => {
    assert.equal(uze.math.toBin(218), "11011010")
    assert.equal(uze.math.toBin("da", { hex: true }), "11011010")
  })
  it("should return a string on success", () => {
    assert.isString(uze.math.toBin(20))
    assert.isString(uze.math.toBin("Da", { hex: true }))
  })
  it("should return null on failure", () => {
    assert.isNull(uze.math.toBin())
    assert.isNull(uze.math.toBin("fooBar"))
  })
})

describe("toDec", () => {
  it("should convert a non-decimal number to a decimal number", () => {
    assert.equal(uze.math.toDec("da", { hex: true }), 218)
    assert.equal(uze.math.toDec("11011010", { bin: true }), 218)
  })
  it("should return a number on success", () => {
    assert.isNumber(uze.math.toDec("1F", { hex: true }))
    assert.isNumber(uze.math.toDec("1100", { bin: true }))
  })
  it("should return null on failure", () => {
    assert.isNull(uze.math.toDec())
    assert.isNull(uze.math.toDec("foobar"))
  })
})

describe("toHex", () => {
  it("should convert a non-hexadecimal number to a hexadecimal number", () => {
    assert.equal(uze.math.toHex(218).toLowerCase(), "da")
    assert.equal(uze.math.toHex("11011010", { bin: true }).toLowerCase(), "da")
  })
  it("should return a string on success", () => {
    assert.isString(uze.math.toHex(218))
    assert.isString(uze.math.toHex("1010", { bin: true }))
  })
  it("should return null on failure", () => {
    assert.isNull(uze.math.toHex("fooBar"))
    assert.isNull(uze.math.toHex())
  })
})

describe("isEven", () => {
  it("should always return a boolean", () => {
    assert.isBoolean(uze.math.isEven(3))
    assert.isBoolean(uze.math.isEven(2))
    assert.isBoolean(uze.math.isEven())
  })
  it("should return true if num is even", () => {
    assert.isTrue(uze.math.isEven(76))
    assert.isTrue(uze.math.isEven(1064))
  })
  it("should return false if num is not even", () => {
    assert.isFalse(uze.math.isEven(7))
    assert.isFalse(uze.math.isEven(3.14))
    assert.isFalse(uze.math.isEven())
  })
})

describe("isOdd", () => {
  it("should always return a boolean", () => {
    assert.isBoolean(uze.math.isOdd(3))
    assert.isBoolean(uze.math.isOdd(2))
    assert.isBoolean(uze.math.isOdd())
  })

  it("should return true if num is odd", () => {
    assert.isTrue(uze.math.isOdd(77))
    assert.isTrue(uze.math.isOdd(1065))
  })
  it("should return false if num is not odd", () => {
    assert.isFalse(uze.math.isOdd(6))
    assert.isFalse(uze.math.isOdd(1204))
    assert.isFalse(uze.math.isOdd())
  })
})

describe("isPrime", () => {
  it("should always return a boolean", () => {
    assert.isBoolean(uze.math.isPrime(19))
    assert.isBoolean(uze.math.isPrime(1024))
    assert.isBoolean(uze.math.isPrime())
  })

  it("should return true if num is prime", () => {
    assert.isTrue(uze.math.isPrime(199))
  })
  it("should return false if num is not prime", () => {
    assert.isFalse(uze.math.isPrime(65536))
    assert.isFalse(uze.math.isPrime())
  })
})

describe("factorial", () => {
  it("should always return a number", () => {
    assert.isNumber(uze.math.factorial(3))
    assert.isNumber(uze.math.factorial(20))
    assert.isNumber(uze.math.factorial())
  })
  it("should return the factor of the given number", () => {
    assert.equal(uze.math.factorial(7), 5040)
    assert.equal(uze.math.factorial(10), 3628800)
  })
})