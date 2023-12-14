const assert = require("assert")
const uniq = require("./uniq.js")

describe("Uniq", () => {
  it("Your function exists", () => {
    assert.strictEqual(typeof uniq, "function")
  })

  it("Your function accepts 1 parameters", () => {
    assert.strictEqual(uniq.length, 1)
  })

  it("Remove duplicates 1", () => {
    assert.deepStrictEqual(
      uniq(["a", "a", "b", "b", "c", "a", "b", "c", "c"]),
      ["a", "b", "c", "a", "b", "c"]
    )
  })

  it("Remove duplicates 2", () => {
    assert.deepStrictEqual(
      uniq(["a", "a", "a", "b", "b", "b", "c", "c", "c"]),
      ["a", "b", "c"]
    )
  })

  it("Remove duplicates 3", () => {
    assert.deepStrictEqual(uniq(["bar", "bar", "bar", "bar", "bar"]), ["bar"])
  })

  it("Handle empty array", () => {
    assert.deepStrictEqual(uniq([]), [])
  })

  it("Handle same value", () => {
    assert.deepStrictEqual(uniq(["foo"]), ["foo"])
  })

  it("Handle same undefined 1", () => {
    assert.deepStrictEqual(uniq([undefined]), [undefined])
  })

  it("Handle undefined mixed", () => {
    assert.deepStrictEqual(uniq([undefined, "a", "a"]), [undefined, "a"])
  })

  it("Handle same empty string", () => {
    assert.deepStrictEqual(uniq([""]), [""])
  })

  it("Don't mutate params", () => {
    let test = ["a", "a", "b"]

    uniq(test)

    assert.deepStrictEqual(test, ["a", "a", "b"], "don't mutate the parameter")
  })
})
