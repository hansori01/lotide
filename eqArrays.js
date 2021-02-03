// assertEqual checks two arguments. If true, PASS👌🏻. If False, FAIL💀.
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};

//test cases commented out 
// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(1, 1);
// assertEqual(1 + 1, 2);
// assertEqual(1, Math.random() * 2);

// eqArrays() takes 2 arrays and checks for exact match.
const eqArrays = (arr1, arr2) => {
  let bool = true; // bool starts as true
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) { // if each array with same index === true
      bool = true; // bool stays true
    } else {
      bool = false; // if no match or different length, bool = false
    }
  }
  return bool;
};
//we run eqArrays within assertEqual. Result of eqArrays must === the second argument
//in this case (true)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS