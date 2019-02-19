//We should really be seeing more test coverage here.
//The code may pass this test with these numbers but what if we add different
//inputs and outcomes? Does it still pass?

const {
  numberToReversedDigits
} = require('../src');

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits', () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
  });
});
