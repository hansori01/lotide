const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {

  it('returns true for nested objects', () => {
    const object1 = { b: [1], a: { y: 1, z: 1 }, d: 1 };
    const object2 = { b: [1], a: { y: 1, z: 1 }, d: 1 };
    assert.deepEqual(eqObjects(object1, object2), true);
  });

  it('returns true for untiered objects', () => {
    const object1 = { b: 1};
    const object2 = { b: 1};
    assert.deepEqual(eqObjects(object1, object2), true);
  });

});
