//Okay test coverage but there should be a couple more tests
//You could also stack these tests to make this a more DRY process
//like you did in other tests
//See example:

const {
  reachDestination
} = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(60, 60)).toBe('I\'ll be there in 1 hour');
    //expect(reachDestination(124, 55)).toBe(`I\'ll be there in 2 hour`);

  });

  it('returns a string explaining how long before arrival', () => {
    expect(reachDestination(124, 55)).toBe(`I\'ll be there in 2 hour`);

  })
});
