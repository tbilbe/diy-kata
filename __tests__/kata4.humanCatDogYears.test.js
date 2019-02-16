const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it ('cat and dog years when passed 5 human years', () => {
        expect(humanCatDogYears(5)).toEqual([5, 36, 39])
    });

    it ('cat and dog years when passed 10 human years', () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    });
    
    it ('cat and dog years when passed 15 human years', () => {
        expect(humanCatDogYears(15)).toEqual([15, 76, 89])
    });    
})
// Look Ma, no handlebars!!!
