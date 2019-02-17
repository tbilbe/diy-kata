//Full test coverage against all outcomes, well done

const {
  booleanToWord
} = require('../src');
describe('booleanToWord', () => {
  it('returns Yes when value true', () => {

    expect(booleanToWord(true)).toBe('Yes')

  });
  it('returns No when passed a boolean that is false', () => {
    expect(booleanToWord(false)).toBe('No')
  });
});
