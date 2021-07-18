const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an inter market', () => {
    const intern = new intern('Jimmy');

    expect(intern.name).toBe('Jimmy');
    expect(intern.email).toBe(expect.any(String));
    expect(intern.school).toBe(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
});