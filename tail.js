// returns tail element
const tail = arr => {
  let newArr = arr.slice(1);
  return newArr;
};
//checks assertEqual from actual to expected
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};

const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(tail(words)[0], 'Lighthouse');
assertEqual(tail(words)[1], 'Labs');