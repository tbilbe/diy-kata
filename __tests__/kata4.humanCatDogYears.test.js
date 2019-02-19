//Here we see the importance of thorough test coverage.
//In the event a user enters unexpected or wrong data, such as a 0
//the function written to past the test would fail
//It's important to have a failsafe for unexpected code to ensure it doesn't
//break everything

const {
  humanCatDogYears
} = require('../src');

describe('numberToReversedDigits', () => {
  it('Returns an array of human, cat and dog years', () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(50)).toEqual([50, 216, 264]);

    //Extra test added:
    expect(humanCatDogYears(0)).toEqual([0, 0, 0])

  });
});

