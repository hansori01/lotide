const assertArraysEquals = (actual, expected) => {
  if (eqArrays(actual, expected)) { // we call eqArrays function with arrays passed down when calling parent function
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

//takeUntil takes an array and callback
// callback returns a truthy value. When we hit 'true' we stop the loop.
//the output is a new array that
const takeUntil = (array, callback) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) {
      return output;
    }
    output.push(element);
  }
  return output;
};

const data0 = ['hello', 'this', 'is', 'fun'];
const test = takeUntil(data0, x => x.length <= 2);
assertArraysEquals(test, ['hello', 'this']);

console.log('---');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEquals(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEquals(results2, ["I've", 'been', 'to', 'Hollywood']);
