
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log();
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log();
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};



module.exports = assertEqual;