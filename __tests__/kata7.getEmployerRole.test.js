//Poor test coverage for this one. We would expect more tested outcomes to ensure
//the code works as intended
//Also, all your tests in the entire exercise we're 'x'ed' out meaning they were all being skipped
//whenever you run them. Not sure what the reason for this is but despite that, they all passed...

const {
  getEmployerRole
} = require('../src');

describe('getEmployerRole', () => {
  const employees = [{
    name: 'Satti',
    role: 'Developer'
  }, {
    name: 'Jenny',
    role: 'Sales Associate'
  }, {
    name: 'Javid',
    role: 'Human Recommended Reading Assistant'
  }]
  it('returns the employee\'s role in the company', () => {

    expect(getEmployerRole('Satti', employees)).toBe('Developer')
  });
});
