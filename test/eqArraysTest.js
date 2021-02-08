const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays(['1',['2',['2'],[2,[2,3]]],'3'], ['1',['2',['2'],[2,[2,3]]],'3']), true); // => should PASS
assertEqual(eqArrays([1, 2, [3]], [1, 2]), false); // => should PASS
assertEqual(eqArrays([], [1, 2, 3]), false); // => should PASS