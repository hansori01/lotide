
const middle = function(array) {
  let output = [];
  if (array.length <= 2) {
    return output;
  }
  if (array.length % 2 === 0) {
    let index = array.length / 2;
    output.push(array[index - 1], array[index]);
  } else {
    let index = Math.floor(array.length / 2);
    output.push(array[index]);
  }
  return output;
};

module.exports = middle;