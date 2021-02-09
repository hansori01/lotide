// returns tail element
const tail = arr => {
  let newArr = arr.splice(1);
  return newArr;
};

module.exports = tail;