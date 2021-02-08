const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};


//function findkey takes two args
// an object
// a callback function
// scan the object and return first key for which the callback returns a truthy value
// if no key is found, return undefined.

const findKey = (obj, callback) => {
  for (let item in obj) { // loop through object
    if (callback(obj[item])) { // callback function accesses the value within the object key.
      return item;
    }
  }
};


// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2), 'noma');


module.exports = findKey;
