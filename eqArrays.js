

//recursion added to this function to check nested arrays.
const eqArrays = (arr1, arr2) => {
  //arr length comparison - if fail, return false.
  if (arr1.length !== arr2.length) {
    return false;
  }
  //loop through index of arrays
  for (let i = 0; i < arr1.length; i++) {
    //if arr1-current element is an ARRAY...
    if (Array.isArray(arr1[i])){
      //recurse!
      if(!eqArrays(arr1[i], arr2[i])) {
        //if any of the recursion comparisons fail, return false.
        return false;
      }
    }
    //check if the element comparison fails
    else if (arr1[i] !== arr2[i]) { 
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;