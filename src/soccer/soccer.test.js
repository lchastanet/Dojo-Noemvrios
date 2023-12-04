const assert = require("assert");
const getScore = require("./soccer.js");

describe("Soccer", () => {
  it("Your function does not exist", () => {
    assert.strictEqual(typeof getScore, "function");
  });

  it("returns the correct array", () => {
    assert.strictEqual(getScore.length, 1);
    assert.deepStrictEqual(getScore(null), "Illegal argument");
    assert.strictEqual(getScore([]), "0-0 : draw");
    assert.strictEqual(getScore([1, 1, 1]), "3-0 : team 1 wins the game");
    assert.strictEqual(getScore([2, 2, 2]), "0-3 : team 2 wins the game");
    assert.strictEqual(getScore([1, 1, 2, 2]), "2-2 : draw");
    assert.strictEqual(getScore([1, 2, 1, 3, 1, 2]), "Illegal argument");
    assert.strictEqual(getScore(["1", "2"]), "Illegal argument");
  });
});
