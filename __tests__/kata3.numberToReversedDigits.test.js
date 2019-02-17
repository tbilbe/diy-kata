//Really should be seeing more test coverage here than just one line.
//When working with numbers in JS it's always a good idea to test multiple outcomes

const {
  numberToReversedDigits
} = require('../src');

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits', () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
  });
});
