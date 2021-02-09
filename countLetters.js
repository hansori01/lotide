const countLetters = str => {
  const results = {};
  for (let char of str) {
    if (char !== ' ') {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;