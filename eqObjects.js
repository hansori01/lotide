const assertEqual = (actual, expected) => {
  if (actual === expected) {
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

// eqObjects returns true if both obj has identical keys with identical values
// if key values = array, call eqArrays, if key values = objects, recurse and call eqObjects
const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // check if the value is an array
  for (let key in object1) {
    // console.log('this is key ' + key + ' ' + object1[key] + ' ' + object2[key])
    if (Array.isArray(object1[key])) {
      // console.log(object1[key])
      // if yes, call eqArrays + if eqarrays is false, return false
      if (!eqArrays(object1[key], object2[key])) {
        console.log('hey these arrays are false!');
        return false;
      }
      // continue on + check if the value is an object
    } else if (typeof object1[key] === 'object' && !Array.isArray(object1[key])) {
      // console.log(object1[key] + ' this is ur nested object')
      // if yes, recurse by calling eqObjects again. and if that is false, return false,
      if (!eqObjects(object1[key], object2[key])) {
        // console.log('these objects do not match' + 'object1[key')
        return false;
      }
    } else {
      // compare the key value (not array or object)
      // console.log('we are comparing primitive values now: ' + object1[key])
      return (object1[key] !== object2[key]) ? false : true;
    }
  }
  return true;
};



const objA = { b: [1], a: { y: 1, z: 1 }, d: 1 };
const objB = { b: [1], a: { y: 1, z: 1 }, d: 1 };
console.log(eqObjects(objA, objB));
