const without = require('../without');
const assert = require('chai').assert;

describe('#without', () => {

  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse']", () => {
    const arr = ["hello", "world", "lighthouse"];
    const arr2 = ["lighthouse"];
    const expectedOutput = ['hello', 'world'];
    assert.deepEqual(without(arr, arr2), expectedOutput);
  });
});
