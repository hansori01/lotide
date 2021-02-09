const countLetters = require('../countLetters');
const assert = require('chai').assert;


describe("#countLetters", () => {
  it('returns 2 for countLetters("hello").l', () => {
    const input = 'hello';
    const expectedOutput = { h: 1, e: 1, l: 2, o: 1 };
    assert.deepEqual(countLetters('hello').l, 2);
  });
});