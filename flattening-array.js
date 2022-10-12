const assert = require("assert");

function flatten(arr) {
  let flatArray = [];
  if (!Array.isArray(arr) || !arr.length) return [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatArray.push(...flatten(item));
    } else {
      flatArray.push(item);
    }
  });

  return flatArray;
}

assert.deepEqual(
  [1, 2, 3, 10, 11, 4],
  flatten([1, [2, [3, [10, 11]]], 4]),
  "Nested Array of numbers"
);
assert.deepEqual(
  ["a", "b", "c", "e", "f", "d"],
  flatten(["a", ["b", ["c", ["e", "f"]]], "d"]),
  "Nested array of strings"
);
assert.deepEqual([], flatten([]), "Empty array");
assert.deepEqual([], flatten(null), "Null as parameter");
assert.deepEqual([], flatten(""), "Empty String as parameter");
