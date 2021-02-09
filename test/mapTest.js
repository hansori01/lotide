const map = require('../map');
const assert = require('chai').assert;

describe('#eqObjects', () => {

  it('returns [10, 11, 12, 13, 14] for [0, 1, 2, 3, 4] with the callback function +10', () => {
    const arr = [0, 1, 2, 3, 4];
    const cb = x => x + 10;
    const expectedOutput = [10, 11, 12, 13, 14];
    assert.deepEqual(map(arr, cb), expectedOutput);
  });
});