const takeUntil = (array, callback) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) {
      return output;
    }
    output.push(element);
  }
  return output;
};

module.exports = takeUntil;