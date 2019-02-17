//As mentioned previously, the test coverage here isn't good enough.
//it's also a good idea to write code that has a failsafe incase the user enters
//any unexpected data.
//In this case, if the user was to enter a 0 or a minus number
//the code would no longer work

const {
  humanCatDogYears
} = require('../src');

describe('humanCatDogYears', () => {
  it('returns array of human, cat and dog years when passed human years', () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);

    //Extra test added:
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);

  });
});
