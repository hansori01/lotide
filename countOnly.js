const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👌🏻 Assertion Passed 👌🏻 : ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed 💀: ${actual} !== ${expected}`);
  }
};

//allItems: array of strings that we look through and count
//itemstoCount: an object specifying what to count

const countOnly = (allItems, itemsToCount) => { //allItems -> strings to count | itemsToCount -> object that we count true keys and not false.
  const results = {};
  // loop through the array passed down to allItems
  for (const item of allItems) {
    // if the obj passed from itemsToCount has [item] key and the value === true; we continue. if not, end if statement loop continues.
    if (itemsToCount[item]) {
      // checks if results obj has [item] as a key or not.
      if (results[item]) {
        // if the [item] key already exist in results, we add 1 to it's value.
        results[item] += 1;
        // if [item] key does not exist in results obj...
      } else {
        // we create the key and set a value of 1 to it.
        results[item] = 1;
      }
    }
  }
  return results;
};

// we call on this array in countOnly()
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);