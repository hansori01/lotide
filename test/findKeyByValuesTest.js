const findKeyByValues = require('../findKeyByValues');
const assert = require('chai').assert;

describe('#findKeyByValues', () => {

  it('obj with "The Wire" returns "drama"', () => {
    const obj = {
      scifi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    const value = "The Wire";
    const expectedOutput = "drama";
    assert.deepEqual(findKeyByValues(obj, value), expectedOutput);
  });

  it('obj with "Superstore" returns "undefined"', () => {
    const obj = {
      scifi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    const value = "Superstore";
    const expectedOutput = undefined;
    assert.deepEqual(findKeyByValues(obj, value), expectedOutput);
  });

});