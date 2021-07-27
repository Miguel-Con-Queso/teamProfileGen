const { test, expect } = require('@jest/globals');
// const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Tommy', 2, 'alsoReal@mail.com', 'Engineer', 'tommyTwoToes');

    expect(engineer.name).toBe('Tommy');
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toBe('alsoReal@mail.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('tommyTwoToes');
});