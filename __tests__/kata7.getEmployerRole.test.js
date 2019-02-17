//Poor test coverage for this one. We would expect more tested outcomes to ensure
//the code works as intended
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
