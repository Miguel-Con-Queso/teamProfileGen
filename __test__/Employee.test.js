const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
// const Intern = require('../lib/Intern');
// const Engineer = require('../lib/Engineer');
// const Manager = require('../lib/Manager');

test('creates an Employee object', () => {
    const employee = new Employee('Jessica', 1, 'real@mail.com', 'role');

    expect(employee.name).toBe('Jessica');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('real@mail.com');
    expect(employee.role).toBe('role');
});