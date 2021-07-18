const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an engineer market', () => {
    const engineer = new Engineer('Tommy');

    expect(engineer.name).toBe('Tommy');
    expect(engineer.email).toBe(expect.any(String));
    expect(engineer.github).toBe(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
});