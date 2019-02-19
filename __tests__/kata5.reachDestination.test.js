//Okay test coverage. Entered an extra test to see what would happen with lower numbers

const {
  reachDestination
} = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44, 10)).toEqual('I should be there in 4.5 hours.')
    expect(reachDestination(88, 10)).toEqual('I should be there in 9 hours.')
    expect(reachDestination(41, 10)).toEqual('I should be there in 4.5 hours.')

    //Added extra test
    expect(reachDestination(80, 120)).toEqual('I should be there in 1 hours.')

  });
});
