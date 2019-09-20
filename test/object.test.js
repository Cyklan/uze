const assert = require("chai").assert
const uze = require("../index")

const mockObject = { eve: "bob", alize: "trudy" }

describe("isEmptyObject", () => {
  it("should return a boolean", () => {
    assert.isBoolean(uze.object.isEmptyObject({}))
    assert.isBoolean(uze.object.isEmptyObject({ foo: "bar" }))
    assert.isBoolean(uze.object.isEmptyObject())
  })
  it("should return true on success", () => {
    assert.isTrue(uze.object.isEmptyObject({}))
    assert.isTrue(uze.object.isEmptyObject(new Object()))
  })
  it("should return on failure", () => {
    assert.isFalse(uze.object.isEmptyObject())
    assert.isFalse(uze.object.isEmptyObject({ foo: "bar" }))
    assert.isFalse(uze.object.isEmptyObject("baz"))
  })
})

describe("sortByKeys", () => {
  it("should return an object", () => {
    assert.isObject(uze.object.sortByKeys(mockObject))
    assert.isObject(uze.object.sortByKeys())
    assert.isObject(uze.object.sortByKeys({}))
  })
  it("should return an object with its keys sorted alphanumerically", () => {
    assert.deepEqual(uze.object.sortByKeys(mockObject), {
      alize: "trudy",
      eve: "bob"
    })
    assert.deepEqual(uze.object.sortByKeys({}), {})
  })
})

describe("swap", () => {
  it("should always return an object", () => {
    assert.isObject(uze.object.swap(mockObject))
    assert.isObject(uze.object.swap())
    assert.isObject(uze.object.swap({}))
  })
  it("should swap the keys of an object with its value", () => {
    assert.deepEqual(uze.object.swap(mockObject), {
      bob: "eve",
      trudy: "alize"
    })
  })
})
