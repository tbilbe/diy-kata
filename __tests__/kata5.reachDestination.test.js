const { reachDestination } = require('../src');

describe('reachDestination', () => {
  xit('returns string with estimated time of arrival', () => {
    expect(reachDestination(10,5)).toEqual("I should be there in 2 hours");
      });
  xit('returns string with estimated time of arrival', () => {
   expect(reachDestination(15,7)).toEqual("I should be there in 2.5 hours");
          });
  xit('returns string with estimated time of arrival', () => {
    expect(reachDestination(24,7)).toEqual("I should be there in 3.5 hours");
              });
  xit('returns string with estimated time of arrival', () => {
    expect(reachDestination(100,15)).toEqual("I should be there in 7 hours");
                  });
  xit('returns string with estimated time of arrival', () => {
    expect(reachDestination(-10,-25)).toEqual("Negative numbers make no sense, have you gone past the house or are already there!?!");
                  });
  xit('returns string with estimated time of arrival', () => {
    expect(reachDestination(0,0)).toEqual("You have already arrived or you are not moving so can't calculate eta!"
    );
                      });  
});
