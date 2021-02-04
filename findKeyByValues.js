
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};

// function takes obj and value and compares the key-value in object to value argument.
const findKeyByValue = (obj, value) => {
  for (let key in obj) { // loop through obj keys
    if (obj[key] === value) { // if the value of the object's current key === value...
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// Test for Function
// console.log(findKeyByValue(bestTVShowsByGenre, 'The Expanse'))

// Test for assertEqual program
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);