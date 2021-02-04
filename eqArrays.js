// assertEqual checks two arguments. If true, PASS👌🏻. If False, FAIL💀.
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};
// test cases commented out
// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(1, 1);
// assertEqual(1 + 1, 2);
// assertEqual(1, Math.random() * 2);

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


console.log(eqArrays(['1','2','3'], ['1','2',3]));


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS
assertEqual(eqArrays([], [1, 2, 3]), false); // => should PASS