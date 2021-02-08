//compare 2 arrays
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
//prints assertion passed/fail based on arrays passed through eqArrays()
const assertArraysEquals = (actual, expected) => {
  if (eqArrays(actual, expected)) { // we call eqArrays function with arrays passed down when calling parent function
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};

// function to flatten arrays nested within array
const flatten = arr => {
  let newArr = [];
  for (let element of arr) {
    if (!Array.isArray(element)) {
      newArr.push(element);
    } else { //if element is an array, we loop within and push elements
      for (let i = 0; i < element.length; i++) {
        newArr.push(element[i]);
      }
    }
  }

  return newArr;
};

// console.log(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]));
// assertArraysEquals(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]);

module.exports = flatten;