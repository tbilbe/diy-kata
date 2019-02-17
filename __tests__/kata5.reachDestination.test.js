//Good test coverage for all eventualities. See previous feedback for stacking tests.
const {
  reachDestination
} = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(10, 5)).toEqual("I should be there in 2 hours");
  });
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(15, 7)).toEqual("I should be there in 2.5 hours");
  });
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(24, 7)).toEqual("I should be there in 3.5 hours");
  });
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(100, 15)).toEqual("I should be there in 7 hours");
  });
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(-10, -25)).toEqual("Negative numbers make no sense, have you gone past the house or are already there!?!");
  });
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(0, 0)).toEqual("You have already arrived or you are not moving so can't calculate eta!");
  });
});
