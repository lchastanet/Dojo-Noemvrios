const assert = require("assert");
const compare = require("./string-compare");

describe("String compare", () => {
  it("compare function exists", () => {
    expect(typeof compare).toBe("function");
  });

  it("compare as two parameters", () => {
    expect(compare.length).toBe(2);
  });

  it("Test one same letter", () => {
    assert.deepStrictEqual(compare("a", "a"), 1);
  });

  it("Test one different letter", () => {
    assert.deepStrictEqual(compare("a", "b"), 0);
  });

  it("Test two letter", () => {
    assert.deepStrictEqual(compare("aa", "ba"), 1);
  });

  it("Test some letter 1", () => {
    assert.deepStrictEqual(compare("cassis", "castor"), 3);
  });

  it("Test some letter 2", () => {
    assert.deepStrictEqual(compare("tacos", "poulpe"), -1);
  });

  it("Test null value", () => {
    assert.deepStrictEqual(compare(null, "a"), -1);
  });
});
