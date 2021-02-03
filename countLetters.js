// function checks if the two arguments are equal to each other
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};

// function takes in a str and returns an object with letters as key and it's count in the str as values.
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

//check with assertEqual - exact letter... checking l with 2
assertEqual(countLetters('hello').l, 2)
assertEqual(countLetters('hello my name is sori').m, 2);


// NZ's way of checking above
const testStr = "hello this is sori"
const strResult = countLetters(testStr);

assertEqual(strResult['l'], 2)
assertEqual(strResult['i'], 3)
assertEqual(strResult['h'], 2)