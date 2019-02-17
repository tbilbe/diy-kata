//Better test coverage here but if you would have tested for 1 hour, you would have seen
//that your code returns an error.
//See below:

const {
  reachDestination
} = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44, 10)).toEqual(4.5);
    expect(reachDestination(55, 10)).toEqual(5.5);
    //Extra test added:
    expect(reachDestination(80, 120)).toBe(`I should be there in about 1 hour`);


  });
});
