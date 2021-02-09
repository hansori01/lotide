const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe('#takeUntil', () => {

  it('returns ["hello", "this"] for arr', () => {
    const arr = ['hello', 'this', 'is', 'fun'];
    const cb = x => x.length <= 2;
    const expectedOutput = ['hello', 'this'];
    assert.deepEqual(takeUntil(arr, cb), expectedOutput);
  });
});
