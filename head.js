// returns head element
const head = arr => {
  return arr[0];
};
//checks assertEqual from actual to expected
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");