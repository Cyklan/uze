const assert = require("chai").assert
const uze = require("../index")

const lipsum =
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et."

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
