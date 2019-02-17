const { joinNames } = require('../src');

describe('joinNames', () => {
  xit('returns string with estimated time of arrival', () => {
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])).toEqual("Bart, Lisa & Maggie");
      });
  xit('returns string with estimated time of arrival', () => {
     expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Steve'}])).toEqual("Bart, Lisa, Maggie & Steve");
          });
});