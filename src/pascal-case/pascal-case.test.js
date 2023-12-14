const assert = require("assert")
const pascalCase = require("./pascal-case.js")

describe("PascalCase", () => {
  it("Test", () => {
    assert.strictEqual(typeof pascalCase, "function")
    assert.strictEqual(pascalCase.length, 1)
    assert.strictEqual(
      pascalCase.toString().includes("for "),
      false,
      "don't use a loop"
    )
    assert.strictEqual(
      pascalCase.toString().includes("while "),
      false,
      "don't use a loop"
    )
    assert.strictEqual(pascalCase("this is sparta"), "ThisIsSparta")
    assert.strictEqual(pascalCase("sO rAdicAL DuDe"), "SoRadicalDude")
    let test = "no mutation"
    pascalCase(test)
    assert.strictEqual(test, "no mutation", "don't mutate the parameter")
  })
})
