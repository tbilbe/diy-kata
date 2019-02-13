const { numberToReversedDigits } = require('../src');

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits', () => {
    expect(numberToReversedDigits(12345)).toBe([5,4,3,2,1])
    expect(numberToReversedDigits(6789)).toBe([9,8,7,6])
    expect(numberToReversedDigits(522811)).toBe([1,1,8,2,2,5])
  });
});
