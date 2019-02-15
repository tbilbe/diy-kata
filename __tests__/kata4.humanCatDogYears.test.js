const { humanCatDogYears } = require('../src');

describe('humanCatDogYears returns converted number in the array of human cat and dog years', () => {
  it('function returns array -> numbers converted to the correct ages', () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64])
  });
});

describe('', () => {

});
