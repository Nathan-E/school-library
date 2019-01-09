const x = require('./user');
const User = x.User;
const Admin = require('./admin');

//Tests the User function
describe('1. Tests the User Module', () => {
    test('User constructor', () => {
        const obj = new User('Chibueze', 'Admin');
        expect(obj.name).toBe('Chibueze');
        expect(obj.type).toBe('Admin');
    });
});

//Tests the Admin Function
describe('2. Tests the Admin Module', () => {
    test('Admin constructor', () => {
        const obj = new Admin('Zik', 'Admin');
        expect(obj.name).toBe('Zik');
        expect(obj.type).toBe('Admin');
    });
});
