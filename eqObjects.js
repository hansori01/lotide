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
  // check if the value is an array
  for (let key in object1) {
    // console.log('this is key ' + key + ' ' + object1[key] + ' ' + object2[key])
    if (Array.isArray(object1[key])) {
      // console.log(object1[key])
      // if yes, call eqArrays + if eqarrays is false, return false
      if (!eqArrays(object1[key], object2[key])) {
        console.log('hey these arrays are false!')
        return false
      };
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
      return (object1[key] !== object2[key]) ? false : true
    }
  }
  return true;
};

const objA = { b: [1], a: { y: 1, z: 1 }, d: 1 };
const objB = { b: [1], a: { y: 1, z: 1 }, d: 1 };
console.log(eqObjects(objA, objB));






/* old eqObjects without checking for nested objects

const eqObjects = (object1, object2) => {
  let sortedKey1 = Object.keys(object1);
  // console.log(sortedKey1)
  let sortedKey2 = Object.keys(object2);
  // console.log(sortedKey2)
  if (sortedKey1.length !== sortedKey2.length) { // checks for length of keys
    return false;
  } else {
    for (let key of sortedKey1) {// loop through each array
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        } else if (object1[key] !== object2[key] && !Array.isArray(object1[key])) { //we compare the current key in loop and compare the value of that key in obj.
          return false;
          //we are just checking the value of each key. if value or key doesn't exist - it results to false.
        }
      }
    }
    return true;
  }
};



// const objA = { a: { z: 1 }, b: 2 }
// const objB = { a: { z: 1 }, b: 2 }
// eqObjects(objA, objB)


assertEqual(eqObjects(objA, objB), true)

const cd = { d: "1", c: ["2", 3] };
const dc = { c: ["2", 3], d: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);



// console.log(eqObjects({ a: "1", f: "3", d: '1', c: '0' }, { a: "1", b: "2", d: '1', c: '0' }))
// console.log(eqObjects({ a: "1", b: "1", d: '2', c: '0'  }, { a: "1", b: "2", d: '1', c: '0' }))

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, ba), true); // => true
// assertEqual(eqObjects(ab, abc), false); // => false

// //.values check
// const obj = { a: "1", b: "2", d: '1', c: '0' }
// let values = Object.values(obj).sort
// console.log(values)



*/
