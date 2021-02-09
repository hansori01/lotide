const countOnly = require('../countOnly');
const assert = require('chai').assert;


describe("#countOnly", () => {
  it('returns { Fang: 2, Jason: 1 } for { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const conditionalValues = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }
    const expectedOutcome = { Fang: 2, Jason: 1 };
    assert.deepEqual(countOnly(firstNames, conditionalValues), expectedOutcome);
  });
});
