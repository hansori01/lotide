const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {

  it('returns [2,3] for [1,2,3,4]', () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [2, 3];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it('returns [3,4] for [1,2,3,4,5,6]', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [3, 4];
    assert.deepEqual(middle(input), expectedOutput);
  });
  it('returns [] for [1]', () => {
    const input = [1];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });
  it('returns [3] for [1,2,3,4,5]', () => {
    const input = [1,2,3,4,5];
    const expectedOutput = [3];
    assert.deepEqual(middle(input), expectedOutput);
  });
});
// assertArraysEquals(middle([1]), []);
// assertArraysEquals(middle([1, 2, 3, 4, 5]), [3]);