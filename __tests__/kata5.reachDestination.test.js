//Good coverage here but what would happen if your code was to test for an estimated arrival
//time of one hour?
//your code currently returns 0.5 instead of 1.

const {
  reachDestination
} = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(52, 35)).toBe('1.5');
    expect(reachDestination(44, 10)).toBe('4.5');

    //Extra test added
    expect(reachDestination(80, 120)).toBe('1');

  });
});
