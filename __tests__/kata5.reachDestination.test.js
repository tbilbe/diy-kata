const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44,10)).toEqual(4.5);
    expect(reachDestination(55,10)).toEqual(5.5);
  });
});
