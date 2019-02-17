//Poor test coverage here. We would ideally want to test multiple outcomes to ensure
//we haven't made an oversight in our code.
//Good test writing though

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
    expect(getEmployerRole('Jenny', employees)).toBe('Sales Associate')

  });
});
