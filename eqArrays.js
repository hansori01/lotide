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

//recursion added to this function to check nested arrays.
const eqArrays = (arr1, arr2) => {
  //arr length comparison - if fail, return false.
  if (arr1.length !== arr2.length) {
    return false;
  }
  //loop through index of arrays
  for (let i = 0; i < arr1.length; i++) {
    //if arr1-current element is an ARRAY...
    if (Array.isArray(arr1[i])){
      //recurse!
      if(!eqArrays(arr1[i], arr2[i])) {
        //if any of the recursion comparisons fail, return false.
        return false;
      }
    }
    //check if the element comparison fails
    else if (arr1[i] !== arr2[i]) { 
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays(['1',['2',['2'],[2,[2,3]]],'3'], ['1',['2',['2'],[2,[2,3]]],'3']), true); // => should PASS
assertEqual(eqArrays([1, 2, [3]], [1, 2]), false); // => should PASS
assertEqual(eqArrays([], [1, 2, 3]), false); // => should PASS