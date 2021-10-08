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

  it("should return 2 arrays of length 2 and 1 array of length 1 checking a remainder of > 0.5", function () {
    const actual = elementsInArray([1, 2, 3, 4, 5], 3);
    assert.deepStrictEqual(actual, [[1, 2], [3, 4], [5]]);
  });
});
