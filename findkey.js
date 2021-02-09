
const findKey = (obj, callback) => {
  for (let item in obj) { // loop through object
    if (callback(obj[item])) { // callback function accesses the value within the object key.
      return item;
    }
  }
};

module.exports = findKey;
