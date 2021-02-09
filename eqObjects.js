const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === 'object' && !Array.isArray(object1[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else {
      return (object1[key] !== object2[key]) ? false : true;
    }
  }
  return true;
};

module.exports = eqObjects;