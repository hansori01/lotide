
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { // return false first (or at first true will stop function)
      return false;
    }
  }
  return true;
};

const eqObjects = (object1, object2) => {
  // let nameofKey = Object.keys(object1);//[ 'a', 'b' ]
  // console.log(sortedKey1)
  // let nameofKey2 = Object.keys(object2);//[ 'a', 'b' ]
  // console.log(sortedKey2)

  //loop through to check if object1[key] is typeof object
  for (let key in object1) {
    // console.log!!!
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      } 
    } 
      else if ((!Array.isArray(object1[key])) && (typeof object1[key] === 'object')) {
        if (!eqObjects(object1[key], object2[key])){
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      } 
  } return true;

//



    // if (sortedKey1.length !== sortedKey2.length) { // checks for length of keys
    //   return false;
    // } else {
    //   for (let key of sortedKey1) {
    //     // console.log(`key ${key} object ${object1[key]}`)
    //     if (Array.isArray(object1[key])) {
    //       // console.log('this is an array')
    //       if (!eqArrays(object1[key], object2[key])) {
    //         return false;
    //       }
    //       else if (object1[key] !== object2[key] && !Array.isArray(object1[key])) {
    //         return false;
    //       }
    //     } else {
    //       if (object1[key] !== object2[key]) {
    //         return false
    //       }
    //     }
    //   }
    //   return true;
    // }
  };
  const objA = { a: { y: 1, z: 2 }, b: 1 }
  const objB = { a: { y: 1, z: 2 }, b: 2 }
  console.log(eqObjects(objA, objB))



// for (let obj of sortedKey1) {
//   // console.log(`key ${obj} object ${sortedKey1}`)

// if ((!Array.isArray(object1[obj])) && (typeof object1[obj] === 'object')) {
// // console.log(object1[obj])
// if ((!Array.isArray(object2[obj])) && (typeof object2[obj] === 'object')) {
// // console.log(object2[obj])
// // console.log('i found an obj running')
// let test = eqObjects(object1[obj], object2[obj]); //returns false
// if (!test) {
//   return false;
// }
// } else {
// return false;
// }
// }
// }