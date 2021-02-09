const countLetters = require('../countLetters');
const assert = require('chai').assert;


describe("#countLetters", () => {
  it('returns 2 for countLetters("hello").l', () => {
    const input = 'hello';
    assert.deepEqual(countLetters(input).l, 2);
  });
});