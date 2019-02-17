//Good, thorough testing done, however you can stack tests without the need to write multiple it statements
//See below:

const {
  numberToReversedDigits
} = require('../src');

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits 12345', () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1])
  });

  it('returns a reversed array of the number\'s digits 6789', () => {
    expect(numberToReversedDigits(6789)).toEqual([9, 8, 7, 6])
  });

  it('returns a reversed array of the number\'s digits 522811', () => {
    expect(numberToReversedDigits(522811)).toEqual([1, 1, 8, 2, 2, 5])

  });

  it('returns a reversed array of the number\'s digits 6789', () => {
    expect(numberToReversedDigits(6789)).toEqual([9, 8, 7, 6])
  });
  
  it('returns a reversed array of the number\'s digits 522811', () => {
    expect(numberToReversedDigits(522811)).toEqual([1, 1, 8, 2, 2, 5])
  });  
});

/*
const { numberToReversedDigits } = require('../src');

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s', () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(6789)).toEqual([9, 8, 7, 6]);
    expect(numberToReversedDigits(522811)).toEqual([1, 1, 8, 2, 2, 5])
  });
*/
