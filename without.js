const without = (arr1, arr2) => {
  let newArr = arr1.slice();
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.splice(i, 1);
      }
    }
  }
  return newArr;
};


// const words = ["hello", "world", "lighthouse"];
// const newWords = without(words, ["lighthouse"]);
// console.log(newWords);
// assertArraysEquals(words, ["hello", "world", "lighthouse"]);

module.exports = without;