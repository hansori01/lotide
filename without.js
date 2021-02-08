//without() will return a subset of a given array, remvoing
//unwanted elements
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

const without = (arr1, arr2) => {
  let newArr = arr1.slice();//create a shallow copy
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.splice(i, 1);
      }
    }
  }
  return newArr;
};


// const words = ["hello", "world", "lighthouse"];
// const newWords = without(words, ["lighthouse"]);
// console.log(newWords);
// assertArraysEquals(words, ["hello", "world", "lighthouse"]);

module.exports = without;