//compare 2 arrays
const eqArrays = require('./eqArrays')
const assertArraysEquals = require('./assertArraysEqual')

const flatten = arr => {
  let newArr = [];
  for (let element of arr) {
    if (!Array.isArray(element)) {
      newArr.push(element);
    } else {
      for (let i = 0; i < element.length; i++) {
        newArr.push(element[i]);
      }
    }
  }

  return newArr;
};
module.exports = flatten;







// const flatten = arr => {
//   let newArr = [];
//   for (let element of arr) {
//     if (!Array.isArray(element)) {
//       newArr.push(element);
//     } else { //if element is an array, we loop within and push elements
//       for (let i = 0; i < element.length; i++) {
//         newArr.push(element[i]);
//       }
//     }
//   }

//   return newArr;
// };