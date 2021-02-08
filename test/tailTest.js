const tail = require('../tail')
const assertEqual = require('../assertEqual');


const words = ["Hello", "Lighthouse", "Labs"];

assertEqual(tail(words)[0], 'Lighthouse');
assertEqual(tail(words)[1], 'Labs');