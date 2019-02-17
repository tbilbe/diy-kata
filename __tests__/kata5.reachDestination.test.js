//When asking javascript to do anything math related or using a Math method
//you want to have higher test coverage.
//If the user enters unexpected data here, we won't get the results we intended.


const {
  reachDestination
} = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours.')
    
    //Extra testing added
    expect(reachDestination(80, 120)).toBe('I should be there in 1 hours.')
    expect(reachDestination(69, 7)).toBe('I should be there in 4.5 hours.')

  });
});
