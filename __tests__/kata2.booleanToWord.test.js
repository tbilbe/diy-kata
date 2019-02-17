//Good test coverage, this is ideal when it comes to testing all outcomes.

const {
  booleanToWord
} = require('../src');

describe('booleanToWord', () => {
  it('returns Yes when passed true', () => {
    expect(booleanToWord(true)).toBe('Yes');
  });

  it('returns No when passed false', () => {
    expect(booleanToWord(false)).toBe('No');
  });
});
