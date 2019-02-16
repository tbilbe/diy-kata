const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
 xit('returns Yes when passed a true boolean', () => {
   expect(booleanToWord(true)).toBe('Yes')
});
 xit ('returns No when passed a false boolean', () => {
   expect(booleanToWord(false)).toBe('No')
 });

})