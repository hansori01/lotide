const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {

  it('returns true for nested arrays', () => {
    const arr1 = [1];
    const arr2 = [1];
    assert.deepEqual(eqArrays(arr1, arr2), true);
  });
  it('returns false for unmatching arrays', () => {
    const input = [1, 2, [3]];
    const expectedOutput = [1, 2];
    assert.deepEqual(eqArrays(input, expectedOutput), false);
  });
});
