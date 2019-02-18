const { joinNames } = require('../src');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }])).toBe('Bart, Lisa & Maggie');
  });
  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames([
      { name: 'Thomas' },
      { name: 'David' },
      { name: 'Jacob' },
      { name: 'Harrison' },
      { name: 'Jessica' },
      { name: 'Stephanie' },
      { name: 'Lauren' },
      { name: 'Helen' },
      { name: 'Jo' },
      { name: 'Carl' },
      { name: 'Alice' },
    ]))
  })
});
