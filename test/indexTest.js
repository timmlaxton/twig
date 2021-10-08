const assert = require("assert");
const index = require("../utils/elements_in_array");

describe("Index", function () {
  it("index should return the contents of the array divided into equal sized arrays", function () {
    const actual = index([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
    assert.equal(actual, [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});
