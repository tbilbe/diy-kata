//Good test coverage, see previous comments regarding stacking tests.

const {
  joinNames
} = require('../src');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand Bart', () => {
    expect(joinNames([{
      name: 'Bart'
    }])).toEqual('Bart')
  });

  it('returns string of names, seperated by commas and an ampersand Bart, Lisa, Maggie', () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }])).toEqual('Bart, Lisa & Maggie')
  });

  it('returns string of names, seperated by commas and an ampersand Bart, Lisa, Maggie, Homer', () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }, {
      name: 'Homer'
    }])).toEqual('Bart, Lisa, Maggie & Homer')
  });
});
