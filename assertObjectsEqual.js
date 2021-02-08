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

const eqObjects = (object1, object2) => {
  let sortedKey1 = Object.keys(object1);
  let sortedKey2 = Object.keys(object2);
  if (sortedKey1.length !== sortedKey2.length) {
    return false;
  } else {
    for (let key of sortedKey1) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        } else if (object1[key] !== object2[key] && !Array.isArray(object1[key])) {
          return false;
        }
      }
    }
    return true;
  }
};

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2);