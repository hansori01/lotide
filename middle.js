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

const assertArraysEquals = (actual, expected) => {
  if (eqArrays(actual, expected)) { // we call eqArrays function with arrays passed down when calling parent function
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};


// make a middle function that returns a new array with only middle Element(s)
const middle = function(array) {
let output = [];
// for arrays <= 2 return and empty array.
if (array.length <= 2) {
  //console.log(output)
  return output;
}
if (array.length % 2 === 0) {
  // divide array length /2 = x
  let index = array.length / 2
  output.push(array[index -1], array[index])
} else {
  // if odd numbered, return 1 Element
  // array lenght /2 = (round down)x 
  let index = Math.floor(array.length / 2);
  output.push(array[index])
}
return output;
}
//test assertions

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
// console.log(middle([1])) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]

assertArraysEquals(middle([1, 2, 3, 4]), [2, 3])
assertArraysEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4])
assertArraysEquals(middle([1]), [])
assertArraysEquals(middle([1, 2, 3, 4, 5]), [3])