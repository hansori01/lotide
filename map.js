// map function takes in 2 arguments
// an arrap to map
// a callback function
// map function returns a new array based on the results of the callback func.

const assertArraysEquals = (actual, expected) => {
  if (eqArrays(actual, expected)) { // we call eqArrays function with arrays passed down when calling parent function
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { // return false first (or at first true will stop function)
      return false;
    }
  }
  return true;
};

// const words = ['i', 'am', 'sori', 'han', 'who', 'is', 'javascripting'];

const map = function(array, cb) {
  const letters = [];
  for (let item of array) {
    letters.push(cb(item));
  }
  return letters;
};

// const results = map(words, word => word[0]);

//test code
// assertArraysEquals(map([0, 1, 2, 3, 4], x => x + 10), [10, 11, 12, 13, 14]);
// assertArraysEquals(map([3, 4, 2, 5, 1], x => x).sort(), [1, 2, 3, 4, 5]);
// assertArraysEquals(results, [
//   'i', 'a', 's',
//   'h', 'w', 'i',
//   'j'
// ]);

module.exports = map;