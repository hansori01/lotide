const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {

  it('returns ["Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const test = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(test), ["Lighthouse","Labs"]);
  });
  it('returns [3] for [1,2,3]', () => {
    const test = [1, 2, 3];
    assert.deepEqual(tail(test), [2, 3]);
  });
});