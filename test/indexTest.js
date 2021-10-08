const assert = require("assert");
const elementsInArray = require("../utils/elements_in_array");

describe("elementsInArray", function () {
  it("should return the contents of the array divided into equal sized arrays", function () {
    const actual = elementsInArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
    assert.deepStrictEqual(actual, [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});
