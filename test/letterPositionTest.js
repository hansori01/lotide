const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#eqObjects', () => {

  it('returns [0] for ("hello").h', () => {
    const str = 'hello';
    const expectedOutput = { h: [0], e: [1], l: [2, 3], o: [4] };
    assert.deepEqual(letterPositions(str), expectedOutput);
  });
});