//Same as before. Good thorough testing done but be a little more vague in your it statement
//and stack them instead. Keeps the process more DRY.

const {
  humanCatDogYears
} = require('../src');

describe('humanCatDogYears', () => {
  it('should return cat and dog years when passed human years', () => {
    expect(humanCatDogYears(5)).toEqual([5, 36, 39])
    /*
    I added a test here to see how this code would work if the user entered unexpected data
    as you can see, the test fails.
    Always be mindful of having a failsafe for unexpected data as there will be one user
    who enters either a 0 or a negative number, which will then cause the function
    to not work as expected
    */
    expect(humanCatDogYears(0)).toEqual([0, 0, 0])
  });

  it('cat and dog years when passed 10 human years', () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64])
  });

  it('cat and dog years when passed 15 human years', () => {
    expect(humanCatDogYears(15)).toEqual([15, 76, 89])
  });
})
