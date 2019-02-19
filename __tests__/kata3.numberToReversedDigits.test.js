//Good test stacking and coverage. Good DRY code principals

const {
  numberToReversedDigits
} = require('../src');

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits', () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(13579)).toEqual([9, 7, 5, 3, 1]);
    expect(numberToReversedDigits(54321)).toEqual([1, 2, 3, 4, 5]);
  });
});
