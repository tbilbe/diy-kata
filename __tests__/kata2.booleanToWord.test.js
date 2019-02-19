//Great test coverage, all outcomes tested to ensure no issues arise.

const {
  booleanToWord
} = require('../src');

describe('booleanToWord', () => {
  it('returns Yes when passed true', () => {
    expect(booleanToWord(true)).toBe('Yes')
  });


  it('returns No when passed false', () => {
    expect(booleanToWord(false)).toBe('No')
  });

}); 
