const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${inspect(actual)} !== ${inspect(expected)}`);
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