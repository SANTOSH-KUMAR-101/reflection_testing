
// Write a test for a function that accepts an array and return all the even numbers in that array.


// ...................................................................MODULE FILE module.js .......................................................






// ...................................................................MODULE FILE module.js .......................................................


// ...................................................................TEST FILE module.test.js .......................................................
const sort = require("./sort1");

test("Sort Array No even Number", () => {
  expect(sort([1, 1, 1, 1])).toEqual([]);
});

test("Sort Array all even Number", () => {
  expect(sort([2, 2, 2, 2])).toEqual([2, 2, 2, 2]);
});

test("Sort Array having even and odd Number", () => {
  expect(sort([1, 2, 3, 2])).toEqual([2, 2]);
});

test("Sort Array all Zeros", () => {
  expect(sort([0, 0])).toEqual([0, 0]);
});

// ...................................................................TEST FILE module.test.js .......................................................
