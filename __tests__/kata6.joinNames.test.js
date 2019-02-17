const { joinNames } = require('../src');

describe('joinNames', () => {
  const arrNames = [{
    name: 'Bart'}, {
    name: 'Lisa'}, {
    name: 'Maggie'
    }]

  
  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames(arrNames)).toBe('Bart,Lisa & Maggie')
    expect(joinNames(arrNames)).toBe('John,Anne,Maria & Amanda')
  });
});
