
// make a middle function that returns a new array with only middle Element(s)
const middle = function(array) {
  let output = [];
  // for arrays <= 2 return and empty array.
  if (array.length <= 2) {
    //console.log(output)
    return output;
  }
  if (array.length % 2 === 0) {
    // divide array length /2 = x
    let index = array.length / 2;
    output.push(array[index - 1], array[index]);
  } else {
    // if odd numbered, return 1 Element
    // array lenght /2 = (round down)x
    let index = Math.floor(array.length / 2);
    output.push(array[index]);
  }
  return output;
};

module.exports = middle;