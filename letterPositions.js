
const assertEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};
//takes 2 arrays and returns boolean on their match
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


const letterPositions = function(sentence) {
  const results = {};
  // loop through each index using [i]
  for (let i = 0; i < sentence.length; i++) {
    // we store the character is this variable for ease of calling
    let char = sentence[i];
    // if character is not '_', execute code within this if.
    if (char !== ' ') {
      // if results[char] exists... just push i to results.sentence[i] array.
      if (results[char]) {
        results[char].push(i); // we can also say results[sentence[i]]
      } else {
        // if results[char] does not exist (when we first encounter this letter)
        // create the key which is [i] and store the [i] as the value.
        results[char] = [i];
      }
    }
  }
  return results;
};
console.log(letterPositions('hello'));
// test letterPositions function
// console.log(letterPositions('hello my name sori'))

// check using eqArrays
// console.log(eqArrays(letterPositions('hello').h, [0]),
//   eqArrays(letterPositions('hello').e, [1]),
//     eqArrays(letterPositions('hello').l, [2,3]))

// check using assertEqual
assertEqual(letterPositions('hello').h, [0]);
