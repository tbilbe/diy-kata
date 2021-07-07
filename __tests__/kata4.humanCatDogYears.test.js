//Poor test coverage here.
//I added a test that fails with your current code.
//It's important to test more than one outcome when writing tests
const {
  humanCatDogYears
} = require('../src');

describe('humanCatDogYears returns converted number in the array of human cat and dog years', () => {
  it('function returns array -> numbers converted to the correct ages', () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);

    //Added extra test
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);

  });
});

describe('', () => {

});
