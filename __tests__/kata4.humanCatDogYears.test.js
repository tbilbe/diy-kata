const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    xit('returns three values, human years, cat years, dog years', () => {
      expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    });
    xit('returns three values, human years, cat years, dog years', () => {
        expect(humanCatDogYears(0)).toEqual([0, 0, 0])
      });
      xit('returns three values, human years, cat years, dog years', () => {
        expect(humanCatDogYears(1)).toEqual([1, 15, 15])
      });
      xit('returns three values, human years, cat years, dog years', () => {
        expect(humanCatDogYears(2)).toEqual([2, 24, 24])
      });
      xit('returns three values, human years, cat years, dog years', () => {
        expect(humanCatDogYears(-1)).toEqual("Positive numbers only you cheeky beggar!")
      });
      xit('returns three values, human years, cat years, dog years', () => {
        expect(humanCatDogYears(2.3)).toEqual([2, 24, 24])
      });
  });// Look Ma, no handlebars!!!
