const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};


// take in a str (sentence) and return a count of each of the letters within it.


const countLetters = str => {
  const results = {};
  // loop through each char of string
  for (let char of str) {
    // omits any character that are ' ' space
    if (char !== ' ') {
      if (results[char]) {
        // if the results[char] exists, + 1.
        results[char] += 1;
      } else {
        // if this does not exist - create the key(char) and set it to 1.
        results[char] = 1;
      }
    }
  }
  // return results object.
  return results;
};


console.log(countLetters('hello my name is sori'));