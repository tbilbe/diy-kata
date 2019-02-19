//Good test coverage here testing all outcomes of the code

const {
  booleanToWord
} = require('../src');

describe('booleanToWord', () => {
  it('returns Yes when passed a bool of true', () => {
    expect(booleanToWord(true)).toBe('Yes');
  });
  it('returns No when passed a bool of false', () => {
    expect(booleanToWord(false)).toBe('No');
  });
});

