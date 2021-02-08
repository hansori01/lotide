const eqArrays = require('./eqArrays');

/*

assertArraysEquals takes in 2 arrays and console.logs
appropriate message to the console.

*/
const assertArraysEquals = (actual, expected) => {
  if (eqArrays(actual, expected)) { // we call eqArrays function with arrays passed down when calling parent function
    console.log();
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log();
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEquals;