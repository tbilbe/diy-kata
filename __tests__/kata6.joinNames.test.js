//See previous feedback regarding stacking the tests for a DRYer process.
//Good test coverage however

const {
  joinNames
} = require('../src');

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
    expect(joinNames([{
        name: 'Thomas'
      },
      {
        name: 'David'
      },
      {
        name: 'Jacob'
      },
      {
        name: 'Harrison'
      },
      {
        name: 'Jessica'
      },
      {
        name: 'Stephanie'
      },
      {
        name: 'Lauren'
      },
      {
        name: 'Helen'
      },
      {
        name: 'Jo'
      },
      {
        name: 'Carl'
      },
      {
        name: 'Alice'
      },

    ]))
  })
});
