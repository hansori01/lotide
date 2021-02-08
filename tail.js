// returns tail element
const tail = arr => {
  let newArr = arr.slice(arr.length - 1);
  return newArr;
};


module.exports = tail;