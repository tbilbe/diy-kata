const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('returns Fizz when passed a multiple of 3', () => {
    expect(booleanToWord(true)).toBe('Yes');
  });
  it('returns No when passed a bool of false', () => {
    expect(booleanToWord(false)).toBe('No');
  });

});