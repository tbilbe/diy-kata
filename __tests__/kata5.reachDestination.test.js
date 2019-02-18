const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(60, 60)).toBe('I\'ll be there in 1 hour');
  });

  it('returns a string explaining how long before arrival', () => {
    expect(reachDestination(124, 55)).toBe(`I\'ll be there in 2 hour`)
  })
});
