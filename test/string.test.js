const assert = require("chai").assert
const uze = require("../index")

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et."

describe("trimText", () => {
  it("should always return a string", () => {
    assert.isString(uze.string.trimText(lipsum, 20))
    assert.isString(uze.string.trimText())
    assert.isString(uze.string.trimText(lipsum))
    assert.isString(uze.string.trimText(lipsum, 20, true))
    assert.isString(uze.string.trimText(lipsum, 20, false))
  })
  it("should return a string of the specified length", () => {
    assert.equal(uze.string.trimText(lipsum, 20).length, 20)
    assert.isAtMost(uze.string.trimText(lipsum, 20, true).length, 20)
  })
  it("shouldn't make a string bigger than its initial size", () => {
    assert.equal(uze.string.trimText(lipsum, 3000).length, lipsum.length)
  })
})

describe("capitalize", () => {
  it("should always return a string", () => {
    assert.isString(uze.string.capitalize("foo"))
    assert.isString(uze.string.capitalize())
    assert.isString(uze.string.capitalize("BAR"))
    assert.isString(uze.string.capitalize(15))
  })
  it("should always capitalize the first character", () => {
    const firstChar = uze.string.capitalize(lipsum).substr(0, 1)
    assert.equal(firstChar, "L")
  })
  it("should always lowercase the remaining characters.", () => {
    const rest = uze.string.capitalize(lipsum).substr(1)
    assert.equal(rest, lipsum.substr(1).toLowerCase())
  })
})

describe("isNullOrEmpty", () => {
  it("should always return a boolean", () => {
    assert.isBoolean(uze.string.isNullOrEmpty())
    assert.isBoolean(uze.string.isNullOrEmpty(null))
    assert.isBoolean(uze.string.isNullOrEmpty(""))
    assert.isBoolean(uze.string.isNullOrEmpty("foo bar"))
  })
  it("should return true if the string is null, undefined or empty", () => {
    assert.isTrue(uze.string.isNullOrEmpty())
    assert.isTrue(uze.string.isNullOrEmpty(""))
    assert.isTrue(uze.string.isNullOrEmpty(null))
  })
  it("should return false, if the string contains anything", () => {
    assert.isFalse(uze.string.isNullOrEmpty("foo bar"))
    assert.isFalse(uze.string.isNullOrEmpty(lipsum))
  })
})

describe("upperFirst", () => {
  it("should alywas return a string", () => {
    assert.isString(uze.string.upperFirst("foo bar"))
    assert.isString(uze.string.upperFirst(lipsum))
    assert.isString(uze.string.upperFirst())
  })
  it("should always capitalize the first letter of a string", () => {
    assert.equal(uze.string.upperFirst("foo bar").substr(0, 1), "F")
    assert.equal(uze.string.upperFirst(lipsum).substr(0, 1), "L")
    assert.equal(uze.string.upperFirst().substr(0, 1), "U")
    assert.equal(uze.string.upperFirst(null).substr(0, 1), "N")
  })
})

describe("sameContent", () => {
  it("should always return a boolean", () => {
    assert.isBoolean(uze.string.sameContent("foo Bar", "FoO bAr"))
    assert.isBoolean(uze.string.sameContent("LoREM iPSum", "lorem ipsum"))
    assert.isBoolean(uze.string.sameContent("lol", "oder?"))
    assert.isBoolean(uze.string.sameContent())
  })
  it("should return true if the two strings have the same content", () => {
    assert.isTrue(uze.string.sameContent("foo BAR", "FOO bar"))
    assert.isTrue(uze.string.sameContent("LorEM IpSUm", "lorem ipsum"))
    assert.isTrue(uze.string.sameContent())
  })
  it("should return false if the two strings have different content", () => {
    assert.isFalse(uze.string.sameContent("foo", "bar"))
    assert.isFalse(uze.string.sameContent("lol", "oder?"))
  })
})

describe("isString", () => {
  it("should always return a boolean", () => {
    assert.isBoolean(uze.string.isString(lipsum))
    assert.isBoolean(uze.string.isString(23))
    assert.isBoolean(uze.string.isString(true))
    assert.isBoolean(uze.string.isString())
  })
  it("should return true if parameter is a string", () => {
    assert.isTrue(uze.string.isString("foo bar"))
    assert.isTrue(uze.string.isString(lipsum))
  })
  it("should return false if parameter is not a string", () => {
    assert.isFalse(uze.string.isString(true))
    assert.isFalse(uze.string.isString(23))
    assert.isFalse(uze.string.isString())
  })
})

describe("random", () => {
  it("should always return a string", () => {
    assert.isString(uze.string.random())
    assert.isString(uze.string.random(20))
  })
  it("should return a string of specified length", () => {
    let length = 20
    assert.equal(uze.string.random(length).length, length)
    assert.equal(uze.string.random().length, 8)
  })
})
