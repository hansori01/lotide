const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {

  it('returns ["Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const test = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(test), ["Labs"]);
  });
  it('returns [3] for [1,2,3]', () => {
    const test = [1, 2, 3];
    assert.deepEqual(tail(test), [3]);
  });
});




// const words = ["Hello", "Lighthouse", "Labs"];

// assertEqual(tail(words)[0], 'Lighthouse');
// assertEqual(tail(words)[1], 'Labs');