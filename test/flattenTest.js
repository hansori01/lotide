const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#eqObjects', () => {

  it('should return [ 1, 2, 3, 4, 5, 6 ] for [1, 2, [3, 4], 5, [6]]', () => {
    const arr = [1, 2, [3, 4], 5, [6]];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(arr), expectedOutput);
  });

})