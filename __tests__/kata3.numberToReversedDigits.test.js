const { numberToReversedDigits } = require('../src');

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
});
