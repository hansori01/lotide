const findKey = require('../findKey');
const assert = require('chai').assert;

describe('#eqObjects', () => {

  it('obj with callback returns "noma"', () => {
    const obj = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }
    const callback = x => x.stars === 2;
    const expectedOutput = 'noma';
    assert.deepEqual(findKey(obj, callback), expectedOutput);
  });

})
