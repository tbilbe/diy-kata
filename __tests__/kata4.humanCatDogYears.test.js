//Great test coverage here, however you can stack them to make your code more DRY
//instead of writing a new it statement every time
//See below for an example
//You're also one of the only people on your cohort to write a test and code for
//unexpected user data such as the number 0 being entered.
//Good job!

const {
  humanCatDogYears
} = require('../src');

describe('humanCatDogYears', () => {
  it('returns three values, human years, cat years, dog years', () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64])
  });
  it('returns three values, human years, cat years, dog years', () => {
    expect(humanCatDogYears(0)).toEqual([0, 0, 0])
  });
  it('returns three values, human years, cat years, dog years', () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15])
  });
  it('returns three values, human years, cat years, dog years', () => {
    expect(humanCatDogYears(2)).toEqual([2, 24, 24])
  });
  it('returns three values, human years, cat years, dog years', () => {
    expect(humanCatDogYears(-1)).toEqual("Positive numbers only you cheeky beggar!")
  });
  it('returns three values, human years, cat years, dog years', () => {
    expect(humanCatDogYears(2.3)).toEqual([2, 24, 24]);

  });
});

/*
Example tests:

describe('humanCatDogYears', () => {
  it('returns three values, human years, cat years, dog years', () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    expect(humanCatDogYears(-1)).toEqual("Positive numbers only you cheeky beggar!");
    expect(humanCatDogYears(2.3)).toEqual2, 24, 24]);
  });
});
*/

