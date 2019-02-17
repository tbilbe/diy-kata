//Great test coverage. Good job
const {
  booleanToWord
} = require('../src');

describe('booleanToWord', () => {
  it('returns Yes when passed a true boolean', () => {
    expect(booleanToWord(true)).toBe('Yes')
  });
  it('returns No when passed a false boolean', () => {
    expect(booleanToWord(false)).toBe('No')
  });

})

