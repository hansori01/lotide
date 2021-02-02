// returns head element
const head = arr => {
  let elem = arr[0];
  if (typeof elem === 'number') {
    return parseInt(elem);
  } else return elem.toString();
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