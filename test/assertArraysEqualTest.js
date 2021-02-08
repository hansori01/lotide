const assertArraysEquals = require('../assertArraysEqual')
const eqArrays = require('../eqArrays');

assertArraysEquals([1, 2, 3], [1, 2, 3]);
assertArraysEquals([1, 2, 3], [1, 2]);
assertArraysEquals([1, [2, 3]], [1, [2, 3]]);