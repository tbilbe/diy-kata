//Would like to see more test coverage her in case of unexpected numbers
//Good test overall though
const {
  numberToReversedDigits
} = require('../src');

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits', () => {

    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1])
  });
});
