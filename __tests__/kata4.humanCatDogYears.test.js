const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns three values, human years, cat years, dog years', () => {
      expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    });
    it('returns three values, human years, cat years, dog years', () => {
        expect(humanCatDogYears(0)).toEqual([0, 0, 0])
      });
      it('returns three values, human years, cat years, dog years', () => {
        expect(humanCatDogYears(1)).toEqual([1, 15, 15])
      });
      it('returns three values, human years, cat years, dog years', () => {
        expect(humanCatDogYears(2)).toEqual([2, 24, 24])
      });
      it('returns three values, human years, cat years, dog years', () => {
        expect(humanCatDogYears(-1)).toEqual("Positive numbers only you cheeky beggar!")
      });
      it('returns three values, human years, cat years, dog years', () => {
        expect(humanCatDogYears(2.3)).toEqual([2, 24, 24])
      });
  });// Look Ma, no handlebars!!!
