
const map = function(array, cb) {
  const letters = [];
  for (let item of array) {
    letters.push(cb(item));
  }
  return letters;
};

module.exports = map;