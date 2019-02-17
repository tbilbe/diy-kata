//Clear and concise testing, well done.

const {
  booleanToWord
} = require('../src');

describe('booleanToWord', () => {
  it('returns Yes when passed true', () => {
    expect(booleanToWord(true)).toBe('Yes')
  });

  it('returns No when value of false passed', () => {

    expect(booleanToWord(false)).toBe('No')
  });

});
